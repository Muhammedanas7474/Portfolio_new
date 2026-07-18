import { personalInfo, siteConfig, socialLinks } from "@/lib/constants";

function safeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.shortRole,
    description: personalInfo.tagline,
    email: `mailto:${personalInfo.email}`,
    telephone: personalInfo.phone,
    url: siteConfig.url,
    image: `${siteConfig.url}/profile.jpg`,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    sameAs: socialLinks.map((link) => link.url),
    knowsAbout: [
      "Python",
      "Django",
      "React",
      "REST APIs",
      "PostgreSQL",
      "Docker",
      "FastAPI",
      "FinTech Software Development",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: personalInfo.tagline,
    author: {
      "@type": "Person",
      name: personalInfo.name,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
    </>
  );
}
