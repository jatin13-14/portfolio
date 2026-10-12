import { FileDown, Eye } from "lucide-react";
import { links } from "@/lib/data/profile";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function ResumeSection() {
  return (
    <Section>
      <RevealOnScroll className="flex flex-col items-start justify-between gap-6 rounded-xl2 border border-[var(--border)] bg-[var(--bg-raised)] p-8 sm:flex-row sm:items-center sm:p-10">
        <div>
          <p className="text-xl font-semibold text-[var(--fg)]">Want the complete version?</p>
          <p className="mt-2 text-sm text-[var(--fg-dim)]">
            The full breakdown of roles, responsibilities, and dates in one document.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={links.resume} external variant="secondary" icon={<Eye className="h-4 w-4" />}>
            View Resume
          </Button>
          <Button href={links.resume} external icon={<FileDown className="h-4 w-4" />}>
            Download Resume
          </Button>
        </div>
      </RevealOnScroll>
    </Section>
  );
}
