"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/constants";
import HeroTextReveal from "@/components/sections/HeroTextReveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-hero-bg flex items-center justify-center"
    >
      {/* Subtle animated grain */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="hero-grain" />
      </div>

      {/* Available for work — right side, rotated, bottom aligned */}
      <div className="hidden sm:block absolute right-6 md:right-10 bottom-24 md:bottom-28 z-10">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="block origin-bottom-right rotate-90 whitespace-nowrap text-[10px] md:text-xs font-medium tracking-[0.35em] uppercase text-beige"
        >
          Available for Work
        </motion.span>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-12 sm:px-10 md:px-6">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-5 md:mb-7 text-[10px] md:text-xs font-medium uppercase tracking-[0.6em] text-beige/80"
        >
          {personalInfo.name}
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroTextReveal />
        </motion.div>
      </div>
    </section>
  );
}
