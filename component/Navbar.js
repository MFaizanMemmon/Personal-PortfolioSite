"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiArrowUpRight, FiDownload, FiMenu, FiX } from "react-icons/fi";
import { navigation, site } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [pill, setPill] = useState({ left: 0, width: 0, visible: false });
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const navListRef = useRef(null);

  const onHome = pathname === "/";
  const activeId = pathname.startsWith("/projects/")
    ? "work"
    : onHome
      ? activeSection
      : "";

  const scrollToHash = useCallback((hash) => {
    const target = document.getElementById(hash);
    if (!target) return;
    const cssOffset = Number.parseFloat(
      getComputedStyle(document.documentElement).scrollPaddingTop,
    );
    const offset = Number.isFinite(cssOffset) ? cssOffset : 96;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - offset,
      behavior: reduceMotion ? "auto" : "smooth",
    });
    window.history.replaceState(null, "", `/#${hash}`);
  }, []);

  const handleAnchor = useCallback(
    (event, href) => {
      if (!onHome) return;
      const hash = href.split("#")[1];
      if (!hash) return;
      event.preventDefault();
      if (menuOpen) {
        setMenuOpen(false);
        window.setTimeout(() => scrollToHash(hash), 70);
      } else {
        scrollToHash(hash);
      }
    },
    [menuOpen, onHome, scrollToHash],
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 28);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!onHome) return undefined;

    const sections = ["home", ...navigation.map((item) => item.section)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-36% 0px -46% 0px", threshold: [0, 0.12, 0.3] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [onHome]);

  // Keep the active-item pill aligned with the current section.
  useEffect(() => {
    const updatePill = () => {
      const list = navListRef.current;
      const active = list?.querySelector("a.is-active");
      if (!list || !active) {
        setPill((current) => ({ ...current, visible: false }));
        return;
      }
      setPill({
        left: active.offsetLeft,
        width: active.offsetWidth,
        visible: true,
      });
    };

    updatePill();
    const frame = window.requestAnimationFrame(updatePill);
    const observer = new ResizeObserver(updatePill);
    if (navListRef.current) observer.observe(navListRef.current);
    window.addEventListener("resize", updatePill);
    document.fonts?.ready.then(updatePill).catch(() => {});

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", updatePill);
    };
  }, [activeId, pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      menuRef.current?.querySelector("a")?.focus();
    }, 40);

    const getFocusable = () =>
      Array.from(
        menuRef.current?.querySelectorAll("a[href], button:not([disabled])") ?? [],
      ).filter((node) => node.offsetParent !== null);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = getFocusable();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 1080) setMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-shell">
        <Link
          href="/"
          className="brand"
          aria-label="Faizan Engineer — home"
          onClick={(event) => {
            if (!onHome) return;
            event.preventDefault();
            const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
            window.history.replaceState(null, "", "/");
          }}
        >
          <span className="brand-mark" aria-hidden="true">
            F
          </span>
          <span className="brand-copy">
            <strong>Faizan</strong>
            <small>Full Stack .NET Engineer</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <span
            className="nav-pill"
            aria-hidden="true"
            style={{
              width: pill.width,
              opacity: pill.visible ? 1 : 0,
              transform: `translate3d(${pill.left}px, -50%, 0)`,
            }}
          />
          <ul ref={navListRef}>
            {navigation.map((item) => (
              <li key={item.section}>
                <Link
                  href={item.href}
                  className={activeId === item.section ? "is-active" : undefined}
                  aria-current={activeId === item.section ? "location" : undefined}
                  onClick={(event) => handleAnchor(event, item.href)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <a className="nav-resume" href={site.resume} download>
            <FiDownload aria-hidden="true" />
            <span>Resume</span>
          </a>
          <Link
            className="nav-contact"
            href="/#contact"
            onClick={(event) => handleAnchor(event, "/#contact")}
          >
            <span>Let&apos;s talk</span>
            <FiArrowUpRight aria-hidden="true" />
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <FiX className="menu-icon-close" aria-hidden="true" />
            <FiMenu className="menu-icon-open" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        ref={menuRef}
        className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
        aria-hidden={menuOpen ? undefined : "true"}
      >
        <div className="mobile-nav-inner">
          <p className="mobile-nav-label">Navigate the portfolio</p>
          <ul>
            {navigation.map((item, index) => (
              <li key={item.section} style={{ "--menu-index": index }}>
                <Link
                  href={item.href}
                  onClick={(event) => {
                    handleAnchor(event, item.href);
                    closeMenu();
                  }}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item.label}</strong>
                  <FiArrowUpRight aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mobile-nav-footer">
            <a href={site.resume} download onClick={closeMenu}>
              <FiDownload aria-hidden="true" /> Download resume
            </a>
            <a href={`mailto:${site.email}`} onClick={closeMenu}>
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
