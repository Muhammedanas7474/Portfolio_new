"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowDownLeft, ArrowUp } from "lucide-react";
import { heroSocialLinks, personalInfo } from "@/lib/constants";
import TextReveal from "@/components/ui/TextReveal";

const connectSocials = heroSocialLinks.filter((link) => link.icon !== "email");
const socialColumns = [
  connectSocials.slice(0, Math.ceil(connectSocials.length / 2)),
  connectSocials.slice(Math.ceil(connectSocials.length / 2)),
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-beige/10 pt-24 pb-8" ref={ref}>
      <div className="container mx-auto px-12 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <TextReveal>
            <blockquote
              style={{ fontFamily: "var(--font-heading)" }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-beige max-w-3xl"
            >
              &ldquo;Good code is <span className="text-hero-orange">honest</span>.&rdquo;
            </blockquote>
          </TextReveal>
        </motion.div>

        <div className="mt-20 md:mt-24">
          <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.4em] text-beige/60 mb-10">
            <span className="h-1.5 w-1.5 rounded-full bg-hero-orange" aria-hidden="true" />
            Connect
          </span>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 md:gap-x-10">
            {socialColumns.map((column, colIdx) => (
              <div key={colIdx} className="space-y-4">
                {column.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-2"
                  >
                    <ArrowDownLeft
                      size={14}
                      className="shrink-0 text-hero-orange"
                      aria-hidden="true"
                    />
                    <span
                      style={{ fontFamily: "var(--font-heading)" }}
                      className="text-xl md:text-2xl font-bold text-beige group-hover:text-hero-orange transition-colors duration-300"
                    >
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            ))}

            <div className="col-span-2 md:col-span-1 flex gap-10 md:block md:space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-beige/45 mb-2">Email</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-beige hover:text-hero-orange transition-colors duration-300 break-all"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-beige/45 mb-2">Phone</p>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                  className="text-beige hover:text-hero-orange transition-colors duration-300"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>
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

        <div className="mt-10 pt-6 border-t border-beige/10 flex items-center justify-center">
          <p className="text-beige/35 text-xs">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
