"use client";

import { techStack } from "@/lib/constants";

export default function TechMarquee() {
  // Duplicate for seamless loop
  const items = [...techStack, ...techStack];

  return (
    <section className="py-16 relative overflow-hidden" aria-label="Tech stack">
      {/* Gradient fades on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

      {/* Row 1 - Left to Right */}
      <div className="mb-4">
        <div
          className="flex gap-4 hover:[animation-play-state:paused]"
          style={{
            animation: "marquee 40s linear infinite",
            width: "max-content",
          }}
        >
          {items.map((tech, i) => (
            <div
              key={`row1-${i}`}
              className="flex-shrink-0 px-6 py-3 rounded-xl glass text-text-secondary text-sm font-medium whitespace-nowrap hover:text-accent hover:border-accent/20 transition-colors cursor-default"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Right to Left */}
      <div>
        <div
          className="flex gap-4 hover:[animation-play-state:paused]"
          style={{
            animation: "marquee-reverse 35s linear infinite",
            width: "max-content",
          }}
        >
          {[...items].reverse().map((tech, i) => (
            <div
              key={`row2-${i}`}
              className="flex-shrink-0 px-6 py-3 rounded-xl glass text-text-secondary text-sm font-medium whitespace-nowrap hover:text-accent hover:border-accent/20 transition-colors cursor-default"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}