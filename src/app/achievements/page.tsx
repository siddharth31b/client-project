import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Trophy, Sparkles, Star } from "lucide-react";

import { Awards3 } from "@/components/section/awards3";
import { List2, ListItem } from "@/components/section/list2";
import { Cta41 } from "@/components/section/cta41";

export const metadata: Metadata = {
  title: "Achievements & Recognition | Alfredo Soprana",
  description:
    "Honors, industry awards, peer commendations, and key milestones earned throughout my engineering and research journey.",
};

const achievementMilestones: ListItem[] = [
  {
    icon: <Trophy className="size-6 text-foreground" />,
    title: "Industry Recognition",
    category: "Technical Leadership",
    description: "Outstanding Performance & Engineering Excellence Award.",
    link: "/experience",
  },
  {
    icon: <Award className="size-6 text-foreground" />,
    title: "Excellence Distinction",
    category: "Architecture & Design",
    description: "Top Tier System Architecture & Product Innovation Distinction.",
    link: "/experience",
  },
  {
    icon: <Star className="size-6 text-foreground" />,
    title: "Open Source Impact",
    category: "Community Contribution",
    description: "Recognition for community tooling and open web ecosystem contributions.",
    link: "/experience",
  },
];

export default function AchievementsPage() {
  return (
    <main className="flex-1">
      {/* 1. Achievements Hero */}
      <section className="pt-12 pb-6 lg:pt-20 lg:pb-10 border-b border-border/40 bg-muted/20">
        <div className="container">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary">
              <Sparkles className="size-3.5" />
              <span>Honors & Recognition</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Achievements & Recognition
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A curated record of professional accolades, design awards, and engineering honors earned across creative and technical endeavors.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Primary Awards Section */}
      <Awards3 />

      {/* 3. Supporting Milestones Section */}
      <section className="border-t border-border/40 bg-muted/10">
        <List2
          heading="Key Milestones & Commendations"
          buttonText="View Experience"
          items={achievementMilestones}
        />
      </section>

      {/* 4. Experience Connection Banner */}
      <section className="py-12 border-t border-border/40">
        <div className="container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-foreground">
              Trace the Career Path Behind These Honors
            </h3>
            <p className="text-sm text-muted-foreground">
              Explore the professional leadership and engineering roles where these milestones took shape.
            </p>
          </div>
          <Link
            href="/experience"
            className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline shrink-0 text-sm"
          >
            <span>Explore Career Experience</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <Cta41
        heading="Collaborate on High-Impact Work"
        description="Have an ambitious challenge or opportunity? Let's discuss how we can work together to achieve outstanding results."
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
