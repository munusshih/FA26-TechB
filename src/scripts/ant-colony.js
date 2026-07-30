import accessibility from "p5/accessibility";
import color from "p5/color";
import p5 from "p5/core";
import dom from "p5/dom";
import events from "p5/events";
import math from "p5/math";
import shape from "p5/shape";
import type from "p5/type";

p5.registerAddon(accessibility);
p5.registerAddon(color);
p5.registerAddon(dom);
p5.registerAddon(events);
p5.registerAddon(math);
p5.registerAddon(shape);
p5.registerAddon(type);

const PHEROMONE_LIFE = 680;

const readInk = (element) =>
  window.getComputedStyle(element).getPropertyValue("--ink").trim() ||
  "#392d2f";

const readPaper = (element) =>
  window.getComputedStyle(element).getPropertyValue("--paper").trim() ||
  "#b8e1f5";

const makeSketch = (host) => (p) => {
  let ants = [];
  let pheromones = [];
  let foods = [];
  let routes = [];
  let occupiedDots = new Map();
  let symbolZones = [];
  let nest;
  let ink;
  let paper;
  let population;
  let maxPheromones;
  let sceneDotSize;
  let dotGap;
  let routeShare;
  const cursor = { active: false, x: 0, y: 0 };
  let observer;
  let resizeObserver;
  let canvas;
  let pointerListener;
  let clickListener;
  let keyListener;
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const dotSpacing = () => sceneDotSize + dotGap;

  const canPlaceDot = (x, y) => {
    const spacing = dotSpacing();
    const column = Math.floor(x / spacing);
    const row = Math.floor(y / spacing);

    if (
      x < sceneDotSize / 2 ||
      x > p.width - sceneDotSize / 2 ||
      y < sceneDotSize / 2 ||
      y > p.height - sceneDotSize / 2
    ) {
      return false;
    }

    if (
      symbolZones.some(
        (zone) => p.dist(x, y, zone.x, zone.y) < zone.radius + dotGap,
      )
    ) {
      return false;
    }

    for (let offsetX = -1; offsetX <= 1; offsetX += 1) {
      for (let offsetY = -1; offsetY <= 1; offsetY += 1) {
        const nearby = occupiedDots.get(`${column + offsetX}:${row + offsetY}`);
        if (
          nearby?.some(
            (dot) => p.dist(x, y, dot.x, dot.y) < sceneDotSize + dotGap,
          )
        ) {
          return false;
        }
      }
    }

    return true;
  };

  const reservePosition = (x, y) => {
    if (!canPlaceDot(x, y)) return false;
    const spacing = dotSpacing();
    const column = Math.floor(x / spacing);
    const row = Math.floor(y / spacing);
    const key = `${column}:${row}`;
    const cell = occupiedDots.get(key) ?? [];
    cell.push({ x, y });
    occupiedDots.set(key, cell);
    return true;
  };

  const drawAntDot = (x, y) => {
    if (!reservePosition(x, y)) return false;
    p.stroke(ink);
    p.strokeWeight(Math.max(1.25, sceneDotSize * 0.12));
    p.fill(paper);
    p.circle(x, y, sceneDotSize);
    return true;
  };

  const drawTracePixel = (x, y) => {
    if (!reservePosition(x, y)) return false;
    p.noStroke();
    p.fill(ink);
    p.square(x, y, sceneDotSize * 0.72);
    return true;
  };

  const routeY = (route, progress) =>
    p.lerp(nest.y, route.food.y, progress) +
    p.sin(progress * p.TWO_PI * route.frequency + route.phase) *
      route.amplitude +
    p.sin(progress * p.TWO_PI * 0.5 + route.secondaryPhase) *
      route.secondaryAmplitude;

  class Ant {
    constructor(index) {
      const route = p.random(routes);
      const startsOnTrail = index < population * routeShare;
      const progress = p.random();
      const curve = routeY(route, progress) + p.randomGaussian(0, dotGap * 2);
      const angle = p.random(p.TWO_PI);
      const radius = p.random(sceneDotSize, nest.radius);

      this.foodTarget = route.food;
      this.position = startsOnTrail
        ? p.createVector(p.lerp(nest.x, route.food.x, progress), curve)
        : p.createVector(
            nest.x + p.cos(angle) * radius,
            nest.y + p.sin(angle) * radius,
          );
      this.carrying = startsOnTrail ? index % 3 === 0 : index % 9 === 0;
      const target = this.carrying ? nest : this.foodTarget;
      this.velocity = p5.Vector.fromAngle(
        p.atan2(target.y - this.position.y, target.x - this.position.x) +
          p.random(-0.45, 0.45),
      ).mult(p.random(0.55, 1.3));
      this.phase = p.random(1000);
      this.depositClock = p.floor(p.random(9));
      this.depositInterval = p.floor(p.random(7, 16));
      this.speedFactor = p.random(0.72, 1.35);
      this.wanderStrength = p.random(0.075, 0.18);
      this.sensorSpread = p.random(0.4, 0.82);
    }

    trailType() {
      return this.carrying ? "food" : "home";
    }

    wantedTrail() {
      return this.carrying ? "home" : "food";
    }

    sense(angleOffset) {
      const sample = this.velocity
        .copy()
        .setMag(dotSpacing() * 1.5)
        .rotate(angleOffset)
        .add(this.position);
      let signal = 0;

      for (let i = pheromones.length - 1; i >= 0; i -= 1) {
        const trace = pheromones[i];
        if (trace.type !== this.wantedTrail()) continue;
        const distance = p.dist(sample.x, sample.y, trace.x, trace.y);
        if (distance < dotSpacing() * 2) {
          signal += trace.life / (distance + dotSpacing());
        }
      }

      return signal;
    }

    update() {
      const speed = p.constrain(p.width / 430, 1.45, 3.2) * this.speedFactor;
      const left = this.sense(-this.sensorSpread);
      const center = this.sense(0);
      const right = this.sense(this.sensorSpread);
      let steering = 0;

      if (left > center && left > right) steering -= 0.095;
      if (right > center && right > left) steering += 0.095;

      const target = this.carrying ? nest : this.foodTarget;
      const distanceToTarget = p.dist(
        this.position.x,
        this.position.y,
        target.x,
        target.y,
      );
      const targetAngle = p.atan2(
        target.y - this.position.y,
        target.x - this.position.x,
      );
      const currentAngle = this.velocity.heading();
      const directSignal =
        distanceToTarget < p.width * 0.2 ? 0.07 : this.carrying ? 0.016 : 0.006;

      steering +=
        p.atan2(
          p.sin(targetAngle - currentAngle),
          p.cos(targetAngle - currentAngle),
        ) * directSignal;
      steering += p.map(
        p.noise(this.phase, p.frameCount * 0.006),
        0,
        1,
        -this.wanderStrength,
        this.wanderStrength,
      );

      this.velocity.rotate(steering).setMag(speed);

      if (cursor.active) {
        const cursorDistance = p.dist(
          this.position.x,
          this.position.y,
          cursor.x,
          cursor.y,
        );
        const avoidanceRadius = p.constrain(p.width * 0.11, 85, 155);
        if (cursorDistance < avoidanceRadius) {
          const awayAngle = p.atan2(
            this.position.y - cursor.y,
            this.position.x - cursor.x,
          );
          const turn = p.atan2(
            p.sin(awayAngle - this.velocity.heading()),
            p.cos(awayAngle - this.velocity.heading()),
          );
          const strength = p.map(
            cursorDistance,
            0,
            avoidanceRadius,
            0.42,
            0.08,
          );
          this.velocity.rotate(turn * strength).setMag(speed);
        }
      }

      this.position.add(this.velocity);
      this.phase += 0.008;

      const margin = sceneDotSize;
      if (this.position.x < margin || this.position.x > p.width - margin) {
        this.velocity.x *= -1;
        this.position.x = p.constrain(
          this.position.x,
          margin,
          p.width - margin,
        );
      }
      if (this.position.y < margin || this.position.y > p.height - margin) {
        this.velocity.y *= -1;
        this.position.y = p.constrain(
          this.position.y,
          margin,
          p.height - margin,
        );
      }

      if (!this.carrying && distanceToTarget < this.foodTarget.radius + 12) {
        this.carrying = true;
        this.velocity.rotate(p.PI + p.random(-0.35, 0.35));
      } else if (this.carrying && distanceToTarget < nest.radius * 0.5) {
        this.carrying = false;
        this.foodTarget = p.random(foods);
        this.velocity.rotate(p.PI + p.random(-0.35, 0.35));
      }

      this.depositClock += 1;
      if (this.depositClock >= this.depositInterval) {
        pheromones.push({
          x: this.position.x,
          y: this.position.y,
          type: this.trailType(),
          life: p.random(PHEROMONE_LIFE * 0.65, PHEROMONE_LIFE * 1.25),
        });
        this.depositClock = 0;
      }
    }

    draw() {
      const direction = this.velocity.copy().normalize();
      const separation = dotSpacing() * 1.35;
      const body = [
        { x: this.position.x, y: this.position.y },
        {
          x: this.position.x - direction.x * separation,
          y: this.position.y - direction.y * separation,
        },
        {
          x: this.position.x + direction.x * separation,
          y: this.position.y + direction.y * separation,
        },
      ];

      if (!body.every((dot) => canPlaceDot(dot.x, dot.y))) return;

      p.stroke(ink);
      p.strokeWeight(1);
      p.line(body[1].x, body[1].y, body[2].x, body[2].y);
      body.forEach((dot) => drawAntDot(dot.x, dot.y));
    }
  }

  const makeFood = (existingFoods, requestedPoint) => {
    const foodIndex = existingFoods.length;
    const asciiLabels = [
      `{F:${foodIndex}}`,
      `[FOOD_${foodIndex}]`,
      `<F/${foodIndex}>`,
      `F${foodIndex}:DATA`,
    ];
    const margin = sceneDotSize * 3;
    let point = requestedPoint
      ? {
          x: p.constrain(requestedPoint.x, margin, p.width - margin),
          y: p.constrain(requestedPoint.y, margin, p.height - margin),
        }
      : undefined;
    let attempts = 0;

    if (!point) {
      do {
        point = {
          x: p.random(margin, p.width - margin),
          y: p.random(margin, p.height - margin),
        };
        attempts += 1;
      } while (
        attempts < 80 &&
        (p.dist(point.x, point.y, nest.x, nest.y) < p.width * 0.22 ||
          existingFoods.some(
            (food) =>
              p.dist(point.x, point.y, food.x, food.y) < sceneDotSize * 5,
          ))
      );
    }

    return {
      ...point,
      radius: p.random(sceneDotSize * 1.4, sceneDotSize * 3.2),
      label: asciiLabels[foodIndex % asciiLabels.length],
      phase: p.random(p.TWO_PI),
      spin: p.random([-1, 1]) * p.random(0.002, 0.007),
      symbolScale: p.random(1.35, 2),
    };
  };

  const makeRoute = (food) => ({
    food,
    amplitude: p.height * p.random(0.025, 0.11),
    secondaryAmplitude: p.height * p.random(0.01, 0.05),
    frequency: p.random(0.62, 1.65),
    phase: p.random(p.TWO_PI),
    secondaryPhase: p.random(p.TWO_PI),
  });

  const addFood = (point) => {
    const food = makeFood(foods, point);
    const route = makeRoute(food);
    foods.push(food);
    routes.push(route);

    const traceCount = p.floor(p.random(6, 18));
    for (let index = 0; index < traceCount; index += 1) {
      const progress = index / Math.max(1, traceCount - 1);
      pheromones.push({
        x: p.lerp(nest.x, food.x, progress) + p.randomGaussian(0, dotGap),
        y: routeY(route, progress) + p.randomGaussian(0, dotGap),
        type: index % 2 === 0 ? "food" : "home",
        life: p.random(PHEROMONE_LIFE * 0.45, PHEROMONE_LIFE),
      });
    }
  };

  const setScene = () => {
    population = p.floor(p.random(18, 67));
    maxPheromones = p.floor(p.random(160, 460));
    sceneDotSize = p.random(9, 14);
    dotGap = p.random(3, 7);
    routeShare = p.random(0.42, 0.88);

    const safeMargin = sceneDotSize * 3;
    nest = {
      x: p.random(safeMargin, p.width - safeMargin),
      y: p.random(safeMargin, p.height - safeMargin),
      radius: p.random(sceneDotSize * 4, sceneDotSize * 8),
      label: "[BASE]",
      phase: p.random(p.TWO_PI),
      spin: p.random([-1, 1]) * p.random(0.0015, 0.004),
      symbolScale: p.random(2.1, 2.8),
    };

    const foodClusterCount = p.floor(p.random(2, 7));
    foods = [];
    for (let i = 0; i < foodClusterCount; i += 1) {
      foods.push(makeFood(foods));
    }

    routes = foods.map(makeRoute);

    pheromones = [];
    routes.forEach((route) => {
      const traceCount = p.floor(p.random(8, 38));
      for (let index = 0; index < traceCount; index += 1) {
        const progress = index / Math.max(1, traceCount - 1);
        pheromones.push({
          x:
            p.lerp(nest.x, route.food.x, progress) +
            p.randomGaussian(0, dotGap),
          y: routeY(route, progress) + p.randomGaussian(0, dotGap),
          type: index % 2 === 0 ? "food" : "home",
          life: p.random(PHEROMONE_LIFE * 0.45, PHEROMONE_LIFE),
        });
      }
    });

    ants = Array.from({ length: population }, (_, index) => new Ant(index));
  };

  const drawSymbols = () => {
    symbolZones = [
      {
        x: nest.x,
        y: nest.y,
        radius: sceneDotSize * nest.symbolScale * nest.label.length * 0.28,
      },
      ...foods.map((food) => ({
        x: food.x,
        y: food.y,
        radius: sceneDotSize * food.symbolScale * food.label.length * 0.28,
      })),
    ];

    p.noStroke();
    p.fill(ink);
    p.textFont("monospace");
    p.textStyle(p.BOLD);
    p.textAlign(p.CENTER, p.CENTER);

    p.push();
    p.translate(nest.x, nest.y);
    p.rotate(nest.phase + p.frameCount * nest.spin);
    p.textSize(sceneDotSize * nest.symbolScale);
    p.text(nest.label, 0, 0);
    p.pop();

    foods.forEach((food) => {
      p.push();
      p.translate(food.x, food.y);
      p.rotate(food.phase + p.frameCount * food.spin);
      p.textSize(sceneDotSize * food.symbolScale);
      p.text(food.label, 0, 0);
      p.pop();
    });
  };

  p.setup = () => {
    canvas = p.createCanvas(host.clientWidth, host.clientHeight);
    canvas.parent(host);
    canvas.elt.setAttribute("role", "img");
    canvas.elt.setAttribute(
      "aria-label",
      "Organic digital simulation of ants forming paths between rotating ASCII labels. Click, or press Enter, to add a food source.",
    );
    canvas.elt.tabIndex = 0;
    ink = p.color(readInk(host));
    paper = p.color(readPaper(host));
    p.pixelDensity(Math.min(Math.max(window.devicePixelRatio || 1, 2), 3));
    p.rectMode(p.CENTER);
    p.frameRate(reducedMotion ? 8 : 40);
    const sceneSeed = Date.now() + Math.floor(Math.random() * 1_000_000);
    p.randomSeed(sceneSeed);
    p.noiseSeed(sceneSeed);
    setScene();

    pointerListener = (event) => {
      const bounds = canvas.elt.getBoundingClientRect();
      cursor.active =
        event.clientX >= bounds.left &&
        event.clientX <= bounds.right &&
        event.clientY >= bounds.top &&
        event.clientY <= bounds.bottom;
      if (!cursor.active) return;
      cursor.x = ((event.clientX - bounds.left) / bounds.width) * p.width;
      cursor.y = ((event.clientY - bounds.top) / bounds.height) * p.height;
    };
    window.addEventListener("pointermove", pointerListener);

    clickListener = (event) => {
      if (event.button !== 0) return;
      const bounds = canvas.elt.getBoundingClientRect();
      addFood({
        x: ((event.clientX - bounds.left) / bounds.width) * p.width,
        y: ((event.clientY - bounds.top) / bounds.height) * p.height,
      });
    };
    canvas.elt.addEventListener("pointerdown", clickListener);

    keyListener = (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      addFood({
        x: p.random(sceneDotSize * 3, p.width - sceneDotSize * 3),
        y: p.random(sceneDotSize * 3, p.height - sceneDotSize * 3),
      });
    };
    canvas.elt.addEventListener("keydown", keyListener);

    resizeObserver = new window.ResizeObserver(() => {
      if (host.clientWidth === p.width && host.clientHeight === p.height)
        return;
      p.resizeCanvas(host.clientWidth, host.clientHeight);
      setScene();
    });
    resizeObserver.observe(host);

    observer = new window.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) p.loop();
      else p.noLoop();
    });
    observer.observe(host);
  };

  p.draw = () => {
    p.clear();
    occupiedDots = new Map();
    symbolZones = [];

    for (let i = pheromones.length - 1; i >= 0; i -= 1) {
      pheromones[i].life -= reducedMotion ? 2.5 : 1;
      if (pheromones[i].life <= 0) pheromones.splice(i, 1);
    }
    if (pheromones.length > maxPheromones) {
      pheromones.splice(0, pheromones.length - maxPheromones);
    }

    if (!reducedMotion || p.frameCount % 3 === 0) {
      ants.forEach((ant) => ant.update());
    }

    drawSymbols();
    ants.forEach((ant) => ant.draw());
    pheromones.forEach((trace) => drawTracePixel(trace.x, trace.y));
  };

  p.remove = new Proxy(p.remove, {
    apply(target, thisArg, args) {
      observer?.disconnect();
      resizeObserver?.disconnect();
      if (pointerListener)
        window.removeEventListener("pointermove", pointerListener);
      if (clickListener)
        canvas.elt.removeEventListener("pointerdown", clickListener);
      if (keyListener) canvas.elt.removeEventListener("keydown", keyListener);
      return Reflect.apply(target, thisArg, args);
    },
  });
};

export const mountAntColonies = () => {
  document.querySelectorAll("[data-ant-colony]").forEach((host) => {
    if (host.dataset.mounted === "true") return;
    host.dataset.mounted = "true";
    new p5(makeSketch(host));
  });
};
