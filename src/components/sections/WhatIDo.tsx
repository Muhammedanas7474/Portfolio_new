"use client";

import HeadingMask from "@/components/ui/HeadingMask";
import { layerCopy } from "@/lib/constants";

export default function WhatIDo() {
  return (
    <section
      className="container_content"
      style={{ paddingBottom: "12.5rem" }}
    >
      <p className="body-text">{layerCopy.whatIDo.label}</p>

      <div>
        {layerCopy.whatIDo.items.map((item) => (
          <HeadingMask key={item}>
            <span className="h1" style={{ margin: 0 }}>
              {item}
            </span>
          </HeadingMask>
        ))}
      </div>
    </section>
  );
}
