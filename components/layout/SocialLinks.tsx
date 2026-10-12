import { Github, Linkedin } from "lucide-react";
import { links } from "@/lib/data/profile";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
  size?: "sm" | "md";
  className?: string;
  showResume?: boolean;
};

export function SocialLinks({ size = "sm", className, showResume = true }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Button
        href={links.github || "#"}
        external={Boolean(links.github)}
        variant="ghost"
        size={size}
        disabled={!links.github}
        icon={<Github className="h-4 w-4" />}
        aria-label="GitHub"
      >
        <span className="sr-only sm:not-sr-only">GitHub</span>
      </Button>
      <Button
        href={links.linkedin || "#"}
        external={Boolean(links.linkedin)}
        variant="ghost"
        size={size}
        disabled={!links.linkedin}
        icon={<Linkedin className="h-4 w-4" />}
        aria-label="LinkedIn"
      >
        <span className="sr-only sm:not-sr-only">LinkedIn</span>
      </Button>
      {showResume && (
        <Button href={links.resume} external variant="secondary" size={size}>
          Resume
        </Button>
      )}
    </div>
  );
}
