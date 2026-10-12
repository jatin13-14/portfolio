import { homepageStory } from "@/lib/data/misc";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TiltCard } from "@/components/ui/TiltCard";

export function HomeStory() {
  return (
    <section className="section border-t border-[var(--border-soft)]" aria-label="How this site is organized">
      <div className="container-content">
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homepageStory.map((item, index) => (
            <RevealOnScroll key={item.step} delay={index * 0.04} as="li">
              <TiltCard maxTilt={4} className="h-full">
                <div className="h-full rounded-xl border border-[var(--border)] bg-[var(--bg-raised)] p-5 transition-colors duration-300 hover:border-[var(--border-strong)]">
                  <span className="font-mono text-xs text-[var(--fg-faint)]">{item.step}</span>
                  <p className="mt-2 text-xs uppercase tracking-wide text-[var(--fg-faint)]">{item.label}</p>
                  <p className="mt-1 text-sm text-[var(--fg)]">{item.value}</p>
                </div>
              </TiltCard>
            </RevealOnScroll>
          ))}
        </ol>
      </div>
    </section>
  );
}
