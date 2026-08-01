"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { skillCategories } from "@/lib/constants";

function Row({
  title,
  blurb,
  skills,
  dark,
}: {
  title: string;
  blurb: string;
  skills: { name: string }[];
  dark: boolean;
}) {
  // Both variants render the same tag markup so row heights always match
  // between the base (beige) and reveal (dark) layers — only visibility and
  // the blurb overlay differ. This keeps the sliding mask pixel-aligned
  // regardless of how many tags wrap onto a second line.
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-12 py-8 md:py-10 px-4 md:px-6">
      <h3
        style={{ fontFamily: "var(--font-heading)" }}
        className={`w-full md:w-64 shrink-0 text-3xl md:text-5xl font-bold uppercase tracking-tight ${
          dark ? "text-hero-bg" : "text-beige"
        }`}
      >
        {title}
      </h3>

      <div className="relative flex-1 min-h-[2rem]">
        <div className={`flex flex-wrap gap-2.5 ${dark ? "invisible" : ""}`}>
          {skills.map((skill) => (
            <span
              key={skill.name}
              className="text-xs md:text-sm uppercase tracking-wider text-beige/55 border border-beige/15 px-3.5 py-1.5 rounded-full"
            >
              {skill.name}
            </span>
          ))}
        </div>
        {dark && (
          <p className="absolute inset-0 flex items-center justify-end text-right text-sm md:text-base font-semibold text-hero-bg/90">
            <span className="max-w-[220px] md:max-w-sm">{blurb}</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<Array<HTMLDivElement | null>>([]);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Raw targets, springs, and a derived value all share one timeline, so the
  // clipping window and the duplicate content's counter-offset can never
  // drift apart mid-transition — the bug a separate useState + Motion's
  // `animate` prop produced (window animates smoothly, offset snapped).
  const top = useMotionValue(0);
  const height = useMotionValue(0);
  const opacity = useMotionValue(0);
  const springTop = useSpring(top, { stiffness: 280, damping: 30, mass: 0.6 });
  const springHeight = useSpring(height, { stiffness: 280, damping: 30, mass: 0.6 });
  const springOpacity = useSpring(opacity, { stiffness: 280, damping: 30, mass: 0.6 });
  const negTop = useTransform(springTop, (v) => -v);

  const handleEnter = (idx: number) => {
    const row = rowRefs.current[idx];
    const list = listRef.current;
    if (!row || !list) return;
    const rowBox = row.getBoundingClientRect();
    const listBox = list.getBoundingClientRect();
    top.set(rowBox.top - listBox.top);
    height.set(rowBox.height);
    opacity.set(1);
  };

  return (
    <section id="skills" className="relative py-28 md:py-36 overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-12 md:px-10">
        <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.4em] text-beige/60 mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-hero-orange" aria-hidden="true" />
          What I Work With
        </span>

        <div
          ref={listRef}
          onMouseLeave={() => opacity.set(0)}
          className="relative border-t border-beige/20"
        >
          {/* Base layer — always visible, beige text + tags */}
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              ref={(el) => {
                rowRefs.current[idx] = el;
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onMouseEnter={() => handleEnter(idx)}
              className="border-b border-beige/20"
            >
              <Row title={category.title} blurb={category.blurb} skills={category.skills} dark={false} />
            </motion.div>
          ))}

          {/* Sliding orange band — clips a duplicate dark-text copy of the rows,
              so the highlight and the color-invert can never fall out of sync. */}
          <motion.div
            aria-hidden="true"
            className="absolute -left-4 -right-4 md:-left-6 md:-right-6 overflow-hidden bg-hero-orange pointer-events-none"
            style={{ top: springTop, height: springHeight, opacity: springOpacity }}
          >
            <motion.div
              className="absolute left-4 right-4 md:left-6 md:right-6"
              style={{ top: negTop }}
            >
              {skillCategories.map((category) => (
                <div key={category.title} className="border-b border-hero-bg/10">
                  <Row title={category.title} blurb={category.blurb} skills={category.skills} dark />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
