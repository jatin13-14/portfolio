import { ArrowDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Step = { label: string; detail?: string };
type Branch = { label: string; detail?: string };

type ArchitectureDiagramProps = {
  flow: Step[];
  branches?: Branch[];
  orientation?: "vertical" | "horizontal";
  className?: string;
};

/**
 * A dependency-free architecture diagram built from HTML/CSS, used across
 * case studies. Reads as a linear flow with optional side "branches" that
 * feed into or out of the main pipeline — no stock graphics.
 */
export function ArchitectureDiagram({ flow, branches, orientation = "vertical", className }: ArchitectureDiagramProps) {
  const isHorizontal = orientation === "horizontal";

  return (
    <div className={cn("card-surface rounded-xl2 p-6 sm:p-8", className)} role="img" aria-label={`Architecture diagram: ${flow.map((s) => s.label).join(" to ")}`}>
      <div
        className={cn(
          "flex gap-3",
          isHorizontal ? "flex-row flex-wrap items-stretch" : "flex-col items-stretch"
        )}
      >
        {flow.map((step, index) => (
          <div key={step.label} className={cn("flex items-center gap-3", isHorizontal ? "flex-row" : "flex-col")}>
            <div
              className={cn(
                "flex-1 rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-center sm:text-left",
                isHorizontal && "min-w-[9rem]"
              )}
            >
              <p className="text-sm font-medium text-[var(--fg)]">{step.label}</p>
              {step.detail && <p className="mt-0.5 text-xs text-[var(--fg-faint)]">{step.detail}</p>}
            </div>
            {index < flow.length - 1 && (
              <span className="shrink-0 text-[var(--fg-faint)]" aria-hidden="true">
                {isHorizontal ? <ArrowRight className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
              </span>
            )}
          </div>
        ))}
      </div>

      {branches && branches.length > 0 && (
        <div className="mt-6 border-t border-[var(--border-soft)] pt-6">
          <p className="eyebrow mb-3">Supporting layers</p>
          <div className="flex flex-wrap gap-3">
            {branches.map((branch) => (
              <div key={branch.label} className="rounded-lg border border-dashed border-[var(--border-strong)] px-4 py-2.5">
                <p className="text-sm font-medium text-[var(--fg)]">{branch.label}</p>
                {branch.detail && <p className="text-xs text-[var(--fg-faint)]">{branch.detail}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
