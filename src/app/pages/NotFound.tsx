import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-[var(--color-primary-500)]">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-[var(--color-neutral-900)]">Page Not Found</h2>
      <p className="mt-2 text-[var(--color-neutral-500)]">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-6 rounded-lg bg-[var(--color-primary-500)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--color-primary-600)] transition-colors"
      >
        Go to Home
      </Link>
    </div>
  );
}
