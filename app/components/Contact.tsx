"use client";

import { Reveal, Kicker, Clock } from "./primitives";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/elykaboo" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kyle-adrian-yambao-liwanag-b96371339/",
  },
  { label: "X", href: "https://x.com/kyleadrn" },
] as const;

export default function Contact() {
  return (
    <footer id="contact" className="section contact">
      <div className="wrap">
        <Reveal>
          <Kicker index="04">Let's work</Kicker>
        </Reveal>

        <Reveal delay={0.06}>
          <a
            href="mailto:kyleyambaoliwanag@gmail.com"
            className="contact-mail display display-lg"
          >
            <span className="line-mask">
              <span style={{ display: "block" }}>Let&rsquo;s build</span>
            </span>
            <span className="line-mask">
              <span style={{ display: "block" }}>
                something <span className="accent-text">good.</span>
              </span>
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.12} className="contact-row">
          <p className="lede" style={{ maxWidth: 440 }}>
            Have an idea or a small project? Tell me about it — I reply to
            everything.
          </p>
          <a
            className="btn btn-fill"
            href="mailto:kyleyambaoliwanag@gmail.com"
          >
            kyleyambaoliwanag@gmail.com <span className="arrow">→</span>
          </a>
        </Reveal>

        <hr
          className="hairline"
          style={{ margin: "clamp(56px, 9vh, 110px) 0 36px" }}
        />

        <div className="contact-foot">
          <div className="clocks">
            <Clock tz="Asia/Manila" label="Manila" />
            <Clock tz="America/Los_Angeles" label="Los Angeles" />
            <Clock tz="Europe/London" label="London" />
          </div>

          <div className="socials mono">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="contact-copy mono">
          <span>© 2026 ELYK — Kyle Adrian Liwanag</span>
          <span>Built with care</span>
        </div>
      </div>
    </footer>
  );
}
