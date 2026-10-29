"use client";

import { FiMoon, FiSun } from "react-icons/fi";

const STORAGE_KEY = "portfolio-theme";

function applyTheme(theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
}

export default function ThemeToggle() {
  const toggle = () => {
    const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // The visual theme still changes when storage is unavailable.
    }
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label="Toggle dark and light theme"
      title="Toggle dark and light theme"
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <FiSun className="theme-icon theme-icon-sun" />
        <FiMoon className="theme-icon theme-icon-moon" />
        <span className="theme-toggle-thumb" />
      </span>
    </button>
  );
}
