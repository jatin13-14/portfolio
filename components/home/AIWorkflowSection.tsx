import { ArrowRight } from "lucide-react";
import { aiWorkflowSteps, aiTools, aiUseCases } from "@/lib/data/misc";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function AIWorkflowSection() {
  return (
    <Section
      id="lab"
      eyebrow="How I build with AI"
      title="AI accelerates implementation. Engineering judgment remains human-owned."
      subtitle="AI isn't a replacement for engineering judgment — it's a layer inside a workflow I still own end to end."
    >
      <RevealOnScroll className="card-surface rounded-xl2 p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-y-4">
          {aiWorkflowSteps.map((step, index) => (
            <div key={step} className="flex items-center">
              <span className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-4 py-2 text-sm text-[var(--fg)]">
                {step}
              </span>
              {index < aiWorkflowSteps.length - 1 && (
                <ArrowRight className="mx-2 h-3.5 w-3.5 shrink-0 text-[var(--fg-faint)]" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </RevealOnScroll>

      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        <RevealOnScroll delay={0.05}>
          <p className="eyebrow mb-4">Tools I use</p>
          <div className="flex flex-wrap gap-2">
            {aiTools.map((tool) => (
              <Badge key={tool} className="text-[var(--fg)]">
                {tool}
              </Badge>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <p className="eyebrow mb-4">Where AI helps</p>
          <div className="flex flex-wrap gap-2">
            {aiUseCases.map((useCase) => (
              <Badge key={useCase}>{useCase}</Badge>
            ))}
          </div>
        </RevealOnScroll>
      </div>

      <RevealOnScroll delay={0.15} className="mt-10 max-w-2xl border-l-2 border-[var(--accent)] pl-5">
        <p className="text-base leading-relaxed text-[var(--fg-dim)]">
          I use AI for boilerplate, refactoring, debugging, test generation, API scaffolding, documentation, exploring
          implementation approaches, and automation workflows — but architecture decisions, validation, and final code
          quality stay mine.
        </p>
      </RevealOnScroll>
    </Section>
  );
}
