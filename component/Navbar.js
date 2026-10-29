'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiArrowDown, FiDownload, FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const links = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Engineering', id: 'engineering' },
  { label: 'Services', id: 'services' },
  { label: 'Contact', id: 'contact' },
];

const mobileLinks = [
  ...links.slice(0, 7),
  { label: 'Writing', id: 'writing' },
  links[7],
];

export default function Navbar() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const onHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);

      if (!onHome) {
        setActiveLink(pathname.startsWith('/projects/') ? 'projects' : '');
        return;
      }

      const scrollPosition = window.scrollY + Math.min(window.innerHeight * 0.36, 280);
      let current = 'home';

      [...links, { id: 'writing' }].forEach((link) => {
        const section = document.getElementById(link.id);
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          current = link.id;
        }
      });

      setActiveLink(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [onHome, pathname]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const scrollToSection = useCallback(
    (event, id) => {
      if (!onHome) return;
      const section = document.getElementById(id);
      if (!section) return;
      event.preventDefault();
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({
        top: section.getBoundingClientRect().top + window.scrollY - 96,
        behavior: reduce ? 'auto' : 'smooth',
      });
      window.history.replaceState(null, '', `/#${id}`);
      setIsOpen(false);
    },
    [onHome],
  );

  const goHome = (event) => {
    if (!onHome) return;
    event.preventDefault();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    window.history.replaceState(null, '', '/');
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`portfolio-nav fixed inset-x-0 top-0 z-50 ${scrolled ? 'is-scrolled' : ''}`}
      aria-label="Primary navigation"
    >
      <div className="portfolio-nav-shell">
        <Link href="/" onClick={goHome} className="portfolio-brand" aria-label="Faizan Engineer — home">
          <span className="portfolio-wordmark">
            Faizan<span>.</span>
          </span>
          <span className="portfolio-wordmark-badge">.NET DEV</span>
        </Link>

        <ul className="portfolio-nav-links">
          {links.map((link) => {
            const active = activeLink === link.id;
            return (
              <li key={link.id}>
                <Link
                  href={`/#${link.id}`}
                  onClick={(event) => scrollToSection(event, link.id)}
                  className={`portfolio-nav-link ${active ? 'is-active' : ''}`}
                  aria-current={active ? 'location' : undefined}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="portfolio-nav-active-pill"
                      transition={{ type: 'spring', stiffness: 430, damping: 34 }}
                    />
                  )}
                  <span>{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="portfolio-nav-actions">
          <ThemeToggle />
          <a href="/assets/Faizan%20.Net%20Developer.pdf" download className="portfolio-cv" aria-label="Download resume" title="Download resume">
            <FiDownload />
            <span>Resume</span>
            <span className="portfolio-cv-arrow"><FiArrowDown /></span>
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="portfolio-menu-button"
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isOpen}
            aria-controls="portfolio-mobile-menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="portfolio-mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
            className="portfolio-mobile-menu"
          >
            <div className="portfolio-mobile-menu-head">
              <span>Navigate</span>
              <small>Portfolio sections</small>
            </div>
            <ul>
              {mobileLinks.map((link, index) => (
                <li key={link.id}>
                  <Link
                    href={`/#${link.id}`}
                    onClick={(event) => {
                      scrollToSection(event, link.id);
                      setIsOpen(false);
                    }}
                    className={activeLink === link.id ? 'is-active' : ''}
                  >
                    <span className="mobile-nav-number">{String(index + 1).padStart(2, '0')}</span>
                    <strong>{link.label}</strong>
                    <span className="mobile-nav-dot" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="portfolio-mobile-menu-foot">
              <ThemeToggle />
              <a href="/assets/Faizan%20.Net%20Developer.pdf" download className="portfolio-mobile-cv">
                <span><FiDownload /> Download resume</span>
                <FiArrowDown />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
