"use client";

import { useEffect, useRef } from "react";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function TimelineProgress() {
  const railRef = useRef(null);

  useEffect(() => {
    const rail = railRef.current;
    const list = rail?.parentElement?.querySelector(".timeline");
    if (!rail || !list) return undefined;

    const items = Array.from(list.querySelectorAll(".timeline-item"));
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = list.getBoundingClientRect();
      const focusLine = window.innerHeight * 0.46;
      const progress = clamp((focusLine - rect.top) / Math.max(rect.height, 1), 0, 1);
      rail.style.setProperty("--timeline-progress", progress.toFixed(4));

      let activeIndex = -1;
      items.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        if (itemRect.top <= focusLine && itemRect.bottom > focusLine) {
          activeIndex = index;
        }
      });

      if (activeIndex === -1 && items.length > 0) {
        if (rect.bottom < focusLine) activeIndex = items.length - 1;
        else activeIndex = 0;
      }

      items.forEach((item, index) => {
        const isActive = index === activeIndex;
        item.classList.toggle("is-active", isActive);
        if (isActive) {
          item.setAttribute("aria-current", "true");
        } else {
          item.removeAttribute("aria-current");
        }
      });
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      items.forEach((item) => {
        item.classList.remove("is-active");
        item.removeAttribute("aria-current");
      });
    };
  }, []);

  return (
    <div className="timeline-rail" ref={railRef} aria-hidden="true">
      <span className="timeline-rail-fill" />
    </div>
  );
}
