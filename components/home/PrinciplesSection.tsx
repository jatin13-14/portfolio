import { principles } from "@/lib/data/misc";
import { Section } from "@/components/ui/Section";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TiltCard } from "@/components/ui/TiltCard";

export function PrinciplesSection() {
  return (
    <Section eyebrow="I care about" title="Principles that show up in every project on this site.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {principles.map((principle, index) => (
          <RevealOnScroll key={principle.title} delay={Math.min(index * 0.05, 0.2)}>
            <TiltCard maxTilt={5} className="h-full">
              <div className="h-full rounded-xl2 border border-[var(--border)] bg-[var(--bg-raised)] p-6 transition-colors duration-300 hover:border-[var(--border-strong)]">
                <p className="text-base font-medium text-[var(--fg)]">{principle.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--fg-dim)]">{principle.description}</p>
              </div>
            </TiltCard>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
