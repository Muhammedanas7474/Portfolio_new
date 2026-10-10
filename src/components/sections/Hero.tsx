"use client";

import { motion } from "framer-motion";
import CharReveal from "@/components/ui/CharReveal";
import TextReveal from "@/components/ui/TextReveal";
import { layerCopy } from "@/lib/constants";
import type { Layer } from "@/lib/constants";
import { useLayer } from "@/lib/layer-context";

export default function Hero({ variant }: { variant: Layer }) {
  const { ready } = useLayer();
  const lines = variant === "dark" ? layerCopy.hero.lines.dark : layerCopy.hero.lines.red;

  return (
    <section className="hero" data-cursor="extend" id={variant === "dark" ? "hero" : undefined}>
      <div className="hero__bg">
        <div className="grain" />
      </div>

      <div className="hero__content container_content">
        <motion.h6
          className="h6 hero__eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: ready ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {layerCopy.hero.eyebrow}
        </motion.h6>

        <TextReveal>
          <h1 className="h1" style={{ margin: 0 }}>
            <CharReveal lines={lines} play={ready} />
          </h1>
        </TextReveal>
      </div>
    </section>
  );
}
