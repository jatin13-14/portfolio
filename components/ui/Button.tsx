import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type BaseProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "sm";
  className?: string;
  showArrow?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  "aria-label"?: string;
};

type ButtonAsLink = BaseProps & {
  href: string;
  external?: boolean;
  onClick?: never;
};

type ButtonAsButton = BaseProps & {
  href?: undefined;
  onClick?: () => void;
  external?: never;
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-smooth focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] whitespace-nowrap";

const variants: Record<NonNullable<BaseProps["variant"]>, string> = {
  primary: "bg-[var(--fg)] text-[var(--bg)] hover:opacity-90",
  secondary: "border border-[var(--border-strong)] text-[var(--fg)] hover:bg-[var(--bg-raised)] hover:border-[var(--border-strong)]",
  ghost: "text-[var(--fg-dim)] hover:text-[var(--fg)]",
};

const sizes: Record<NonNullable<BaseProps["size"]>, string> = {
  md: "px-5 py-2.5 text-sm",
  sm: "px-4 py-2 text-xs",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  showArrow,
  disabled,
  icon,
  href,
  external,
  onClick,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    disabled && "pointer-events-none opacity-40",
    className
  );

  const content = (
    <>
      {icon}
      {children}
      {showArrow && <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />}
    </>
  );

  if (disabled) {
    return (
      <span className={classes} aria-disabled="true" aria-label={ariaLabel}>
        {content}
      </span>
    );
  }

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noreferrer noopener" className={classes} aria-label={ariaLabel}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} aria-label={ariaLabel}>
      {content}
    </button>
  );
}
