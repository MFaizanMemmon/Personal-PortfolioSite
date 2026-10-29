"use client";

import { useEffect } from "react";

export default function PointerGlow({ selector }) {
  useEffect(() => {
    if (!selector) return undefined;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduceMotion) return undefined;

    const nodes = Array.from(document.querySelectorAll(selector));
    const cleanups = nodes.map((node) => {
      node.classList.add("glow-surface");
      let frame = 0;
      let x = 0;
      let y = 0;

      const apply = () => {
        frame = 0;
        node.style.setProperty("--glow-x", `${x}px`);
        node.style.setProperty("--glow-y", `${y}px`);
      };

      const onMove = (event) => {
        const rect = node.getBoundingClientRect();
        x = event.clientX - rect.left;
        y = event.clientY - rect.top;
        if (!frame) frame = window.requestAnimationFrame(apply);
      };

      const onEnter = () => node.classList.add("is-glowing");
      const onLeave = () => node.classList.remove("is-glowing");

      node.addEventListener("pointermove", onMove, { passive: true });
      node.addEventListener("pointerenter", onEnter);
      node.addEventListener("pointerleave", onLeave);

      return () => {
        node.removeEventListener("pointermove", onMove);
        node.removeEventListener("pointerenter", onEnter);
        node.removeEventListener("pointerleave", onLeave);
        node.classList.remove("glow-surface", "is-glowing");
        node.style.removeProperty("--glow-x");
        node.style.removeProperty("--glow-y");
        if (frame) window.cancelAnimationFrame(frame);
      };
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [selector]);

  return null;
}
