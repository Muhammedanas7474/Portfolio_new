"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  text: string;
  className?: string;
}

/**
 * Large statement copy: a 20%-opacity ghost sits underneath while the
 * full-strength copy is wiped in left-to-right, scrubbed by scroll.
 */
export default function ScrollParagraph({ text, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.35"],
  });
  const clip = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );

  return (
    <div ref={ref} className="scroll-paragraph" data-cursor="extend">
      <p aria-hidden="true" className={`scroll-paragraph__ghost ${className}`}>
        {text}
      </p>
      <motion.p style={{ clipPath: clip }} className={`scroll-paragraph__copy ${className}`}>
        {text}
      </motion.p>
    </div>
  );
}
