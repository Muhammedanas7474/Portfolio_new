"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollParagraph from "@/components/ui/ScrollParagraph";
import TextReveal from "@/components/ui/TextReveal";
import { layerCopy } from "@/lib/constants";
import type { Layer } from "@/lib/constants";

/** Slow-moving photo plane behind the experience statement. */
function ParallaxPhoto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-0 hidden h-full w-[34%] overflow-hidden max-md:!hidden md:block"
      style={{ zIndex: 1 }}
    >
      <motion.img
        src="/profile.jpg"
        alt=""
        loading="lazy"
        style={{ y }}
        className="h-[128%] w-full object-cover"
        onError={(event) => {
          (event.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "var(--bg)", opacity: 0.45 }}
      />
      <div
        className="absolute inset-y-0 right-0 w-24"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--bg))",
        }}
      />
    </div>
  );
}

export default function Experience({ variant }: { variant: Layer }) {
  const text = variant === "dark" ? layerCopy.experience.text.dark : layerCopy.experience.text.red;

  return (
    <section className="relative" style={{ zIndex: 2 }}>
      {variant === "dark" && <ParallaxPhoto />}

      <div
        className="container_content grid grid-cols-12"
        style={{ paddingTop: "12.5rem", paddingBottom: "15.625rem" }}
      >
        <div className="col-span-12 md:col-span-7 md:col-start-6">
          <p className="body-text">{layerCopy.experience.label}</p>
          <TextReveal>
            <ScrollParagraph text={text} className="h2 fg" />
          </TextReveal>
        </div>
      </div>
    </section>
  );
}
