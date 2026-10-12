"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { experience } from "@/lib/data/experience";
import { Section } from "@/components/ui/Section";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ArchitectureDiagram } from "@/components/projects/ArchitectureDiagram";
import { cn } from "@/lib/utils";

export function ExperienceTimeline() {
  const [openId, setOpenId] = useState<string>(experience[0].id);

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="From independent product builds to backend systems running in production."
    >
      <div className="flex flex-col divide-y divide-[var(--border-soft)] border-t border-[var(--border-soft)]">
        {experience.map((entry, index) => {
          const isOpen = openId === entry.id;
          return (
            <RevealOnScroll key={entry.id} delay={Math.min(index * 0.05, 0.15)}>
              <div className="py-8">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? "" : entry.id)}
                  aria-expanded={isOpen}
                  aria-controls={`experience-${entry.id}`}
                  className="flex w-full flex-col items-start justify-between gap-3 text-left sm:flex-row sm:items-center"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                    <span className="font-mono text-xs text-[var(--fg-faint)] sm:w-32">{entry.period}</span>
                    <div>
                      <p className="text-lg font-medium text-[var(--fg)]">{entry.role}</p>
                      <p className="text-sm text-[var(--fg-dim)]">
                        {entry.org} — {entry.location}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={cn("h-4 w-4 shrink-0 text-[var(--fg-faint)] transition-transform duration-300", isOpen && "rotate-180")}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div id={`experience-${entry.id}`} className="mt-6 max-w-3xl space-y-6 sm:pl-[9.5rem]">
                    <p className="text-sm leading-relaxed text-[var(--fg-dim)]">{entry.summary}</p>

                    <ul className="space-y-2.5">
                      {entry.highlights.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed text-[var(--fg)]">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--fg-faint)]" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {entry.callout && (
                      <p className="border-l-2 border-[var(--accent)] pl-4 text-sm leading-relaxed text-[var(--fg-dim)]">
                        {entry.callout}
                      </p>
                    )}

                    {entry.architecture && (
                      <div className="grid gap-4 sm:grid-cols-2">
                        {entry.architecture.map((diagram) => (
                          <ArchitectureDiagram
                            key={diagram.flow.join("-")}
                            orientation="horizontal"
                            flow={diagram.flow.map((label) => ({ label }))}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </Section>
  );
}
