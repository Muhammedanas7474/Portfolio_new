"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/constants";
import type { Project } from "@/types";
import { GithubIcon } from "@/components/ui/SocialIcons";
import TextReveal from "@/components/ui/TextReveal";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-28 md:py-36 overflow-hidden">
      <div className="container mx-auto px-6 md:px-10" ref={ref}>
        <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.4em] text-beige/60 mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-hero-orange" aria-hidden="true" />
          Work
        </span>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <TextReveal radius={34}>
              <h2
                style={{ fontFamily: "var(--font-heading)" }}
                className="max-w-2xl text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight text-beige"
              >
                Selected <span className="text-hero-orange">projects</span>
              </h2>
            </TextReveal>
          </motion.div>

          <div
            className="flex flex-wrap items-center gap-3"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? "bg-hero-orange text-hero-bg"
                    : "border border-beige/15 text-beige/55 hover:border-beige/35 hover:text-beige"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-beige/10">
          {filteredProjects.map((project, index) => (
            <ProjectRow key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group border-b border-beige/10"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 py-8 md:py-10 px-4 md:px-6 -mx-4 md:-mx-6 transition-colors duration-300 group-hover:bg-hero-orange">
        <span
          style={{ fontFamily: "var(--font-heading)" }}
          className="text-sm font-bold text-hero-orange group-hover:text-hero-bg/70 transition-colors duration-300 md:w-14"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex-1">
          <h3
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-3xl md:text-5xl font-bold text-beige group-hover:text-hero-bg transition-colors duration-300"
          >
            {project.title}
          </h3>
          <p className="text-beige/50 group-hover:text-hero-bg/70 transition-colors duration-300 mt-1">
            {project.subtitle}
          </p>
        </div>
        <span className="text-xs uppercase tracking-[0.2em] text-beige/40 group-hover:text-hero-bg/60 transition-colors duration-300 whitespace-nowrap">
          {project.category}
        </span>
      </div>

      <div className="pb-10">
        <p className="text-beige/50 text-sm md:text-base leading-relaxed max-w-2xl mb-5">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2 mb-5">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-hero-orange/10 text-hero-orange border border-hero-orange/15"
            >
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] uppercase tracking-wider text-beige/50 border border-beige/15 px-2.5 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-beige/70 hover:text-hero-orange transition-colors"
          >
            <GithubIcon size={16} />
            Code
          </a>
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-beige/70 hover:text-hero-orange transition-colors"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
