"use client";

import HeadingMask from "@/components/ui/HeadingMask";
import { history, layerCopy } from "@/lib/constants";

/**
 * Roles and education as full-bleed ruled rows (same width treatment as
 * What I Do). Text sits on the shared mid-page column.
 */
export default function History() {
  return (
    <section
      className="history-section"
      style={{ paddingBottom: "clamp(6rem, 18vw, 12.5rem)" }}
    >
      <p className="body-text history__label">{layerCopy.history.label}</p>

      <div className="history">
        {history.map((row) => (
          <HeadingMask key={`${row.period}-${row.company}`}>
            <div className="history__row">
              <div className="history__grid">
                <span
                  className="h3"
                  style={{ color: "var(--muted)" }}
                >
                  {row.period}
                </span>
                <span className="h3">{row.role}</span>
                <span className="h3" style={{ color: "var(--muted)" }}>
                  {row.detail}
                </span>
                <span className="desc" style={{ color: "var(--muted)" }}>
                  {row.company}
                </span>
              </div>
            </div>
          </HeadingMask>
        ))}
      </div>
    </section>
  );
}
