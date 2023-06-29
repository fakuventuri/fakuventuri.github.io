// @refresh reset
"use client";

import { useEffect } from "react";

const characters = "<>{}();<>{}();abcdefghijklmnopqrstuwxyz0123456789";

const charactersLength = characters.length;

class Star {
  x: number;
  y: number;
  char: string;
  containerSize: { width: number; height: number };

  constructor(x = 0, y = 0, z = 0, containerSize = { width: 0, height: 0 }) {
    this.x = x;
    this.y = y;
    this.char = characters.charAt(Math.floor(Math.random() * charactersLength));
    this.containerSize = containerSize;
  }

  update(width: number, height: number, speed: number) {
    // this.x += 100 * (speed * Math.random());
    this.y += -100 * (speed * Math.random() * 0.3);

    if (
      this.x > width / 2 ||
      this.x < -width / 2 ||
      this.y > height / 2 ||
      this.y < -height / 2
    ) {
      this.x = Math.random() * width - width / 2;
      this.y = height / 4 + (Math.random() * height) / 4;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    // ctx.strokeStyle = "rgb(0, 255, 13)";
    // ctx.strokeText("🌧️", this.x, this.y);

    // const distToCenter = Math.sqrt(this.x * this.x + this.y * this.y);

    // const maxDistToCenter =
    //   Math.sqrt(
    //     this.containerSize.width * this.containerSize.width +
    //       this.containerSize.height * this.containerSize.height
    //   ) / 2;

    // const opacity = 1 - (distToCenter / maxDistToCenter) * 0.1;

    const opacity = 0.5 - this.y / this.containerSize.height;

    ctx.fillStyle = `rgba(109, 40, 217, ${opacity})`;
    ctx.font = "20px Lucida Console";
    ctx.fillText(this.char, this.x, this.y);

    // ctx.lineWidth = this.z;
    // ctx.beginPath();
    // ctx.moveTo(this.x, this.y);
    // ctx.lineTo(this.xPrev, this.yPrev);
    // ctx.stroke();
  }
}

export default function Rain() {
  const COUNT = 500;
  const SPEED = 0.18;

  useEffect(() => {
    const stars = Array.from({ length: COUNT }, () => new Star(0, 0, 0));
    let rafId = 0;

    const canvas = document.querySelector("#rain-canvas") as HTMLCanvasElement;

    if (!canvas) {
      console.error("canvas should not be null");
      return;
    }

    const ctx = canvas.getContext("2d");

    const container = document.querySelector("#rainContainer") as HTMLElement;

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

      for (const star of stars) {
        star.x = Math.random() * width - width / 2;
        star.y = Math.random() * height - height / 2;
        star.containerSize = { width, height };
      }

      ctx.translate(width / 2, height / 2);
      ctx.fillStyle = "rgba(0, 0, 0, 1)";
      //   ctx.strokeStyle = "rgba(109, 40, 217, 1)"; // color of the stars
      rafId = requestAnimationFrame(frame);
    }

    function frame() {
      if (!ctx) {
        console.error("canvas context should not be null");
        return;
      }
      const { clientWidth: width, clientHeight: height } = container;

      ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
      ctx.fillRect(-width / 2, -height / 2, width, height);

      for (const star of stars) {
        star.update(width, height, SPEED);
        star.draw(ctx);
      }

      rafId = requestAnimationFrame(frame);
    }
  }, []);

  return (
    <div id="rainContainer" className="absolute inset-0 -z-50 via-violet-700">
      <canvas id="rain-canvas"></canvas>
    </div>
  );
}
