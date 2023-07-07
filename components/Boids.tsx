// @refresh reset
"use client";

import { useState, useEffect } from "react";

function NormalizeVector(vector: { x: number; y: number }) {
  const magnitude = Math.sqrt(vector.x * vector.x + vector.y * vector.y);

  if (magnitude === 0) {
    return {
      x: 0,
      y: 0,
    };
  }

  return {
    x: vector.x / magnitude,
    y: vector.y / magnitude,
  };
}

class Boid {
  position: { x: number; y: number };
  direction: { x: number; y: number };
  visionRadius: number;
  viewAngle: number;

  constructor(
    position = { x: 0, y: 0 },
    direction = { x: 0, y: 0 },
    visionRadius = 0,
    viewAngle = 0
  ) {
    this.position = position;
    this.direction = direction;
    this.visionRadius = visionRadius;
    this.viewAngle = viewAngle;
  }

  update(width: number, height: number, speed: number) {
    let normalizedDirection = NormalizeVector(this.direction);
    this.position.x += normalizedDirection.x * speed;
    this.position.y += normalizedDirection.y * speed;

    // console.log(
    //   "normalizedDirection:\n x: " +
    //     normalizedDirection.x +
    //     " y: " +
    //     normalizedDirection.y +
    //     "\n atan2: " +
    //     (Math.atan2(normalizedDirection.y, normalizedDirection.x) * 180) /
    //       Math.PI
    // );

    // TODO - Delete this when behavior is implemented
    if (
      this.position.x > width / 2 ||
      this.position.x < -width / 2 ||
      this.position.y > height / 2 ||
      this.position.y < -height / 2
    ) {
      // When boid is out of bounds, appear on the other side
      this.position.x = -this.position.x;
      this.position.y = -this.position.y;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "rgb(109, 40, 217, 1)";

    let degrees =
      (Math.atan2(this.direction.y, this.direction.x) * 180) / Math.PI;

    ctx.beginPath();
    ctx.moveTo(this.position.x, this.position.y);
    ctx.lineTo(
      this.position.x + Math.cos((degrees + 200) * (Math.PI / 180)) * 15,
      this.position.y + Math.sin((degrees + 200) * (Math.PI / 180)) * 15
    );
    ctx.lineTo(
      this.position.x + Math.cos((degrees - 200) * (Math.PI / 180)) * 15,
      this.position.y + Math.sin((degrees - 200) * (Math.PI / 180)) * 15
    );

    ctx.fill();
  }
}

export default function Boids() {
  const COUNT = 500;
  const SPEED = 2;

  const [fullScreen, setFullScreen] = useState(false);

  useEffect(() => {
    const boids = Array.from(
      { length: COUNT },
      () => new Boid({ x: 0, y: 0 }, { x: 1, y: -1 }, 0, 0)
    );

    let rafId = 0;

    const canvas = document.querySelector("#boids-canvas") as HTMLCanvasElement;

    if (!canvas) {
      console.error("canvas should not be null");
      return;
    }

    const ctx = canvas.getContext("2d");

    const container = document.querySelector("#boidsContainer") as HTMLElement;

    if (!container) {
      console.error("container should not be null");
      return;
    }

    const resizeObserver = new ResizeObserver(setup);
    resizeObserver.observe(container);

    function setup() {
      if (!ctx) {
        console.error("canvas context should not be null");
        return;
      }

      rafId > 0 && cancelAnimationFrame(rafId);

      const { clientWidth: width, clientHeight: height } = container;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      for (const boid of boids) {
        boid.position.x = Math.random() * width - width / 2;
        boid.position.y = Math.random() * height - height / 2;

        boid.direction.x = Math.random() * 2 - 1;
        boid.direction.y = Math.random() * 2 - 1;
      }

      ctx.translate(width / 2, height / 2);

      // invert the y axis to make 'up' the physics 'up'
      ctx.scale(1, -1);

      ctx.fillStyle = "rgba(33, 33, 33, 1)";
      // ctx.strokeStyle = "rgba(109, 40, 217, 1)"; // color of the stars
      rafId = requestAnimationFrame(frame);
    }

    function frame() {
      if (!ctx) {
        console.error("canvas context should not be null");
        return;
      }
      const { clientWidth: width, clientHeight: height } = container;

      ctx.fillStyle = "rgba(33, 33, 33, 0.4)";
      ctx.fillRect(-width / 2, -height / 2, width, height);

      for (const star of boids) {
        star.update(width, height, SPEED);
        star.draw(ctx);
      }

      rafId = requestAnimationFrame(frame);
    }
  }, []);

  useEffect(() => {
    const container = document.querySelector("#boidsContainer") as HTMLElement;

    if (!container) {
      console.error("container should not be null");
      return;
    }

    if (fullScreen) {
      container.style.position = "fixed";
      container.style.top = "0";
      container.style.left = "0";
      container.style.width = "100%";
      container.style.height = "100%";
      container.style.zIndex = "100";
    } else {
      container.style.position = "relative";
      container.style.width = "100%";
      container.style.height = "100%";
    }
  }, [fullScreen]);

  return (
    <div id="boidsContainer" className="w-full h-full">
      <canvas
        id="boids-canvas"
        onClick={() => {
          setFullScreen(!fullScreen);
        }}
      ></canvas>
    </div>
  );
}
