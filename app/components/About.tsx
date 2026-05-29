"use client";

import { Reveal, DisplayLines, Kicker } from "./primitives";

const facts = [
  ["Based in", "Philippines"],
  ["Focus", "Front-end · Motion"],
  ["Stack", "Next.js · React"],
  ["Since", "2026"],
] as const;

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <div className="about-head">
          <Kicker index="01">A quick intro</Kicker>
          <span className="mono" style={{ color: "var(--ink-4)" }}>
            About
          </span>
        </div>
        <Reveal>
          <hr
            className="hairline"
            style={{ margin: "26px 0 clamp(48px, 7vh, 92px)" }}
          />
        </Reveal>

        <div className="about-grid">
          {/* Left — copy */}
          <div className="about-copy">
            <DisplayLines
              className="display-md"
              lines={[<>Design-minded,</>, <>quietly obsessive.</>]}
            />

            <Reveal delay={0.12} style={{ marginTop: 32, maxWidth: 540 }}>
              <p className="body-text">
                I enjoy turning ideas into polished products. Right now I'm
                growing my craft in Next.js and building things that look good,
                feel fast, and scale cleanly.
              </p>
            </Reveal>

            <Reveal delay={0.18} style={{ marginTop: 20, maxWidth: 540 }}>
              <p className="body-text dim">
                I care about the small stuff — readable code, considered motion,
                and the basics done well. Calm, intentional, shipped.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <dl className="facts">
                {facts.map(([k, v]) => (
                  <div className="fact" key={k}>
                    <dt className="mono">{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Right — portrait */}
          <Reveal delay={0.12} className="about-figure">
            <div className="about-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/MyPics/mypic1.jpg" alt="Kyle Adrian Liwanag" />
            </div>
            <figcaption
              className="mono"
              style={{ marginTop: 14, color: "var(--ink-3)" }}
            >
              <span className="dot" style={{ marginRight: 8 }} />
              Kyle, 21
            </figcaption>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
