'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiSend,
  FiUser,
  FiYoutube,
} from 'react-icons/fi';

const contactDetails = [
  { label: 'Email me', value: 'engineerfaizan56@gmail.com', href: 'mailto:engineerfaizan56@gmail.com', icon: FiMail },
  { label: 'Call or WhatsApp', value: '+92 318 9417122', href: 'https://wa.me/923189417122', icon: FiPhone },
  { label: 'Based in', value: 'Sindh, Pakistan', icon: FiMapPin },
];

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/faizan-memon122/', icon: FiLinkedin },
  { label: 'GitHub', href: 'https://github.com/MFaizanMemmon', icon: FiGithub },
  { label: 'YouTube', href: 'https://www.youtube.com/@faizanengineer8811', icon: FiYoutube },
];

export default function ContactMe() {
  const reduceMotion = useReducedMotion();

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--contact-x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--contact-y', `${event.clientY - rect.top}px`);
  };

  return (
    <section id="contact" onPointerMove={handlePointerMove} className="contact-section relative overflow-hidden px-6 md:px-20 pt-24 md:pt-28">
      <div className="contact-spotlight" aria-hidden="true" />
      <div className="contact-orb contact-orb-one" aria-hidden="true" />
      <div className="contact-orb contact-orb-two" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .5 }}
          className="contact-heading"
        >
          <div className="section-kicker"><span /> Start a conversation</div>
          <div className="contact-title-row">
            <h2>Have an idea?<br /><em>Let’s make it real.</em></h2>
            <div className="contact-availability">
              <span className="contact-status-dot" />
              <div>
                <small>Current availability</small>
                <strong>Open for new projects</strong>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="contact-layout">
          <motion.div
            initial={{ opacity: 0, x: reduceMotion ? 0 : -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: .25 }}
            className="contact-info-panel"
          >
            <div className="contact-intro">
              <span>Let’s work together</span>
              <h3>Tell me about the problem you want to solve.</h3>
              <p>
                Whether it’s a business application, a customer-facing platform, or an idea
                that needs shaping, I’d be happy to hear about it.
              </p>
            </div>

            <div className="contact-details">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                const content = (
                  <>
                    <span className="contact-detail-icon"><Icon /></span>
                    <span className="contact-detail-copy">
                      <small>{detail.label}</small>
                      <strong>{detail.value}</strong>
                    </span>
                    {detail.href && <FiArrowUpRight className="contact-detail-arrow" />}
                  </>
                );

                return detail.href ? (
                  <a key={detail.label} href={detail.href} target={detail.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="contact-detail">
                    {content}
                  </a>
                ) : (
                  <div key={detail.label} className="contact-detail">{content}</div>
                );
              })}
            </div>

            <div className="contact-socials">
              <span>Find me online</span>
              <div>
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={reduceMotion ? undefined : { y: -4 }}
                      aria-label={social.label}
                    >
                      <Icon />
                      <span>{social.label}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.form
            action="https://formspree.io/f/mbdlnnyk"
            method="POST"
            initial={{ opacity: 0, x: reduceMotion ? 0 : 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: .2 }}
            className="contact-form"
          >
            <div className="contact-form-top">
              <span className="contact-form-icon"><FiMessageCircle /></span>
              <div>
                <small>Send a message</small>
                <h3>What can I help you build?</h3>
              </div>
            </div>

            <div className="contact-fields-row">
              <label className="contact-field">
                <span>Your name</span>
                <div><FiUser /><input type="text" name="name" placeholder="Faizan" autoComplete="name" required /></div>
              </label>
              <label className="contact-field">
                <span>Email address</span>
                <div><FiMail /><input type="email" name="email" placeholder="you@company.com" autoComplete="email" required /></div>
              </label>
            </div>

            <label className="contact-field contact-message-field">
              <span>Project details</span>
              <div>
                <FiMessageCircle />
                <textarea name="message" placeholder="Tell me a little about your project, goals, and timeline…" rows={6} required />
              </div>
            </label>

            <div className="contact-form-footer">
              <p><span /> I usually reply within one business day.</p>
              <button type="submit">
                Send message
                <span><FiSend /></span>
              </button>
            </div>
          </motion.form>
        </div>

        <footer className="portfolio-footer">
          <span>© {new Date().getFullYear()} Faizan Engineer</span>
          <p>Designed and built with care in Pakistan.</p>
          <a href="#home">Back to top <FiArrowUpRight /></a>
        </footer>
      </div>
    </section>
  );
}
