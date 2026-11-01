'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { FiAward, FiBookOpen, FiCode, FiLayers, FiTerminal } from 'react-icons/fi';
import { education, site } from '@/data/site';

const tools = [
  { name: 'Visual Studio', src: '/assets/VS2026.svg.png' },
  { name: 'SQL Server', src: '/assets/SqlServer.jpg' },
  { name: 'VS Code', src: '/assets/vscode.png' },
  { name: 'GitHub', src: '/assets/git.png' },
  { name: 'SQLite', src: '/assets/SqlLiteNew.png' },
  { name: 'Azure', src: '/assets/Azure.png' },
];

const aiTools = [
  { name: 'Codex', slug: 'codex', logo: '/assets/ai-tools/codex-mark.png' },
  { name: 'Claude Code', slug: 'claude-code', logo: '/assets/ai-tools/claude-code-mark.png' },
  { name: 'DeepSeek Harness', slug: 'deepseek', logo: '/assets/ai-tools/deepseek-harness.png' },
  { name: 'Antigravity', slug: 'antigravity', logo: '/assets/ai-tools/antigravity.png' },
  { name: 'OpenCode', slug: 'opencode', logo: '/assets/ai-tools/opencode-mark.png' },
  { name: 'Qoder', slug: 'qoder', logo: '/assets/ai-tools/qoder-mark.png' },
];

const cards = [
  {
    number: '01',
    title: 'Languages',
    icon: FiCode,
    accent: 'blue',
    content: 'C#, JavaScript, TypeScript and Visual Basic (VBA)',
  },
  {
    number: '02',
    title: 'Education',
    icon: FiBookOpen,
    accent: 'cyan',
    content: `${education.degree} — ${education.institution}\nDCBM — Polytechnic College`,
  },
  {
    number: '03',
    title: 'Certifications',
    icon: FiAward,
    accent: 'violet',
    content: '.NET Programming\nInformation Technology',
  },
];

const About = () => {
  const reduceMotion = useReducedMotion();

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType === 'touch') return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`);
  };

  return (
    <section
      id="about"
      onPointerMove={handlePointerMove}
      className="about-section relative overflow-hidden px-6 py-24 md:px-20 md:py-28"
    >
      <div className="about-spotlight" aria-hidden="true" />
      <div className="about-orb about-orb-one" aria-hidden="true" />
      <div className="about-orb about-orb-two" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="about-heading mb-14 md:mb-20"
        >
          <div className="section-kicker"><span /> My story</div>
          <h2>Turning business ideas into <em>working software.</em></h2>
          <p>3+ years of learning, building, and solving real operational problems.</p>
        </motion.div>

        <div className="about-intro-grid">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="about-story"
          >
            <span className="about-eyebrow">Who I am</span>
            <h3>A developer who understands the business behind the code.</h3>
            <p>
              I am Muhammad Faizan, a Full Stack <strong>.NET Developer</strong> based in Sindh,
              Pakistan, with 3+ years of experience building ERP, POS, inventory, accounting and
              enterprise web applications. I have worked with Tech Resources, BMC Solution,
              Appsxone Solution and Intrapreneur, while also developing my own professional
              products.
            </p>
            <p>
              I specialize in ASP.NET Core, Web APIs, Angular, Blazor, and React / Next.js, backed
              by strong experience in finance, accounting systems, and business automation.
            </p>
            <div className="about-principle">
              <FiLayers />
              <span><small>My approach</small>Clean code. Clear thinking. Real-world impact.</span>
            </div>
          </motion.div>

          <motion.div
            whileHover={reduceMotion ? undefined : { y: -8, rotate: -1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 90 }}
            className="about-portrait-wrap"
          >
            <div className="about-portrait-lines" aria-hidden="true" />
            <div className="about-portrait-card">
              <Image
                src="/assets/FaizanWhiteBg.jpg"
                alt="Muhammad Faizan, .NET developer"
                fill
                sizes="(max-width: 768px) 320px, 420px"
                className="object-cover about-photo-light"
              />
              <Image
                src="/assets/FaizanDpNew.jpg"
                alt=""
                fill
                sizes="(max-width: 768px) 320px, 420px"
                className="object-cover about-photo-dark"
              />
              <div className="portrait-sheen" aria-hidden="true" />
            </div>
            <div className="experience-stamp">
              <strong>3+</strong>
              <span>Years of<br />experience</span>
            </div>
            <div className="location-chip"><span /> {site.location}</div>
          </motion.div>
        </div>

        <div className="about-cards">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={reduceMotion ? undefined : { y: -10, rotateX: 2, rotateY: index === 1 ? 0 : index === 0 ? -2 : 2 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`about-card about-card-${card.accent}`}
              >
                <span className="about-card-number">{card.number}</span>
                <div className="about-card-icon"><Icon /></div>
                <h4>{card.title}</h4>
                <p>{card.content}</p>
                <div className="card-glow" aria-hidden="true" />
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="tools-panel"
        >
          <div className="tools-copy">
            <span>Everyday toolkit</span>
            <h3>Tools I use to ship</h3>
          </div>
          <div className="tools-content">
            <div className="tools-list">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  whileHover={reduceMotion ? undefined : { y: -7, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="tool-item"
                >
                  <div className="tool-icon">
                    <Image src={tool.src} alt="" width={38} height={38} className="object-contain" />
                  </div>
                  <span>{tool.name}</span>
                  <small>{String(index + 1).padStart(2, '0')}</small>
                </motion.div>
              ))}
            </div>
            <div className="tools-ai">
              <span className="tools-ai-label"><FiTerminal aria-hidden="true" /> AI-assisted development</span>
              <div className="tools-list tools-list-ai">
                {aiTools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    whileHover={reduceMotion ? undefined : { y: -7, scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="tool-item"
                  >
                    <div className={`tool-icon tool-icon-${tool.slug}`}>
                      <Image
                        src={tool.logo}
                        alt={`${tool.name} logo`}
                        width={38}
                        height={38}
                        className="object-contain"
                      />
                    </div>
                    <span>{tool.name}</span>
                    <small>{String(tools.length + index + 1).padStart(2, '0')}</small>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
