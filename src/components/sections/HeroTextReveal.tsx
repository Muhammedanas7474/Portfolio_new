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

// Invisible hit-area buffer around the text so the reveal circle always has
// room to render as a full circle instead of clipping against the text's
// own tight bounding box. The negative margin cancels the layout impact.
const bufferClass = "p-16 sm:p-20 md:p-28 lg:p-36 -m-16 sm:-m-20 md:-m-28 lg:-m-36";

export default function HeroTextReveal() {
  return (
    <TextReveal className={bufferClass}>
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
