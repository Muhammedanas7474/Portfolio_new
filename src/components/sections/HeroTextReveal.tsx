"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

const defaultLines: { text: string; accent: boolean }[] = [
  { text: "ENGINEERING", accent: false },
  { text: "TRUST", accent: true },
  { text: "AT", accent: true },
  { text: "SCALE", accent: false },
  { text: "DAILY", accent: false },
];

const headingClass =
  "uppercase leading-[0.82] tracking-tighter text-[11vw] sm:text-[10vw] md:text-[7.5vw] lg:text-[6rem] xl:text-[6.5rem]";

// Invisible hit-area buffer around the text so the reveal circle always has
// room to render as a full circle instead of clipping against the text's
// own tight bounding box. The negative margin cancels the layout impact.
const bufferClass = "p-16 sm:p-20 md:p-28 lg:p-36";
const bufferOffsetClass = "-m-16 sm:-m-20 md:-m-28 lg:-m-36";

export default function HeroTextReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 180, damping: 22, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 180, damping: 22, mass: 0.4 });
  const springRadius = useSpring(radius, { stiffness: 220, damping: 26, mass: 0.5 });

  const clipPath = useMotionTemplate`circle(${springRadius}px at ${springX}px ${springY}px)`;

  const updatePosition = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    updatePosition(e);
    radius.set(Math.min(120, Math.max(60, window.innerWidth * 0.075)));
    window.dispatchEvent(new Event("herocursor:hide"));
  };

  const handleLeave = () => {
    radius.set(0);
    window.dispatchEvent(new Event("herocursor:show"));
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={updatePosition}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`relative select-none md:cursor-none ${bufferClass} ${bufferOffsetClass}`}
    >
      <h1
        style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
        className={headingClass}
      >
        {defaultLines.map((line) => (
          <span
            key={line.text}
            className={`block ${line.accent ? "text-hero-orange" : "text-beige"}`}
          >
            {line.text}
          </span>
        ))}
      </h1>

      <motion.div
        aria-hidden="true"
        role="presentation"
        className="absolute inset-0 bg-hero-orange pointer-events-none will-change-[clip-path]"
        style={{ clipPath }}
      >
        <div
          style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
          className={`${headingClass} ${bufferClass} text-hero-bg`}
        >
          {defaultLines.map((line) => (
            <span key={line.text} className="block">
              {line.text}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
