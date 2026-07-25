'use client';

import Image from 'next/image';
import { Link } from 'react-scroll';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi';

const ease = [0.22, 1, 0.36, 1];

const Header = () => {
  const reduceMotion = useReducedMotion();
  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 34 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header
      id="home"
      className="hero-section relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-white to-gray-100 px-6 sm:px-10 md:px-20 text-center md:text-left pt-28 md:pt-32 pb-16 gap-14 md:gap-20 overflow-hidden"
    >
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.82 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease }}
        className="portrait-stage relative flex-shrink-0 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
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
              alt="Faizan Engineer"
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

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: reduceMotion ? 0 : 0.12, delayChildren: 0.15 }}
        className="flex-1 max-w-2xl space-y-5 z-10"
      >
        <motion.div variants={reveal} transition={{ duration: 0.7, ease }} className="hero-intro">
          <span className="hero-intro-line" aria-hidden="true" />
          <span>Hi, I am</span>
          <span className="hero-name">Faizan</span>
          <span className="hero-wave" aria-hidden="true">👋</span>
        </motion.div>

        <motion.h1
          variants={reveal}
          transition={{ duration: 0.8, ease }}
          className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.06] tracking-tight"
        >
          <span className="heading-line">Full Stack</span>
          <span className="heading-line">
            <span className="heading-accent">.NET</span> Developer
          </span>
        </motion.h1>

        <motion.h2 variants={reveal} transition={{ duration: 0.7, ease }} className="text-lg sm:text-xl text-gray-700">
          Building reliable digital products from <strong className="text-gray-900">Pakistan</strong>
        </motion.h2>

        <motion.p
          variants={reveal}
          transition={{ duration: 0.7, ease }}
          className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl"
        >
          I am a full stack developer from Sindh, Pakistan, with 4 years of
          experience across BMC Solution, Appsxone IT Solution, Intrapreneur,
          and my own products. I build professional and efficient software.
        </motion.p>

        <motion.div variants={reveal} transition={{ duration: 0.7, ease }} className="pt-2 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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
    </header>
  );
};

export default Header;
