"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { personalInfo, stats } from "@/lib/constants";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative overflow-hidden py-28 md:py-36">
      {/* Decorative orange circle, reference-style */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-16 h-72 w-72 md:h-[26rem] md:w-[26rem] rounded-full bg-hero-orange/90 blur-[2px] opacity-90 -z-10"
      />

      <div className="container mx-auto px-6 md:px-10" ref={ref}>
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.4em] text-beige/60 mb-8"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-hero-orange" aria-hidden="true" />
          About Me
        </motion.span>

        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-14 lg:gap-16 items-start">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontFamily: "var(--font-heading)" }}
              className="text-[8vw] sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold leading-[1.08] tracking-tight text-beige"
            >
              I&apos;m a <span className="text-hero-orange">backend-focused</span> software
              engineer with a strong focus on building{" "}
              <span className="text-hero-orange">secure, scalable</span> systems and shipping
              high quality digital products.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 space-y-5 max-w-2xl"
            >
              {personalInfo.bio.map((paragraph, idx) => (
                <p key={idx} className="text-beige/55 text-base md:text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="px-8 py-3.5 bg-hero-orange hover:bg-hero-orange/90 text-hero-bg rounded-full font-semibold text-sm uppercase tracking-wider transition-all active:scale-95"
              >
                Get in Touch
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-8 py-3.5 border border-beige/20 hover:border-beige/40 text-beige rounded-full font-semibold text-sm uppercase tracking-wider transition-all active:scale-95"
              >
                Download Resume
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full max-w-xs mx-auto lg:mx-0 lg:ml-auto aspect-[4/5] group"
          >
            <div className="relative h-full w-full overflow-hidden border border-beige/10">
              <Image
                src="/profile.jpg"
                alt={personalInfo.name}
                fill
                className="object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700"
                priority
              />
              <div className="absolute inset-0 bg-hero-orange/15 mix-blend-multiply" />
            </div>
          </motion.div>
        </div>

        <div className="mt-24 md:mt-28 border-t border-beige/10 pt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.08 }}
            >
              <div
                style={{ fontFamily: "var(--font-heading)" }}
                className="text-4xl md:text-5xl font-bold text-hero-orange mb-2"
              >
                <AnimatedCounter end={stat.value} duration={2} />
                {stat.suffix}
              </div>
              <div className="text-xs text-beige/45 uppercase tracking-[0.2em] font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
