"use client";

import { useEffect } from "react";

/**
 * Pointer-driven polish for glass cards: a soft light that follows the cursor (spotlight) and a gentle 3D tilt.
 * One delegated listener, throttled to one update per frame. Only runs for mouse/trackpad users;
 * tilt is skipped for reduced motion and for large panels.
 */
export function PointerFX() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let last: PointerEvent | null = null;
    let current: HTMLElement | null = null;

    const reset = (el: HTMLElement) => { el.style.transform = ""; };
    const apply = () => {
      raf = 0;
      const e = last;
      if (!e) return;
      const target = e.target instanceof Element ? e.target : null;
      const el = (target?.closest(".border.hairline") as HTMLElement | null) ?? null;
      if (current && current !== el) reset(current);
      current = el;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
      if (!reduce && r.width < 520 && !el.hasAttribute("data-reveal")) {
        const rx = (y / r.height - 0.5) * -7;
        const ry = (x / r.width - 0.5) * 7;
        el.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
      }
    };
    const onMove = (e: PointerEvent) => { last = e; if (!raf) raf = requestAnimationFrame(apply); };
    const onLeave = () => { if (current) { reset(current); current = null; } };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return null;
}
