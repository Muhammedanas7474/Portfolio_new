"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

interface TextRevealProps {
  children: ReactNode;
  /** Reveal circle radius in px. Defaults to a value scaled to viewport width. */
  radius?: number;
}

/**
 * Wraps text so an orange circle follows the cursor and reveals a
 * color-inverted copy underneath — the signature interaction from the
 * reference site, first built for the Hero and reused across headings.
 */
export default function TextReveal({ children, radius }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const circleRadius = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 180, damping: 22, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 180, damping: 22, mass: 0.4 });
  const springRadius = useSpring(circleRadius, { stiffness: 220, damping: 26, mass: 0.5 });

  const clipPath = useMotionTemplate`circle(${springRadius}px at ${springX}px ${springY}px)`;

  const updatePosition = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    updatePosition(e);
    const targetRadius = radius ?? Math.min(120, Math.max(60, window.innerWidth * 0.075));
    circleRadius.set(targetRadius);
    window.dispatchEvent(new Event("herocursor:hide"));
  };

  const handleLeave = () => {
    circleRadius.set(0);
    window.dispatchEvent(new Event("herocursor:show"));
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={updatePosition}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative select-none md:cursor-none"
    >
      {children}
      <motion.div
        aria-hidden="true"
        role="presentation"
        className="absolute inset-0 bg-hero-orange pointer-events-none will-change-[clip-path] [&_*]:!text-hero-bg"
        style={{ clipPath }}
      >
        {children}
      </motion.div>
    </div>
  );
}
