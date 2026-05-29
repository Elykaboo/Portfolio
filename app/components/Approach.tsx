"use client";

import { Reveal, DisplayLines, Kicker, Marquee } from "./primitives";

const ITEMS = [
  [
    "Interface engineering",
    "Clean, accessible, responsive front-ends built to last — semantic markup, sensible state, no clever-for-its-own-sake.",
  ],
  [
    "Motion & interaction",
    "Considered transitions and micro-interactions that guide attention without showing off. Calm by default.",
  ],
  [
    "Design systems",
    "Reusable components and tokens so the work stays consistent and quick to extend.",
  ],
  [
    "Performance basics",
    "Fast loads, lean bundles, measured. The polish you feel before you can name it.",
  ],
] as const;

const STACK = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Framer Motion",
  "Git",
  "MongoDB",
  "Python",
];

export default function Approach() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <div className="about-head">
          <Kicker index="03">How I work</Kicker>
          <span className="mono" style={{ color: "var(--ink-4)" }}>
            Approach
          </span>
        </div>
        <Reveal>
          <hr
            className="hairline"
            style={{ margin: "26px 0 clamp(40px, 6vh, 80px)" }}
          />
        </Reveal>

        <div className="approach-grid">
          <DisplayLines
            className="display-md"
            lines={[<>Quality is</>, <>the whole point.</>]}
          />

          <div className="approach-items">
            {ITEMS.map(([title, desc], i) => (
              <Reveal key={title} delay={i * 0.06} className="approach-item">
                <h3 className="approach-title">{title}</h3>
                <p
                  className="body-text"
                  style={{ color: "var(--ink-3)", maxWidth: 460 }}
                >
                  {desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <Reveal style={{ marginTop: "clamp(56px, 9vh, 120px)" }}>
        <div style={{ fontSize: "clamp(40px, 7vw, 104px)", color: "var(--ink)" }}>
          <Marquee items={STACK} sep="·" duration={42} />
        </div>
      </Reveal>
    </section>
  );
}
