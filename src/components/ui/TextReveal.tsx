"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

interface Props {
  children: ReactNode;
  radius?: number;
}

/**
 * How far the reveal layer extends past the text box on every side, so the
 * clip-path circle stays perfectly round even when it bleeds past the text.
 */
const BLEED = 150;

/** Ignore compat mouse-move events that fire right after a touch tap. */
const TOUCH_END_GUARD_MS = 700;

/**
 * Orange circle follows the cursor (or finger) across the wrapped headline
 * and reveals a color-inverted duplicate underneath — the signature hover.
 *
 * The disc is a clip-path circle on an oversized paint-only layer: no
 * width/height/left/top changes, so tracking never triggers layout and the
 * reveal stays instant. On touch devices the circle opens on pointerdown
 * and follows the finger until release.
 */
export default function TextReveal({ children, radius }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(false);
  const touchEndedAtRef = useRef(0);
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

  const springX = useSpring(mouseX, { stiffness: 320, damping: 32, mass: 0.3 });
  const springY = useSpring(mouseY, { stiffness: 320, damping: 32, mass: 0.3 });
  const springRadius = useSpring(circleRadius, {
    stiffness: 280,
    damping: 26,
    mass: 0.4,
  });

  const clipX = useTransform(springX, (x) => x + BLEED);
  const clipY = useTransform(springY, (y) => y + BLEED);
  const clipPath = useMotionTemplate`circle(${springRadius}px at ${clipX}px ${clipY}px)`;

  const updatePosition = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const open = (e: React.PointerEvent<HTMLDivElement>) => {
    if (
      e.pointerType === "mouse" &&
      performance.now() - touchEndedAtRef.current < TOUCH_END_GUARD_MS
    ) {
      return;
    }
    updatePosition(e);
    if (activeRef.current) return;
    activeRef.current = true;
    const targetRadius =
      radius ?? Math.min(120, Math.max(60, window.innerWidth * 0.075));
    circleRadius.set(targetRadius);
    if (e.pointerType !== "touch") {
      window.dispatchEvent(new Event("herocursor:hide"));
    }
  };

  const close = () => {
    if (!activeRef.current) return;
    activeRef.current = false;
    circleRadius.set(0);
    window.dispatchEvent(new Event("herocursor:show"));
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse") return;
    e.currentTarget.setPointerCapture(e.pointerId);
    open(e);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse") return;
    touchEndedAtRef.current = performance.now();
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    close();
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={open}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={close}
      onPointerLeave={close}
      className="text-reveal select-none md:cursor-none"
    >
      {children}
      <motion.div
        aria-hidden="true"
        role="presentation"
        className="text-reveal__circle"
        style={{
          top: -BLEED,
          left: -BLEED,
          right: -BLEED,
          bottom: -BLEED,
          clipPath,
          WebkitClipPath: clipPath,
        }}
      >
        <div
          className="text-reveal__copy"
          style={{ top: BLEED, left: BLEED, width: containerWidth }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
