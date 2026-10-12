import Link from "next/link";
import { profile, navLinks, links } from "@/lib/data/profile";
import { SocialLinks } from "@/components/layout/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-soft)]">
      <div className="container-content grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-sm font-semibold text-[var(--fg)]">{profile.name}</p>
          <p className="mt-2 text-sm text-[var(--fg-dim)]">{profile.title}</p>
          <p className="mt-4 text-xs text-[var(--fg-faint)]">React • Python • Django • AWS • AI</p>
          <p className="mt-1 text-xs text-[var(--fg-faint)]">{profile.location}</p>
        </div>

        <div>
          <p className="eyebrow mb-4">Navigate</p>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-[var(--fg-dim)] transition-colors hover:text-[var(--fg)]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Connect</p>
          <SocialLinks showResume={false} className="flex-col items-start gap-3" />
          <a href={links.email} className="mt-3 block text-sm text-[var(--fg-dim)] transition-colors hover:text-[var(--fg)]">
            {profile.email}
          </a>
        </div>

        <div>
          <p className="eyebrow mb-4">Built with</p>
          <p className="text-sm leading-relaxed text-[var(--fg-dim)]">
            Next.js, TypeScript, Tailwind CSS, and Framer Motion — with AI-assisted development throughout.
          </p>
        </div>
      </div>

      <div className="border-t border-[var(--border-soft)] py-6">
        <p className="container-content text-xs text-[var(--fg-faint)]">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
