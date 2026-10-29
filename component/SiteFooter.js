import Link from "next/link";
import { FiArrowUp, FiGithub, FiLinkedin, FiMail, FiYoutube } from "react-icons/fi";
import { site } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="case-footer">
      <div className="case-footer-inner">
        <div className="case-footer-lead">
          <Link href="/" className="portfolio-wordmark">
            Faizan<span>.</span>
          </Link>
          <p>Full stack .NET developer building business software for real operating days.</p>
        </div>

        <div className="case-footer-links">
          <div>
            <span>Portfolio</span>
            <Link href="/#about">About</Link>
            <Link href="/#projects">Selected work</Link>
            <Link href="/#engineering">Engineering</Link>
            <Link href="/#services">Services</Link>
          </div>
          <div>
            <span>Direct</span>
            <a href={`mailto:${site.email}`}><FiMail aria-hidden="true" /> Email</a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer"><FiLinkedin aria-hidden="true" /> LinkedIn</a>
            <a href={site.github} target="_blank" rel="noopener noreferrer"><FiGithub aria-hidden="true" /> GitHub</a>
            <a href={site.youtube} target="_blank" rel="noopener noreferrer"><FiYoutube aria-hidden="true" /> YouTube</a>
          </div>
        </div>
      </div>

      <div className="case-footer-base">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p>{site.location}</p>
        <a href="#top">Back to top <FiArrowUp aria-hidden="true" /></a>
      </div>
    </footer>
  );
}
