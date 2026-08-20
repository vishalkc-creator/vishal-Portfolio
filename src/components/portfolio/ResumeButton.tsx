import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type Props = {
  variant?: "default" | "outline" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
};

export function ResumeButton({ variant = "outline", size = "default", className }: Props) {
  return (
    <Button asChild variant={variant} size={size} className={cn("group", className)}>
      <a href={profile.resumeUrl} download="vishal-chauhan-resume.pdf">
        <Download className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
        Download Resume
      </a>
    </Button>
  );
}
