"use client";

import TextReveal from "@/components/ui/TextReveal";
import { layerCopy } from "@/lib/constants";
import type { Layer } from "@/lib/constants";

export default function Motto({ variant }: { variant: Layer }) {
  const copy = layerCopy.motto;
  const heading = variant === "dark" ? copy.heading.dark : copy.heading.red;

  return (
    <section style={{ position: "relative" }}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "url(/profile.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center 18%",
          opacity: variant === "dark" ? 0.1 : 0,
          zIndex: 0,
          filter: "grayscale(0.35)",
        }}
      />
      <div
        aria-hidden="true"
        className="grain absolute inset-0"
        style={{ zIndex: 1 }}
      />

      <div
        className="container_content relative grid grid-cols-12"
        style={{
          zIndex: 2,
          paddingTop: "clamp(5rem, 12vw, 8rem)",
          paddingBottom: "clamp(5rem, 12vw, 8rem)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="col-span-12 md:col-span-8 md:col-start-3">
          <p className="body-text" style={{ marginBottom: "1.5rem" }}>
            {copy.eyebrow}
          </p>

          <TextReveal>
            <span className="h1" style={{ margin: 0, display: "block" }}>
              {heading}
            </span>
          </TextReveal>

          <p
            className="desc"
            style={{ color: "var(--muted)", marginTop: "1.75rem" }}
          >
            — {copy.attribution[variant]}
          </p>
        </div>
      </div>
    </section>
  );
}
