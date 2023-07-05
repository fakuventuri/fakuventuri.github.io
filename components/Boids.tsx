// @refresh reset
"use client";

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

  update(width: number, height: number, speed: number) {}

  draw(ctx: CanvasRenderingContext2D) {}
}

export default function Boids() {
  return (
    <div id="boidsContainer" className="absolute inset-0 -z-50 via-violet-700">
      <canvas id="boids-canvas"></canvas>
    </div>
  );
}
