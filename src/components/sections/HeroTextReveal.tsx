"use client";

import TextReveal from "@/components/ui/TextReveal";

const defaultLines: { text: string; accent: boolean }[] = [
  { text: "ENGINEERING", accent: false },
  { text: "TRUST", accent: true },
  { text: "AT", accent: true },
  { text: "SCALE", accent: false },
  { text: "DAILY", accent: false },
];

const headingClass =
  "uppercase leading-[0.82] tracking-tighter text-[11vw] sm:text-[10vw] md:text-[7.5vw] lg:text-[6rem] xl:text-[6.5rem]";

export default function HeroTextReveal() {
  return (
    <TextReveal>
      <h1
        style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
        className={headingClass}
      >
        {defaultLines.map((line) => (
          <span
            key={line.text}
            className={`block ${line.accent ? "text-hero-orange" : "text-beige"}`}
          >
            {line.text}
          </span>
        ))}
      </h1>
    </TextReveal>
  );
}
