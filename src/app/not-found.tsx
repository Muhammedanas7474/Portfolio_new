import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-hero-bg">
      <div className="text-center">
        <h1
          style={{ fontFamily: "var(--font-heading)" }}
          className="text-7xl md:text-9xl font-bold text-hero-orange mb-4"
        >
          404
        </h1>
        <p className="text-beige/55 text-lg mb-8">
          Oops! This page doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wider text-hero-bg bg-hero-orange hover:bg-hero-orange/90 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
