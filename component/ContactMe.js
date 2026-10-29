"use client";

import { useRef, useState } from "react";
import {
  FiAlertCircle,
  FiArrowUpRight,
  FiCheck,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMessageSquare,
  FiSend,
  FiUser,
  FiYoutube,
} from "react-icons/fi";
import { site } from "@/data/site";

const initialValues = { name: "", email: "", message: "" };

const socials = [
  { label: "LinkedIn", href: site.linkedin, icon: FiLinkedin },
  { label: "GitHub", href: site.github, icon: FiGithub },
  { label: "YouTube", href: site.youtube, icon: FiYoutube },
];

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address, such as you@company.com.";
  }
  if (values.message.trim().length < 20) {
    errors.message = "Please add at least 20 characters about the project or problem.";
  }
  return errors;
}

export default function ContactMe() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const honeypotRef = useRef(null);
  const formRef = useRef(null);

  const updateField = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
    if (status === "error" || status === "success") {
      setStatus("idle");
      setFeedback("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setFeedback("Please correct the highlighted fields and try again.");
      const firstError = Object.keys(nextErrors)[0];
      formRef.current?.querySelector(`[name="${firstError}"]`)?.focus();
      return;
    }

    if (honeypotRef.current?.value) {
      setStatus("success");
      setFeedback("Thank you. Your message has been received.");
      setValues(initialValues);
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }

      setStatus("success");
      setFeedback("Thank you. Your message has been sent.");
      setValues(initialValues);
      form.reset();
    } catch {
      setStatus("error");
      setFeedback(
        "I could not confirm the message was sent. Please email me directly at engineerfaizan56@gmail.com.",
      );
    }
  };

  return (
    <section id="contact" className="section section-contact">
      <div className="section-shell">
        <div className="contact-heading" data-reveal="up">
          <p className="eyebrow">Start a conversation</p>
          <div className="contact-heading-row">
            <h2>
              Have a business problem <em>worth solving?</em>
            </h2>
            <div className="contact-availability">
              <span className="pulse-dot" aria-hidden="true" />
              <div>
                <small>Current availability</small>
                <strong>Remote roles &amp; select freelance projects</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-layout">
          <aside className="contact-info" data-reveal="left">
            <p className="contact-info-lead">
              Tell me what the system needs to do, who uses it and what is failing today. A
              short description of the workflow is more useful than a long list of
              technologies.
            </p>

            <div className="contact-direct">
              <a href={`mailto:${site.email}`}>
                <span>
                  <FiMail aria-hidden="true" />
                </span>
                <div>
                  <small>Email</small>
                  <strong>{site.email}</strong>
                </div>
                <FiArrowUpRight aria-hidden="true" />
              </a>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                <span>
                  <FiMessageSquare aria-hidden="true" />
                </span>
                <div>
                  <small>WhatsApp</small>
                  <strong>{site.phone}</strong>
                </div>
                <FiArrowUpRight aria-hidden="true" />
              </a>
              <div>
                <span>
                  <FiMapPin aria-hidden="true" />
                </span>
                <div>
                  <small>Based in</small>
                  <strong>{site.location}</strong>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <p className="eyebrow">Elsewhere</p>
              <div>
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon aria-hidden="true" />
                      {social.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </aside>

          <form
            ref={formRef}
            className="contact-form"
            action="https://formspree.io/f/mbdlnnyk"
            method="POST"
            onSubmit={handleSubmit}
            noValidate
            data-reveal="right"
          >
            <input type="hidden" name="_subject" value="New portfolio enquiry" />
            <div className="hp-field" aria-hidden="true">
              <label htmlFor="company-website">Leave this field empty</label>
              <input
                ref={honeypotRef}
                id="company-website"
                name="_gotcha"
                type="text"
                tabIndex="-1"
                autoComplete="off"
              />
            </div>

            <div className="contact-form-head">
              <span>
                <FiMessageSquare aria-hidden="true" />
              </span>
              <div>
                <p className="eyebrow">Project enquiry</p>
                <h3>What can I help you build?</h3>
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="contact-name">
                  Your name <span aria-hidden="true">*</span>
                </label>
                <div className={`input-wrap ${errors.name ? "has-error" : ""}`}>
                  <FiUser aria-hidden="true" />
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    value={values.name}
                    onChange={updateField}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    required
                  />
                </div>
                {errors.name && (
                  <p className="field-error" id="name-error">
                    <FiAlertCircle aria-hidden="true" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="contact-email">
                  Email address <span aria-hidden="true">*</span>
                </label>
                <div className={`input-wrap ${errors.email ? "has-error" : ""}`}>
                  <FiMail aria-hidden="true" />
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={values.email}
                    onChange={updateField}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    required
                  />
                </div>
                {errors.email && (
                  <p className="field-error" id="email-error">
                    <FiAlertCircle aria-hidden="true" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="contact-message">
                Project or problem <span aria-hidden="true">*</span>
              </label>
              <div className={`input-wrap input-wrap-textarea ${errors.message ? "has-error" : ""}`}>
                <FiMessageSquare aria-hidden="true" />
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  placeholder="What does the business do, what needs to change, and who will use the software?"
                  value={values.message}
                  onChange={updateField}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : "message-help"}
                  required
                />
              </div>
              {errors.message ? (
                <p className="field-error" id="message-error">
                  <FiAlertCircle aria-hidden="true" />
                  {errors.message}
                </p>
              ) : (
                <p className="field-help" id="message-help">
                  A few sentences about the workflow is enough to start.
                </p>
              )}
            </div>

            <div className="contact-form-foot">
              <p>
                Your message is sent through Formspree and goes directly to my inbox. I do not
                publish or share enquiry details.
              </p>
              <button
                type="submit"
                className="button button-primary"
                disabled={status === "loading"}
                aria-disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <span className="button-spinner" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send message
                    <FiSend aria-hidden="true" />
                  </>
                )}
              </button>
            </div>

            <div
              className={`form-feedback ${status === "success" ? "is-success" : ""} ${status === "error" ? "is-error" : ""}`}
              role="status"
              aria-live="polite"
            >
              {status === "success" && <FiCheck aria-hidden="true" />}
              {status === "error" && <FiAlertCircle aria-hidden="true" />}
              {feedback && <p>{feedback}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
