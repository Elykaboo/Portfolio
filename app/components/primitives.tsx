"use client";

import { motion } from "framer-motion";
import { useEffect, useState, type ReactNode, type CSSProperties } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

/* ---- Reveal: fade + slide up on scroll ---- */
export function Reveal({
  children,
  delay = 0,
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ---- DisplayLines: masked line-by-line heading reveal ---- */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const lineVariants = {
  hidden: { y: "110%" },
  visible: { y: 0, transition: { duration: 0.9, ease } },
};

const tagMap = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
};

export function DisplayLines({
  lines,
  className = "display-lg",
  tag = "h2",
}: {
  lines: ReactNode[];
  className?: string;
  tag?: "h1" | "h2" | "h3";
}) {
  const MotionTag = tagMap[tag];
  return (
    <MotionTag
      className={`display ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8% 0px" }}
      variants={containerVariants}
    >
      {lines.map((ln, i) => (
        <span className="line-mask" key={i}>
          <motion.span style={{ display: "block" }} variants={lineVariants}>
            {ln}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

/* ---- Kicker: mono eyebrow label with accent dot ---- */
export function Kicker({
  children,
  index,
  dot = true,
  style,
  className,
}: {
  children: ReactNode;
  index?: string;
  dot?: boolean;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <div
      className={`mono ${className ?? ""}`}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {dot && <span className="dot" />}
      {index && <span style={{ color: "var(--ink-3)" }}>{index} ·</span>}
      <span>{children}</span>
    </div>
  );
}

/* ---- Marquee: continuous looping strip ---- */
export function Marquee({
  items,
  sep = "·",
  duration = 42,
}: {
  items: string[];
  sep?: string;
  duration?: number;
}) {
  const run = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div
        className="marquee-track"
        style={{ animationDuration: `${duration}s` }}
      >
        {run.map((it, i) => (
          <span className="marquee-item" key={i}>
            {it}
            <span className="marquee-sep">{sep}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---- Clock: live time for a given IANA timezone ---- */
export function Clock({ tz, label }: { tz: string; label: string }) {
  const [now, setNow] = useState("");

  useEffect(() => {
    const tick = () => {
      try {
        setNow(
          new Intl.DateTimeFormat("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
            timeZone: tz,
          }).format(new Date()),
        );
      } catch {
        setNow("--:--");
      }
    };
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, [tz]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span className="mono">{label}</span>
      <span
        style={{
          fontSize: 22,
          fontWeight: 500,
          letterSpacing: "-0.02em",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {now}
      </span>
    </div>
  );
}
