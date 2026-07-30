"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
}: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={`mb-14 md:mb-20 ${centered ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {eyebrow && (
          <span
            className={`flex items-center gap-3 text-xs font-medium uppercase tracking-[0.4em] text-beige/60 mb-5 ${
              centered ? "justify-center" : ""
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-hero-orange" aria-hidden="true" />
            {eyebrow}
          </span>
        )}
        <h2
          style={{ fontFamily: "var(--font-heading)" }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-beige tracking-tight leading-[1.05]"
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`mt-5 text-beige/50 text-base md:text-lg max-w-2xl leading-relaxed ${
              centered ? "mx-auto" : ""
            }`}
          >
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
