"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TextRevealProps {
  children: ReactNode;
  /** Reveal circle radius in px. Defaults to a value scaled to viewport width. */
  radius?: number;
}

/**
 * Wraps text so an orange circle follows the cursor and reveals a
 * color-inverted copy underneath — the signature interaction from the
 * reference site, first built for the Hero and reused across headings.
 *
 * The circle is a free-floating element sized/positioned by width, height
 * and transform — not a clip-path confined to the text's own bounding box.
 * Clipping it to that box was cutting the circle into a flat-edged box
 * shape whenever it neared an edge or corner (e.g. right as the cursor
 * enters). Floating freely means it stays round even when it bleeds past
 * the text into the surrounding space, matching the reference site.
 */
export default function TextReveal({ children, radius }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const circleRadius = useMotionValue(0);

  // The duplicated reveal text below is absolutely positioned with only
  // `left`/`top` set, so without an explicit width it shrinks-to-fit the
  // small circle instead of the real heading's width — causing it to
  // re-wrap onto different lines than the real text and look garbled
  // under the cursor. Locking it to the measured container width keeps
  // both copies wrapping identically so they line up pixel-for-pixel.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const springX = useSpring(mouseX, { stiffness: 180, damping: 22, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 180, damping: 22, mass: 0.4 });
  const springRadius = useSpring(circleRadius, { stiffness: 220, damping: 26, mass: 0.5 });
  const diameter = useTransform(springRadius, (r) => r * 2);

  // Inner duplicate text is offset so it lines up with the real text
  // underneath regardless of where the (variably sized, variably
  // positioned) circle currently sits.
  const innerLeft = useTransform([diameter, springX], ([d, x]: number[]) => d / 2 - x);
  const innerTop = useTransform([diameter, springY], ([d, y]: number[]) => d / 2 - y);

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
        className="absolute rounded-full overflow-hidden bg-hero-orange pointer-events-none will-change-transform"
        style={{ left: springX, top: springY, x: "-50%", y: "-50%", width: diameter, height: diameter }}
      >
        <motion.div
          className="absolute [&_*]:!text-hero-bg"
          style={{ left: innerLeft, top: innerTop, width: containerWidth }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
