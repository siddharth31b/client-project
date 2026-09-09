import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";

import { Skills1 } from "@/components/section/skills1";
import { Cta41 } from "@/components/section/cta41";

export const metadata: Metadata = {
  title: "Skills & Technologies | Alfredo Soprana",
  description:
    "Technical proficiencies, frameworks, programming languages, and engineering toolsets utilized across projects and research initiatives.",
};

const skillDomains = [
  "All Capabilities",
  "Frontend Architecture",
  "UI/UX Engineering",
  "Full-Stack Development",
  "Developer Tooling",
  "Design Systems",
];

export default function SkillsPage() {
  return (
    <main className="flex-1">
      {/* 1. Skills Hero */}
      <section className="pt-12 pb-6 lg:pt-20 lg:pb-10 border-b border-border/40 bg-muted/20">
        <div className="container">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary">
              <Code2 className="size-3.5" />
              <span>Technical Proficiencies</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Skills & Technologies
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A comprehensive breakdown of engineering toolsets, core frameworks, system languages, and architectural methodologies utilized across production applications and research initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Skill Domain Categories */}
      <section className="py-8 border-b border-border/40">
        <div className="container">
          <div className="flex flex-wrap items-center gap-2">
            {skillDomains.map((domain, index) => (
              <span
                key={domain}
                className={`rounded-full px-3.5 py-1 text-xs font-medium transition-colors ${
                  index === 0
                    ? "bg-primary font-semibold text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {domain}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Primary Skills Section */}
      <Skills1 />

      {/* 4. Supporting Link to Projects */}
      <section className="py-12 border-t border-border/40 bg-muted/10">
        <div className="container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-foreground">
              Explore Live Applications Built with These Technologies
            </h3>
            <p className="text-sm text-muted-foreground">
              Review case studies, system architectures, and production implementations.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline shrink-0 text-sm"
          >
            <span>View All Projects</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <Cta41
        heading="Need These Skills on Your Project?"
        description="Let's build scalable systems, elegant user interfaces, or high-performance digital platforms together."
        buttons={{
          primary: {
            text: "Get in Touch",
            url: "/contact",
          },
          secondary: {
            text: "View Projects",
            url: "/projects",
          },
        }}
      />
    </main>
  );
}
