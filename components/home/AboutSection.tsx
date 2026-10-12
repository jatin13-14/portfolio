import { profile } from "@/lib/data/profile";
import { Section } from "@/components/ui/Section";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function AboutSection() {
  return (
    <Section id="about" eyebrow="About" title="A little about how I got here.">
      <RevealOnScroll className="max-w-2xl space-y-5">
        {profile.about.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-base leading-relaxed text-[var(--fg-dim)]">
            {paragraph}
          </p>
        ))}
      </RevealOnScroll>
    </Section>
  );
}
