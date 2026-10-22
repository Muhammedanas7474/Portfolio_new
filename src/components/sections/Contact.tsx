"use client";

import { contactColumns, layerCopy, personalInfo } from "@/lib/constants";

/**
 * Connect — two columns of large triangle-bulleted social links plus a
 * quiet Email/Phone block on the right. Hover fills an accent bar behind
 * the link, inverts the text, and swaps the label.
 */
export default function Contact() {
  return (
    <section
      className="connect-section"
      style={{
        paddingTop: "clamp(6rem, 18vw, 12.5rem)",
        paddingBottom: "clamp(4rem, 9vw, 6rem)",
      }}
    >
      <p className="body-text connect__label">{layerCopy.contact.label}</p>

      <div className="connect__grid">
        {contactColumns.map((column, index) => (
          <ul key={index} className="connect__list">
            {column.map((link) => {
              const isExternal = link.url.startsWith("http");

              return (
                <li key={link.label}>
                  <a
                    href={link.url}
                    className="connect__link"
                    data-cursor="extend"
                    {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    <span className="connect__marker" aria-hidden="true" />
                    <span className="connect__swap">
                      <span className="connect__bar" aria-hidden="true" />
                      <span className="connect__label-rest">{link.label}</span>
                      <span className="connect__label-active">{link.active}</span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        ))}

        <div className="connect__contact">
          <a
            href={`mailto:${personalInfo.email}`}
            className="connect__field"
            data-cursor="extend"
          >
            <span className="connect__bar" aria-hidden="true" />
            <span className="connect__field-top">
              <span className="connect__label-rest">Email</span>
              <span className="connect__label-active">100% chance I read it</span>
            </span>
            <span className="connect__field-value">{personalInfo.email}</span>
          </a>
          <a
            href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
            className="connect__field"
            data-cursor="extend"
          >
            <span className="connect__bar" aria-hidden="true" />
            <span className="connect__field-top">
              <span className="connect__label-rest">Phone</span>
              <span className="connect__label-active">90% chance I don&apos;t pickup</span>
            </span>
            <span className="connect__field-value">{personalInfo.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
