import { ArrowRight, MoveUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

export const defaultAwards = [
  {
    title: "Selected for ESTIC-2025 (Young S&T Leaders)",
    categories: [
      "Category: Young S&T Leaders (below 45 years)",
      "Venue: Bharat Mandapam, New Delhi",
    ],
    year: "November 03–05, 2025",
    color: "bg-chart-1",
  },
  {
    title: "Technical Program Committee (TPC) Member",
    categories: [
      "International Conference on Computer and Information Technology (ICCIT - 2025)",
      "Technical Reviewer & Program Committee",
    ],
    year: "2025",
    color: "bg-chart-2",
  },
  {
    title: "Qualified Graduate Aptitude Test in Engineering (GATE-EE)",
    categories: [
      "Electrical Engineering",
      "National Level Examination (Ministry of Education)",
    ],
    year: "2018 & 2020",
    color: "bg-primary",
  },
];

export interface AwardItem {
  title: string;
  categories: string[];
  year: string;
  color: string;
}

export interface Awards3Props {
  showHero?: boolean;
  heroBadge?: string;
  heroTitle?: string;
  heroDescription?: string;
  heading?: string;
  description?: string;
  awards?: AwardItem[];
  className?: string;
}

const Awards3 = ({
  showHero = true,
  heroBadge = "Honors & Recognition",
  heroTitle = "Achievements & Recognition",
  heroDescription = "Documented scientific recognitions, technical program committee appointments, and competitive national engineering qualifications.",
  heading = "Key Honors & Appointments",
  description = "Documented scientific distinctions, national talent selections, and international academic committee memberships.",
  awards = defaultAwards,
  className,
}: Awards3Props) => {
  return (
    <div className="w-full">
      {/* 1. Page Hero / Introduction */}
      {showHero && (
        <section className="pt-12 pb-6 lg:pt-20 lg:pb-10 border-b border-border/40 bg-muted/20">
          <div className="container">
            <div className="max-w-3xl space-y-4">
              {heroBadge && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary">
                  <Sparkles className="size-3.5" />
                  <span>{heroBadge}</span>
                </div>
              )}
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {heroTitle}
              </h1>
              {heroDescription && (
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {heroDescription}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 2. Key Honors List Section */}
      <section className={cn("py-12 lg:py-16", className)}>
        <div className="container">
          {!showHero && (heading || description) && (
            <div className="mb-8">
              {heading && (
                <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {heading}
                </h2>
              )}
              {description && (
                <p className="max-w-3xl text-base text-muted-foreground leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          )}

          <div className="space-y-3">
            {awards.map((award, index) => (
              <div
                key={index}
                className="group relative flex items-start justify-between gap-4 overflow-hidden rounded-xl border border-border/60 bg-card p-5 transition-colors hover:border-primary/40"
              >
                <div className="relative z-10 flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-3.5 w-3.5 rounded-full ${award.color} shrink-0`}
                    />
                    <h3 className="text-lg font-semibold text-foreground">
                      {award.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-x-4 pl-6 text-sm text-muted-foreground">
                    {award.categories.map((category, idx) => (
                      <span key={idx}>{category}</span>
                    ))}
                  </div>
                  <p className="pl-6 font-mono text-xs font-medium text-primary">
                    {award.year}
                  </p>
                </div>

                <MoveUpRight className="relative z-10 mt-1 h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Experience Connection Banner */}
      <section className="py-12 border-t border-border/40 bg-muted/10">
        <div className="container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-foreground">
              Trace the Academic Journey Behind These Honors
            </h3>
            <p className="text-sm text-muted-foreground">
              Explore the doctoral research fellowships and scientific appointments at IIT Mandi and NIT Durgapur.
            </p>
          </div>
          <Link
            href="/experience"
            className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline shrink-0 text-sm"
          >
            <span>Explore Experience</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export { Awards3 };
