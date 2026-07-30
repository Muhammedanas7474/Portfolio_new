"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/constants";

const connectLinks = [
  ...socialLinks.map((link) => ({ label: link.name, href: link.url, external: true })),
  { label: "Email", href: `mailto:${personalInfo.email}`, external: false },
  { label: "Phone", href: `tel:${personalInfo.phone.replace(/\s+/g, "")}`, external: false },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-beige/10 pt-24 pb-8" ref={ref}>
      <div className="container mx-auto px-6 md:px-10">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ fontFamily: "var(--font-heading)" }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-beige max-w-3xl"
        >
          &ldquo;Good code is <span className="text-hero-orange">honest</span>.&rdquo;
        </motion.blockquote>

        <div className="mt-20 md:mt-24">
          <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.4em] text-beige/60 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-hero-orange" aria-hidden="true" />
            Connect
          </span>

          <div className="border-t border-beige/10">
            {connectLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between border-b border-beige/10 py-5 md:py-6 px-4 md:px-6 -mx-4 md:-mx-6 transition-colors duration-300 hover:bg-hero-orange"
              >
                <span
                  style={{ fontFamily: "var(--font-heading)" }}
                  className="text-2xl md:text-4xl font-bold text-beige group-hover:text-hero-bg transition-colors duration-300"
                >
                  {link.label}
                </span>
                <ArrowUpRight
                  size={24}
                  className="text-beige/40 group-hover:text-hero-bg transition-colors duration-300"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-beige font-semibold">{personalInfo.name}</p>
            <p className="text-beige/45 text-sm">{personalInfo.shortRole}</p>
          </div>

          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full border border-beige/15 flex items-center justify-center text-beige/60 hover:text-hero-bg hover:bg-hero-orange hover:border-hero-orange transition-all group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        <div className="mt-10 pt-6 border-t border-beige/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-beige/35 text-xs">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-beige/35 text-xs">
            Built with Next.js, TypeScript, Tailwind &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
