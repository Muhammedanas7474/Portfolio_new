"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education } from "@/lib/constants";
import TextReveal from "@/components/ui/TextReveal";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative py-28 md:py-36 overflow-hidden">
      <div className="container mx-auto px-12 md:px-10" ref={ref}>
        <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.4em] text-beige/60 mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-hero-orange" aria-hidden="true" />
          Education
        </span>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <TextReveal>
            <h2
              style={{ fontFamily: "var(--font-heading)" }}
              className="max-w-3xl text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight text-beige"
            >
              Academic <span className="text-hero-orange">background</span>
            </h2>
          </TextReveal>
        </motion.div>

        <div className="mt-16 md:mt-20 border-t border-beige/10">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border-b border-beige/10"
            >
              <div className="py-8 md:py-10 px-4 md:px-6 -mx-4 md:-mx-6 transition-colors duration-300 group-hover:bg-hero-orange">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                  <div>
                    <h3
                      style={{ fontFamily: "var(--font-heading)" }}
                      className="text-xl md:text-3xl font-bold text-beige group-hover:text-hero-bg transition-colors duration-300"
                    >
                      {edu.degree}
                    </h3>
                    {edu.institution && (
                      <p className="text-beige/50 group-hover:text-hero-bg/70 transition-colors duration-300 mt-1">
                        {edu.institution}
                        {edu.university && `, ${edu.university}`}
                      </p>
                    )}
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-beige/40 group-hover:text-hero-bg/60 transition-colors duration-300 whitespace-nowrap">
                    {edu.duration}
                  </span>
                </div>
              </div>

              <div className="pb-10">
                <p className="text-beige/50 text-sm md:text-base leading-relaxed max-w-3xl">
                  {edu.description}
                </p>
                <p className="text-beige/35 text-xs uppercase tracking-[0.2em] mt-3">
                  {edu.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
