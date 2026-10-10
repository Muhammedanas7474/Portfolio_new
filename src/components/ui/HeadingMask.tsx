"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE } from "@/lib/animations";

interface Props {
  children: React.ReactNode;
  className?: string;
  href?: string;
  open?: boolean;
}

/**
 * A ruled row whose text wipes in on scroll, and whose red bar opens from a
 * centre slit on hover (pure clip-path, no fades).
 *
 * The scroll trigger watches the *wrapper*, never `.hm__deep` itself:
 * Chromium folds an element's own clip-path into its intersection rect, so
 * observing a zero-width element would wait forever for a 0.4 ratio it can
 * never reach.
 */
export default function HeadingMask({ children, className = "", href, open }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const setRef = (node: HTMLElement | null) => {
    ref.current = node;
  };

  const inner = (
    <>
      <motion.span
        className="hm__deep"
        initial={false}
        animate={{ clipPath: inView ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)" }}
        transition={{ duration: 0.75, ease: EASE }}
      >
        {children}
      </motion.span>
      <div className="hm__mask" aria-hidden="true">
        <div>{children}</div>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        ref={setRef}
        href={href}
        className={`heading-mask${open ? " is-open" : ""} ${className}`}
        data-cursor="contract"
      >
        {inner}
      </a>
    );
  }

  return (
    <div ref={setRef} className={`heading-mask${open ? " is-open" : ""} ${className}`} data-cursor="extend">
      {inner}
    </div>
  );
}
