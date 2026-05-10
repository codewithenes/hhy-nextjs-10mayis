import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-hhy-surface)] px-4">
      <div className="max-w-md text-center">
        <div className="text-8xl font-bold gradient-text mb-4">404</div>
        <h2 className="mt-4 text-xl font-semibold text-[var(--color-hhy-charcoal)]">Page not found</h2>
        <p className="mt-3 text-sm text-[var(--color-hhy-muted-text)]">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-hhy-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-hhy-dark)] transition-all hover:shadow-[0_4px_16px_rgba(1,208,145,0.3)]"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
