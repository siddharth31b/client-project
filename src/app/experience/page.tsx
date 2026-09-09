import type { Metadata } from "next";
import { Experience1 } from "@/components/section/experience1";
import { Skills1 } from "@/components/section/skills1";
import { Awards3 } from "@/components/section/awards3";
import { Cta41 } from "@/components/section/cta41";

export const metadata: Metadata = {
  title: "Experience | Alfredo Soprana",
  description: "Professional experience, engineering roles, and career trajectory of Alfredo Soprana.",
};

export default function ExperiencePage() {
  return (
    <main className="flex-1">
      {/* 1. Experience Page Hero / Intro */}
      <section className="pt-12 pb-6 lg:pt-20 lg:pb-10 border-b border-border/40 bg-muted/20">
        <div className="container">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary">
              <span>Career History</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Professional Experience
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A chronological breakdown of software engineering roles, technical responsibilities, key contributions, and career progression across industry-leading teams.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Professional Experience Timeline / List */}
      <Experience1 heading="Career Timeline" buttonText="Download Resume" buttonUrl="/contact" />

      {/* 3. Key Responsibilities / Skills */}
      <Skills1 />

      {/* 4. Career Highlights & Recognition */}
      <Awards3 />

      {/* 5. Final CTA */}
      <Cta41
        heading="Interested in Working Together?"
        description="I am always open to discussing new engineering leadership roles, consulting projects, and technical initiatives."
        buttons={{
          primary: {
            text: "Get in Touch",
            url: "/contact",
          },
          secondary: {
            text: "Explore Projects",
            url: "/projects",
          },
        }}
      />
    </main>
  );
}
