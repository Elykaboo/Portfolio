"use client";

import { Reveal, Kicker } from "./primitives";

const PROJECTS = [
  {
    title: "Arc",
    cat: "Workout Planner · Social Fitness",
    year: "2026",
    url: "https://arc-psi-six.vercel.app/",
    host: "arc-psi-six.vercel.app",
    tags: ["Next.js", "React", "MongoDB", "Tailwind"],
    desc: "A workout planner and social fitness platform where users organize training, save reusable routines, and map a clear weekly gym schedule. Arc pairs structured planning with community-driven accountability — sharing progress and staying motivated together.",
  },
];

export default function Work() {
  const featured = PROJECTS[0];
  const rest = PROJECTS.slice(1);

  return (
    <section id="work" className="section">
      <div className="wrap">
        <div className="about-head">
          <Kicker index="02">Selected work</Kicker>
          <span className="mono" style={{ color: "var(--ink-4)" }}>
            {PROJECTS.length} project{PROJECTS.length > 1 ? "s" : ""}
          </span>
        </div>
        <Reveal>
          <hr
            className="hairline"
            style={{ margin: "26px 0 clamp(48px, 7vh, 92px)" }}
          />
        </Reveal>

        {/* Featured project */}
        <article className="feat">
          {/* Left — text */}
          <div className="feat-body">
            <Reveal>
              <div
                className="mono"
                style={{
                  color: "var(--ink-3)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  whiteSpace: "nowrap",
                }}
              >
                <span className="dot" />
                Featured case — {featured.year}
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h3
                className="display display-lg"
                style={{ margin: "20px 0 0" }}
              >
                {featured.title}
              </h3>
            </Reveal>

            <Reveal delay={0.12}>
              <div
                className="mono"
                style={{ marginTop: 16, color: "var(--ink-2)" }}
              >
                {featured.cat}
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="body-text" style={{ marginTop: 26, maxWidth: 480 }}>
                {featured.desc}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <ul className="feat-tags">
                {featured.tags.map((t) => (
                  <li className="feat-tag mono" key={t}>
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.18}>
              <a
                className="btn btn-fill"
                href={featured.url}
                target="_blank"
                rel="noreferrer"
                style={{ marginTop: 36 }}
              >
                View live project <span className="arrow">↗</span>
              </a>
            </Reveal>
          </div>

          {/* Right — browser frame */}
          <Reveal delay={0.12} className="feat-media-wrapper">
            <a
              className="feat-media"
              href={featured.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${featured.title}`}
            >
              <div className="browser">
                <div className="browser-bar">
                  <span className="dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="browser-url mono">{featured.host}</span>
                  <span
                    className="mono"
                    style={{
                      color: "var(--ink-3)",
                      fontSize: 10,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Live ↗
                  </span>
                </div>
                <div
                  className="browser-body"
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  <iframe
                    src={featured.url}
                    title={`${featured.title} — live preview`}
                    loading="lazy"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "200%",
                      height: "200%",
                      border: "none",
                      transform: "scale(0.5)",
                      transformOrigin: "0 0",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>
            </a>
          </Reveal>
        </article>

        {/* Additional project rows */}
        {rest.length > 0 && (
          <ul className="work-list">
            {rest.map((p) => (
              <li key={p.title} className="work-row">
                <Reveal>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="work-link"
                  >
                    <span className="work-title display display-md">
                      {p.title}
                    </span>
                    <span className="work-kind mono">{p.cat}</span>
                    <span className="work-year mono">{p.year}</span>
                    <span className="work-arrow">↗</span>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
