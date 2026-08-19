import { ArrowRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { ResumeButton } from "./ResumeButton";

const terminalLines = [
  { prompt: "$", text: "python learning.py --focus web-development" },
  { prompt: ">", text: "skills = ['HTML', 'CSS', 'Python', 'C++']" },
  { prompt: ">", text: "goal = 'Internship & entry-level opportunity'" },
  { prompt: ">", text: "status = 'Open to opportunities'" },
];

export function Hero() {
  return (
    <section id="home" className="hero-glow relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
            Open to internships &amp; entry-level roles
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
            <span className="text-gradient">{profile.name}</span>
          </h1>
          <p className="mt-4 font-display text-lg font-medium text-primary sm:text-xl">{profile.headline}</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="group">
              <a href="#projects">
                View My Projects
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="#contact">
                <Mail className="size-4" aria-hidden="true" />
                Contact Me
              </a>
            </Button>
            <ResumeButton size="lg" />
          </div>

          <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-primary" aria-hidden="true" />
            {profile.location}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl"
              aria-hidden="true"
            />
            <div className="glass-card relative rounded-2xl shadow-[var(--shadow-elevated)]">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="size-3 rounded-full bg-destructive/70" aria-hidden="true" />
                <span className="size-3 rounded-full bg-chart-4/80" aria-hidden="true" />
                <span className="size-3 rounded-full bg-chart-2/80" aria-hidden="true" />
                <span className="ml-2 text-xs text-muted-foreground">vishal — portfolio.sh</span>
              </div>
              <div className="space-y-3 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
                {terminalLines.map((line) => (
                  <p key={line.text} className="flex gap-2">
                    <span className="select-none text-primary">{line.prompt}</span>
                    <span className="text-muted-foreground">{line.text}</span>
                  </p>
                ))}
                <p className="flex gap-2">
                  <span className="select-none text-primary">$</span>
                  <span className="inline-block h-4 w-2 animate-pulse bg-primary align-middle" aria-hidden="true" />
                </p>
              </div>
              <div className="grid grid-cols-3 gap-px overflow-hidden rounded-b-2xl border-t border-border bg-border">
                {[
                  { label: "Focus", value: "Python" },
                  { label: "Building", value: "Web Apps" },
                  { label: "Based in", value: "Thane" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-card px-3 py-4 text-center">
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <p className="mt-1 font-display text-sm font-semibold text-foreground">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
