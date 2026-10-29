"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiGrid,
  FiX,
} from "react-icons/fi";
import { blurDataURL, screenshotQuality } from "@/data/image";

const slide = {
  enter: (direction) => ({ opacity: 0, x: direction > 0 ? 46 : -46, scale: 0.985 }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (direction) => ({ opacity: 0, x: direction > 0 ? -34 : 34, scale: 0.99 }),
};

const subscribeReducedMotion = (callback) => {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
};

const getReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const getServerReducedMotion = () => false;

export default function ProjectGallery({
  images,
  projectTitle,
  projectSlug,
  mode = "grid",
}) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    getServerReducedMotion,
  );

  const count = images.length;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;

    if (open) {
      if (!dialog.open) dialog.showModal();
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const timer = window.setTimeout(() => closeButtonRef.current?.focus(), 40);
      return () => {
        window.clearTimeout(timer);
        document.body.style.overflow = previousOverflow;
      };
    }

    if (dialog.open) dialog.close();
    return undefined;
  }, [open]);

  const openAt = (index, trigger) => {
    triggerRef.current = trigger ?? document.activeElement;
    setActiveIndex(index);
    setDirection(1);
    setOpen(true);
  };

  const close = useCallback(() => setOpen(false), []);

  const goTo = useCallback(
    (index) => {
      if (count === 0) return;
      const next = ((index % count) + count) % count;
      setDirection(next >= activeIndex ? 1 : -1);
      setActiveIndex(next);
    },
    [activeIndex, count],
  );

  const step = useCallback(
    (delta) => {
      if (count === 0) return;
      setDirection(delta > 0 ? 1 : -1);
      setActiveIndex((current) => (((current + delta) % count) + count) % count);
    },
    [count],
  );

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      step(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      step(-1);
    } else if (event.key === "Home") {
      event.preventDefault();
      goTo(0);
    } else if (event.key === "End") {
      event.preventDefault();
      goTo(count - 1);
    }
  };

  const activeImage = images[activeIndex] ?? images[0];

  return (
    <div className="gallery">
      {mode === "grid" ? (
        <ul className="gallery-grid" data-reveal-group>
          {images.map((image, index) => (
            <li key={`${image.src}-${index}`} data-reveal="scale">
              <button
                type="button"
                className="gallery-thumb"
                onClick={(event) => openAt(index, event.currentTarget)}
                aria-label={`Open screenshot ${index + 1} of ${count}: ${image.caption}`}
              >
                <span className="gallery-thumb-image">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    quality={screenshotQuality}
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    className="object-cover"
                  />
                  <span className="gallery-thumb-zoom" aria-hidden="true">
                    <FiGrid />
                  </span>
                </span>
                <span className="gallery-thumb-caption">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {image.caption}
                </span>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <button
          type="button"
          className="gallery-trigger"
          onClick={(event) => openAt(0, event.currentTarget)}
        >
          <FiGrid aria-hidden="true" />
          View gallery
          <span className="gallery-trigger-count">{count} screens</span>
          <FiArrowRight className="gallery-trigger-arrow" aria-hidden="true" />
        </button>
      )}

      <dialog
        ref={dialogRef}
        className="gallery-dialog"
        aria-labelledby="gallery-dialog-title"
        onClose={() => {
          setOpen(false);
          triggerRef.current?.focus?.();
        }}
        onKeyDown={handleKeyDown}
        onClick={(event) => {
          const dialog = dialogRef.current;
          if (!dialog || event.target !== dialog) return;
          const rect = dialog.getBoundingClientRect();
          const outside =
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom;
          if (outside) close();
        }}
      >
        <div className="gallery-dialog-shell">
          <div className="gallery-dialog-head">
            <div>
              <p className="eyebrow">Project gallery</p>
              <h2 id="gallery-dialog-title">{projectTitle}</h2>
            </div>
            <div className="gallery-dialog-actions">
              <span className="gallery-counter">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(count).padStart(2, "0")}
              </span>
              <button
                ref={closeButtonRef}
                type="button"
                className="gallery-close"
                onClick={close}
                aria-label="Close project gallery"
              >
                <FiX aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="gallery-stage">
            <button
              type="button"
              className="gallery-nav gallery-nav-prev"
              onClick={() => step(-1)}
              aria-label="Previous screenshot"
            >
              <FiChevronLeft aria-hidden="true" />
            </button>

            <div className="gallery-stage-image">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeIndex}
                  className="gallery-slide"
                  custom={direction}
                  variants={slide}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: reduceMotion ? 0 : 0.32,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  drag={reduceMotion ? false : "x"}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.14}
                  onDragEnd={(event, info) => {
                    if (info.offset.x < -60 || info.velocity.x < -420) step(1);
                    else if (info.offset.x > 60 || info.velocity.x > 420) step(-1);
                  }}
                >
                  <Image
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    sizes="(max-width: 900px) 94vw, 1100px"
                    quality={screenshotQuality}
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    className="object-contain"
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              type="button"
              className="gallery-nav gallery-nav-next"
              onClick={() => step(1)}
              aria-label="Next screenshot"
            >
              <FiChevronRight aria-hidden="true" />
            </button>
          </div>

          <p className="gallery-caption" aria-live="polite">
            {activeImage.caption}
          </p>

          <div className="gallery-dialog-foot">
            <div className="gallery-thumbs" role="group" aria-label="Choose a screenshot">
              {images.map((image, index) => (
                <button
                  key={`${image.src}-thumb-${index}`}
                  type="button"
                  className={index === activeIndex ? "is-active" : undefined}
                  onClick={() => goTo(index)}
                  aria-label={`Show screenshot ${index + 1}: ${image.caption}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                >
                  <span className="gallery-thumb-mini">
                    <Image
                      src={image.src}
                      alt=""
                      fill
                      sizes="96px"
                      quality={75}
                      className="object-cover"
                    />
                  </span>
                </button>
              ))}
            </div>
            <Link href={`/projects/${projectSlug}`} className="text-link">
              Read the full case study
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </dialog>
    </div>
  );
}
