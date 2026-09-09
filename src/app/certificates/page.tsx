import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, CheckCircle2 } from "lucide-react";

import { Gallery1 } from "@/components/section/gallery1";
import { Cta41 } from "@/components/section/cta41";

export const metadata: Metadata = {
  title: "Certificates & Credentials | Alfredo Soprana",
  description:
    "Formal certifications, professional credentials, and verified competencies across software architecture and interface design.",
};

const credentialPills = [
  "All Credentials",
  "Cloud & Systems Architecture",
  "Frontend Engineering",
  "Security & Privacy",
  "UI/UX Design Systems",
];

export default function CertificatesPage() {
  return (
    <main className="flex-1">
      {/* 1. Certificates Hero */}
      <section className="pt-12 pb-6 lg:pt-20 lg:pb-10 border-b border-border/40 bg-muted/20">
        <div className="container">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary">
              <CheckCircle2 className="size-3.5" />
              <span>Verified Qualifications</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Certificates & Credentials
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Formal accreditations, industry-standard credentials, and verified certifications demonstrating domain competency and technical rigour.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Credential Categories */}
      <section className="py-8 border-b border-border/40">
        <div className="container">
          <div className="flex flex-wrap items-center gap-2">
            {credentialPills.map((pill, index) => (
              <span
                key={pill}
                className={`rounded-full px-3.5 py-1 text-xs font-medium transition-colors ${
                  index === 0
                    ? "bg-primary font-semibold text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Primary Gallery Section */}
      <section className="py-12">
        <div className="container mb-4">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
              Credential Showcase
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Accredited Verifications & Visual Proof
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Interactive credential gallery highlighting recognized certifications and verified competencies.
            </p>
          </div>
        </div>
        <Gallery1 className="py-12" />
      </section>

      {/* 4. Supporting Link to Projects */}
      <section className="py-12 border-t border-border/40 bg-muted/10">
        <div className="container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-foreground">
              See Credentials Applied in Real-World Projects
            </h3>
            <p className="text-sm text-muted-foreground">
              Review production case studies demonstrating architecture and design principles in action.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline shrink-0 text-sm"
          >
            <span>Browse Case Studies</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <Cta41
        heading="Explore Production Work"
        description="See how these certified capabilities translate into resilient software architectures and exceptional user experiences."
        buttons={{
          primary: {
            text: "Get in Touch",
            url: "/contact",
          },
          secondary: {
            text: "Browse Projects",
            url: "/projects",
          },
        }}
      />
    </main>
  );
}
