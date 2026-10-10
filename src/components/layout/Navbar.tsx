"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { heroNavItems } from "@/lib/constants";
import { useLayer } from "@/lib/layer-context";

export default function Navbar() {
  const { mode, setMode } = useLayer();
  const [isOpen, setIsOpen] = useState(false);

  const navigate = (href: string) => (event: React.MouseEvent) => {
    setIsOpen(false);
    if (mode !== "red") return;
    event.preventDefault();
    setMode("dark");
    window.setTimeout(() => {
      window.location.hash = href;
    }, 760);
  };

  return (
    <nav
      aria-label="Primary"
      style={{ position: "fixed", inset: 0, zIndex: 100, pointerEvents: "none" }}
    >
      <motion.a
        href="#hero"
        onClick={navigate("#hero")}
        aria-label="Back to top"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        data-cursor="extend"
        className="h3"
        style={{
          pointerEvents: "auto",
          position: "fixed",
          top: "1.75rem",
          left: "var(--screen-x)",
          color: "var(--chrome-fg)",
          fontWeight: 700,
          letterSpacing: "-0.04em",
          lineHeight: 1,
          textDecoration: "none",
        }}
      >
        MA<span style={{ color: "var(--chrome-accent)" }}>.</span>
      </motion.a>

      <motion.ul
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="hidden md:flex"
        style={{
          pointerEvents: "auto",
          position: "fixed",
          top: "2rem",
          right: "var(--screen-x)",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "1.35rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {heroNavItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              onClick={navigate(item.href)}
              data-cursor="extend"
              className="desc"
              style={{
                color: "var(--chrome-fg)",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "color 0.3s cubic-bezier(0.165,0.84,0.44,1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--chrome-accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--chrome-fg)";
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </motion.ul>

      <motion.button
        type="button"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        data-cursor="extend"
        className="md:hidden"
        style={{
          pointerEvents: "auto",
          position: "fixed",
          top: "1.5rem",
          right: "var(--screen-x)",
          zIndex: 101,
          color: "var(--chrome-fg)",
          background: "transparent",
          border: "none",
          padding: "0.35rem",
        }}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              pointerEvents: "auto",
              position: "fixed",
              inset: 0,
              zIndex: 100,
              backgroundColor: "#0d0d0d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2.25rem",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {heroNavItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={navigate(item.href)}
                    className="h4"
                    style={{
                      color: "#b7ab98",
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                    }}
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
