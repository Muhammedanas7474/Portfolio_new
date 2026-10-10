"use client";

import HeadingMask from "@/components/ui/HeadingMask";
import { layerCopy, projects } from "@/lib/constants";

/**
 * Projects as full-bleed ruled rows (same width treatment as What I Do /
 * History). Title and meta sit on the shared mid-page column.
 */
export default function WorkList() {
  return (
    <section className="history-section" style={{ paddingBottom: "12.5rem" }}>
      <p className="body-text history__label">{layerCopy.work.label}</p>

      <div className="history">
        {projects.map((project) => (
          <HeadingMask
            key={project.title}
            href={project.links.live !== "#" ? project.links.live : undefined}
          >
            <div className="history__row">
              <div className="work__grid">
                <span className="h2">{project.title}</span>
                <div className="work__meta">
                  <span className="desc" style={{ color: "var(--muted)" }}>
                    {project.subtitle}
                  </span>
                  <span className="desc">{project.category}</span>
                </div>
              </div>
              <p
                className="desc"
                style={{ color: "var(--muted)", marginTop: "0.75rem" }}
              >
                {project.tech.join(" · ")}
              </p>
            </div>
          </HeadingMask>
        ))}
      </div>
    </section>
  );
}
