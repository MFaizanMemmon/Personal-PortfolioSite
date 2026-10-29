'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import {
  FiArrowUpRight,
  FiBarChart2,
  FiCode,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiMonitor,
  FiServer,
  FiTool,
} from 'react-icons/fi';
import SkillLegend from './SkillLegend';
import { skillGroups } from '@/data/site';

const languages = [
  {
    title: 'C#',
    icon: '/assets/Skills/CSharp.png',
    label: 'Primary language',
    description: 'Enterprise applications, APIs and cross-platform products.',
    blog: 'https://chashprogramming.blogspot.com/',
    accent: '#7c3aed',
  },
  {
    title: 'TypeScript',
    icon: '/assets/Skills/TS.png',
    label: 'Professional',
    description: 'Type-safe frontend architecture for Angular and Next.js.',
    accent: '#2563eb',
  },
  {
    title: 'JavaScript',
    icon: '/assets/Skills/JS.png',
    label: 'Professional',
    description: 'Modern interactive experiences across the web platform.',
    accent: '#ca8a04',
  },
];

const groupIcons = {
  Backend: FiServer,
  Frontend: FiCode,
  Databases: FiDatabase,
  Desktop: FiMonitor,
  Reporting: FiBarChart2,
  'Tools & Delivery': FiTool,
};

const levelLabels = {
  production: 'Professional experience',
  project: 'Project experience',
  learning: 'Currently learning',
};

export default function Skills() {
  const reduceMotion = useReducedMotion();

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType === 'touch') return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--skills-x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--skills-y', `${event.clientY - rect.top}px`);
  };

  return (
    <section
      id="skills"
      onPointerMove={handlePointerMove}
      className="skills-section relative overflow-hidden px-6 py-24 md:px-20 md:py-28"
    >
      <div className="skills-spotlight" aria-hidden="true" />
      <div className="skills-grid-bg" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="skills-heading"
        >
          <div className="section-kicker"><span /> Technical stack</div>
          <div className="skills-title-row">
            <h2>Technologies I use to<br /><em>build what matters.</em></h2>
            <p>
              A practical toolkit shaped by enterprise products, complex business workflows,
              and reliable software delivery.
            </p>
          </div>
        </motion.div>

        <div className="language-section">
          <div className="skill-subheading">
            <span><FiCpu /> Core languages</span>
            <small>My everyday foundations</small>
          </div>
          <div className="language-grid">
            {languages.map((language, index) => {
              const card = (
                <>
                  <span className="language-index">0{index + 1}</span>
                  <div className="language-icon" style={{ '--language-accent': language.accent }}>
                    <Image src={language.icon} alt="" width={68} height={68} className="object-contain" />
                  </div>
                  <div className="language-copy">
                    <span className="language-label">{language.label}</span>
                    <h3>{language.title}</h3>
                    <p>{language.description}</p>
                  </div>
                  <span className="language-arrow"><FiArrowUpRight /></span>
                </>
              );

              return language.blog ? (
                <motion.a
                  key={language.title}
                  href={language.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={reduceMotion ? undefined : { y: -8 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="language-card"
                  aria-label={`${language.title} blog`}
                >
                  {card}
                </motion.a>
              ) : (
                <motion.article
                  key={language.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={reduceMotion ? undefined : { y: -8 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="language-card"
                >
                  {card}
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="framework-section">
          <div className="skill-subheading">
            <span><FiLayers /> Frameworks &amp; platforms</span>
            <small>From database to interface</small>
          </div>

          <div className="skill-filter-row">
            <span className="skill-filter-label">Filter by experience</span>
            <SkillLegend />
          </div>

          <div className="framework-grid">
            {skillGroups.map((group, index) => {
              const Icon = groupIcons[group.title] ?? FiLayers;
              return (
                <motion.article
                  key={group.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={reduceMotion ? undefined : { y: -7 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: (index % 3) * 0.06 }}
                  className="framework-card skill-group-card"
                >
                  <div className="framework-card-top">
                    <div className="framework-icon skill-group-icon">
                      <Icon aria-hidden="true" />
                    </div>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3>{group.title}</h3>
                  <p className="skill-group-description">{group.description}</p>
                  <ul className="skill-badge-list">
                    {group.items.map((item) => (
                      <li key={item.name} data-level={item.level}>
                        <span className={`level-dot level-${item.level}`} aria-hidden="true" />
                        <span>{item.name}</span>
                        <span className="sr-only">— {levelLabels[item.level]}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="framework-shine" aria-hidden="true" />
                </motion.article>
              );
            })}
          </div>

          <div className="skills-legend-note">
            {Object.entries(levelLabels).map(([level, label]) => (
              <span key={level}><i className={`level-dot level-${level}`} /> {label}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
