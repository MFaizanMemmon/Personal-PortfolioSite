'use client';

import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

const links = ["Home", "About", "Skills", "Projects", "Services", "Contact"];

const SideNav = () => {
  const [currentSection, setCurrentSection] = useState('Home');
  const [atLast, setAtLast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      // Determine current section
      let active = 'Home';
      links.forEach((section) => {
        const el = document.getElementById(section.toLowerCase());
        if (!el) return;
        const offsetTop = el.offsetTop;
        const offsetBottom = offsetTop + el.offsetHeight;
        if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
          active = section;
        }
      });
      setCurrentSection(active);

      // Show up arrow if last section is in view
      const lastSection = document.getElementById(links[links.length - 1].toLowerCase());
      if (lastSection) {
        const rect = lastSection.getBoundingClientRect();
        setAtLast(rect.top < window.innerHeight / 2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get next section for down arrow
  const getNextSection = () => {
    const idx = links.findIndex((s) => s === currentSection);
    if (idx === -1 || idx === links.length - 1) return null;
    return links[idx + 1].toLowerCase();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer shadow-xl hover:bg-blue-700 transition">
        {!atLast ? (
          <Link
            to={getNextSection()}
            smooth
            duration={700}
            offset={-100}
            className="text-white text-2xl md:text-3xl flex items-center justify-center"
          >
            <FiArrowDown />
          </Link>
        ) : (
          <button
            onClick={() => scroll.scrollToTop({ duration: 700 })}
            className="text-white text-2xl md:text-3xl flex items-center justify-center"
          >
            <FiArrowUp />
          </button>
        )}
      </div>
    </div>
  );
};

export default SideNav;
