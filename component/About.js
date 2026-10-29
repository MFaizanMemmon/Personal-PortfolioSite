import Image from "next/image";
import { FiArrowRight, FiBookOpen, FiMapPin } from "react-icons/fi";
import { education, site } from "@/data/site";

const principles = [
  {
    number: "01",
    title: "Business rules before screens",
    copy: "I want to understand the transaction, the approval and the report before deciding how the interface should look.",
  },
  {
    number: "02",
    title: "Data that can be reconciled",
    copy: "Ledger entries, stock movements and document numbers should make it possible to trace how a number was produced.",
  },
  {
    number: "03",
    title: "Software people can operate",
    copy: "Fast entry, clear defaults and printable documents matter when a team is working through a busy day.",
  },
];

export default function About() {
  return (
    <section id="about" className="section section-about">
      <div className="section-shell">
        <div className="section-heading about-heading" data-reveal="up">
          <p className="eyebrow">About</p>
          <h2>
            I build software for the part of the business that{" "}
            <em>cannot afford to be wrong.</em>
          </h2>
          <p className="section-intro">
            My work sits where software meets operations: sales counters, stock rooms,
            ledgers, purchasing desks and the reports a manager checks at the end of the
            day.
          </p>
        </div>

        <div className="about-layout" data-reveal-group>
          <div className="about-copy" data-reveal="up">
            <p className="about-lead">
              I am Muhammad Faizan, a full stack .NET engineer from Sindh, Pakistan. Over the
              last three-plus years I have worked on business applications across Tech
              Resources, BMC Solution, Appsxone Solution, Intrapreneur and independent client
              projects.
            </p>
            <p>
              My strongest work is in ERP, POS and accounting systems. That means I have spent
              time with the details that make business software difficult: receivables,
              payables, inventory movement, branch context, posting rules and the reports that
              have to agree with each other.
            </p>
            <p>
              I work primarily with C#, ASP.NET Core, SQL Server and JavaScript, with Angular
              and Blazor on the frontend. I care about clean structure, but I care more about a
              system that holds up once real users begin entering real transactions.
            </p>

            <div className="about-signature">
              <div>
                <strong>Muhammad Faizan</strong>
                <span>Full Stack .NET Engineer</span>
              </div>
              <p>
                <FiMapPin aria-hidden="true" /> {site.location}
              </p>
            </div>
          </div>

          <aside className="about-aside" data-reveal="up">
            <div className="about-portrait">
              <Image
                src="/assets/FaizanWhiteBg.jpg"
                alt="Portrait of Muhammad Faizan"
                fill
                sizes="(max-width: 900px) 80vw, 360px"
                className="object-cover"
              />
              <span className="about-portrait-tag">Engineer · Builder</span>
            </div>

            <div className="about-education">
              <FiBookOpen aria-hidden="true" />
              <div>
                <span>Education</span>
                <strong>{education.degree}</strong>
                <p>{education.institution}</p>
              </div>
            </div>
          </aside>
        </div>

        <div className="principle-grid" data-reveal-group>
          {principles.map((principle, index) => (
            <article
              key={principle.number}
              className="principle-card"
              data-reveal="up"
              style={{ "--reveal-index": index }}
            >
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </article>
          ))}
        </div>

        <div className="about-bridge" data-reveal="up">
          <p>
            The short version: I am a business-minded developer who enjoys the technical work
            behind an accurate ledger, a clean stock position and a report someone can trust.
          </p>
          <a href="#experience" className="text-link">
            See the experience timeline
            <FiArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
