"use client";

import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiYoutube,
  FiMail,
} from "react-icons/fi";
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
    <motion.ul
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      aria-label="Social links"
      className="hidden md:flex"
      style={{
        position: "fixed",
        left: "var(--screen-x)",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 90,
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
        listStyle: "none",
        margin: 0,
        padding: 0,
        pointerEvents: "auto",
      }}
    >
      {heroSocialLinks.map((link, index) => {
        const Icon = ICONS[link.icon];
        if (!Icon) return null;
        return (
          <li
            key={link.name}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "2rem",
              height: "2.75rem",
              borderTop:
                index === 0 ? "1px solid var(--chrome-line)" : undefined,
              borderBottom: "1px solid var(--chrome-line)",
            }}
          >
            <a
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={
                link.url.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              aria-label={link.name}
              data-cursor="extend"
              style={{
                color: "var(--chrome-fg)",
                display: "inline-flex",
                transition:
                  "color 0.3s cubic-bezier(0.165,0.84,0.44,1), transform 0.3s cubic-bezier(0.165,0.84,0.44,1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--chrome-accent)";
                e.currentTarget.style.transform = "scale(1.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--chrome-fg)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <Icon size={16} />
            </a>
          </li>
        );
      })}
    </motion.ul>
  );
}
