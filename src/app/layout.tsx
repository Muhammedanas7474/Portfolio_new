import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/layout/ClientProviders";
import JsonLd from "@/components/seo/JsonLd";
import { personalInfo, siteConfig } from "@/lib/constants";

/* One family carries every role on this page — display, body and labels —
   so weight and tracking alone do the hierarchical work. */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const title = `${personalInfo.name} | Software Engineer, Python & Django Developer`;
const description =
  "Muhammed Anas K is a Software Engineer and Full Stack Developer based in Kerala, India, building secure banking platforms, scalable Django/Python backends, and AI-powered web applications with React. Open to full-time and remote software engineering roles.";
const keywords = [
  "Muhammed Anas",
  "Muhammed Anas K",
  "Software Engineer",
  "Python Developer",
  "Django Developer",
  "Full Stack Developer",
  "Backend Developer",
  "REST API Developer",
  "FinTech Developer",
  "AI Web Developer",
  "React Developer",
  "Software Engineer Kerala",
  "Remote Software Engineer India",
];

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s | ${personalInfo.name}`,
  },
  description,
  keywords,
  authors: [{ name: personalInfo.name, url: siteConfig.url }],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased bg-bg text-text-primary md:cursor-none cursor-none-all">
        <JsonLd />
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
