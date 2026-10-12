import { projects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Section } from "@/components/ui/Section";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function FeaturedWork() {
  return (
    <Section
      id="work"
      eyebrow="Selected Work"
      title="Products and systems I've designed, built, shipped, and experimented with."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, index) => (
          <RevealOnScroll key={project.slug} delay={Math.min(index * 0.05, 0.2)} className={project.weight === "primary" ? "sm:col-span-2" : undefined}>
            <ProjectCard project={project} index={index} />
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
