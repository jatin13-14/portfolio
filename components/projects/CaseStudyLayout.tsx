import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/data/projects";
import { projects } from "@/lib/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArchitectureDiagram } from "@/components/projects/ArchitectureDiagram";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

function InfoBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="eyebrow mb-3">{title}</h2>
      {children}
    </div>
  );
}

function InfoList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-[var(--fg-dim)]">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--fg-faint)]" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function CaseStudyLayout({ project }: { project: Project }) {
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const hasLinks = project.links.github || project.links.demo;

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
            <p className="eyebrow mb-4">{project.tagline}</p>
            <h1 className="text-display-md font-semibold text-[var(--fg)] text-balance">{project.title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-[var(--fg-dim)]">{project.subtitle}</p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="mt-8 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </RevealOnScroll>

          {hasLinks && (
            <RevealOnScroll delay={0.15} className="mt-8 flex flex-wrap gap-3">
              {project.links.github && (
                <Button href={project.links.github} external variant="secondary" size="sm" icon={<Github className="h-3.5 w-3.5" />}>
                  Repository
                </Button>
              )}
              {project.links.demo && (
                <Button href={project.links.demo} external variant="secondary" size="sm" showArrow>
                  Live demo
                </Button>
              )}
            </RevealOnScroll>
          )}
        </div>
      </header>

      <div className="section pt-12">
        <div className="container-content grid gap-16">
          <div className="grid gap-10 sm:grid-cols-2">
            <RevealOnScroll>
              <InfoBlock title="Problem">
                <p className="text-base leading-relaxed text-[var(--fg)]">{project.problem}</p>
              </InfoBlock>
            </RevealOnScroll>
            <RevealOnScroll delay={0.05}>
              <InfoBlock title="Solution">
                <p className="text-base leading-relaxed text-[var(--fg)]">{project.solution}</p>
              </InfoBlock>
            </RevealOnScroll>
          </div>

          {project.context && (
            <RevealOnScroll>
              <InfoBlock title="Context">
                <p className="max-w-3xl text-base leading-relaxed text-[var(--fg-dim)]">{project.context}</p>
              </InfoBlock>
            </RevealOnScroll>
          )}

          <RevealOnScroll>
            <InfoBlock title="Architecture">
              <ArchitectureDiagram flow={project.architecture.flow} branches={project.architecture.branches} />
            </InfoBlock>
          </RevealOnScroll>

          <div className="grid gap-10 sm:grid-cols-2">
            <RevealOnScroll>
              <InfoBlock title="What I built">
                <InfoList items={project.whatIBuilt} />
              </InfoBlock>
            </RevealOnScroll>
            <RevealOnScroll delay={0.05}>
              <InfoBlock title="My role">
                <InfoList items={project.myRole} />
              </InfoBlock>
            </RevealOnScroll>
          </div>

          <RevealOnScroll>
            <InfoBlock title="Engineering challenge">
              <p className="max-w-3xl text-base leading-relaxed text-[var(--fg)]">{project.challenge}</p>
            </InfoBlock>
          </RevealOnScroll>

          <div className="grid gap-10 sm:grid-cols-2">
            <RevealOnScroll>
              <InfoBlock title="Key features">
                <InfoList items={project.keyFeatures} />
              </InfoBlock>
            </RevealOnScroll>
            {project.technicalDecisions && (
              <RevealOnScroll delay={0.05}>
                <InfoBlock title="Technical decisions">
                  <InfoList items={project.technicalDecisions} />
                </InfoBlock>
              </RevealOnScroll>
            )}
          </div>

          {project.caveats && project.caveats.length > 0 && (
            <RevealOnScroll className="rounded-xl2 border border-dashed border-[var(--border-strong)] p-6">
              <p className="eyebrow mb-3">Scope note</p>
              <div className="space-y-2">
                {project.caveats.map((caveat) => (
                  <p key={caveat} className="text-sm leading-relaxed text-[var(--fg-faint)]">
                    {caveat}
                  </p>
                ))}
              </div>
            </RevealOnScroll>
          )}

          <RevealOnScroll className="rounded-xl2 border border-[var(--border)] bg-[var(--bg-raised)] p-6 sm:p-8">
            <p className="eyebrow mb-2">Screenshots</p>
            <p className="text-sm leading-relaxed text-[var(--fg-faint)]">
              Product screenshots for {project.title} go here — drop images into{" "}
              <code className="rounded bg-[var(--bg)] px-1.5 py-0.5 text-xs">/public/projects/{project.slug}/</code> and
              reference them in this section.
            </p>
          </RevealOnScroll>

          {project.slug === "healthbook" && (
            <RevealOnScroll>
              <Link
                href="/case-study/healthcare"
                className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--fg)] transition-colors hover:text-[var(--accent)]"
              >
                Read the deeper healthcare engineering case study
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-smooth group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
              </Link>
            </RevealOnScroll>
          )}
        </div>
      </div>

      <div className="section border-t border-[var(--border-soft)]">
        <div className="container-content">
          <Link
            href={`/work/${nextProject.slug}`}
            className="group flex flex-col gap-4 rounded-xl2 border border-[var(--border)] bg-[var(--bg-raised)] p-8 transition-colors duration-300 hover:border-[var(--border-strong)] sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="eyebrow mb-2">Next project</p>
              <p className="text-2xl font-semibold text-[var(--fg)]">{nextProject.title}</p>
            </div>
            <ArrowUpRight className="h-6 w-6 shrink-0 text-[var(--fg-faint)] transition-transform duration-300 ease-smooth group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--fg)]" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
