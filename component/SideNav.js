"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FiArrowUp, FiChevronDown } from "react-icons/fi";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "work", label: "Work" },
  { id: "engineering", label: "Engineering" },
  { id: "writing", label: "Writing" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export default function SideNav() {
  const pathname = usePathname();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [atEnd, setAtEnd] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (pathname !== "/") return undefined;
    let frame = 0;

    const update = () => {
      frame = 0;
      const anchor = window.scrollY + window.innerHeight * 0.42;
      let index = 0;

      sections.forEach((section, sectionIndex) => {
        const element = document.getElementById(section.id);
        if (
          element &&
          anchor >= element.offsetTop &&
          anchor < element.offsetTop + element.offsetHeight
        ) {
          index = sectionIndex;
        }
      });

      setCurrentIndex(index);

      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);
      setAtEnd(
        window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - 80,
      );
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  const next = sections[Math.min(currentIndex + 1, sections.length - 1)];

  if (pathname !== "/") return null;

  if (atEnd) {
    return (
      <button
        type="button"
        className="side-nav back-to-top"
        onClick={() => {
          const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
        }}
        aria-label="Back to top"
      >
        <span>
          <small>Back to</small>
          <strong>Top</strong>
        </span>
        <i>
          <FiArrowUp aria-hidden="true" />
        </i>
        <svg className="side-nav-ring" viewBox="0 0 40 40" aria-hidden="true">
          <circle cx="20" cy="20" r="17" />
          <circle
            className="side-nav-ring-value"
            cx="20"
            cy="20"
            r="17"
            style={{ strokeDashoffset: `${107 - progress * 107}` }}
          />
        </svg>
      </button>
    );
  }

  return (
    <a className="side-nav" href={`#${next.id}`} aria-label={`Go to ${next.label} section`}>
      <span>
        <small>Next</small>
        <strong>{next.label}</strong>
      </span>
      <i>
        <FiChevronDown aria-hidden="true" />
      </i>
      <span className="side-nav-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </span>
    </a>
  );
}
