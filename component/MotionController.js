"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const VARIANT_CLASS = {
  up: "reveal-up",
  fade: "reveal-fade",
  scale: "reveal-scale",
  left: "reveal-left",
  right: "reveal-right",
};

export default function MotionController() {
  const progressRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const supportsObserver = "IntersectionObserver" in window;
    const targets = Array.from(document.querySelectorAll("[data-reveal]"));

    if (!reduceMotion && supportsObserver && targets.length > 0) {
      root.classList.add("motion-ready");
    }

    // Grouped elements reveal in sequence rather than all at once.
    document.querySelectorAll("[data-reveal-group]").forEach((group) => {
      const children = Array.from(group.querySelectorAll("[data-reveal]"));
      children.forEach((child, index) => {
        child.style.setProperty("--reveal-index", String(Math.min(index, 8)));
      });
    });

    targets.forEach((target) => {
      target.classList.add("reveal-target");
      const variant = VARIANT_CLASS[target.dataset.reveal] ?? VARIANT_CLASS.up;
      target.classList.add(variant);
    });

    const observer = supportsObserver
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
        )
      : null;

    if (observer) {
      targets.forEach((target) => observer.observe(target));
    } else {
      targets.forEach((target) => target.classList.add("is-visible"));
    }

    // If an element is already on screen after fonts/layout settle, reveal it
    // without waiting for a scroll event.
    const revealVisible = () => {
      const viewport = window.innerHeight;
      targets.forEach((target) => {
        if (target.classList.contains("is-visible")) return;
        const rect = target.getBoundingClientRect();
        if (rect.top < viewport * 0.94 && rect.bottom > 0) {
          target.classList.add("is-visible");
          observer?.unobserve(target);
        }
      });
    };

    const initialFrame = window.requestAnimationFrame(revealVisible);

    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      if (!progressRef.current) return;
      const scrollable = root.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      progressRef.current.style.transform = `scaleX(${Math.min(progress, 1)})`;
      root.style.setProperty("--scroll-progress", String(Math.min(progress, 1)));
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.cancelAnimationFrame(initialFrame);
      if (frame) window.cancelAnimationFrame(frame);
      root.classList.remove("motion-ready");
      targets.forEach((target) => {
        target.classList.remove(
          "reveal-target",
          "is-visible",
          ...Object.values(VARIANT_CLASS),
        );
        target.style.removeProperty("--reveal-index");
      });
    };
  }, [pathname]);

  return <div ref={progressRef} className="scroll-progress" aria-hidden="true" />;
}
