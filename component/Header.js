import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowDown,
  FiArrowDownRight,
  FiArrowRight,
  FiArrowUpRight,
  FiDownload,
  FiMapPin,
} from "react-icons/fi";
import HeroFx from "./HeroFx";
import { site } from "@/data/site";

const heroFacts = [
  { value: "3+", label: "Years building business software" },
  { value: "05", label: "Detailed project case studies" },
  { value: "ERP", label: "Flagship enterprise build" },
];

const headlineWords = ["Full", "Stack", ".NET", "Engineer"];
const subtitleWords = ["Building", "ERP,", "POS", "&", "enterprise", "software."];

export default function Header() {
  return (
    <section id="home" className="hero">
      <HeroFx />
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="hero-orb hero-orb-a" aria-hidden="true" />
      <div className="hero-orb hero-orb-b" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-availability hero-enter" style={{ "--enter": 0 }}>
            <span className="pulse-dot" aria-hidden="true" />
            <span>{site.availability}</span>
          </div>

          <p className="hero-kicker hero-enter" style={{ "--enter": 1 }}>
            Muhammad Faizan <span aria-hidden="true">/</span> Sindh, Pakistan
          </p>

          <h1 className="hero-title">
            <span className="hero-line">
              {headlineWords.map((word, index) => (
                <Fragment key={word}>
                  <span
                    className={`hero-word ${word === ".NET" ? "hero-word-accent" : ""}`}
                    style={{ "--i": index }}
                  >
                    {word === ".NET" ? <em>.NET</em> : word}
                  </span>{" "}
                </Fragment>
              ))}
            </span>
            <span className="hero-title-second">
              {subtitleWords.map((word, index) => (
                <Fragment key={`${word}-${index}`}>
                  <span
                    className="hero-word hero-word-sub"
                    style={{ "--i": index }}
                  >
                    {word}
                  </span>{" "}
                </Fragment>
              ))}
            </span>
          </h1>

          <p className="hero-summary hero-enter" style={{ "--enter": 6 }}>
            {site.summary}
          </p>

          <div className="hero-actions hero-enter" style={{ "--enter": 7 }}>
            <a className="button button-primary" href="#work">
              Explore my projects
              <FiArrowRight aria-hidden="true" />
            </a>
            <a className="button button-secondary" href={site.resume} download>
              <FiDownload aria-hidden="true" />
              Download resume
            </a>
            <a className="text-link" href="#contact">
              Let&apos;s work together
              <FiArrowDownRight aria-hidden="true" />
            </a>
          </div>

          <dl className="hero-facts">
            {heroFacts.map((fact, index) => (
              <div key={fact.label} className="hero-enter" style={{ "--enter": 8 + index }}>
                <dt>{fact.value}</dt>
                <dd>{fact.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-visual">
          <div className="portrait-card hero-portrait">
            <div className="portrait-image-wrap">
              <Image
                src="/assets/FaizanDpNew.jpg"
                alt="Faizan Engineer, full stack .NET developer"
                fill
                priority
                sizes="(max-width: 900px) 82vw, 500px"
                className="portrait-image"
              />
              <span className="portrait-sheen" aria-hidden="true" />
            </div>
            <div className="portrait-caption">
              <div>
                <strong>Faizan</strong>
                <span>Full Stack .NET Engineer</span>
              </div>
              <p>
                <FiMapPin aria-hidden="true" /> Sindh, PK
              </p>
            </div>
          </div>

          <div className="hero-note hero-note-top" aria-hidden="true">
            <span>01</span>
            <p>Enterprise systems</p>
          </div>
          <div className="hero-note hero-note-bottom" aria-hidden="true">
            <span>Focus</span>
            <p>ERP · POS · Accounting</p>
          </div>

          <div className="hero-code-wrap">
            <Link
              className="hero-code-card"
              href="/projects/enterprise-erp"
              aria-label="Explore the Enterprise ERP case study"
            >
              <span className="hero-code-label">
                <span className="hero-code-dot" aria-hidden="true" />
                Currently building
              </span>
              <p>Branch-aware ERP workflows</p>
              <div className="hero-code-tags">
                <span>ASP.NET Core</span>
                <span>SQL Server</span>
                <span>POS</span>
              </div>
              <span className="hero-code-cta">
                View case study
                <FiArrowUpRight aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <a className="hero-scroll" href="#about" aria-label="Scroll to the about section">
        <span className="hero-scroll-label">Scroll to explore</span>
        <span className="hero-scroll-line" aria-hidden="true">
          <span />
        </span>
        <FiArrowDown aria-hidden="true" />
      </a>
    </section>
  );
}
