import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/layout/ClientProviders";
import JsonLd from "@/components/seo/JsonLd";
import { personalInfo, siteConfig } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

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
  themeColor: "#080808",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-bg text-text-primary antialiased selection:bg-accent/30 selection:text-accent`}
      >
        <JsonLd />
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
