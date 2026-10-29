'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight, FiCheck } from 'react-icons/fi';
import { experience } from '@/data/site';

export default function Experience() {
  const reduceMotion = useReducedMotion();
  const boardRef = useRef(null);

  useEffect(() => {
    const board = boardRef.current;
    const list = board?.querySelector('.experience-list');
    if (!board || !list) return undefined;

    const items = Array.from(list.querySelectorAll('.experience-item'));
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = list.getBoundingClientRect();
      const focusLine = window.innerHeight * 0.44;
      const progress = Math.min(
        Math.max((focusLine - rect.top) / Math.max(rect.height, 1), 0),
        1,
      );
      board.style.setProperty('--experience-progress', progress.toFixed(4));

      let active = -1;
      items.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        if (itemRect.top <= focusLine && itemRect.bottom > focusLine) active = index;
      });

      if (active === -1 && items.length > 0) {
        active = rect.bottom < focusLine ? items.length - 1 : 0;
      }

      items.forEach((item, index) => {
        item.classList.toggle('is-active', index === active);
        if (index === active) item.setAttribute('aria-current', 'true');
        else item.removeAttribute('aria-current');
      });
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      items.forEach((item) => {
        item.classList.remove('is-active');
        item.removeAttribute('aria-current');
      });
    };
  }, []);

  return (
    <section
      id="experience"
      className="experience-section relative overflow-hidden px-6 py-24 md:px-20 md:py-28"
    >
      <div className="experience-orb experience-orb-one" aria-hidden="true" />
      <div className="experience-orb experience-orb-two" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="experience-heading"
        >
          <div className="section-kicker"><span /> Professional experience</div>
          <div className="experience-title-row">
            <h2>A track record built around <em>business systems.</em></h2>
            <p>
              Roles reflect my resume, project record and current engagement. Where exact month
              ranges were not recorded, the duration is shown rather than inventing dates.
            </p>
          </div>
        </motion.div>

        <div className="experience-board" ref={boardRef}>
          <div className="experience-rail" aria-hidden="true">
            <span className="experience-rail-fill" />
          </div>

          <ol className="experience-list">
            {experience.map((role, index) => {
              const current = role.period === 'Current role';
              return (
                <motion.li
                  key={`${role.company}-${role.role}`}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: Math.min(index * 0.06, 0.24) }}
                  className={`experience-item ${current ? 'is-current' : ''}`}
                  tabIndex={0}
                >
                  <div className="experience-marker" aria-hidden="true">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-period">{role.period}</span>
                    <span className="experience-location">{role.location}</span>
                    {current && <span className="experience-current">Current</span>}
                  </div>
                  <div className="experience-content">
                    <div className="experience-company-row">
                      {role.logo ? (
                        <Image
                          src={role.logo}
                          alt={`${role.company} logo`}
                          width={48}
                          height={48}
                          className="experience-logo-image"
                        />
                      ) : (
                        <span
                          className="experience-logo experience-logo-fallback"
                          role="img"
                          aria-label={`${role.company} logo placeholder`}
                        >
                          {role.logoInitials}
                        </span>
                      )}
                      <div className="experience-company-copy">
                        <span className="experience-company">{role.company}</span>
                        <h3>{role.role}</h3>
                      </div>
                    </div>
                    <p>{role.summary}</p>
                    <ul>
                      {role.highlights.map((highlight) => (
                        <li key={highlight}><FiCheck aria-hidden="true" /> {highlight}</li>
                      ))}
                    </ul>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="experience-cta"
        >
          <div>
            <span>Next step</span>
            <h3>Looking for someone who can own the transaction, not just the ticket?</h3>
          </div>
          <Link href="/#contact" className="experience-cta-button">
            Start a conversation
            <FiArrowUpRight aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
