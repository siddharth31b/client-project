import * as React from "react";
import { Calendar, CheckCircle2, Sparkles, Tag } from "lucide-react";

import { Badge } from "@/vendors/ui/badge";
import { Card, CardContent } from "@/vendors/ui/card";
import { cn } from "@/lib/utils";

type TimelineEntry = {
  date: string;
  tag: string;
  badge: string;
  items: {
    content: string;
  }[];
};

const timelineData: TimelineEntry[] = [
  {
    date: "March 21, 2025",
    tag: "v2.4 Release",
    badge: "Latest Release",
    items: [
      {
        content:
          "Launched <strong>AI-powered code generation</strong> in our IDE, allowing developers to generate boilerplate code with natural language prompts.",
      },
      {
        content:
          "Introduced <em>contextual code suggestions</em> that understand project structure and coding patterns for more accurate completions.",
      },
      {
        content:
          "Added <u>automated code refactoring</u> capabilities that suggest and apply improvements to existing codebases.",
      },
    ],
  },
  {
    date: "March 19, 2025",
    tag: "v2.3 Core",
    badge: "Intelligent Engine",
    items: [
      {
        content:
          "Released <strong>AI-driven debugging assistant</strong> that identifies potential issues and suggests fixes before runtime.",
      },
      {
        content:
          "Implemented <em>smart documentation generation</em> that automatically creates comprehensive docs from code comments and structure.",
      },
      {
        content:
          "Enhanced <u>code review automation</u> with AI-powered analysis of code quality and best practices.",
      },
    ],
  },
  {
    date: "March 17, 2025",
    tag: "v2.2 Architecture",
    badge: "Foundation Update",
    items: [
      {
        content:
          "Announced <strong>AI pair programming</strong> feature that provides real-time coding assistance and explanations.",
      },
      {
        content:
          "Launched <em>intelligent dependency management</em> that suggests optimal package versions and identifies potential conflicts.",
      },
      {
        content:
          "Introduced <u>automated test generation</u> that creates comprehensive test suites based on code functionality.",
      },
    ],
  },
];

interface Timeline8Props {
  className?: string;
}

const Timeline8 = ({ className }: Timeline8Props) => {
  return (
    <section className={cn("bg-background py-24 sm:py-32", className)}>
      <div className="container">
        {/* Header with badge and balanced typography */}
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-24">
          <Badge
            variant="secondary"
            className="mb-4 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold tracking-wide"
          >
            <Sparkles className="size-3.5 text-primary" />
            Product Roadmap & Updates
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Timeline
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Track our journey, continuous platform improvements, and major architectural releases.
          </p>
        </div>

        {/* Timeline Container with symmetrical spine */}
        <div className="relative mx-auto max-w-5xl xl:max-w-6xl">
          {/* Continuous Vertical Connected Spine */}
          <div
            className="absolute top-6 bottom-6 left-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary via-primary/50 to-border/40 md:left-1/2"
            aria-hidden="true"
          />

          <div className="space-y-12 sm:space-y-16">
            {timelineData.map((entry, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row md:items-start"
                >
                  {/* Glowing Milestone Center Node */}
                  <div className="absolute top-6 left-4 z-10 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-background shadow-[0_0_14px_rgba(var(--primary),0.35)] md:left-1/2">
                    <div className="size-2.5 rounded-full bg-primary" />
                  </div>

                  {/* Left Column (Card on Even, Date on Odd) */}
                  <div
                    className={cn(
                      "md:w-[calc(50%-2.5rem)]",
                      isEven
                        ? "order-2 ml-10 md:order-1 md:ml-0"
                        : "order-1 hidden md:flex md:flex-col md:items-end md:pr-6 md:pt-4"
                    )}
                  >
                    {isEven ? (
                      /* Card on Left */
                      <Card className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md">
                        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-border/40 pb-3">
                          <Badge
                            variant="secondary"
                            className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold"
                          >
                            <Calendar className="size-3.5 text-primary" />
                            {entry.date}
                          </Badge>
                          <span className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground">
                            <Tag className="size-3 text-primary/70" />
                            {entry.tag}
                          </span>
                        </div>

                        <CardContent className="p-0">
                          <ul className="flex flex-col gap-3">
                            {entry.items.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="flex items-start gap-3"
                              >
                                <CheckCircle2 className="mt-1 size-4 flex-none text-primary" />
                                <span
                                  className="text-sm leading-relaxed text-card-foreground/90 sm:text-base [&>em]:font-medium [&>em]:text-foreground [&>strong]:font-semibold [&>strong]:text-foreground [&>u]:underline-offset-4"
                                  dangerouslySetInnerHTML={{
                                    __html: item.content,
                                  }}
                                />
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ) : (
                      /* Date metadata on Left */
                      <div className="text-right">
                        <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-3.5 py-1 text-sm font-semibold text-foreground">
                          <Calendar className="size-3.5 text-primary" />
                          {entry.date}
                        </div>
                        <p className="mt-2 font-mono text-xs font-medium text-primary">
                          {entry.tag}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {entry.badge}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Right Column (Date on Even, Card on Odd) */}
                  <div
                    className={cn(
                      "md:w-[calc(50%-2.5rem)] md:ml-auto",
                      isEven
                        ? "order-1 hidden md:flex md:flex-col md:items-start md:pl-6 md:pt-4"
                        : "order-2 ml-10 md:order-2 md:ml-auto"
                    )}
                  >
                    {isEven ? (
                      /* Date metadata on Right */
                      <div className="text-left">
                        <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-3.5 py-1 text-sm font-semibold text-foreground">
                          <Calendar className="size-3.5 text-primary" />
                          {entry.date}
                        </div>
                        <p className="mt-2 font-mono text-xs font-medium text-primary">
                          {entry.tag}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {entry.badge}
                        </p>
                      </div>
                    ) : (
                      /* Card on Right */
                      <Card className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md">
                        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-border/40 pb-3">
                          <Badge
                            variant="secondary"
                            className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold"
                          >
                            <Calendar className="size-3.5 text-primary" />
                            {entry.date}
                          </Badge>
                          <span className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground">
                            <Tag className="size-3 text-primary/70" />
                            {entry.tag}
                          </span>
                        </div>

                        <CardContent className="p-0">
                          <ul className="flex flex-col gap-3">
                            {entry.items.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="flex items-start gap-3"
                              >
                                <CheckCircle2 className="mt-1 size-4 flex-none text-primary" />
                                <span
                                  className="text-sm leading-relaxed text-card-foreground/90 sm:text-base [&>em]:font-medium [&>em]:text-foreground [&>strong]:font-semibold [&>strong]:text-foreground [&>u]:underline-offset-4"
                                  dangerouslySetInnerHTML={{
                                    __html: item.content,
                                  }}
                                />
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Timeline8 };
