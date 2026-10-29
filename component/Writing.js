import { FiArrowUpRight, FiEdit3 } from "react-icons/fi";
import { site, writingTopics } from "@/data/site";

export default function Writing() {
  return (
    <section id="writing" className="section section-writing">
      <div className="section-shell">
        <div className="writing-layout">
          <div className="writing-intro" data-reveal="left">
            <p className="eyebrow">Technical writing</p>
            <h2>
              Notes from building <em>business software.</em>
            </h2>
            <p>
              I am preparing practical notes on ERP workflows, SQL Server and maintainable
              desktop applications. They will be published here when the writing is ready — not
              presented as finished articles before then.
            </p>
            <a
              className="text-link"
              href={`mailto:${site.email}?subject=Topic%20suggestion%20for%20your%20technical%20notes`}
            >
              Suggest a topic
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <div className="writing-list" data-reveal-group>
            {writingTopics.map((topic, index) => (
              <article
                key={topic.number}
                className="writing-card"
                data-reveal="up"
                style={{ "--reveal-index": index }}
              >
                <div className="writing-card-meta">
                  <span>{topic.number}</span>
                  <p>
                    <FiEdit3 aria-hidden="true" />
                    {topic.status}
                  </p>
                </div>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <span className="writing-draft">Draft outline</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
