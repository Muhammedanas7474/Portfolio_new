"use client";

import ScrollParagraph from "@/components/ui/ScrollParagraph";
import TextReveal from "@/components/ui/TextReveal";
import { layerCopy } from "@/lib/constants";
import type { Layer } from "@/lib/constants";

export default function About({ variant }: { variant: Layer }) {
  const text = variant === "dark" ? layerCopy.about.text.dark : layerCopy.about.text.red;

  return (
    <section
      className="container_content"
      style={{ paddingTop: "12.5rem", paddingBottom: "12.5rem" }}
    >
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-8 md:col-start-3">
          <p className="body-text">{layerCopy.about.label}</p>
          <TextReveal>
            <ScrollParagraph text={text} className="h2 fg" />
          </TextReveal>
        </div>
      </div>
    </section>
  );
}
