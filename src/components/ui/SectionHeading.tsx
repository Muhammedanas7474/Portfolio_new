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
  centered = true,
}: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={`mb-16 ${centered ? "text-center" : "text-left"}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {eyebrow && (
          <span className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-4 block">
            {eyebrow}
          </span>
        )}
        <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </motion.div>
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: 80 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`h-1 bg-accent mt-6 ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}