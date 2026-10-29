import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import TimelineProgress from "./TimelineProgress";
import { experience } from "@/data/site";

export default function Experience() {
  return (
    <section id="experience" className="section section-experience dark-section">
      <div className="section-shell">
        <div className="section-heading experience-heading" data-reveal="up">
          <p className="eyebrow">Professional experience</p>
          <h2>
            A track record built around <em>business systems.</em>
          </h2>
          <p className="section-intro">
            Roles reflect my resume, project record and current engagement. Where exact month
            ranges were not recorded, the duration is shown instead of inventing dates.
          </p>
        </div>

        <div className="timeline-shell">
          <TimelineProgress />
          <ol className="timeline" data-reveal-group>
            {experience.map((role, index) => (
              <li
                key={`${role.company}-${role.role}`}
                className="timeline-item"
                data-reveal="up"
                tabIndex={0}
              >
                <div className="timeline-marker" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-period">{role.period}</span>
                  <span className="timeline-location">{role.location}</span>
                </div>
                <div className="timeline-content">
                  <p className="timeline-company">{role.company}</p>
                  <h3>{role.role}</h3>
                  <p>{role.summary}</p>
                  <ul>
                    {role.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="experience-cta" data-reveal="up">
          <div>
            <p className="eyebrow">Next step</p>
            <h3>Looking for someone who can own the transaction, not just the ticket?</h3>
          </div>
          <Link className="button button-primary" href="/#contact">
            Start a conversation
            <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
