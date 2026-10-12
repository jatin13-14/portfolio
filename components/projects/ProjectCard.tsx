import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data/projects";
import { Badge } from "@/components/ui/Badge";
import { TiltCard } from "@/components/ui/TiltCard";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isPrimary = project.weight === "primary";

  return (
    <TiltCard className="h-full" maxTilt={6}>
      <Link
        href={`/work/${project.slug}`}
        className={cn(
          "group relative flex h-full flex-col justify-between overflow-hidden rounded-xl2 border border-[var(--border)] bg-[var(--bg-raised)] p-6 shadow-[0_1px_0_rgba(255,255,255,0.02)] transition-colors duration-300 ease-smooth hover:border-[var(--border-strong)] hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.55)] sm:p-8",
          isPrimary ? "min-h-[280px] sm:col-span-2" : "min-h-[220px]"
        )}
      >
        <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,var(--border-soft),transparent_60%)]" />

        <div style={{ transform: "translateZ(24px)" }}>
          <div className="flex items-start justify-between gap-4">
            <span className="text-xs font-mono text-[var(--fg-faint)]">{String(index + 1).padStart(2, "0")}</span>
            <ArrowUpRight
              className="h-4 w-4 shrink-0 text-[var(--fg-faint)] transition-transform duration-300 ease-smooth group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--fg)]"
              aria-hidden="true"
            />
          </div>

          <h3 className={cn("mt-6 font-semibold text-[var(--fg)] text-balance", isPrimary ? "text-2xl sm:text-3xl" : "text-xl")}>
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--fg-dim)]">{project.subtitle}</p>
        </div>

        <div className="mt-8" style={{ transform: "translateZ(16px)" }}>
          <p className="mb-3 text-xs text-[var(--fg-faint)]">{project.tagline}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, isPrimary ? 6 : 4).map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
      </Link>
    </TiltCard>
  );
}
