"use client";

import { useState } from "react";

const options = [
  { value: "all", label: "All technologies" },
  { value: "production", label: "Professional experience" },
  { value: "project", label: "Project experience" },
  { value: "learning", label: "Currently learning" },
];

export default function SkillLegend() {
  const [active, setActive] = useState("all");

  const select = (value) => {
    const next = value === active ? "all" : value;
    setActive(next);
    const section = document.getElementById("stack");
    if (!section) return;
    if (next === "all") {
      section.removeAttribute("data-skill-filter");
    } else {
      section.setAttribute("data-skill-filter", next);
    }
  };

  const activeLabel = options.find((option) => option.value === active)?.label ?? "";

  return (
    <>
      <ul className="skill-legend" aria-label="Filter technologies by experience level">
        {options.map((option) => (
          <li key={option.value}>
            <button
              type="button"
              className={`skill-filter ${active === option.value ? "is-active" : ""}`}
              aria-pressed={active === option.value}
              onClick={() => select(option.value)}
              data-filter={option.value}
            >
              <span
                className={`level-dot ${option.value === "all" ? "level-all" : `level-${option.value}`}`}
                aria-hidden="true"
              />
              {option.label}
            </button>
          </li>
        ))}
      </ul>
      <p className="sr-only" aria-live="polite">
        {active === "all"
          ? "Showing all technologies"
          : `Highlighting technologies with ${activeLabel.toLowerCase()}`}
      </p>
    </>
  );
}
