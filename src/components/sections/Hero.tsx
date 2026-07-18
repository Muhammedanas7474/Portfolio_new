"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ArrowDown, Download, Send } from "lucide-react";
import { personalInfo } from "@/lib/constants";
import MagneticButton from "@/components/ui/MagneticButton";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
});

const displayName = personalInfo.name.split(" ").slice(0, 2).join(" ").toUpperCase();

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    section.style.setProperty("--mouse-x", `${x}%`);
    section.style.setProperty("--mouse-y", `${y}%`);
  };

  const scrollDown = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      onMouseMove={handleMouseMove}
      className="spotlight relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <HeroScene />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 items-center max-w-6xl mx-auto">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-6"
            >
              <div className="px-4 py-1 rounded-full glass border border-white/10 text-accent text-sm font-medium flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                {personalInfo.location}
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight mb-6"
            >
              <span className="block text-text-primary">HI,</span>
              <span className="block text-text-primary">I&apos;M</span>
              <span className="block gradient-text">{displayName}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-text-secondary mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <MagneticButton>
                <a
                  href="#projects"
                  className="px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-full font-bold transition-all shadow-lg shadow-accent/20 inline-block"
                >
                  View Projects
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="/resume.pdf"
                  download
                  className="px-8 py-4 glass border border-white/10 hover:border-white/20 text-text-primary rounded-full font-bold transition-all flex items-center gap-2"
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="#contact"
                  className="px-8 py-4 border border-accent/40 hover:border-accent text-accent rounded-full font-bold transition-all flex items-center gap-2"
                >
                  <Send size={18} />
                  Hire Me
                </a>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="animate-float">
              <div className="relative w-72 h-72 xl:w-80 xl:h-80">
                <div className="absolute -inset-6 bg-accent/20 rounded-full blur-3xl" />
                <div className="relative w-full h-full rounded-full overflow-hidden glass border border-white/15 shadow-2xl">
                  <Image
                    src="/profile.jpg"
                    alt={personalInfo.name}
                    fill
                    sizes="320px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.button
          type="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer bg-transparent border-none"
          onClick={scrollDown}
          aria-label="Scroll to About section"
        >
          <span className="text-text-muted text-sm uppercase tracking-widest font-medium">
            Scroll Down
          </span>
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-accent"
          >
            <ArrowDown size={24} />
          </motion.span>
        </motion.button>
      </div>

      {/* Decorative Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>
    </section>
  );
}
