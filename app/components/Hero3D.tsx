"use client";

import { useEffect, useRef } from "react";

type P = { x: number; y: number; z: number };

const NODE_COUNT = 90;
const RADIUS = 1;
const LINK_DIST = 0.62;

function makeNodes(): P[] {
  // Fibonacci sphere: evenly spread points
  const nodes: P[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < NODE_COUNT; i++) {
    const y = 1 - (i / (NODE_COUNT - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const t = golden * i;
    nodes.push({
      x: Math.cos(t) * r * RADIUS,
      y: y * RADIUS,
      z: Math.sin(t) * r * RADIUS,
    });
  }
  return nodes;
}

export default function Hero3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const nodes = makeNodes();
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let w = 0;
    let h = 0;
    let raf = 0;
    let angle = 0;
    let tiltX = 0.35;
    let targetTiltX = 0.35;
    let targetSpin = 0;
    let spinBoost = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      targetSpin = nx * 0.02;
      targetTiltX = 0.35 + ny * 0.5;
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, w, h);

      spinBoost += (targetSpin - spinBoost) * 0.05;
      tiltX += (targetTiltX - tiltX) * 0.05;
      if (!reduceMotion) angle += 0.004 + spinBoost;

      const scale = Math.min(w, h) * 0.36;
      const cx = w / 2;
      const cy = h / 2;
      const cosY = Math.cos(angle);
      const sinY = Math.sin(angle);
      const cosX = Math.cos(tiltX);
      const sinX = Math.sin(tiltX);

      // Rotate + perspective project
      const pts = nodes.map((n, i) => {
        const pulse = 1 + 0.04 * Math.sin(time / 700 + i);
        const x0 = n.x * pulse;
        const y0 = n.y * pulse;
        const z0 = n.z * pulse;
        const x1 = x0 * cosY + z0 * sinY;
        const z1 = -x0 * sinY + z0 * cosY;
        const y2 = y0 * cosX - z1 * sinX;
        const z2 = y0 * sinX + z1 * cosX;
        const persp = 2.6 / (2.6 - z2);
        return {
          sx: cx + x1 * scale * persp,
          sy: cy + y2 * scale * persp,
          depth: (z2 + 1) / 2, // 0 (back) .. 1 (front)
          persp,
          x: x0,
          y: y0,
          z: z0,
        };
      });

      // Links
      ctx.lineWidth = 1;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dz = nodes[i].z - nodes[j].z;
          if (dx * dx + dy * dy + dz * dz < LINK_DIST * LINK_DIST) {
            const d = (pts[i].depth + pts[j].depth) / 2;
            ctx.strokeStyle = `rgba(56,189,248,${0.05 + d * 0.28})`;
            ctx.beginPath();
            ctx.moveTo(pts[i].sx, pts[i].sy);
            ctx.lineTo(pts[j].sx, pts[j].sy);
            ctx.stroke();
          }
        }
      }

      // Nodes, back to front
      [...pts]
        .sort((a, b) => a.depth - b.depth)
        .forEach((p, i) => {
          const r = (1.5 + p.depth * 3) * p.persp;
          const hot = (Math.floor(time / 900) + i) % 17 === 0;
          ctx.fillStyle = hot
            ? "rgba(251,191,36,0.95)"
            : `rgba(186,230,253,${0.3 + p.depth * 0.7})`;
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
          ctx.fill();
        });

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
