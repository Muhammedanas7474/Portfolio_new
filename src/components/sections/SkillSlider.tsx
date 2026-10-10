"use client";

import HeadingMask from "@/components/ui/HeadingMask";
import { layerCopy, skillCategories } from "@/lib/constants";

const ALL_SKILLS = skillCategories.flatMap((group) => group.skills);

/**
 * Skills as the reference's circular thumbnail track — static, wrapped,
 * with each row wiping in under its own mask.
 */
export default function SkillSlider() {
  return (
    <section className="container_content" style={{ paddingBottom: "12.5rem" }}>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-8 md:col-start-3">
          <p className="body-text">{layerCopy.skills.label}</p>

          <HeadingMask>
            <div className="flex flex-wrap gap-4">
              {ALL_SKILLS.map((skill) => (
                <div key={skill.name} className="thumb" data-cursor="contract">
                  <span
                    style={{
                      width: "100%",
                      padding: "0 0.35rem",
                      fontSize: "0.62rem",
                      lineHeight: 1.2,
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textAlign: "center",
                      overflowWrap: "anywhere",
                    }}
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </HeadingMask>
        </div>
      </div>
    </section>
  );
}
