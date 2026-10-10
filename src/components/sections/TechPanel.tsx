"use client";

import { layerCopy, skillCategories } from "@/lib/constants";

/**
 * The reference's kinetic strip, flattened into a static ruled grid so the
 * page keeps its all-static constraint.
 */
export default function TechPanel() {
  return (
    <section className="container_content" style={{ paddingBottom: "12.5rem" }}>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-8 md:col-start-3">
          <p className="body-text">{layerCopy.stack.label}</p>

          <div className="panel" style={{ padding: "clamp(1.75rem, 4vw, 3.5rem)" }}>
            <div className="grain" />
            <div className="panel__inner">
              <ul className="grid grid-cols-2 gap-x-6 md:grid-cols-4">
                {skillCategories.map((group) => (
                  <li
                    key={group.title}
                    style={{
                      borderTop: "1px solid var(--border)",
                      paddingTop: "1rem",
                      paddingBottom: "1.5rem",
                    }}
                  >
                    <p className="body-text" style={{ marginBottom: "0.5rem" }}>
                      {group.title}
                    </p>
                    <p
                      className="desc"
                      style={{ color: "var(--muted)", marginBottom: "0.75rem" }}
                    >
                      {group.blurb}
                    </p>
                    <ul>
                      {group.skills.map((skill) => (
                        <li key={skill.name} className="body-text">
                          {skill.name}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
