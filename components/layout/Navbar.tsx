"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { profile, navLinks } from "@/lib/data/profile";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar({ resumeAvailable }: { resumeAvailable: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled ? "border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-md" : "border-b border-transparent"
      )}
    >
      <nav className="container-content flex h-16 items-center justify-between" aria-label="Primary">
        <Link href="/" className="text-sm font-semibold tracking-tight text-[var(--fg)]">
          {profile.logoMark}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-[var(--fg-dim)] transition-colors duration-200 hover:text-[var(--fg)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <SocialLinks showResume={resumeAvailable} />
        </div>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg)] md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {mobileOpen && (
        <div id="mobile-menu" className="border-t border-[var(--border)] bg-[var(--bg)] md:hidden">
          <ul className="container-content flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base text-[var(--fg)] transition-colors hover:bg-[var(--bg-raised)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="container-content flex items-center justify-between border-t border-[var(--border-soft)] py-4">
            <ThemeToggle />
            <SocialLinks showResume={resumeAvailable} />
          </div>
        </div>
      )}
    </header>
  );
}
