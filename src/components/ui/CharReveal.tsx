"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/animations";
import type { HeroLine } from "@/lib/constants";

interface Props {
  lines: HeroLine[];
  className?: string;
  play?: boolean;
  baseDelay?: number;
}

/**
 * Characters slide up from behind a per-line clipping box.
 * Each line is one word so no word ever wraps on small screens.
 */
export default function CharReveal({ lines, className = "", play = true, baseDelay = 0 }: Props) {
  return (
    <span className={className}>
      {lines.map((line, lineIndex) => (
        <span className="char-line" key={`${line.text}-${lineIndex}`}>
          {Array.from(line.text).map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="char"
              style={line.accent ? { color: "var(--accent)" } : undefined}
              initial={{ y: "115%" }}
              animate={play ? { y: "0%" } : { y: "115%" }}
              transition={{
                duration: 0.95,
                ease: EASE,
                delay: baseDelay + lineIndex * 0.07 + charIndex * 0.035,
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
}
