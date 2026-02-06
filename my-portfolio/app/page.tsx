"use client"
import { motion } from "framer-motion";
import { FaGithub, FaFacebook, FaDiscord, FaInstagram } from "react-icons/fa";
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

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* HERO */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm text-zinc-400">Portfolio</p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I’m Kyle
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-zinc-300">
            I’m a beginner web developer building projects with Next.js. I like
            clean UI, simple code, and learning by building.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:opacity-90"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-900"
            >
              Contact Me
            </a>
          </div>
        </motion.header>

        {/* ABOUT */}
        <section className="mt-16 border-t border-zinc-800 pt-12" id="about">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-4 text-zinc-300">
            Write a short intro about yourself here. Mention what you’re
            learning, what you enjoy building, and what kind of roles you’re
            aiming for.
          </p>
        </section>

        {/* SKILLS */}
        <section className="mt-12" id="skills">
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
        </section>

        {/* PROJECTS */}
        <section className="mt-12" id="projects">
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
        </section>

        {/* SOCIALS */}
        <section className="mt-12" id="socials">
          <h2 className="text-2xl font-semibold">Socials</h2>

          <p className="mt-4 text-zinc-300">You can find me here</p>

          <div className="mt-6 flex items-center gap-6">
            <a
              href="mailto:kyleyambaoliwanag@gmail.com"
              aria-label="Email"
              className="text-zinc-400 hover:text-white transition"
            >
              <MdEmail size={26} />
            </a>

            <a
              href="https://github.com/elykaboo"
              target="_blank"
              aria-label="GitHub"
              className="text-zinc-400 hover:text-white transition"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://facebook.com/elykaborat"
              target="_blank"
              aria-label="Facebook"
              className="text-zinc-400 hover:text-white transition"
            >
              <FaFacebook size={24} />
            </a>

            <a
              href="https://x.com/kyleadrn"
              target="_blank"
              aria-label="X"
              className="text-zinc-400 hover:text-white transition"
            >
              <FaXTwitter size={24} />
            </a>

            <a
              href="https://instagram.com/lykedrian"
              target="_blank"
              aria-label="Instagram"
              className="text-zinc-400 hover:text-white transition"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </section>

        <footer className="mt-16 border-t border-zinc-800 pt-8 text-sm text-zinc-500">
          © {new Date().getFullYear()} Kyle. Built with Next.js.
        </footer>
      </div>
    </main>
  );
}
