"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";
import { projects } from "@/lib/constants";
import type { Project } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { GithubIcon } from "@/components/ui/SocialIcons";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work"
        />

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12" role="tablist" aria-label="Filter projects by category">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-accent text-white shadow-lg shadow-accent/25"
                  : "glass text-text-secondary hover:text-text-primary border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <GlassCard className="h-full flex flex-col overflow-hidden group">
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent/25 via-accent-blue/15 to-transparent flex items-center justify-center">
          <Layers
            size={56}
            className="text-white/20 group-hover:scale-110 group-hover:text-white/30 transition-transform duration-500"
            aria-hidden="true"
          />
          <span className="absolute inset-0 flex items-center justify-center text-4xl font-black text-white/10 tracking-tight select-none">
            {project.title}
          </span>
          <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="p-6 flex-grow flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-accent uppercase tracking-widest">
              {project.category}
            </span>
          </div>

          <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-text-secondary text-xs font-medium mb-3">
            {project.subtitle}
          </p>

          <p className="text-text-secondary text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          <ul className="flex flex-wrap gap-2 mb-4">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="text-[10px] px-2 py-1 rounded bg-accent/10 text-accent border border-accent/10"
              >
                {feature}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/5 text-text-muted"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl glass border border-white/10 text-text-secondary hover:text-text-primary hover:border-white/20 text-sm font-semibold transition-all"
            >
              <GithubIcon size={16} />
              Code
            </a>
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-accent hover:bg-accent-hover text-white text-sm font-semibold transition-all"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
