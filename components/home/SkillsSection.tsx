import { skillCategories } from "@/lib/data/skills";
import { Section } from "@/components/ui/Section";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Badge } from "@/components/ui/Badge";

export function SkillsSection() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I actually work with, day to day."
      subtitle="Grouped by where it fits in the stack — not ranked by percentage bars."
    >
      <div className="grid gap-px overflow-hidden rounded-xl2 border border-[var(--border)] bg-[var(--border-soft)] sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category, index) => (
          <RevealOnScroll key={category.id} delay={Math.min(index * 0.04, 0.16)} className="bg-[var(--bg)] p-6">
            <p className="text-sm font-medium text-[var(--fg)]">{category.label}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <Badge
                  key={item}
                  className="transition-colors duration-200 hover:border-[var(--border-strong)] hover:text-[var(--fg)]"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
