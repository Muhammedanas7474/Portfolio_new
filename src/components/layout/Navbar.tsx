"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, personalInfo } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${
            scrolled
              ? "glass border border-white/10 shadow-2xl backdrop-blur-2xl"
              : "bg-transparent border border-transparent"
          }`}
        >
          {/* Logo */}
          <a href="#hero" className="relative group" aria-label="Back to top">
            <span className="text-2xl font-black text-text-primary tracking-tighter">
              MA<span className="text-accent">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-text-secondary hover:text-accent transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="text-sm font-medium text-text-secondary hover:text-accent transition-colors"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-2 bg-accent hover:bg-accent-hover text-white rounded-xl text-sm font-bold transition-all shadow-lg shadow-accent/20 active:scale-95"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-text-primary p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full p-4 md:hidden"
          >
            <div className="glass border border-white/10 rounded-3xl p-6 shadow-2xl space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-text-secondary hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
              <hr className="border-white/5" />
              <a
                href="/resume.pdf"
                download
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium text-text-secondary hover:text-accent"
              >
                Resume
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full py-4 bg-accent text-white text-center rounded-2xl font-bold"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}