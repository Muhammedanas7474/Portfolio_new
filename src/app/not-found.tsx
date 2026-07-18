import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-4">
          404
        </h1>
        <p className="text-text-secondary text-lg mb-8">
          Oops! This page doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3.5 rounded-xl font-medium text-white transition-all duration-300 hover:shadow-lg"
          style={{
            background:
              "linear-gradient(135deg, var(--color-accent), var(--color-accent-blue))",
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
