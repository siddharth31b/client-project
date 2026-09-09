import type { Metadata } from "next";
import { About20 } from "@/components/section/about20";
import { Feature313 } from "@/components/section/feature313";
import { List2 } from "@/components/section/list2";
import { Cta41 } from "@/components/section/cta41";

export const metadata: Metadata = {
  title: "About | Alfredo Soprana",
  description: "Learn more about Alfredo Soprana, founding engineer, researcher, and builder.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* 1. About Hero / Page Introduction */}
      <section className="pt-12 pb-6 lg:pt-20 lg:pb-10 border-b border-border/40 bg-muted/20">
        <div className="container">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary">
              <span>Biography & Background</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              About Alfredo Soprana
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founding engineer, researcher, and builder dedicated to developing intelligent software systems, scalable architectures, and human-centric design.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Personal / Professional Overview */}
      <About20 />

      {/* 3. Core Focus / Capabilities / Technical Philosophy */}
      <Feature313 />

      {/* 4. Background / Recognition */}
      <List2 heading="Academic Background & Recognition" />

      {/* 5. Final CTA */}
      <Cta41
        heading="Let's Connect & Collaborate"
        description="Interested in research collaboration, technical advising, or engineering leadership?"
        buttons={{
          primary: {
            text: "Get in Touch",
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
