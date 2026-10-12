import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { healthcareCaseStudy } from "@/lib/data/misc";
import { ArchitectureDiagram } from "@/components/projects/ArchitectureDiagram";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: healthcareCaseStudy.title,
  description: healthcareCaseStudy.subtitle,
  alternates: { canonical: "/case-study/healthcare" },
};

export default function HealthcareCaseStudyPage() {
  return (
    <article>
      <header className="section border-t border-[var(--border-soft)] pb-0">
        <div className="container-content">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-[var(--fg-faint)] transition-colors hover:text-[var(--fg)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Back to work
          </Link>

          <RevealOnScroll className="mt-8 max-w-3xl">
            <p className="eyebrow mb-4">Case Study</p>
            <h1 className="text-display-md font-semibold text-[var(--fg)] text-balance">{healthcareCaseStudy.title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-[var(--fg-dim)]">{healthcareCaseStudy.subtitle}</p>
          </RevealOnScroll>
        </div>
      </header>

      <div className="section pt-12">
        <div className="container-content grid gap-16">
          <RevealOnScroll>
            <p className="eyebrow mb-3">Context</p>
            <p className="max-w-3xl text-base leading-relaxed text-[var(--fg)]">{healthcareCaseStudy.context}</p>
          </RevealOnScroll>

          <RevealOnScroll>
            <p className="eyebrow mb-3">Architecture</p>
            <ArchitectureDiagram
              flow={healthcareCaseStudy.architectureFlow.map((label) => ({ label }))}
              branches={healthcareCaseStudy.architectureSupport.map((label) => ({ label }))}
            />
          </RevealOnScroll>

          <RevealOnScroll>
            <p className="eyebrow mb-3">Integrations</p>
            <p className="mb-4 max-w-2xl text-sm text-[var(--fg-faint)]">
              Only integrations that were actually part of this work are listed below.
            </p>
            <div className="flex flex-wrap gap-2">
              {healthcareCaseStudy.integrations.map((integration) => (
                <Badge key={integration} className="text-[var(--fg)]">
                  {integration}
                </Badge>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="rounded-xl2 border border-[var(--border)] bg-[var(--bg-raised)] p-8">
            <p className="text-base leading-relaxed text-[var(--fg-dim)]">
              This case study sits alongside two related projects on this site — the personal HealthBook platform and
              the backend systems built at Fastest Healtech. Together they cover the same underlying idea: turning
              fragmented healthcare workflows into structured, reliable software.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/work/healthbook" variant="secondary" size="sm">
                View HealthBook
              </Button>
              <Button href="/#experience" variant="ghost" size="sm">
                View experience
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </article>
  );
}
