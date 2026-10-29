'use client';

import Image from 'next/image';
import { Fragment } from 'react';
import { Link } from 'react-scroll';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowDown, FiArrowRight, FiDownload, FiMail } from 'react-icons/fi';

const ease = [0.22, 1, 0.36, 1];
const headline = ['Full', 'Stack'];
const headlineSecond = ['.NET', 'Developer'];

const Header = () => {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  };

  const wordReveal = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.76, ease } },
  };

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType === 'touch') return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--hero-x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--hero-y', `${event.clientY - rect.top}px`);
  };

  return (
    <header
      id="home"
      onPointerMove={handlePointerMove}
      className="hero-section relative flex min-h-screen flex-col items-center justify-center gap-14 overflow-hidden px-6 pt-28 pb-16 text-center sm:px-10 md:flex-row md:gap-20 md:px-20 md:pt-32 md:text-left"
    >
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-pointer-glow" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, scale: 0.82 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease }}
        className="portrait-stage relative h-64 w-64 flex-shrink-0 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96"
      >
        <div className="portrait-aura" aria-hidden="true" />
        <div className="portrait-orbit portrait-orbit-outer" aria-hidden="true">
          <span className="orbit-dot orbit-dot-blue" />
          <span className="orbit-label">.NET</span>
        </div>
        <div className="portrait-orbit portrait-orbit-inner" aria-hidden="true">
          <span className="orbit-dot orbit-dot-cyan" />
          <span className="orbit-label orbit-label-code">C#</span>
        </div>
        <div className="portrait-frame">
          <div className="portrait-image">
            <Image
              src="/assets/FaizanDpNew.jpg"
              alt="Faizan Engineer, full stack .NET developer"
              fill
              sizes="(max-width: 768px) 288px, 384px"
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="availability-badge">
          <span className="availability-dot" />
          Available for work
        </div>
      </motion.div>

      <div className="hero-copy relative z-10 max-w-2xl flex-1">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: reduceMotion ? 0 : 0.12, delayChildren: 0.15 }}
          className="hero-content-stack"
        >
          <motion.div variants={reveal} transition={{ duration: 0.7, ease }} className="hero-intro">
            <span className="hero-intro-line" aria-hidden="true" />
            <span>Hi, I am</span>
            <span className="hero-name">Faizan</span>
            <span className="hero-wave" aria-hidden="true">👋</span>
          </motion.div>

          <motion.h1
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.075 } },
            }}
            className="hero-title"
          >
            <span className="heading-line">
              {headline.map((word) => (
                <Fragment key={word}>
                  <motion.span variants={wordReveal} className="hero-word">{word}</motion.span>{' '}
                </Fragment>
              ))}
            </span>
            <span className="heading-line">
              {headlineSecond.map((word) => (
                <Fragment key={word}>
                  <motion.span variants={wordReveal} className="hero-word">
                    {word === '.NET' ? <span className="heading-accent">.NET</span> : word}
                  </motion.span>{' '}
                </Fragment>
              ))}
            </span>
          </motion.h1>

          <motion.h2 variants={reveal} transition={{ duration: 0.7, ease }} className="hero-subtitle">
            Building reliable digital products from <strong>Pakistan</strong>
          </motion.h2>

          <motion.p variants={reveal} transition={{ duration: 0.7, ease }} className="hero-description">
            I am a full stack .NET developer from Sindh, Pakistan, with 3+ years of experience
            across Tech Resources, BMC Solution, Appsxone Solution, Intrapreneur and independent
            client projects. I build ERP, POS and business software with C#, ASP.NET Core and SQL
            Server.
          </motion.p>

          <motion.div variants={reveal} transition={{ duration: 0.7, ease }} className="hero-actions">
            <Link
              to="contact"
              smooth
              duration={700}
              offset={-100}
              className="hero-button hero-button-primary cursor-pointer"
            >
              <FiMail />
              Contact Me
              <FiArrowRight className="button-arrow" />
            </Link>
            <a href="/assets/Faizan%20.Net%20Developer.pdf" download className="hero-button hero-button-secondary">
              <FiDownload />
              My Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      <Link
        to="about"
        smooth
        duration={700}
        offset={-90}
        className="hero-scroll-cue cursor-pointer"
        aria-label="Scroll to the about section"
      >
        <span>Scroll to explore</span>
        <FiArrowDown aria-hidden="true" />
        <i aria-hidden="true" />
      </Link>
    </header>
  );
};

export default Header;
