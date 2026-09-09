import type { Metadata } from "next";
import { Projects13 } from "@/components/section/projects13";
import { Gallery1 } from "@/components/section/gallery1";
import { Cta41 } from "@/components/section/cta41";

export const metadata: Metadata = {
  title: "Projects | Alfredo Soprana",
  description: "Explore software engineering projects, web platforms, and technical architecture by Alfredo Soprana.",
};

export default function ProjectsPage() {
  return (
    <main className="flex-1">
      {/* 1. Page Hero / Introduction */}
      <section className="pt-12 pb-6 lg:pt-20 lg:pb-10 border-b border-border/40 bg-muted/20">
        <div className="container">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary">
              <span>Portfolio Showcase</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Featured Projects & Engineering Work
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A curated index of production applications, distributed architectures, and machine learning tools designed for scale and impact.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Featured Projects */}
      <Projects13 />

      {/* 3. Project Case Studies & Credentials Gallery */}
      <section className="py-12 border-t border-border/40">
        <div className="container mb-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
              Interactive Case Studies
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Visual Credentials & Deep Dives
            </h2>
          </div>
        </div>
        <Gallery1 />
      </section>

      {/* 4. Final CTA */}
      <Cta41
        heading="Have a Project in Mind?"
        description="Let's build something extraordinary together. Reach out to discuss technical collaborations, consulting, or project scoping."
        buttons={{
          primary: {
            text: "Start a Conversation",
            url: "/contact",
          },
          secondary: {
            text: "View Experience",
            url: "/experience",
          },
        }}
      />
    </main>
  );
}
