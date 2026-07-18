"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Academic Background"
          subtitle="My educational journey and certifications"
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="p-8 flex flex-col md:flex-row gap-6 relative overflow-hidden group">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <GraduationCap size={32} />
                </div>
                
                <div className="flex-grow space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent transition-colors">
                        {edu.degree}
                      </h3>
                      {edu.institution && (
                        <p className="text-accent font-medium">
                          {edu.institution}
                          {edu.university && `, ${edu.university}`}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-text-muted text-sm whitespace-nowrap w-fit">
                      <Calendar size={14} />
                      {edu.duration}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-text-muted text-sm">
                    <MapPin size={14} />
                    {edu.location}
                  </div>
                  
                  <p className="text-text-secondary leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}