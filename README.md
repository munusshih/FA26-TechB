# Technology B · Fall 2026

Course website for DES 720B, Graduate Studio: Technology B in Pratt Institute's Graduate Communications Design program.

The site is built with Astro. Course content is synthesized from `2026 Technology B_ Sample Syllabus.odt`.

## Commands

```sh
npm install
npm run dev
npm run build
npm run sync
```

## Project submissions

The project archive at `/work/` is sourced from the Google Form and response
sheet configured in `src/site.config.json`. `npm run sync` pulls the current
sheet, downloads uploaded media into `public/project-media`, generates
thumbnails, and writes the current year's records to `src/data/<year>.json`.

`.github/workflows/midnight-project-refresh.yml` runs this sync at 12:00 AM
America/New_York every day, validates the static build, and commits changed
submission data and media. The resulting push triggers the site's normal Vercel
deployment.
