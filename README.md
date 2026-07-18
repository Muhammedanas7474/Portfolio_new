# Muhammed Anas K — Portfolio

Personal portfolio of Muhammed Anas K, a Software Engineer specializing in Python, Django, React, and REST API development for banking/FinTech platforms.

Live sections: Hero, About, Skills, Experience, Projects, Education, and Contact — built as a single-page, cinematic, dark-themed site.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- React Three Fiber / Three.js (hero background)
- Lucide React icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
  app/          Routes, layout, SEO metadata, sitemap/robots/manifest
  components/
    layout/     Navbar, Footer, scroll progress
    sections/   Hero, About, Skills, Experience, Projects, Education, Contact
    three/      Hero WebGL background (React Three Fiber)
    ui/         Reusable primitives (buttons, cards, counters, cursor)
    seo/        JSON-LD structured data
  hooks/        Custom React hooks
  lib/          Site content/config, animation variants, utilities
  types/        Shared TypeScript types
```

## Environment Variables (optional)

To enable the contact form to send email via [EmailJS](https://www.emailjs.com/) instead of falling back to `mailto:`:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

To set the canonical site URL used in metadata and sitemaps:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Deployment

Deploy on [Vercel](https://vercel.com/new) or any Node.js host that supports Next.js.
