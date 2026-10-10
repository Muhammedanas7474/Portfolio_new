"use client";

import HeadingMask from "@/components/ui/HeadingMask";
import { layerCopy, projects } from "@/lib/constants";

/**
 * Projects rendered as the reference's ruled list — one masked row per
 * entry, wiping in top-to-bottom as it scrolls.
 */
export default function WorkList() {
  return (
    <section className="container_content" style={{ paddingBottom: "12.5rem" }}>
      <p className="body-text">{layerCopy.work.label}</p>

      <div>
        {projects.map((project) => (
          <HeadingMask
            key={project.title}
            href={project.links.live !== "#" ? project.links.live : undefined}
          >
            <div>
              <div className="grid grid-cols-12 items-baseline gap-x-4">
                <span className="h2 col-span-12 mb-1 md:col-span-7 md:mb-0">
                  {project.title}
                </span>
                <span
                  className="desc col-span-12 mb-1 md:col-span-3 md:mb-0"
                  style={{ color: "var(--muted)" }}
                >
                  {project.subtitle}
                </span>
                <span className="desc col-span-12 md:col-span-2 md:text-right">
                  {project.category}
                </span>
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
