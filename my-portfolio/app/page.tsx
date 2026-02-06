"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

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

function AnimatedSection({ id, className = "", children }) {
  const ref = useRef(null);

  // 0 -> 1 progress as the section travels through the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    // Controls WHEN fade-in starts and WHEN fade-out ends
    offset: ["start 85%", "end 15%"],
  });

  // Opacity curve: hidden -> visible -> hidden
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // A little vertical movement for polish
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [24, 0, 0, -24]);

  return (
    <motion.section
      ref={ref}
      id={id}
      style={{ opacity, y }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }

    // Force scroll to top on initial load
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* HERO */}
        <AnimatedSection id="top" className="min-h-screen flex items-center">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full"
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
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:opacity-90"
              >
                View Projects
              </button>

              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  })
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
          className="mt-16 border-t border-zinc-800 pt-12"
        >
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-4 text-zinc-300">
            Write a short intro about yourself here. Mention what you’re
            learning, what you enjoy building, and what kind of roles you’re
            aiming for.
          </p>
        </AnimatedSection>

        {/* SKILLS */}
        <AnimatedSection id="skills" className="mt-12">
          <h2 className="text-2xl font-semibold">Skills</h2>

          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-sm text-zinc-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </AnimatedSection>

        {/* PROJECTS */}
        <AnimatedSection id="projects" className="mt-12">
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
                <p className="mt-2 text-sm text-zinc-300">{p.description}</p>

                <a
                  href={p.link}
                  className="mt-4 inline-block text-sm font-semibold text-white underline underline-offset-4"
                >
                  View →
                </a>
              </motion.article>
            ))}
          </div>
        </AnimatedSection>

        {/* Socials */}
        <AnimatedSection
          id="contact"
          className="mt-20 border-t border-zinc-800 pt-12"
        >
          <div className="mx-auto max-w-5xl px-6">
            {/* CONTACT CARD */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 text-center">
              <h2 className="text-2xl font-semibold text-white">Contact Me</h2>

              <p className="mt-3 text-zinc-300">
                Got a project, idea, or just want to say hi? I’m always open to
                connecting.
              </p>

              <form
                className="mt-8 space-y-4 text-left"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* Full Name */}
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 focus:border-white focus:outline-none"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 focus:border-white focus:outline-none"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Write your message here..."
                    className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 focus:border-white focus:outline-none"
                    required
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:opacity-90"
                >
                  Send Message
                </button>
              </form>

              {/* OPTIONAL SOCIALS */}
              <div className="mt-6 flex justify-center text-zinc-400">
                <div className="flex items-center gap-6">
                  <a
                    href="mailto:kyleyambaoliwanag@gmail.com"
                    aria-label="Email"
                    className="transition hover:text-white hover:-translate-y-1"
                  >
                    <MdEmail size={26} />
                  </a>

                  <a
                    href="https://github.com/elykaboo"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="transition hover:text-white hover:-translate-y-1"
                  >
                    <FaGithub size={24} />
                  </a>

                  <a
                    href="https://facebook.com/elykaborat"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="transition hover:text-white hover:-translate-y-1"
                  >
                    <FaFacebook size={24} />
                  </a>

                  <a
                    href="https://x.com/kyleadrn"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X"
                    className="transition hover:text-white hover:-translate-y-1"
                  >
                    <FaXTwitter size={24} />
                  </a>

                  <a
                    href="https://instagram.com/lykedrian"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="transition hover:text-white hover:-translate-y-1"
                  >
                    <FaInstagram size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* COPYRIGHT */}
            <p className="mt-8 text-center text-sm text-zinc-500">
              © {new Date().getFullYear()} Kyle. Built with Next.js.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
