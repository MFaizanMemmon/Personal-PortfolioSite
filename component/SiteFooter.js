import Link from "next/link";
import { FiArrowUp, FiGithub, FiLinkedin, FiMail, FiYoutube } from "react-icons/fi";
import { site } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-lead">
          <p className="footer-kicker">Faizan Engineer</p>
          <p className="footer-statement">
            Full stack .NET engineer building business software that has to work on a real
            operating day.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <p className="footer-label">Portfolio</p>
            <Link href="/#about">About</Link>
            <Link href="/#work">Selected work</Link>
            <Link href="/#engineering">Engineering</Link>
            <Link href="/#services">Services</Link>
          </div>
          <div>
            <p className="footer-label">Direct</p>
            <a href={`mailto:${site.email}`}>
              <FiMail aria-hidden="true" /> Email
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              <FiLinkedin aria-hidden="true" /> LinkedIn
            </a>
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              <FiGithub aria-hidden="true" /> GitHub
            </a>
            <a href={site.youtube} target="_blank" rel="noopener noreferrer">
              <FiYoutube aria-hidden="true" /> YouTube
            </a>
          </div>
        </div>
      </div>

      <div className="footer-base">
        <p>
          © {new Date().getFullYear()} {site.name}. Built with Next.js.
        </p>
        <p>{site.location}</p>
        <a href="#top" className="footer-top">
          Back to top <FiArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
