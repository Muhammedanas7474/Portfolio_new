"use client";

import TextReveal from "@/components/ui/TextReveal";
import { contactColumns, layerCopy, personalInfo, socialLinks } from "@/lib/constants";

function SwapLink({ label, active, url }: { label: string; active: string; url: string }) {
  const isExternal = url.startsWith("http");

  return (
    <a
      href={url}
      className="link-swap h3"
      data-cursor="extend"
      {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <span className="link-swap__inner">
        <span className="link-swap__label">{label}</span>
        <span className="link-swap__label link-swap__label--active">{active}</span>
      </span>
    </a>
  );
}

export default function Contact() {
  return (
    <section className="container_content" style={{ paddingTop: "12.5rem", paddingBottom: "6rem" }}>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-8 md:col-start-3">
          <p className="body-text">{layerCopy.contact.label}</p>

          <TextReveal>
            <span className="h1" style={{ margin: 0, display: "block" }}>
              {layerCopy.stack.cta}
            </span>
          </TextReveal>

          <div className="grid grid-cols-12 gap-x-6 gap-y-10" style={{ marginTop: "4rem" }}>
            {contactColumns.map((column, index) => (
              <ul key={index} className="col-span-12 md:col-span-4">
                {column.map((link) => (
                  <li key={link.label} style={{ borderTop: "1px solid var(--border)", padding: "1.125rem 0" }}>
                    <SwapLink {...link} />
                  </li>
                ))}
              </ul>
            ))}

            <div className="col-span-12 md:col-span-4">
              <ul>
                <li style={{ borderTop: "1px solid var(--border)", padding: "1.125rem 0" }}>
                  <a
                    className="link-swap h3"
                    href={`mailto:${personalInfo.email}`}
                    data-cursor="extend"
                  >
                    <span className="link-swap__inner">
                      <span className="link-swap__label">Email</span>
                      <span className="link-swap__label link-swap__label--active">
                        Say hello
                      </span>
                    </span>
                  </a>
                </li>
                <li style={{ borderTop: "1px solid var(--border)", padding: "1.125rem 0" }}>
                  <a
                    className="link-swap h3"
                    href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                    data-cursor="extend"
                  >
                    <span className="link-swap__inner">
                      <span className="link-swap__label">Phone</span>
                      <span className="link-swap__label link-swap__label--active">
                        Call me
                      </span>
                    </span>
                  </a>
                </li>
                <li style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "1.125rem 0" }}>
                  <p className="h3" style={{ color: "var(--muted)" }}>
                    {personalInfo.location}
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="flex flex-wrap items-center gap-x-6 gap-y-3"
            style={{ marginTop: "5rem", paddingRight: "7rem" }}
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="desc"
                style={{ color: "var(--muted)" }}
                data-cursor="extend"
              >
                {social.name}
              </a>
            ))}
            <span className="desc" style={{ color: "var(--muted)", marginLeft: "auto" }}>
              © {new Date().getFullYear()} {personalInfo.name}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
