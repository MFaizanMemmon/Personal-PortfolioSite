'use client';

import { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  FiAlertCircle,
  FiArrowUpRight,
  FiCheck,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiSend,
  FiUser,
  FiYoutube,
} from 'react-icons/fi';
import { site } from '@/data/site';
import { FaWhatsapp } from 'react-icons/fa';

const initialValues = { name: '', email: '', message: '' };

const contactDetails = [
  { label: 'Email me', value: site.email, href: `mailto:${site.email}`, icon: FiMail },
  { label: 'WhatsApp', value: site.whatsappDisplay, href: site.whatsapp, icon: FiMessageCircle },
  { label: 'Based in', value: site.location, icon: FiMapPin },
];

const socials = [
  { label: 'LinkedIn', href: site.linkedin, icon: FiLinkedin },
  { label: 'GitHub', href: site.github, icon: FiGithub },
  { label: 'YouTube', href: site.youtube, icon: FiYoutube },
  { label: 'WhatsApp', href: site.whatsapp, icon: FaWhatsapp },
];

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address, such as you@company.com.';
  }
  if (values.message.trim().length < 20) {
    errors.message = 'Please add at least 20 characters about the project or problem.';
  }
  return errors;
}

export default function ContactMe() {
  const reduceMotion = useReducedMotion();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');
  const formRef = useRef(null);
  const honeypotRef = useRef(null);

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType === 'touch') return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--contact-x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--contact-y', `${event.clientY - rect.top}px`);
  };

  const updateField = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
    if (status === 'error' || status === 'success') {
      setStatus('idle');
      setFeedback('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus('error');
      setFeedback('Please correct the highlighted fields and try again.');
      const firstError = Object.keys(nextErrors)[0];
      formRef.current?.querySelector(`[name="${firstError}"]`)?.focus();
      return;
    }

    if (honeypotRef.current?.value) {
      setStatus('success');
      setFeedback('Thank you. Your message has been received.');
      setValues(initialValues);
      return;
    }

    setStatus('loading');
    setFeedback('');

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) throw new Error(`Form submission failed with status ${response.status}`);

      setStatus('success');
      setFeedback('Thank you. Your message has been sent.');
      setValues(initialValues);
      form.reset();
    } catch {
      setStatus('error');
      setFeedback(`I could not confirm the message was sent. Please email me directly at ${site.email}.`);
    }
  };

  return (
    <section
      id="contact"
      onPointerMove={handlePointerMove}
      className="contact-section relative overflow-hidden px-6 pt-24 md:px-20 md:pt-28"
    >
      <div className="contact-spotlight" aria-hidden="true" />
      <div className="contact-orb contact-orb-one" aria-hidden="true" />
      <div className="contact-orb contact-orb-two" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="contact-heading"
        >
          <div className="section-kicker"><span /> Start a conversation</div>
          <div className="contact-title-row">
            <h2>Have an idea?<br /><em>Let&apos;s make it real.</em></h2>
            <div className="contact-availability">
              <span className="contact-status-dot" />
              <div>
                <small>Current availability</small>
                <strong>Remote roles &amp; selected freelance projects</strong>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="contact-layout">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="contact-info-panel"
          >
            <div className="contact-intro">
              <span>Let&apos;s work together</span>
              <h3>Tell me about the problem you want to solve.</h3>
              <p>
                Whether it&apos;s a business application, a customer-facing platform, or an idea
                that needs shaping, I&apos;d be happy to hear about it.
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
                  <a
                    key={detail.label}
                    href={detail.href}
                    target={detail.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="contact-detail"
                  >
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
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <Icon />
                      <span>{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            action="https://formspree.io/f/mbdlnnyk"
            method="POST"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <input type="hidden" name="_subject" value="New portfolio enquiry" />
            <div className="hp-field" aria-hidden="true">
              <label htmlFor="company-website">Leave this field empty</label>
              <input ref={honeypotRef} id="company-website" name="_gotcha" type="text" tabIndex="-1" autoComplete="off" />
            </div>

            <div className="contact-form-top">
              <span className="contact-form-icon"><FiMessageCircle /></span>
              <div>
                <small>Send a message</small>
                <h3>What can I help you build?</h3>
              </div>
            </div>

            <div className="contact-fields-row">
              <label className="contact-field">
                <span>Your name <b aria-hidden="true">*</b></span>
                <div className={errors.name ? 'has-error' : ''}>
                  <FiUser aria-hidden="true" />
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    autoComplete="name"
                    value={values.name}
                    onChange={updateField}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  />
                </div>
                {errors.name && (
                  <em className="contact-field-error" id="contact-name-error">
                    <FiAlertCircle aria-hidden="true" /> {errors.name}
                  </em>
                )}
              </label>
              <label className="contact-field">
                <span>Email address <b aria-hidden="true">*</b></span>
                <div className={errors.email ? 'has-error' : ''}>
                  <FiMail aria-hidden="true" />
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    value={values.email}
                    onChange={updateField}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  />
                </div>
                {errors.email && (
                  <em className="contact-field-error" id="contact-email-error">
                    <FiAlertCircle aria-hidden="true" /> {errors.email}
                  </em>
                )}
              </label>
            </div>

            <label className="contact-field contact-message-field">
              <span>Project details <b aria-hidden="true">*</b></span>
              <div className={errors.message ? 'has-error' : ''}>
                <FiMessageCircle aria-hidden="true" />
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me a little about your project, goals, and timeline…"
                  rows={6}
                  value={values.message}
                  onChange={updateField}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : 'contact-message-help'}
                />
              </div>
              {errors.message ? (
                <em className="contact-field-error" id="contact-message-error">
                  <FiAlertCircle aria-hidden="true" /> {errors.message}
                </em>
              ) : (
                <em className="contact-field-help" id="contact-message-help">
                  A few sentences about the workflow is enough to start.
                </em>
              )}
            </label>

            <div className="contact-form-footer">
              <p><span /> I usually reply within one business day.</p>
              <button type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? (
                  <>
                    Sending…
                    <span className="contact-spinner" aria-hidden="true" />
                  </>
                ) : (
                  <>
                    Send message
                    <span><FiSend /></span>
                  </>
                )}
              </button>
            </div>

            <div
              className={`contact-feedback ${status === 'success' ? 'is-success' : ''} ${status === 'error' ? 'is-error' : ''}`}
              role="status"
              aria-live="polite"
            >
              {status === 'success' && <FiCheck aria-hidden="true" />}
              {status === 'error' && <FiAlertCircle aria-hidden="true" />}
              {feedback && <p>{feedback}</p>}
            </div>
          </motion.form>
        </div>

        <footer className="portfolio-footer">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <p>Designed and built with care in Pakistan.</p>
        </footer>
      </div>
    </section>
  );
}
