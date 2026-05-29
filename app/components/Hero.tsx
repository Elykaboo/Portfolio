"use client";

import { Reveal, DisplayLines, Kicker } from "./primitives";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const y =
    el.getBoundingClientRect().top + window.scrollY - (id === "top" ? 0 : 4);
  window.scrollTo({ top: y, behavior: "smooth" });
}

export default function Hero() {
  return (
    <section id="top" className="section hero">
      <div className="wrap">
        <Reveal style={{ marginBottom: "clamp(28px, 5vh, 64px)" }}>
          <Kicker>Kyle Adrian Liwanag — Developer</Kicker>
        </Reveal>

        <DisplayLines
          tag="h1"
          className="display-xl"
          lines={[
            <>
              I build <span className="accent-text">clean</span>
            </>,
            <>interfaces with</>,
            <>smooth motion.</>,
          ]}
        />

        <Reveal delay={0.18} className="hero-foot">
          <p className="lede" style={{ maxWidth: 520 }}>
            A developer focused on design, performance, and code that stays
            maintainable — turning ideas into polished, fast products.
          </p>
          <div className="hero-actions">
            <a
              className="btn btn-fill"
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("work");
              }}
            >
              Selected work <span className="arrow">→</span>
            </a>
            <a
              className="btn"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact");
              }}
            >
              Work with me
            </a>
          </div>
        </Reveal>
      </div>

      <div className="scroll-cue mono">
        Scroll{" "}
        <span style={{ display: "inline-block", animation: "bob 1.8s ease-in-out infinite" }}>
          ↓
        </span>
      </div>
    </section>
  );
}
