import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, FileText } from "lucide-react";

import { Bento53 } from "@/components/section/bento53";
import { Project12 } from "@/components/section/project12";
import { List2 } from "@/components/section/list2";
import { Cta41 } from "@/components/section/cta41";

export const metadata: Metadata = {
  title: "Research | Alfredo Soprana",
  description:
    "Scientific and technical research investigations in artificial intelligence, distributed systems, and computational architecture.",
};

export default function ResearchPage() {
  return (
    <main className="flex-1">
      {/* 1. Research Hero */}
      <section className="pt-12 pb-6 lg:pt-20 lg:pb-10 border-b border-border/40 bg-muted/20">
        <div className="container">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary">
              <span>Scientific & Technical Exploration</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Research & Methodology
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Investigating intelligent systems, distributed architectures, and computational modeling with an emphasis on rigorous methodology and real-world applicability.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Research Areas / Focus (Bento layout) */}
      <section className="py-16">
        <div className="container mb-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
              Core Domains
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Research Areas & Technical Focus
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Key areas of technical investigation spanning algorithmic design, systems architecture, and intelligent computation.
            </p>
          </div>
        </div>
        <Bento53 />
      </section>

      {/* 3. Featured Research / Case Studies */}
      <section className="py-8 border-t border-border/40">
        <div className="container mb-4">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
              Case Study
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured Research Initiative
            </h2>
          </div>
        </div>
        <Project12 showBackButton={false} />
      </section>

      {/* 4. Publications Preview (Link to /publications) */}
      <section className="py-16 border-t border-border/40 bg-muted/10">
        <div className="container space-y-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Academic Output
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Publications Preview
              </h2>
            </div>
            <Link
              href="/publications"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              <span>Explore all publications</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <List2
            heading="Selected Research Preprints"
            buttonText="Read Paper"
            items={[
              {
                icon: <FileText className="size-6 text-foreground" />,
                title: "Scalable Intelligent Systems",
                category: "System Architecture",
                description:
                  "Architectural patterns and paradigms for distributed low-latency inference.",
                link: "/publications",
              },
              {
                icon: <BookOpen className="size-6 text-foreground" />,
                title: "Computational Efficiency & Optimization",
                category: "Algorithmic Design",
                description:
                  "Techniques for runtime performance optimization across heterogeneous clusters.",
                link: "/publications",
              },
            ]}
          />
        </div>
      </section>

      {/* 5. Final CTA */}
      <Cta41
        heading="Interested in Research Collaboration?"
        description="I am always open to exploring academic partnerships, peer reviews, and joint research initiatives."
        buttons={{
          primary: {
            text: "Get in Touch",
            url: "/contact",
          },
          secondary: {
            text: "View Publications",
            url: "/publications",
          },
        }}
      />
    </main>
  );
}
