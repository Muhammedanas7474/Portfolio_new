"use client";

import HeadingMask from "@/components/ui/HeadingMask";
import { history, layerCopy } from "@/lib/constants";

/**
 * Roles and education merged into one reverse-chronological list,
 * using the same ruled-row reveal as every other list on the page.
 */
export default function History() {
  return (
    <section className="container_content" style={{ paddingBottom: "12.5rem" }}>
      <p className="body-text">{layerCopy.history.label}</p>

      <div>
        {history.map((row) => (
          <HeadingMask key={`${row.period}-${row.company}`}>
            <div className="grid grid-cols-12 items-baseline gap-x-4">
              <span
                className="h3 col-span-12 mb-1 md:col-span-2 md:mb-0"
                style={{ color: "var(--muted)" }}
              >
                {row.period}
              </span>
              <span className="h3 col-span-12 mb-1 md:col-span-5 md:mb-0">
                {row.role}
              </span>
              <span
                className="h3 col-span-12 mb-1 md:col-span-3 md:mb-0"
                style={{ color: "var(--muted)" }}
              >
                {row.detail}
              </span>
              <span
                className="desc col-span-12 md:col-span-2 md:text-right"
                style={{ color: "var(--muted)" }}
              >
                {row.company}
              </span>
            </div>
          </HeadingMask>
        ))}
      </div>
    </section>
  );
}
