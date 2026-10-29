"use client";

import { useEffect, useRef } from "react";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function HeroFx() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const hero = document.getElementById("home");
    const card = hero?.querySelector(".hero-code-card");
    if (!hero) return undefined;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let active = false;

    const renderSpotlight = () => {
      frame = 0;
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;
      spotlightRef.current?.style.setProperty("--spot-x", `${currentX}px`);
      spotlightRef.current?.style.setProperty("--spot-y", `${currentY}px`);
      if (Math.abs(targetX - currentX) > 0.5 || Math.abs(targetY - currentY) > 0.5) {
        frame = window.requestAnimationFrame(renderSpotlight);
      }
    };

    const onPointerMove = (event) => {
      if (event.pointerType === "touch") return;
      const rect = hero.getBoundingClientRect();
      targetX = event.clientX - rect.left;
      targetY = event.clientY - rect.top;
      if (!active) {
        active = true;
        currentX = targetX;
        currentY = targetY;
        spotlightRef.current?.style.setProperty("--spot-x", `${targetX}px`);
        spotlightRef.current?.style.setProperty("--spot-y", `${targetY}px`);
        hero.classList.add("has-pointer");
      }
      if (!frame) frame = window.requestAnimationFrame(renderSpotlight);
    };

    const onPointerLeave = () => {
      active = false;
      hero.classList.remove("has-pointer");
    };

    const onCardMove = (event) => {
      if (event.pointerType === "touch") return;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty("--tilt-x", `${(-y * 7).toFixed(2)}deg`);
      card.style.setProperty("--tilt-y", `${(x * 9).toFixed(2)}deg`);
      card.style.setProperty("--pointer-x", `${((x + 0.5) * 100).toFixed(1)}%`);
      card.style.setProperty("--pointer-y", `${((y + 0.5) * 100).toFixed(1)}%`);
    };

    const onCardLeave = () => {
      card?.style.setProperty("--tilt-x", "0deg");
      card?.style.setProperty("--tilt-y", "0deg");
      card?.classList.remove("is-tilting");
    };

    const onCardEnter = () => card?.classList.add("is-tilting");

    let scrollFrame = 0;
    const updateParallax = () => {
      scrollFrame = 0;
      const value = clamp(window.scrollY / Math.max(hero.offsetHeight, 1), 0, 1.4);
      hero.style.setProperty("--hero-scroll", value.toFixed(3));
    };
    const onScroll = () => {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();

    if (finePointer && !reduceMotion) {
      hero.addEventListener("pointermove", onPointerMove, { passive: true });
      hero.addEventListener("pointerleave", onPointerLeave);
      card?.addEventListener("pointermove", onCardMove, { passive: true });
      card?.addEventListener("pointerenter", onCardEnter);
      card?.addEventListener("pointerleave", onCardLeave);
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    return () => {
      hero.removeEventListener("pointermove", onPointerMove);
      hero.removeEventListener("pointerleave", onPointerLeave);
      card?.removeEventListener("pointermove", onCardMove);
      card?.removeEventListener("pointerenter", onCardEnter);
      card?.removeEventListener("pointerleave", onCardLeave);
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      hero.classList.remove("has-pointer");
      hero.style.removeProperty("--hero-scroll");
    };
  }, []);

  return (
    <div className="hero-spotlight" ref={spotlightRef} aria-hidden="true">
      <span className="hero-spotlight-grain" />
    </div>
  );
}
