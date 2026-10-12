import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="container-content flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-mono text-sm text-[var(--fg-faint)]">404</p>
      <h1 className="mt-4 text-display-sm font-semibold text-[var(--fg)]">This page doesn&rsquo;t exist.</h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--fg-dim)]">
        The page you&rsquo;re looking for isn&rsquo;t here. It might have moved, or the link might be outdated.
      </p>
      <Button href="/" className="mt-8">
        Back to home
      </Button>
      <Link href="/#work" className="mt-4 text-sm text-[var(--fg-faint)] transition-colors hover:text-[var(--fg)]">
        Or browse the work
      </Link>
    </div>
  );
}
