'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowDown, FiDownload, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';

const links = ['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);
      const scrollPosition = window.scrollY + Math.min(window.innerHeight * .36, 260);

      for (const link of links) {
        const section = document.getElementById(link.toLowerCase());
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveLink(link.toLowerCase());
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .65, ease: [0.22, 1, 0.36, 1] }}
      className={`portfolio-nav fixed inset-x-0 top-0 z-50 ${scrolled ? 'is-scrolled' : ''}`}
    >
      <div className="portfolio-nav-shell">
        <Link to="home" smooth duration={700} offset={-100} className="portfolio-brand cursor-pointer" aria-label="Go to home">
          <span className="portfolio-wordmark">
            Faizan<span>.</span>
          </span>
          <span className="portfolio-wordmark-badge">.NET DEV</span>
        </Link>

        <ul className="portfolio-nav-links hidden md:flex">
          {links.map((link) => {
            const target = link.toLowerCase();
            const active = activeLink === target;
            return (
              <li key={link}>
                <Link
                  to={target}
                  smooth
                  duration={700}
                  offset={-90}
                  className={`portfolio-nav-link cursor-pointer ${active ? 'is-active' : ''}`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="portfolio-nav-active-pill"
                      transition={{ type: 'spring', stiffness: 430, damping: 34 }}
                    />
                  )}
                  <span>{link}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="portfolio-nav-actions">
          <a href="/assets/Faizan%20.Net%20Developer.pdf" download className="portfolio-cv hidden md:inline-flex">
            <FiDownload />
            <span>Resume</span>
            <span className="portfolio-cv-arrow"><FiArrowDown /></span>
          </a>

          <button
            onClick={() => setIsOpen((open) => !open)}
            className="portfolio-menu-button md:hidden"
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: .97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: .98 }}
            transition={{ duration: .25 }}
            className="portfolio-mobile-menu md:hidden"
          >
            <div className="portfolio-mobile-menu-head">
              <span>Navigate</span>
              <small>Portfolio sections</small>
            </div>
            <ul>
              {links.map((link, index) => {
                const target = link.toLowerCase();
                return (
                  <li key={link}>
                    <Link
                      to={target}
                      smooth
                      duration={700}
                      offset={-84}
                      onClick={() => setIsOpen(false)}
                      className={`cursor-pointer ${activeLink === target ? 'is-active' : ''}`}
                    >
                      <span className="mobile-nav-number">{String(index + 1).padStart(2, '0')}</span>
                      <strong>{link}</strong>
                      <span className="mobile-nav-dot" />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <a href="/assets/Faizan%20.Net%20Developer.pdf" download className="portfolio-mobile-cv">
              <span><FiDownload /> Download resume</span>
              <FiArrowDown />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
