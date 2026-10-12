import { profile } from "@/lib/data/profile";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const domains = [
  "Backend systems",
  "Frontend applications",
  "Data pipelines",
  "Automation",
  "Cloud infrastructure",
  "AI-assisted product development",
];

export function PersonalStatement() {
  return (
    <section className="section border-t border-[var(--border-soft)]">
      <div className="container-content">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <RevealOnScroll>
            <p className="text-display-sm font-semibold text-[var(--fg)] text-balance">{profile.statement.lead}</p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--fg-dim)]">{profile.statement.body}</p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="grid grid-cols-2 gap-3">
              {domains.map((domain) => (
                <div key={domain} className="card-surface rounded-xl p-4">
                  <p className="text-sm text-[var(--fg)]">{domain}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
