'use client';

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiImage,
  FiX,
} from 'react-icons/fi';
import { blurDataURL, screenshotQuality } from '@/data/image';

const slide = {
  enter: (direction) => ({ opacity: 0, x: direction > 0 ? 42 : -42, scale: 0.988 }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (direction) => ({ opacity: 0, x: direction > 0 ? -32 : 32, scale: 0.992 }),
};

const subscribeReducedMotion = (callback) => {
  const query = window.matchMedia('(prefers-reduced-motion: reduce)');
  query.addEventListener('change', callback);
  return () => query.removeEventListener('change', callback);
};

const getReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const getServerReducedMotion = () => false;

export default function ProjectGallery({
  images,
  project,
  projectTitle,
  projectSlug,
  mode = 'grid',
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
  const title = project?.title ?? projectTitle;
  const slug = project?.slug ?? projectSlug;
  const activeImage = images[activeIndex] ?? images[0];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;

    if (open) {
      if (!dialog.open) dialog.showModal();
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
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
      if (!count) return;
      const next = ((index % count) + count) % count;
      setDirection(next >= activeIndex ? 1 : -1);
      setActiveIndex(next);
    },
    [activeIndex, count],
  );

  const step = useCallback(
    (delta) => {
      if (!count) return;
      setDirection(delta > 0 ? 1 : -1);
      setActiveIndex((current) => (((current + delta) % count) + count) % count);
    },
    [count],
  );

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      step(1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      step(-1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      goTo(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      goTo(count - 1);
    }
  };

  return (
    <div className="project-gallery">
      {mode === 'grid' ? (
        <ul className="project-gallery-grid">
          {images.map((image, index) => (
            <li key={`${image.src}-${index}`}>
              <button
                type="button"
                className="project-gallery-thumb"
                onClick={(event) => openAt(index, event.currentTarget)}
                aria-label={`Open screenshot ${index + 1} of ${count}: ${image.caption}`}
              >
                <span className="project-gallery-thumb-image">
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
                  <span className="project-gallery-thumb-overlay" aria-hidden="true">
                    <FiImage />
                  </span>
                </span>
                <span className="project-gallery-thumb-caption">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {image.caption}
                </span>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <button
          type="button"
          className="project-gallery-trigger"
          onClick={(event) => openAt(0, event.currentTarget)}
        >
          <FiImage aria-hidden="true" />
          <span>View gallery</span>
          <small>{count} screens</small>
          <FiArrowRight aria-hidden="true" />
        </button>
      )}

      <dialog
        ref={dialogRef}
        className="project-gallery-dialog"
        aria-labelledby="project-gallery-title"
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
        <div className="project-gallery-shell">
          <header className="project-gallery-head">
            <div>
              <span className="project-category">{project?.category ?? 'Project gallery'}</span>
              <h2 id="project-gallery-title">{title}</h2>
            </div>
            <div className="project-gallery-head-actions">
              <span className="project-gallery-counter">
                {String(activeIndex + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
              </span>
              <button
                ref={closeButtonRef}
                type="button"
                className="project-gallery-close"
                onClick={close}
                aria-label="Close project gallery"
              >
                <FiX aria-hidden="true" />
              </button>
            </div>
          </header>

          <div className="project-gallery-body">
            <div className="project-gallery-main">
              <div className="project-gallery-stage">
                <button
                  type="button"
                  className="project-gallery-nav project-gallery-nav-prev"
                  onClick={() => step(-1)}
                  aria-label="Previous screenshot"
                >
                  <FiChevronLeft aria-hidden="true" />
                </button>

                <div className="project-gallery-stage-image">
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                      key={activeIndex}
                      className="project-gallery-slide"
                      custom={direction}
                      variants={slide}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        duration: reduceMotion ? 0 : 0.32,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      drag={reduceMotion ? false : 'x'}
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
                        sizes="(max-width: 900px) 94vw, 900px"
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
                  className="project-gallery-nav project-gallery-nav-next"
                  onClick={() => step(1)}
                  aria-label="Next screenshot"
                >
                  <FiChevronRight aria-hidden="true" />
                </button>
              </div>

              <p className="project-gallery-caption" aria-live="polite">
                {activeImage.caption}
              </p>

              <div className="project-gallery-thumbs" role="group" aria-label="Choose a screenshot">
                {images.map((image, index) => (
                  <button
                    key={`${image.src}-thumb-${index}`}
                    type="button"
                    className={index === activeIndex ? 'is-active' : ''}
                    onClick={() => goTo(index)}
                    aria-label={`Show screenshot ${index + 1}: ${image.caption}`}
                    aria-current={index === activeIndex ? 'true' : undefined}
                  >
                    <span>
                      <Image
                        src={image.src}
                        alt=""
                        fill
                        sizes="90px"
                        quality={75}
                        className="object-cover"
                      />
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <aside className="project-gallery-info">
              <p className="project-gallery-summary">{project?.summary ?? 'Screenshots from the working application.'}</p>
              {project?.features?.length > 0 && (
                <>
                  <h3>Core capabilities</h3>
                  <ul className="project-gallery-features">
                    {project.features.slice(0, 6).map((feature) => (
                      <li key={feature}>
                        <span aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {project?.techGroups?.length > 0 && (
                <div className="project-tags">
                  {project.techGroups.flatMap((group) => group.items).slice(0, 5).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              )}
              <Link href={`/projects/${slug}`} className="project-gallery-case-link">
                Read the full case study
                <FiArrowRight aria-hidden="true" />
              </Link>
            </aside>
          </div>
        </div>
      </dialog>
    </div>
  );
}
