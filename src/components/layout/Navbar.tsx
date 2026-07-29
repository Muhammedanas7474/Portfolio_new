"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { heroNavItems } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav aria-label="Primary" className="fixed top-0 left-0 w-full z-[100] pointer-events-none">
      {/* Logo — top left */}
      <motion.a
        href="#hero"
        aria-label="Back to top"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pointer-events-auto fixed top-6 left-6 md:top-10 md:left-10 group"
      >
        <span className="text-lg font-black tracking-tighter text-beige">
          MA<span className="text-hero-orange">.</span>
        </span>
      </motion.a>

      {/* Desktop nav — top right, vertical */}
      <motion.ul
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="pointer-events-auto hidden md:flex fixed top-10 right-10 flex-col items-end gap-5"
      >
        {heroNavItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-xs font-medium uppercase text-beige tracking-[0.25em] hover:opacity-60 transition-opacity duration-300"
            >
              {item.label}
            </a>
          </li>
        ))}
      </motion.ul>

      {/* Mobile menu toggle */}
      <motion.button
        type="button"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="pointer-events-auto md:hidden fixed top-6 right-6 z-[101] text-beige p-2"
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X /> : <Menu />}
      </motion.button>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto md:hidden fixed inset-0 z-[100] bg-hero-bg flex items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-8">
              {heroNavItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-medium uppercase text-beige tracking-[0.25em] hover:opacity-60 transition-opacity"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
