"use client";

import { layerCopy } from "@/lib/constants";

/**
 * Full-bleed ruled rows. Label and titles share one left indent (clear of the
 * social rail). On hover the row floods with accent and a short description
 * appears on the right.
 */
export default function WhatIDo() {
  return (
    <section className="whatido-section" style={{ paddingBottom: "12.5rem" }}>
      <p className="body-text whatido__label">{layerCopy.whatIDo.label}</p>

      <div className="whatido">
        {layerCopy.whatIDo.items.map((item) => (
          <div key={item.title} className="whatido__row" data-cursor="extend">
            <div className="whatido__bar" aria-hidden="true" />
            <div className="whatido__inner">
              <span className="whatido__title">{item.title}</span>
              <span className="whatido__desc">{item.description}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
