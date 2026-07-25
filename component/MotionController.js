'use client';

import { useEffect, useState } from 'react';

export default function MotionController() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sections = Array.from(document.querySelectorAll('header, section'));

    if (!reduceMotion) {
      document.documentElement.classList.add('motion-ready');
      sections.forEach((section) => section.classList.add('motion-section'));

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
      );

      sections.forEach((section) => observer.observe(section));
      sections[0]?.classList.add('is-visible');

      const updateProgress = () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
      };

      updateProgress();
      window.addEventListener('scroll', updateProgress, { passive: true });

      return () => {
        observer.disconnect();
        window.removeEventListener('scroll', updateProgress);
        document.documentElement.classList.remove('motion-ready');
      };
    }
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{ transform: `scaleX(${progress / 100})` }}
      aria-hidden="true"
    />
  );
}
