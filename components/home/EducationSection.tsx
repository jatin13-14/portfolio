import { ExternalLink } from "lucide-react";
import { education, certifications, publications } from "@/lib/data/misc";
import { Section } from "@/components/ui/Section";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function EducationSection() {
  return (
    <Section eyebrow="Education & Certifications" title="Background">
      <div className="grid gap-10 sm:grid-cols-3">
        <RevealOnScroll>
          <p className="eyebrow mb-4">Education</p>
          <p className="text-base font-medium text-[var(--fg)]">{education.degree}</p>
          <p className="mt-1 text-sm text-[var(--fg-dim)]">{education.school}</p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.05}>
          <p className="eyebrow mb-4">Certifications</p>
          <ul className="space-y-4">
            {certifications.map((cert) => (
              <li key={cert.title}>
                <p className="text-sm font-medium text-[var(--fg)]">{cert.title}</p>
                <p className="text-xs text-[var(--fg-faint)]">{cert.issuer}</p>
                {cert.detail && <p className="mt-1 text-xs text-[var(--fg-faint)]">{cert.detail}</p>}
              </li>
            ))}
          </ul>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <p className="eyebrow mb-4">Publication</p>
          <ul className="space-y-4">
            {publications.map((pub) =>
              pub.url ? (
                <li key={pub.title}>
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-start gap-1.5 text-sm font-medium text-[var(--fg)] transition-colors hover:text-[var(--accent)]"
                  >
                    {pub.title}
                    <ExternalLink className="mt-0.5 h-3 w-3 shrink-0" aria-hidden="true" />
                  </a>
                  <p className="text-xs text-[var(--fg-faint)]">{pub.venue}</p>
                </li>
              ) : (
                <li key={pub.title}>
                  <p className="text-sm font-medium text-[var(--fg)]">{pub.title}</p>
                  <p className="text-xs text-[var(--fg-faint)]">{pub.venue}</p>
                </li>
              )
            )}
          </ul>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
