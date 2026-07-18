"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { personalInfo, stats } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="About Me"
          subtitle="The engineer behind the code"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" ref={ref}>
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square group">
              {/* Animated background glows */}
              <div className="absolute -inset-4 bg-accent/20 rounded-[2rem] blur-2xl group-hover:bg-accent/30 transition-colors duration-500" />
              
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden border border-white/10 glass shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt={personalInfo.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 glass p-4 rounded-2xl border border-white/20 shadow-xl backdrop-blur-xl hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-text-primary">Available for Hire</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-text-primary">
                Hi, I&apos;m <span className="text-accent">{personalInfo.name}</span>
              </h3>
              <div className="space-y-4">
                {personalInfo.bio.map((paragraph, idx) => (
                  <p key={idx} className="text-lg text-text-secondary leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl glass border border-white/5 hover:border-white/10 transition-colors"
                >
                  <div className="text-2xl font-bold text-accent mb-1">
                    <AnimatedCounter end={stat.value} duration={2} />
                    {stat.suffix}
                  </div>
                  <div className="text-xs text-text-muted uppercase tracking-wider font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-accent hover:bg-accent-hover text-white rounded-full font-semibold transition-all shadow-lg shadow-accent/25 hover:shadow-accent/40 active:scale-95"
              >
                Get in Touch
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-8 py-3 glass border border-white/10 hover:border-white/20 text-text-primary rounded-full font-semibold transition-all active:scale-95"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}