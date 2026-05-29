"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  ["about", "About"],
  ["work", "Projects"],
  ["skills", "Approach"],
  ["contact", "Contact"],
] as const;

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const y =
    el.getBoundingClientRect().top +
    window.scrollY -
    (id === "top" ? 0 : 4);
  window.scrollTo({ top: y, behavior: "smooth" });
}

export default function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${solid ? " nav-solid" : ""}`}>
      <div className="wrap nav-inner">
        <a
          href="#top"
          className="nav-mark"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("top");
          }}
        >
          ELYK
        </a>

        <nav className="nav-links">
          {NAV_ITEMS.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="mono nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollTo(id);
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-status mono">
          <span
            className="dot"
            style={{ animation: "pulse 2.4s ease-in-out infinite" }}
          />
          Available
        </div>
      </div>
    </header>
  );
}
