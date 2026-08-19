import { Download } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type Props = {
  variant?: "default" | "outline" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
};

export function ResumeButton({ variant = "outline", size = "default", className }: Props) {
  const handleClick = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    try {
      const res = await fetch(profile.resumeUrl, { method: "HEAD" });
      const type = res.headers.get("content-type") ?? "";
      if (res.ok && type.includes("pdf")) {
        window.open(profile.resumeUrl, "_blank", "noopener,noreferrer");
        return;
      }
    } catch {
      /* falls through to the notice below */
    }
    toast("Resume not uploaded yet", {
      description: `The PDF can be added later at ${profile.resumeUrl}. Meanwhile, reach out at ${profile.email}.`,
    });
  };

  return (
    <Button asChild variant={variant} size={size} className={cn("group", className)}>
      <a href={profile.resumeUrl} onClick={handleClick}>
        <Download className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
        Download Resume
      </a>
    </Button>
  );
}
