"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Props {
  children: ReactNode;
  radius?: number;
}

/**
 * Orange circle follows the cursor across the wrapped headline and reveals
 * a color-inverted duplicate underneath — the signature reference hover.
 * The disc floats freely (sized by width/height, not clip-path) so it stays
 * round when it bleeds past the text box.
 */
export default function TextReveal({ children, radius }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const circleRadius = useMotionValue(0);

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
  const springRadius = useSpring(circleRadius, {
    stiffness: 220,
    damping: 26,
    mass: 0.5,
  });
  const diameter = useTransform(springRadius, (r) => r * 2);

  const innerLeft = useTransform(
    [diameter, springX],
    ([d, x]: number[]) => d / 2 - x,
  );
  const innerTop = useTransform(
    [diameter, springY],
    ([d, y]: number[]) => d / 2 - y,
  );

  const updatePosition = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;
    updatePosition(e);
    const targetRadius =
      radius ?? Math.min(120, Math.max(60, window.innerWidth * 0.075));
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
      onPointerMove={updatePosition}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      className="text-reveal select-none md:cursor-none"
    >
      {children}
      <motion.div
        aria-hidden="true"
        role="presentation"
        className="text-reveal__circle"
        style={{
          left: springX,
          top: springY,
          x: "-50%",
          y: "-50%",
          width: diameter,
          height: diameter,
        }}
      >
        <motion.div
          className="text-reveal__copy"
          style={{ left: innerLeft, top: innerTop, width: containerWidth }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
