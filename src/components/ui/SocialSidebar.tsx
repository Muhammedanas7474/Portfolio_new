"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiYoutube, FiMail } from "react-icons/fi";
import { heroSocialLinks } from "@/lib/constants";

const ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
  github: FiGithub,
  linkedin: FiLinkedin,
  instagram: FiInstagram,
  youtube: FiYoutube,
  email: FiMail,
};

export default function SocialSidebar() {
  return (
    <>
      <motion.ul
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        aria-label="Social links"
        className="flex fixed left-4 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 z-[90] flex-col items-center gap-4 sm:gap-5 md:gap-6"
      >
        {heroSocialLinks.map((link) => {
          const Icon = ICONS[link.icon];
          return (
            <li key={link.name}>
              <a
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={link.name}
                className="text-beige hover:text-hero-orange transition-all duration-300 hover:scale-110 inline-flex"
              >
                <Icon size={16} />
              </a>
            </li>
          );
        })}
        <li aria-hidden="true" className="w-px h-16 bg-beige/20 mt-2 hidden sm:block" />
      </motion.ul>

      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        aria-hidden="true"
        className="fixed left-5 sm:left-7 md:left-11 bottom-9 z-[90] flex h-2 w-2"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-hero-orange opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-hero-orange" />
      </motion.span>
    </>
  );
}
