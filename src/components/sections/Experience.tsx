"use client";

import { Fragment, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollParagraph from "@/components/ui/ScrollParagraph";
import TextReveal from "@/components/ui/TextReveal";
import { layerCopy } from "@/lib/constants";
import type { HeroLine, Layer } from "@/lib/constants";

/** Slow-moving photo plane on the right, fading into the page background. */
function ParallaxPhoto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute right-0 top-0 hidden h-full w-[42%] overflow-hidden max-md:!hidden md:block"
      style={{ zIndex: 1 }}
    >
      <motion.img
        src="/profile.jpg"
        alt=""
        loading="lazy"
        style={{ y }}
        className="h-[120%] w-full object-cover object-[center_18%]"
        onError={(event) => {
          (event.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "var(--bg)", opacity: 0.42 }}
      />
      <div
        className="absolute inset-y-0 left-0 w-40"
        style={{
          background: "linear-gradient(to right, var(--bg), transparent)",
        }}
      />
    </div>
  );
}

export default function Experience({ variant }: { variant: Layer }) {
  const segments =
    variant === "dark" ? layerCopy.experience.text.dark : layerCopy.experience.text.red;

  const text = (
    <>
      {segments.map((segment: HeroLine, index: number) => (
        <Fragment key={index}>
          <span className={segment.accent ? "fg-accent" : undefined}>
            {segment.text}
          </span>
          {index < segments.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );

  return (
    <section className="relative" style={{ zIndex: 2 }}>
      {variant === "dark" && <ParallaxPhoto />}

      <div
        className="container_content grid grid-cols-12 relative"
        style={{
          paddingTop: "clamp(6rem, 18vw, 12.5rem)",
          paddingBottom: "clamp(7rem, 22vw, 15.625rem)",
          zIndex: 2,
        }}
      >
        <div className="col-span-12 md:col-span-8 md:col-start-3">
          <p className="body-text">{layerCopy.experience.label}</p>
          <TextReveal>
            <ScrollParagraph text={text} className="h2 fg" />
          </TextReveal>
        </div>
      </div>
    </section>
  );
}
