"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillCategories } from "@/lib/constants";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-28 md:py-36 overflow-hidden">
      <div className="container mx-auto px-6 md:px-10" ref={ref}>
        <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.4em] text-beige/60 mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-hero-orange" aria-hidden="true" />
          What I Work With
        </span>

        <div className="border-t border-beige/10">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group border-b border-beige/10"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 py-8 md:py-10 px-4 md:px-6 -mx-4 md:-mx-6 transition-colors duration-300 group-hover:bg-hero-orange">
                <h3
                  style={{ fontFamily: "var(--font-heading)" }}
                  className="w-full md:w-64 shrink-0 text-3xl md:text-5xl font-bold uppercase tracking-tight text-beige group-hover:text-hero-bg transition-colors duration-300"
                >
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="text-xs md:text-sm uppercase tracking-wider text-beige/55 group-hover:text-hero-bg/75 border border-beige/15 group-hover:border-hero-bg/30 px-3.5 py-1.5 rounded-full transition-colors duration-300"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
