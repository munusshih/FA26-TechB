import { spawn } from "node:child_process";
import path from "node:path";
import process from "node:process";
import puppeteer from "puppeteer";

const host = "127.0.0.1";
const port = 4322;
const url = `http://${host}:${port}/`;
const astroCli = path.resolve("node_modules/astro/astro.js");
const outputPath = path.resolve("dist/og-image.png");

const preview = spawn(
  process.execPath,
  [astroCli, "preview", "--host", host, "--port", String(port)],
  {
    env: process.env,
    stdio: ["ignore", "pipe", "pipe"],
  },
);

let previewError = "";
preview.stderr.on("data", (chunk) => {
  previewError += chunk.toString();
});

const stopPreview = () => {
  if (!preview.killed) preview.kill("SIGTERM");
};

process.once("SIGINT", stopPreview);
process.once("SIGTERM", stopPreview);

const waitForPreview = async () => {
  const deadline = Date.now() + 30_000;

  while (Date.now() < deadline) {
    if (preview.exitCode !== null) {
      throw new Error(`Astro preview exited early.\n${previewError}`);
    }

    try {
      const response = await globalThis.fetch(url);
      if (response.ok) return;
    } catch {
      // The preview server is still starting.
    }

    await new Promise((resolve) => globalThis.setTimeout(resolve, 150));
  }

  throw new Error("Timed out waiting for the Astro preview server.");
};

let browser;

try {
  await waitForPreview();
  browser = await puppeteer.launch({
    headless: true,
    args: ["--disable-dev-shm-usage", "--no-sandbox"],
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1200,
    height: 630,
    deviceScaleFactor: 1,
  });
  await page.goto(url, {
    waitUntil: "networkidle0",
    timeout: 30_000,
  });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((resolve) => globalThis.setTimeout(resolve, 1_200));
  await page.screenshot({
    path: outputPath,
    type: "png",
    captureBeyondViewport: false,
  });
  console.log(`Generated Open Graph image: ${outputPath}`);
} finally {
  await browser?.close();
  stopPreview();
}
