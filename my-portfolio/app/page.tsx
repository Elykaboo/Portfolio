"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiBootstrap,
  SiTailwindcss,
  SiPython,
  SiMongodb,
  SiGit,
  SiGithub,
  SiOpenjdk, // ✅ use this instead of SiJava
} from "react-icons/si";

import { useEffect, useRef, useState } from "react";
import { FaGithub, FaFacebook, FaInstagram, FaDownload } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


const navItems = [
  { id: "top", label: "HOME" },
  { id: "about", label: "ABOUT ME" },
  { id: "projects", label: "PROJECTS" },
  { id: "skills", label: "SKILLS" },
  { id: "contact", label: "LET'S WORK"}
];

const skillsData = [
  { name: "HTML", Icon: SiHtml5, category: "frontend" },
  { name: "CSS", Icon: SiCss3, category: "frontend" },
  { name: "JavaScript", Icon: SiJavascript, category: "frontend" },
  { name: "TypeScript", Icon: SiTypescript, category: "frontend" },
  { name: "React", Icon: SiReact, category: "frontend" },
  { name: "Next.js", Icon: SiNextdotjs, category: "frontend" },
  { name: "Bootstrap", Icon: SiBootstrap, category: "frontend" },
  { name: "TailwindCSS", Icon: SiTailwindcss, category: "frontend" },

  { name: "Java", Icon: SiOpenjdk, category: "backend" }, // ✅ fixed
  { name: "Python", Icon: SiPython, category: "backend" },

  { name: "MongoDB", Icon: SiMongodb, category: "database" },

  { name: "Git", Icon: SiGit, category: "tools" },
  { name: "GitHub", Icon: SiGithub, category: "tools" },
];


const projects = [
  {
    title: "Project One",
    description: "A short description of what this project does.",
    link: "#",
  },
  {
    title: "Project Two",
    description: "Another cool project. Replace this later.",
    link: "#",
  },
  {
    title: "Project Three",
    description: "Something you built while learning.",
    link: "#",
  },
];

function PremiumNavbar({ activeSection, onNavigate, isOpen, setIsOpen }) {
  return (
    <>
      {/* Floating Glass Navbar (mobile fixed) */}
      <div className="sticky top-0 z-50 pt-3 sm:pt-4">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="relative">
            {/* glow (desktop only) */}
            <div className="pointer-events-none absolute inset-0 -z-10 hidden blur-2xl sm:block">
              <div className="mx-auto h-14 w-[92%] rounded-full bg-gradient-to-r from-violet-500/15 via-fuchsia-500/10 to-indigo-500/15" />
            </div>

            <div className="rounded-full border border-white/10 bg-zinc-950/50 backdrop-blur-xl">
              <div className="relative flex h-12 items-center px-4 sm:h-14 sm:px-5">
                {/* Logo */}
                <button
                  onClick={() => onNavigate("top")}
                  className="text-xs font-semibold uppercase tracking-[0.28em] text-white/90 transition hover:text-white sm:tracking-[0.34em]"
                >
                  ELYK
                </button>

                {/* MENU – desktop centered */}
                <button
                  onClick={() => setIsOpen(true)}
                  className="absolute left-1/2 hidden -translate-x-1/2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/70 transition hover:bg-white/10 hover:text-white sm:block"
                >
                  MENU
                </button>

                {/* MENU – mobile right */}
                <button
                  onClick={() => setIsOpen(true)}
                  className="ml-auto rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80 transition hover:bg-white/10 hover:text-white sm:hidden"
                >
                  MENU
                </button>

                {/* CONTACT – desktop only */}
                <a
                  href="/cv/Elyk-CV.pdf"
                  download
                  className="ml-auto hidden inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/70 transition hover:bg-white/10 hover:text-white sm:inline-flex"
                >
                  <FaDownload size={14} />
                  DOWNLOAD CV
                </a>
              </div>
            </div>

            {/* Active section indicator – desktop only */}
            <div className="mt-3 hidden justify-center sm:flex">
              <div className="relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-300/80" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-white/60">
                  {navItems.find((n) => n.id === activeSection)?.label ||
                    "HOME"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-zinc-950/70 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Top row inside overlay */}
            <div className="mx-auto max-w-5xl px-4 pt-6 sm:px-6 sm:pt-8">
              <div className="relative flex items-center">
                <span className="text-xs font-semibold uppercase tracking-[0.34em] text-white/80">
                  ELYK
                </span>

                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                  CLOSE
                </button>

                <a
                  href="/cv/Elyk-CV.pdf"
                  download
                  onClick={() => setIsOpen(false)}
                  className="ml-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                  <FaDownload size={14} />
                  DOWNLOAD CV
                </a>
              </div>
            </div>

            {/* Centered menu */}
            <motion.nav
              className="flex h-full w-full items-center justify-center px-6"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="text-center">
                {navItems.map((item, idx) => {
                  const isActive = activeSection === item.id;

                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => {
                        setIsOpen(false);
                        onNavigate(item.id);
                      }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: "easeOut",
                        delay: 0.05 * idx,
                      }}
                      className={[
                        "block w-full py-3 transition",
                        "text-3xl sm:text-6xl font-extrabold uppercase tracking-[0.16em] sm:tracking-[0.18em]",
                        isActive
                          ? "text-white"
                          : "text-white/55 hover:text-white",
                      ].join(" ")}
                    >
                      <span className="relative">
                        {item.label}
                        {isActive && (
                          <span className="pointer-events-none absolute -inset-x-6 -inset-y-3 -z-10 rounded-2xl bg-gradient-to-r from-violet-500/15 via-fuchsia-500/10 to-indigo-500/15 blur-xl" />
                        )}
                      </span>
                    </motion.button>
                  );
                })}

                <div className="mx-auto mt-10 h-px w-28 bg-white/15" />
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.34em] text-white/45">
                  SELECT A SECTION
                </p>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/** Full-page background so the glow isn't clipped by max-width/padding */
function PageAtmosphere() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 left-10 h-[520px] w-[520px] rounded-full bg-violet-500/15 blur-[140px]" />
      <div className="absolute top-24 right-10 h-[460px] w-[460px] rounded-full bg-fuchsia-500/10 blur-[140px]" />
      <div className="absolute -bottom-44 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[160px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-zinc-950" />
    </div>
  );
}

function SectionHeader({ kicker, title, subtitle }) {
  return (
    <div className="max-w-3xl">
      {kicker && (
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-300/80" />
          {kicker}
        </div>
      )}

      <h2 className="mt-6 text-2xl font-extrabold uppercase tracking-[0.14em] text-white sm:text-3xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-sm leading-6 text-zinc-300 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function AnimatedSection({ id, className = "", children, containerRef }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    container: containerRef,
    target: ref,
    offset: ["start 85%", "end 15%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [24, 0, 0, -24]);

  return (
    <motion.section
      ref={ref}
      id={id}
      style={{ opacity, y }}
      className={`snap-start min-h-screen flex items-center pt-20 relative ${className}`}
    >
      {children}
    </motion.section>
  );
}



function SkillsSection() {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const filters = [
    { key: "all", label: "All" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "database", label: "Database" },
    { key: "tools", label: "Tools" },
  ];

  const filtered = skillsData.filter((s) => {
    const matchesFilter = filter === "all" ? true : s.category === filter;
    const matchesQuery = s.name.toLowerCase().includes(query.toLowerCase());
    return matchesFilter && matchesQuery;
  });

  return (
    <div className="relative w-full py-16">
      <SectionHeader
        kicker="TOOLKIT"
        title="Skills"
        subtitle="Cards with real icons — cleaner than levels. Filter by category or search."
      />

      {/* Filters */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => {
            const active = filter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={[
                  "rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] transition",
                  active
                    ? "border-white/20 bg-white/10 text-white"
                    : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white",
                ].join(" ")}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="w-full sm:w-[280px]">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search skills…"
            className="w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-white/85 placeholder:text-white/30 outline-none transition focus:border-white/20 focus:ring-2 focus:ring-white/10"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((skill) => {
          const Icon = skill.Icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              whileHover={{
                y: -6,
                borderColor: "rgba(255,255,255,0.18)",
                boxShadow: "0 18px 40px rgba(0,0,0,0.45)",
              }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-zinc-950/40 text-white/80">
                  <Icon className="h-6 w-6" />
                </div>

                <div className="flex-1">
                  <div className="text-sm font-semibold text-white/90">
                    {skill.name}
                  </div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
                    {skill.category}
                  </div>
                </div>
              </div>

              <div className="mt-5 h-px w-full bg-white/10" />

              <div className="mt-4 text-sm text-white/60">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-300/80" />
                  Building with this now
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 text-white/70 backdrop-blur-xl">
          No skills found. Try another filter or search term.
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const scrollContainerRef = useRef(null);
  const [activeSection, setActiveSection] = useState("top");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };


  useEffect(() => {
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }

    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    }

    const rootEl = scrollContainerRef.current;
    if (!rootEl) return;

    const sectionEls = navItems
      .map((n) => document.getElementById(n.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          );

        if (visible[0]?.target?.id) setActiveSection(visible[0].target.id);
      },
      { root: rootEl, threshold: [0.35, 0.5, 0.65] },
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.style.overflowY = menuOpen ? "hidden" : "scroll";
  }, [menuOpen]);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-main">
      <div
        ref={scrollContainerRef}
        className="h-screen overflow-y-scroll snap-y snap-proximity scroll-smooth bg-transparent"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <PremiumNavbar
            activeSection={activeSection}
            onNavigate={scrollToSection}
            isOpen={menuOpen}
            setIsOpen={setMenuOpen}
          />

          {/* HERO */}
          <AnimatedSection id="top" containerRef={scrollContainerRef}>
            <div className="relative w-full py-12 sm:py-16">
              <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-300/80" />
                    BUILDING MODERN WEB EXPERIENCES
                  </div>

                  <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
                    I build{" "}
                    <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                      clean
                    </span>{" "}
                    interfaces
                    <br className="hidden sm:block" /> with{" "}
                    <span className="bg-gradient-to-r from-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
                      smooth motion
                    </span>
                    .
                  </h1>

                  <p className="mt-4 text-base font-semibold text-white/70">
                    I’m <span className="text-white">Elyk</span> — a developer
                    focused on design, performance, and maintainable code.
                  </p>

                  <p className="mt-5 max-w-xl text-sm leading-6 text-zinc-300 sm:text-base">
                    I enjoy turning ideas into polished products. I’m currently
                    growing my skills in Next.js and building projects that look
                    good, feel fast, and scale cleanly.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Next.js", "UI Motion", "Responsive", "Clean Code"].map(
                      (t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-zinc-950/40 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-white/70"
                        >
                          {t}
                        </span>
                      ),
                    )}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => scrollToSection("projects")}
                      className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:opacity-90"
                    >
                      Explore Projects
                    </button>

                    <button
                      onClick={() => scrollToSection("contact")}
                      className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 backdrop-blur transition hover:bg-white/10"
                    >
                      Work With Me
                    </button>
                  </div>

                  <div className="mt-10 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">
                    Scroll ↓
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                  className="relative"
                >
                  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                    <div className="relative flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
                        CURRENT FOCUS
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
                        2026
                      </span>
                    </div>

                    <div className="relative mt-6 flex flex-wrap gap-2">
                      {["Next.js", "Tailwind", "Framer Motion", "Git"].map(
                        (s) => (
                          <span
                            key={s}
                            className="rounded-full border border-white/10 bg-zinc-950/30 px-3 py-1 text-xs font-semibold text-white/70"
                          >
                            {s}
                          </span>
                        ),
                      )}
                    </div>

                    <div className="relative mt-8 rounded-2xl border border-white/10 bg-zinc-950/30 p-6">
                      <div className="text-sm font-semibold text-white/85">
                        Building a portfolio with
                      </div>
                      <div className="mt-2 text-3xl font-extrabold tracking-tight text-white/90">
                        Snap Scroll + Motion
                      </div>
                      <p className="mt-3 text-sm text-white/55">
                        Smooth section transitions, clean layout, and a premium
                        feel.
                      </p>
                    </div>

                    <div className="relative mt-6 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
                          Style
                        </div>
                        <div className="mt-2 text-sm font-semibold text-white/80">
                          Minimal / Dark
                        </div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
                          Goal
                        </div>
                        <div className="mt-2 text-sm font-semibold text-white/80">
                          Client-ready
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute -bottom-5 left-6 rounded-2xl border border-white/10 bg-zinc-950/50 px-4 py-3 backdrop-blur">
                    <div className="text-xs font-semibold text-white/85">
                      Available for small projects
                    </div>
                    <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
                      Let’s build something
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>

          {/* ABOUT */}
          <AnimatedSection id="about" containerRef={scrollContainerRef}>
            <div className="relative w-full py-16">
              <SectionHeader
                kicker="A QUICK INTRO"
                title="About Me"
                subtitle="A short section to explain what you’re learning, what you love building, and what kind of work you’re aiming for."
              />

              <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                {/* LEFT — Text cards */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Design-minded",
                      text: "I like clean layouts, good spacing, and UI that feels calm and intentional.",
                    },
                    {
                      title: "Motion & Polish",
                      text: "I use subtle animation to make pages feel premium—without being distracting.",
                    },
                    {
                      title: "Build to Learn",
                      text: "I learn fastest by shipping. Small improvements daily, big results over time.",
                    },
                    {
                      title: "Client-ready",
                      text: "I focus on quality: readable code, responsiveness, and performance basics.",
                    },
                  ].map((card) => (
                    <div
                      key={card.title}
                      className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-white/20"
                    >
                      <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
                        {card.title}
                      </div>
                      <p className="mt-4 text-sm leading-6 text-zinc-300">
                        {card.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* RIGHT — Profile card */}
                <div className="relative flex items-center justify-center">
                  {/* glow */}
                  <div className="absolute -inset-6 -z-10 rounded-full bg-gradient-to-tr from-violet-500/20 via-fuchsia-500/10 to-indigo-500/20 blur-3xl" />

                  <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src="./MyPics/MyPic_1.jpg"
                        alt="Kyle / Elyk portrait"
                        className="h-[360px] w-full object-cover"
                      />
                    </div>

                    <div className="mt-5 text-center">
                      <div className="text-sm font-semibold text-white/90">
                        Kyle “Elyk”
                      </div>
                      <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
                        Frontend Developer
                      </div>
                    </div>

                    <div className="mt-5 h-px w-full bg-white/10" />

                    <p className="mt-4 text-center text-sm text-white/60">
                      Focused on modern UI, motion, and building products that
                      feel good to use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* SKILLS */}
          {/* SKILLS (cards + filters) */}
          <AnimatedSection id="skills" containerRef={scrollContainerRef}>
            <SkillsSection />
          </AnimatedSection>

          {/* PROJECTS */}
          <AnimatedSection id="projects" containerRef={scrollContainerRef}>
            <div className="relative w-full py-16">
              <SectionHeader
                kicker="SELECTED WORK"
                title="Projects"
                subtitle="A few things I’ve built while learning. Swap these with real projects as you ship more."
              />

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {projects.map((p) => (
                  <motion.article
                    key={p.title}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold text-white/90">
                        {p.title}
                      </h3>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">
                        case
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-zinc-300">
                      {p.description}
                    </p>

                    <div className="mt-6 h-px w-full bg-white/10" />

                    <a
                      href={p.link}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition group-hover:text-white"
                    >
                      View Project{" "}
                      <span className="transition group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </motion.article>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* CONTACT */}
          <AnimatedSection id="contact" containerRef={scrollContainerRef}>
            <div className="relative w-full py-16">
              <SectionHeader
                kicker="LET’S TALK"
                title="Let’s Work"
                subtitle="Tell me about your idea. I’m open to collaborations, small freelance work, and learning opportunities."
              />

              <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                  <form
                    className="space-y-4"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-white/90 placeholder:text-white/30 outline-none transition focus:border-violet-300/50 focus:ring-2 focus:ring-violet-400/15"
                        required
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="you@email.com"
                        className="w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-white/90 placeholder:text-white/30 outline-none transition focus:border-fuchsia-300/50 focus:ring-2 focus:ring-fuchsia-400/15"
                        required
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Write your message..."
                        className="w-full resize-none rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-white/90 placeholder:text-white/30 outline-none transition focus:border-white/20 focus:ring-2 focus:ring-white/10"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-2xl bg-gradient-to-r from-violet-400/80 to-fuchsia-400/80 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:opacity-95"
                    >
                      Send Message
                    </button>
                  </form>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    SOCIALS
                  </div>
                  <p className="mt-4 text-sm leading-6 text-zinc-300">
                    If you prefer, message me through socials. I’m most active
                    on GitHub and email.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {[
                      {
                        icon: <MdEmail size={20} />,
                        label: "Email",
                        href: "mailto:kyleyambaoliwanag@gmail.com",
                      },
                      {
                        icon: <FaGithub size={18} />,
                        label: "GitHub",
                        href: "https://github.com/elykaboo",
                      },
                      {
                        icon: <FaFacebook size={18} />,
                        label: "Facebook",
                        href: "https://facebook.com/elykaborat",
                      },
                      {
                        icon: <FaXTwitter size={18} />,
                        label: "X",
                        href: "https://x.com/kyleadrn",
                      },
                      {
                        icon: <FaInstagram size={18} />,
                        label: "Instagram",
                        href: "https://instagram.com/lykedrian",
                      },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target={
                          s.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          s.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-zinc-950/30 px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
                      >
                        {s.icon}
                        {s.label}
                      </a>
                    ))}
                  </div>

                  <div className="mt-10 h-px w-full bg-white/10" />

                  <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">
                    © {new Date().getFullYear()} ELYK — BUILT WITH NEXT.JS
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
}

