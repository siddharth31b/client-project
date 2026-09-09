import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, FileText, ScrollText } from "lucide-react";

import { List2 } from "@/components/section/list2";
import { Cta41 } from "@/components/section/cta41";

export const metadata: Metadata = {
  title: "Publications | Alfredo Soprana",
  description:
    "Academic papers, peer-reviewed publications, technical reports, and preprints by Alfredo Soprana.",
};

const publicationItems = [
  {
    icon: <FileText className="size-6 text-foreground" />,
    title: "Scalable Intelligent Systems",
    category: "Journal Article",
    description:
      "Architectural patterns and paradigms for distributed low-latency inference in mission-critical applications.",
    link: "/research",
  },
  {
    icon: <BookOpen className="size-6 text-foreground" />,
    title: "Computational Efficiency & Optimization",
    category: "Conference Paper",
    description:
      "Techniques for runtime performance optimization and cache locality across heterogeneous compute clusters.",
    link: "/research",
  },
  {
    icon: <ScrollText className="size-6 text-foreground" />,
    title: "Zero-Trust Data Protection Protocols",
    category: "Technical Report",
    description:
      "Empirical evaluation of cryptographic boundaries and biometric state validation for mobile financial infrastructure.",
    link: "/research",
  },
  {
    icon: <FileText className="size-6 text-foreground" />,
    title: "Resilient Distributed Collaboration Systems",
    category: "Preprint",
    description:
      "Operational transformation and state convergence models for multi-tenant real-time workspaces.",
    link: "/research",
  },
];

export default function PublicationsPage() {
  return (
    <main className="flex-1">
      {/* 1. Publications Hero */}
      <section className="pt-12 pb-6 lg:pt-20 lg:pb-10 border-b border-border/40 bg-muted/20">
        <div className="container">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary">
              <span>Scholarly Output</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Publications & Papers
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A curated index of peer-reviewed articles, conference proceedings, preprints, and formal technical manuscripts.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Publication Filter Categories */}
      <section className="py-8 border-b border-border/40">
        <div className="container">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-primary px-3.5 py-1 text-xs font-semibold text-primary-foreground">
              All Publications
            </span>
            <span className="rounded-full bg-muted px-3.5 py-1 text-xs font-medium text-muted-foreground">
              Journal Articles
            </span>
            <span className="rounded-full bg-muted px-3.5 py-1 text-xs font-medium text-muted-foreground">
              Conference Papers
            </span>
            <span className="rounded-full bg-muted px-3.5 py-1 text-xs font-medium text-muted-foreground">
              Technical Reports
            </span>
            <span className="rounded-full bg-muted px-3.5 py-1 text-xs font-medium text-muted-foreground">
              Preprints
            </span>
          </div>
        </div>
      </section>

      {/* 3. Publication List */}
      <List2
        heading="Selected Bibliography"
        buttonText="View Research"
        items={publicationItems}
      />

      {/* 4. Research Connection Section */}
      <section className="py-12 border-t border-border/40 bg-muted/10">
        <div className="container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-foreground">
              Interested in the Underlying Research Domains?
            </h3>
            <p className="text-sm text-muted-foreground">
              Explore our core methodologies, experimental investigations, and technical areas of interest.
            </p>
          </div>
          <Link
            href="/research"
            className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline shrink-0 text-sm"
          >
            <span>Explore Research</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* 5. Final CTA */}
      <Cta41
        heading="Request Paper or Discussion"
        description="Interested in replication data, citing our work, or discussing methodology? Reach out directly."
        buttons={{
          primary: {
            text: "Contact Author",
            url: "/contact",
          },
          secondary: {
            text: "Explore Research",
            url: "/research",
          },
        }}
      />
    </main>
  );
}
