import {
  FiBookOpen,
  FiCheck,
  FiCode,
  FiDatabase,
  FiMonitor,
  FiServer,
  FiTool,
} from "react-icons/fi";
import PointerGlow from "./PointerGlow";
import SkillLegend from "./SkillLegend";
import { learningNow, skillGroups } from "@/data/site";

const groupIcons = {
  Backend: FiServer,
  Frontend: FiCode,
  Databases: FiDatabase,
  Desktop: FiMonitor,
  Reporting: FiTool,
  "Tools & Delivery": FiTool,
};

const levelLabels = {
  production: "Professional experience",
  project: "Project experience",
  learning: "Currently learning",
};

export default function Skills() {
  return (
    <section id="stack" className="section section-stack">
      <div className="section-shell">
        <div className="section-heading stack-heading" data-reveal="up">
          <p className="eyebrow">Technical stack</p>
          <h2>
            A practical toolkit for <em>business software.</em>
          </h2>
          <div className="stack-heading-row">
            <p className="section-intro">
              I have separated what I use professionally from what I have built in projects
              and what I am actively learning. The goal is an honest picture, not the longest
              possible list.
            </p>
            <div className="stack-legend-wrap">
              <p className="stack-legend-label">Filter by experience</p>
              <SkillLegend />
            </div>
          </div>
        </div>

        <div className="skill-grid" data-reveal-group>
          {skillGroups.map((group, index) => {
            const Icon = groupIcons[group.title] ?? FiCode;
            return (
              <article
                key={group.title}
                className="skill-card"
                data-reveal="scale"
                style={{ "--reveal-index": Math.min(index, 5) }}
              >
                <div className="skill-card-head">
                  <span className="skill-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                </div>
                <ul className="skill-list">
                  {group.items.map((item) => (
                    <li key={item.name} data-level={item.level}>
                      <span className={`level-dot level-${item.level}`} aria-hidden="true" />
                      <span>{item.name}</span>
                      <span className="sr-only">— {levelLabels[item.level]}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="learning-panel" data-reveal="up">
          <div className="learning-copy">
            <span className="learning-icon">
              <FiBookOpen aria-hidden="true" />
            </span>
            <div>
              <p className="eyebrow">Currently learning</p>
              <h3>Deliberate expansion, not logo collection.</h3>
            </div>
          </div>
          <ul>
            {learningNow.map((item) => (
              <li key={item}>
                <FiCheck aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <PointerGlow selector=".skill-card" />
    </section>
  );
}
