"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { Calendar, Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Professional Journey"
          subtitle="My work experience and career milestones"
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="p-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent group-hover:w-2 transition-all duration-300" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent transition-colors">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-2 text-accent font-medium mt-1">
                      <Briefcase size={16} />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/5 text-text-muted text-sm whitespace-nowrap">
                    <Calendar size={14} />
                    {exp.duration}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-text-secondary">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {resp}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-6">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-wider text-text-muted bg-white/5 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
