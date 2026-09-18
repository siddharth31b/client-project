/* eslint-disable @next/next/no-img-element */
import { BookOpen, Building2, Download, GraduationCap } from "lucide-react";
import React from "react";
import Link from "next/link";

import { Button } from "@/vendors/ui/button";
import { cn } from "@/lib/utils";

export interface ExperienceItem {
  period: string;
  title: string;
  description: string;
  company: string;
  logo?: string | React.ReactNode;
}

export interface Experience1Props {
  showHero?: boolean;
  heroBadge?: string;
  heroTitle?: string;
  heroDescription?: string;
  heading?: string;
  buttonText?: string;
  buttonUrl?: string;
  experience?: ExperienceItem[];
  className?: string;
}

export const defaultExperience: ExperienceItem[] = [
  {
    period: "July 2025 – Present",
    title: "Post Doctoral Fellow",
    description:
      "Conducting translational healthcare AI research in medical image analysis and neurovascular imaging within the Department of IT.",
    company: "IIT Mandi iHUB & HCI Foundation",
    logo: "/iHub_Logo.png",
  },
  {
    period: "Sep 2023 – July 2025",
    title: "Senior Research Fellow",
    description:
      "Developed deep learning architectures for major cerebral vessel segmentation and pre/post-treatment intracranial aneurysm quantification under Indo-Swedish Project funded by DBT.",
    company: "NIT Durgapur (DBT Project)",
    logo: <GraduationCap className="size-5 text-primary shrink-0" />,
  },
  {
    period: "Sep 2021 – Sep 2023",
    title: "Junior Research Fellow",
    description:
      "Formulated novel U-Net based methods for medical image segmentation of neurovascular structures from magnetic resonance angiography (MRA) datasets.",
    company: "NIT Durgapur (DBT Project)",
    logo: <Building2 className="size-5 text-primary shrink-0" />,
  },
  {
    period: "2023 – Present",
    title: "Reviewer for Journals & Conferences",
    description:
      "Peer reviewer for npj Digital Medicine, Biomedical Signal Processing and Control, Frontiers in Neurology, ICPR, MICCAI, IEEE ISBI, CVIP, and ICCIT.",
    company: "International Scientific Venues",
    logo: <BookOpen className="size-5 text-primary shrink-0" />,
  },
];

const Experience1 = ({
  showHero = true,
  heroBadge = "Academic & Research Track",
  heroTitle = "Research & Professional Experience",
  heroDescription = "Academic appointments at IIT Mandi iHUB & HCI Foundation, research fellowships under the DBT Indo-Swedish initiative at NIT Durgapur, and international journal and conference peer reviewing.",
  heading,
  buttonText = "Inquire for CV",
  buttonUrl = "/contact",
  experience = defaultExperience,
  className,
}: Experience1Props) => {
  return (
    <div className="w-full">
      {/* 1. Single Authoritative Hero / Page Introduction */}
      {showHero && (
        <section className="pt-12 pb-8 lg:pt-20 lg:pb-12 border-b border-border/40 bg-muted/20">
          <div className="container">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl space-y-4">
                {heroBadge && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary">
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
              {buttonText && (
                <div className="shrink-0 pt-2 sm:pt-0">
                  <Button
                    variant="outline"
                    size="lg"
                    className="font-semibold text-foreground hover:text-primary border-border shadow-xs"
                    render={<Link href={buttonUrl} />}
                    nativeButton={false}
                  >
                    <span>{buttonText}</span>
                    <Download className="ml-2 size-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 2. Research Appointments Timeline */}
      <section className={cn("py-12 lg:py-16", className)}>
        <div className="container space-y-8 lg:space-y-12">
          {!showHero && (heading || buttonText) && (
            <div className="flex w-full items-end justify-between border-b border-border/40 pb-6">
              {heading && (
                <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  {heading}
                </h2>
              )}
              {buttonText && (
                <Button
                  variant="outline"
                  size="lg"
                  className="font-semibold text-foreground hover:text-primary border-border"
                  render={<Link href={buttonUrl} />}
                  nativeButton={false}
                >
                  <span>{buttonText}</span>
                  <Download className="ml-2 size-4" />
                </Button>
              )}
            </div>
          )}

          <ul className="divide-y divide-border/60">
            {experience.map((exp, index) => (
              <li
                key={index}
                className="flex flex-col justify-between py-10 md:flex-row md:items-start gap-6"
              >
                <div className="text-base font-mono text-primary md:w-1/4">
                  {exp.period}
                </div>
                <div className="md:w-2/4 space-y-2">
                  <h3 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {exp.description}
                  </p>
                </div>
                <div className="flex items-center justify-start md:justify-end gap-3 text-sm font-medium text-foreground md:w-1/4">
                  {typeof exp.logo === "string" ? (
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="h-6 w-auto object-contain"
                    />
                  ) : (
                    exp.logo
                  )}
                  <span>{exp.company}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export { Experience1 };
