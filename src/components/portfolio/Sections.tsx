import {
  Brain,
  Briefcase,
  Code2,
  GraduationCap,
  Languages,
  Lightbulb,
  MessageSquare,
  Puzzle,
  Sparkles,
  Target,
  Terminal,
  Users,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { education, experience, profile, projects, skillGroups, strengths } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";
import { ResumeButton } from "./ResumeButton";

const skillIcons: Record<string, LucideIcon> = { code: Code2, terminal: Terminal, wrench: Wrench };
const strengthIcons: Record<string, LucideIcon> = {
  zap: Zap,
  users: Users,
  message: MessageSquare,
  puzzle: Puzzle,
  brain: Brain,
};

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Introduction" title="About Me" />
        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="glass-card h-full rounded-2xl p-6 sm:p-8">
              <p className="text-base leading-relaxed text-muted-foreground">{profile.about}</p>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <Languages className="size-4 text-primary" aria-hidden="true" />
                {profile.languages.map((lang) => (
                  <Badge key={lang} variant="secondary">
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-2">
            <ul className="grid h-full gap-4">
              {[
                { icon: Lightbulb, label: "Current Focus", value: "Python & Web Development" },
                { icon: Target, label: "Career Goal", value: "Industry Internship / Entry-Level Opportunity" },
                { icon: Briefcase, label: "Location", value: profile.shortLocation },
              ].map((card) => (
                <li
                  key={card.label}
                  className="glass-card flex items-start gap-4 rounded-2xl p-5 transition-colors hover:border-primary/50"
                >
                  <span className="rounded-xl bg-primary/10 p-2.5 text-primary">
                    <card.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {card.label}
                    </p>
                    <p className="mt-1 font-display text-sm font-semibold text-foreground">{card.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-y border-border bg-secondary/30 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Capabilities"
          title="Technical Skills"
          description="Foundations I am actively building through study, practice and project work."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = skillIcons[group.icon] ?? Code2;
            return (
              <Reveal key={group.title} delay={index * 90}>
                <article className="glass-card h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                  <span className="inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{group.title}</h3>
                  <ul className="mt-4 space-y-4">
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <p className="text-sm font-semibold text-foreground">{item.name}</p>
                        <p className="mt-0.5 text-sm text-muted-foreground">{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectLinks({ demoUrl, sourceUrl }: { demoUrl: string | null; sourceUrl: string | null }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {demoUrl ? (
        <Button asChild size="sm">
          <a href={demoUrl} target="_blank" rel="noreferrer noopener">
            View Project
          </a>
        </Button>
      ) : (
        <Button size="sm" variant="secondary" disabled title="Link coming soon">
          View Project — link coming soon
        </Button>
      )}
      {sourceUrl ? (
        <Button asChild size="sm" variant="outline">
          <a href={sourceUrl} target="_blank" rel="noreferrer noopener">
            Source Code
          </a>
        </Button>
      ) : (
        <Button size="sm" variant="outline" disabled title="Link coming soon">
          Source Code — link coming soon
        </Button>
      )}
    </div>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Work" title="Featured Projects" />
        <div className="grid gap-6 lg:grid-cols-2">
          {featured.map((project, index) => (
            <Reveal key={project.title} delay={index * 90}>
              <article className="glass-card group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-elevated)] sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <Badge variant="secondary">{project.status}</Badge>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                {project.purpose ? (
                  <dl className="mt-5 space-y-3 rounded-xl border border-border bg-secondary/40 p-4 text-sm">
                    <div>
                      <dt className="font-semibold text-foreground">Purpose</dt>
                      <dd className="text-muted-foreground">{project.purpose}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-foreground">Concept</dt>
                      <dd className="text-muted-foreground">{project.concept}</dd>
                    </div>
                  </dl>
                ) : null}
                {project.tech.length > 0 ? (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <li key={tech}>
                        <Badge variant="outline">{tech}</Badge>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <ProjectLinks demoUrl={project.demoUrl} sourceUrl={project.sourceUrl} />
              </article>
            </Reveal>
          ))}
        </div>

        {others.length > 0 ? (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {others.map((project) => (
              <Reveal key={project.title}>
                <article className="glass-card h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                  <div className="flex items-center gap-3">
                    <span className="rounded-xl bg-primary/10 p-2.5 text-primary">
                      <Sparkles className="size-4" aria-hidden="true" />
                    </span>
                    <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{project.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <li key={tech}>
                        <Badge variant="outline">{tech}</Badge>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-y border-border bg-secondary/30 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading eyebrow="Experience" title="Internship Experience" />
        <ol className="relative space-y-8 border-l border-border pl-6 sm:pl-8">
          {experience.map((item) => (
            <li key={item.org}>
              <Reveal>
                <span
                  className="absolute -left-[9px] mt-6 size-4 rounded-full border-4 border-background bg-primary"
                  aria-hidden="true"
                />
                <div className="glass-card rounded-2xl p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.org} — {item.role}
                    </h3>
                    <Badge>{item.status}</Badge>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading eyebrow="Academics" title="Education" />
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item, index) => (
            <Reveal key={item.qualification} delay={index * 90}>
              <article className="glass-card h-full rounded-2xl p-6 transition-colors hover:border-primary/50">
                <span className="inline-flex rounded-xl bg-primary/10 p-2.5 text-primary">
                  <GraduationCap className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">{item.qualification}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.institution}</p>
                <div className="mt-4 flex items-center gap-2">
                  <Badge variant="secondary">{item.year}</Badge>
                  {item.score ? <Badge variant="outline">Score: {item.score}</Badge> : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Strengths() {
  return (
    <section id="strengths" className="scroll-mt-24 border-y border-border bg-secondary/30 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Strengths" title="What I Bring" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((item, index) => {
            const Icon = strengthIcons[item.icon] ?? Sparkles;
            return (
              <Reveal key={item.title} delay={index * 70}>
                <article className="glass-card h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                  <span className="inline-flex rounded-xl bg-primary/10 p-2.5 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CareerCta() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="hero-glow glass-card rounded-3xl px-6 py-12 text-center shadow-[var(--shadow-elevated)] sm:px-12 sm:py-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold text-foreground sm:text-4xl">
              Looking for an Opportunity to Learn, Build &amp; Contribute
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground">
              I am looking for internship and entry-level opportunities where I can gain practical industry
              experience, develop my technical skills, and contribute to real-world projects.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
              <ResumeButton size="lg" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
