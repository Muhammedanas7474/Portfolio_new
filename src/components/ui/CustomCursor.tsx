"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsPointer(Boolean(isClickable));
    };

    const hide = () => setHidden(true);
    const show = () => setHidden(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("herocursor:hide", hide);
    window.addEventListener("herocursor:show", show);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("herocursor:hide", hide);
      window.removeEventListener("herocursor:show", show);
    };
  }, []);

  return (
    <>
      {/* Inner dot */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-beige rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
      />

      {/* Outer ring */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 w-10 h-10 border border-beige/50 rounded-full pointer-events-none z-[9998] hidden md:block"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isPointer ? 1.5 : 1,
          opacity: hidden ? 0 : 0.8,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.2 }}
      />
    </>
  );
}
