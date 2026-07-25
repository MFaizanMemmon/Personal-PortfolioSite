'use client';

import { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FiArrowUp, FiChevronDown } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';

const links = ['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'];

const SideNav = () => {
  const [currentSection, setCurrentSection] = useState('Home');
  const [atLast, setAtLast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      let active = 'Home';

      links.forEach((section) => {
        const el = document.getElementById(section.toLowerCase());
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          active = section;
        }
      });

      setCurrentSection(active);
      const lastSection = document.getElementById('contact');
      setAtLast(Boolean(lastSection && lastSection.getBoundingClientRect().top < window.innerHeight / 2));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentIndex = links.indexOf(currentSection);
  const nextSection = links[Math.min(currentIndex + 1, links.length - 1)];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="section-navigator fixed bottom-5 right-4 sm:bottom-7 sm:right-7 z-50"
    >
      <AnimatePresence mode="wait">
        {!atLast ? (
          <motion.div key="next" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Link
              to={nextSection.toLowerCase()}
              smooth
              duration={700}
              offset={-100}
              className="section-nav-button cursor-pointer"
              aria-label={`Scroll to ${nextSection}`}
            >
              <span className="section-nav-copy">
                <small>Next</small>
                <strong>{nextSection}</strong>
              </span>
              <span className="section-nav-icon"><FiChevronDown /></span>
            </Link>
          </motion.div>
        ) : (
          <motion.button
            key="top"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => scroll.scrollToTop({ duration: 700 })}
            className="section-nav-button"
            aria-label="Back to top"
          >
            <span className="section-nav-copy">
              <small>Back to</small>
              <strong>Top</strong>
            </span>
            <span className="section-nav-icon"><FiArrowUp /></span>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SideNav;
