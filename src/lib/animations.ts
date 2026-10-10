import type { Variants } from "framer-motion";

/* The single easing curve used for every reveal on the site. */
export const EASE = [0.165, 0.84, 0.44, 1] as const;

export const DUR = {
  fast: 0.4,
  slow: 0.6,
  reveal: 0.7,
};

export const maskIn: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: DUR.reveal, ease: EASE },
  },
};

export const charIn: Variants = {
  hidden: { y: "110%" },
  visible: (i: number = 0) => ({
    y: "0%",
    transition: { duration: 0.9, ease: EASE, delay: 0.05 * i },
  }),
};

export const lineIn: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DUR.slow, ease: EASE },
  },
};
