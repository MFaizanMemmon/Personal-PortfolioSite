'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight, FiCheck, FiCpu, FiLayers, FiX } from 'react-icons/fi';

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
    label: 'Strong',
    description: 'Type-safe frontend architecture for Angular and Next.js.',
    accent: '#2563eb',
  },
  {
    title: 'JavaScript',
    icon: '/assets/Skills/JS.png',
    label: 'Strong',
    description: 'Modern interactive experiences across the web platform.',
    accent: '#ca8a04',
  },
];

const frameworks = [
  { title: '.NET Core / ASP.NET', icon: '/assets/Skills/AspNetCore.png', group: 'Backend', items: ['ASP.NET Core Web API', 'MVC / Razor Pages', 'Entity Framework Core', 'Dapper & Stored Procedures', 'JWT Authentication', 'Clean Architecture'] },
  { title: 'Blazor', icon: '/assets/Skills/BlazorDotNet.png', group: 'Web', items: ['Blazor Server', 'Blazor WebAssembly', 'Razor Components', 'JS Interop', 'SignalR Integration'] },
  { title: 'Angular', icon: '/assets/Skills/Angular.jpg', group: 'Frontend', items: ['Standalone Components', 'RxJS & Observables', 'State Management', 'Angular Forms', 'REST API Integration'] },
  { title: 'Next.js / React', icon: '/assets/Skills/NextJsNew.png', group: 'Frontend', items: ['App Router', 'Server & Client Components', 'SSR / SSG', 'Tailwind CSS', 'Performance Optimization'] },
  { title: 'Databases', icon: '/assets/Skills/SqlServer.png', group: 'Data', items: ['SQL Server', 'Stored Procedures', 'Query Optimization', 'Indexing', 'Database Design'] },
  { title: 'PDF Reports', icon: '/assets/Skills/PDFLogo.png', group: 'Reporting', items: ['QuestPDF', 'iText / PdfSharp', 'Invoices & Reports', 'Charts & Tables', 'Print-ready Layouts'] },
  { title: 'WPF', icon: '/assets/Skills/WPF.jpg', group: 'Desktop', items: ['XAML UI Design', 'MVVM Pattern', 'Data Binding', 'Custom Controls', 'Desktop Applications'] },
  { title: '.NET MAUI', icon: '/assets/Skills/MauiLogo.jpg', group: 'Cross-platform', items: ['Android & iOS Apps', 'Windows & macOS', 'MVVM Pattern', 'Device APIs', 'Blazor Hybrid'] },
];

export default function Skills() {
  const [showPopup, setShowPopup] = useState(false);
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showPopup ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showPopup]);

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--skills-x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--skills-y', `${event.clientY - rect.top}px`);
  };

  return (
    <section id="skills" onPointerMove={handlePointerMove} className="skills-section relative overflow-hidden px-6 md:px-20 py-24 md:py-28">
      <div className="skills-spotlight" aria-hidden="true" />
      <div className="skills-grid-bg" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
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
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
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
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
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
            <span><FiLayers /> Frameworks & platforms</span>
            <small>From database to interface</small>
          </div>

          <div className="framework-grid">
            {frameworks.map((framework, index) => (
              <motion.article
                key={framework.title}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={reduceMotion ? undefined : { y: -7 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: (index % 4) * 0.06 }}
                className="framework-card"
              >
                <div className="framework-card-top">
                  <div className="framework-icon">
                    <Image src={framework.icon} alt="" width={44} height={44} className="object-contain" />
                  </div>
                  <span>{framework.group}</span>
                </div>
                <h3>{framework.title}</h3>
                <ul>
                  {framework.items.map((item) => (
                    <li key={item}><FiCheck /> {item}</li>
                  ))}
                </ul>
                <button onClick={() => setShowPopup(true)} className="framework-link">
                  Learning resources <FiArrowUpRight />
                </button>
                <div className="framework-shine" aria-hidden="true" />
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {mounted && createPortal(
        <AnimatePresence>
          {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="skills-modal-backdrop"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: .9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: .94 }}
              onClick={(event) => event.stopPropagation()}
              className="skills-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="skills-modal-title"
            >
              <button onClick={() => setShowPopup(false)} className="skills-modal-close" aria-label="Close"><FiX /></button>
              <div className="skills-modal-icon"><FiLayers /></div>
              <span>In development</span>
              <h4 id="skills-modal-title">Guides are coming soon.</h4>
              <p>I’m preparing practical blogs and PDF guides based on real projects and workflows.</p>
              <button onClick={() => setShowPopup(false)} className="skills-modal-button">Got it</button>
            </motion.div>
          </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
