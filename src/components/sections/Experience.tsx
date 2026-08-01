"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "@/lib/constants";
import TextReveal from "@/components/ui/TextReveal";

function timelineLabel(index: number, duration: string) {
  if (index === 0) return "NOW";
  const match = duration.match(/\d{4}/);
  return match ? match[0] : duration;
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-28 md:py-36 overflow-hidden">
      <div className="container mx-auto px-12 md:px-10" ref={ref}>
        <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.4em] text-beige/60 mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-hero-orange" aria-hidden="true" />
          Experience
        </span>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <TextReveal>
            <h2
              style={{ fontFamily: "var(--font-heading)" }}
              className="max-w-4xl text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight text-beige"
            >
              Building production software in{" "}
              <span className="text-hero-orange">banking &amp; fintech</span> since day one of my
              career.
            </h2>
          </TextReveal>
        </motion.div>

        <div className="mt-16 md:mt-20 border-t border-beige/10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border-b border-beige/10"
            >
              <div className="grid grid-cols-[80px_1fr] md:grid-cols-[160px_1fr] items-baseline gap-4 md:gap-8 py-8 md:py-10 px-4 md:px-6 -mx-4 md:-mx-6 transition-colors duration-300 group-hover:bg-hero-orange">
                <span
                  style={{ fontFamily: "var(--font-heading)" }}
                  className="text-lg md:text-2xl font-bold text-hero-orange group-hover:text-hero-bg transition-colors duration-300"
                >
                  {timelineLabel(index, exp.duration)}
                </span>
                <div>
                  <h3
                    style={{ fontFamily: "var(--font-heading)" }}
                    className="text-2xl md:text-4xl font-bold text-beige group-hover:text-hero-bg transition-colors duration-300"
                  >
                    {exp.position}
                  </h3>
                  <p className="text-beige/50 group-hover:text-hero-bg/70 transition-colors duration-300 mt-1">
                    {exp.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
