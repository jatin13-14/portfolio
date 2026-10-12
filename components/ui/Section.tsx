import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
};

export function Section({ id, eyebrow, title, subtitle, children, className, headerClassName }: SectionProps) {
  return (
    <section id={id} className={cn("section border-t border-[var(--border-soft)]", className)}>
      <div className="container-content">
        {(eyebrow || title || subtitle) && (
          <div className={cn("mb-12 max-w-2xl", headerClassName)}>
            {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
            {title && <h2 className="text-display-sm font-semibold text-[var(--fg)] text-balance">{title}</h2>}
            {subtitle && <p className="mt-4 text-base leading-relaxed text-[var(--fg-dim)]">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
