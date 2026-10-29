import { FiCheck } from "react-icons/fi";
import ProcessRail from "./ProcessRail";
import {
  engineeringContext,
  engineeringPractices,
  engineeringProcess,
} from "@/data/site";

export default function Engineering() {
  return (
    <section id="engineering" className="section section-engineering dark-section">
      <div className="section-shell">
        <div className="section-heading engineering-heading" data-reveal="up">
          <p className="eyebrow">How I engineer software</p>
          <h2>
            The visible screen is the last part <em>I think about.</em>
          </h2>
          <p className="section-intro">
            Business software is mostly decisions about data, state and sequence. These are the
            working principles I bring to an ERP, POS or back-office build.
          </p>
        </div>

        <ProcessRail steps={engineeringProcess} />

        <div className="practice-grid" data-reveal-group>
          {engineeringPractices.map((practice, index) => (
            <article
              key={practice.number}
              className="practice-card"
              data-reveal="up"
              style={{ "--reveal-index": Math.min(index, 5) }}
            >
              <div className="practice-top">
                <span>{practice.number}</span>
                <p>{practice.status}</p>
              </div>
              <h3>{practice.title}</h3>
              <p>{practice.description}</p>
            </article>
          ))}
        </div>

        <div className="engineering-bottom">
          <div className="engineering-note" data-reveal="left">
            <p className="eyebrow">Architecture context</p>
            <h3>Layered where it helps. Pragmatic where it does not.</h3>
            <p>
              In production I have worked with ASP.NET MVC/Core applications, SQL Server,
              stored procedures, ADO.NET and server-rendered interfaces. I use layered
              separation to keep business rules, data access and presentation from turning into
              one another, without adding abstraction that has no operational benefit.
            </p>
            <p>
              I have studied cleaner architecture patterns and use them selectively. I will not
              claim a pattern is in production simply because it is familiar.
            </p>
          </div>

          <div className="engineering-learning" data-reveal="right">
            <p className="eyebrow">Production context</p>
            <ul>
              {engineeringContext.map((item) => (
                <li key={item}>
                  <FiCheck aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="engineering-diagram" aria-label="Data flow from transaction to report">
              <div>
                <span>01</span>
                <strong>Transaction</strong>
              </div>
              <i aria-hidden="true" />
              <div>
                <span>02</span>
                <strong>Ledger / stock</strong>
              </div>
              <i aria-hidden="true" />
              <div>
                <span>03</span>
                <strong>Report</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
