"use client";

import { techStack } from "@/lib/constants";
import { FaAws, FaCogs, FaDatabase, FaPlug, FaPuzzlePiece, FaSyncAlt } from "react-icons/fa";
import {
  SiCss,
  SiDjango,
  SiDocker,
  SiFastapi,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import type { IconType } from "react-icons";

const ICONS: Record<string, IconType> = {
  python: SiPython,
  django: SiDjango,
  fastapi: SiFastapi,
  postman: SiPostman,
  jwt: SiJsonwebtokens,
  orm: FaDatabase,
  react: SiReact,
  javascript: SiJavascript,
  html: SiHtml5,
  css: SiCss,
  tailwind: SiTailwindcss,
  redux: SiRedux,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  sql: FaDatabase,
  docker: SiDocker,
  git: SiGit,
  github: SiGithub,
  aws: FaAws,
  vercel: SiVercel,
  agile: FaSyncAlt,
  sdlc: FaCogs,
  problem: FaPuzzlePiece,
  integration: FaPlug,
};

/**
 * Technical Stack — two-column flow of category blocks. Each block has a
 * dot label, a grid of equal-width icon cards, and a row of tag pills.
 */
export default function TechPanel() {
  return (
    <section className="stack-section">
      <h2 className="stack__heading">
        Technical <span className="stack__heading-muted">Stack</span>
      </h2>

      <div className="stack__cols">
        {techStack.map((group) => (
          <div key={group.label} className="stack__group">
            <p className="stack__group-label">
              <span className="stack__dot" aria-hidden="true" />
              {group.label}
            </p>

            <div className="stack__cards">
              {group.cards.map((card) => {
                const Icon = ICONS[card.icon];
                return (
                  <div key={card.name} className="stack__card">
                    <span className="stack__card-icon" aria-hidden="true">
                      {Icon ? <Icon /> : null}
                    </span>
                    <span className="stack__card-name">{card.name}</span>
                    <span className="stack__card-desc">{card.desc}</span>
                  </div>
                );
              })}
            </div>

            <div className="stack__tags">
              {group.tags.map((tag) => (
                <span key={tag} className="stack__tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
