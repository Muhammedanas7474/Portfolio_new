"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/constants";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "github": return <GithubIcon size={20} />;
      case "linkedin": return <LinkedinIcon size={20} />;
      default: return null;
    }
  };

  return (
    <footer className="py-12 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-text-primary mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-text-secondary text-sm">
              {personalInfo.shortRole}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass border border-white/5 flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/20 transition-all"
                aria-label={link.name}
              >
                {renderIcon(link.name)}
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg glass border border-white/5 flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/20 transition-all group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-text-muted text-xs flex items-center gap-1">
            Built with Next.js, TypeScript, Tailwind &amp; Framer Motion
            <Heart size={12} className="text-red-500 fill-red-500 ml-1" aria-hidden="true" />
          </p>
        </div>
      </div>
    </footer>
  );
}