import { Mail } from "lucide-react";
import { profile, links } from "@/lib/data/profile";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function ContactSection() {
  return (
    <section id="contact" className="section border-t border-[var(--border-soft)]">
      <div className="container-content">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <h2 className="text-display-md font-semibold text-[var(--fg)] text-balance">Have a problem worth building?</h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--fg-dim)]">
            I&rsquo;m interested in building useful products, solving complex engineering problems, and experimenting
            with AI-native software.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button href={links.email} icon={<Mail className="h-4 w-4" />}>
              Email me
            </Button>
            <Button href={links.linkedin || "#"} external={Boolean(links.linkedin)} variant="secondary" disabled={!links.linkedin}>
              LinkedIn
            </Button>
            <Button href={links.github || "#"} external={Boolean(links.github)} variant="secondary" disabled={!links.github}>
              GitHub
            </Button>
          </div>

          <p className="mt-8 text-sm text-[var(--fg-faint)]">{profile.email}</p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
