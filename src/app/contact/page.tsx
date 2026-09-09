import type { Metadata } from "next";
import { Mail } from "lucide-react";

import { Contact30 } from "@/components/section/contact30";
import { Cta41 } from "@/components/section/cta41";

export const metadata: Metadata = {
  title: "Contact | Alfredo Soprana",
  description:
    "Get in touch for technical leadership, research collaborations, engineering architecture, and advisory inquiries.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      {/* 1. Contact Hero / Introduction */}
      <section className="pt-12 pb-6 lg:pt-20 lg:pb-10 border-b border-border/40 bg-muted/20">
        <div className="container">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary">
              <Mail className="size-3.5" />
              <span>Get in Touch</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Contact & Inquiries
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have an engineering challenge, research initiative, or advisory inquiry? Send a direct message below to start a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Section */}
      <Contact30 />

      {/* 3. Bottom CTA Section */}
      <Cta41
        heading="Explore Ongoing Work & Architecture"
        description="Review case studies, software architectures, and career milestones while awaiting a response."
        buttons={{
          primary: {
            text: "View Projects",
            url: "/projects",
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
