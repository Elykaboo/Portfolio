"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const skillMeters = [
  { name: "HTML/CSS", level: 75 },
  { name: "JavaScript", level: 65 },
  { name: "Next.js", level: 55 },
  { name: "Tailwind", level: 70 },
  { name: "Git", level: 60 },
];

const skills = ["HTML", "CSS", "JavaScript", "Next.js", "Tailwind", "Git"];

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

function AnimatedSection({ id, className = "", children, containerRef }) {
  const ref = useRef(null);

  // ✅ IMPORTANT: useScroll must track the SAME scroll container you're scrolling
  const { scrollYProgress } = useScroll({
    container: containerRef, // 👈 this makes it track the scroll div, not window
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
      className={`snap-start min-h-screen flex items-center ${className}`}
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Remove hash on refresh
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }

    // ✅ Scroll the container to top (NOT window)
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    }
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* ✅ SNAP SCROLL CONTAINER */}
      <div
        ref={scrollContainerRef}
        className="h-screen overflow-y-scroll snap-y snap-proximity scroll-smooth"
      >
        <div className="mx-auto max-w-5xl px-6">
          {/* HERO */}
          <AnimatedSection id="top" containerRef={scrollContainerRef}>
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full py-16"
            >
              <p className="text-sm text-zinc-400">Portfolio</p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
                Hi, I’m Elyk !
              </h1>

              <p className="mt-6 max-w-2xl text-lg text-zinc-300">
                I’m a beginner web developer building projects with Next.js. I
                like clean UI, simple code, and learning by building.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:opacity-90"
                >
                  View Projects
                </button>

                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-900"
                >
                  Contact Me
                </button>
              </div>
            </motion.header>
          </AnimatedSection>

          {/* ABOUT */}
          <AnimatedSection
            id="about"
            className="border-t border-zinc-800"
            containerRef={scrollContainerRef}
          >
            <div className="w-full py-16 max-w-3xl">
              <h2 className="text-2xl font-semibold">About</h2>
              <p className="mt-4 text-zinc-300">
                Write a short intro about yourself here. Mention what you’re
                learning, what you enjoy building, and what kind of roles you’re
                aiming for.
              </p>
            </div>
          </AnimatedSection>

          {/* SKILLS (meter style) */}
          <AnimatedSection
            id="skills"
            className="border-t border-zinc-800"
            containerRef={scrollContainerRef}
          >
            <div className="w-full py-16 max-w-3xl">
              <h2 className="text-2xl font-semibold">Skills</h2>
              <p className="mt-3 text-zinc-300">
                A simple view of what I’m currently strongest in (and improving
                daily).
              </p>

              <div className="mt-8 space-y-4">
                {skillMeters.map((s) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{s.name}</span>
                      <span className="text-sm text-zinc-400">{s.level}%</span>
                    </div>

                    <div className="mt-3 h-2 w-full rounded-full bg-zinc-950">
                      <div
                        className="h-2 rounded-full bg-white/90"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* PROJECTS */}
          <AnimatedSection
            id="projects"
            className="border-t border-zinc-800"
            containerRef={scrollContainerRef}
          >
            <div className="w-full py-16">
              <h2 className="text-2xl font-semibold">Projects</h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {projects.map((p) => (
                  <motion.article
                    key={p.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{
                      y: -6,
                      backgroundColor: "rgba(24, 24, 27, 0.9)",
                      borderColor: "rgba(255, 255, 255, 0.15)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5"
                  >
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm text-zinc-300">
                      {p.description}
                    </p>

                    <a
                      href={p.link}
                      className="mt-4 inline-block text-sm font-semibold text-white underline underline-offset-4"
                    >
                      View →
                    </a>
                  </motion.article>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* CONTACT */}
          <AnimatedSection
            id="contact"
            className="border-t border-zinc-800"
            containerRef={scrollContainerRef}
          >
            <div className="w-full py-16">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 text-center">
                <h2 className="text-2xl font-semibold text-white">
                  Contact Me
                </h2>

                <p className="mt-3 text-zinc-300">
                  Got a project, idea, or just want to say hi? I’m always open
                  to connecting.
                </p>

                <form
                  className="mt-8 space-y-4 text-left"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div>
                    <label className="mb-1 block text-sm text-zinc-400">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 focus:border-white focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm text-zinc-400">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 focus:border-white focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm text-zinc-400">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Write your message here..."
                      className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 focus:border-white focus:outline-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:opacity-90"
                  >
                    Send Message
                  </button>
                </form>

                <div className="mt-6 flex justify-center text-zinc-400">
                  <div className="flex items-center gap-6">
                    <a
                      href="mailto:kyleyambaoliwanag@gmail.com"
                      aria-label="Email"
                      className="transition hover:-translate-y-1 hover:text-white"
                    >
                      <MdEmail size={26} />
                    </a>

                    <a
                      href="https://github.com/elykaboo"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="transition hover:-translate-y-1 hover:text-white"
                    >
                      <FaGithub size={24} />
                    </a>

                    <a
                      href="https://facebook.com/elykaborat"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="transition hover:-translate-y-1 hover:text-white"
                    >
                      <FaFacebook size={24} />
                    </a>

                    <a
                      href="https://x.com/kyleadrn"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X"
                      className="transition hover:-translate-y-1 hover:text-white"
                    >
                      <FaXTwitter size={24} />
                    </a>

                    <a
                      href="https://instagram.com/lykedrian"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="transition hover:-translate-y-1 hover:text-white"
                    >
                      <FaInstagram size={24} />
                    </a>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-center text-sm text-zinc-500">
                © {new Date().getFullYear()} Kyle. Built with Next.js.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
}
