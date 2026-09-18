"use client";

import {
  Activity,
  ArrowRight,
  Brain,
  Code,
  CornerDownRight,
  HeartPulse,
  Layers,
  Microscope,
  Scan,
  Sparkles,
} from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";

import { Button } from "@/vendors/ui/button";
import { Cta41 } from "@/components/section/cta41";
import { cn } from "@/lib/utils";

export interface SkillItem {
  name: string;
  category: string;
  domain: string;
  icon: React.ElementType;
  tag: string;
}

export const defaultSkills: SkillItem[] = [
  {
    name: "MRA Image Analysis & Segmentation",
    category: "Medical Imaging",
    domain: "Medical Imaging",
    icon: Scan,
    tag: "Core Specialization",
  },
  {
    name: "Intracranial Aneurysm Analysis",
    category: "Research Domain",
    domain: "Research Domains",
    icon: Brain,
    tag: "Doctoral Focus",
  },
  {
    name: "Deep Learning & U-Net Architectures",
    category: "AI / Machine Learning",
    domain: "AI & Deep Learning",
    icon: Layers,
    tag: "Algorithmic Design",
  },
  {
    name: "Residual & Dual-Attention Networks",
    category: "AI / Machine Learning",
    domain: "AI & Deep Learning",
    icon: Sparkles,
    tag: "Deep Architectures",
  },
  {
    name: "Quantitative Volumetrics & Radiomics",
    category: "Medical Imaging",
    domain: "Medical Imaging",
    icon: Microscope,
    tag: "Quantitative Imaging",
  },
  {
    name: "Cerebral Vessel Segmentation",
    category: "Research Domain",
    domain: "Research Domains",
    icon: Brain,
    tag: "Cerebrovascular Mapping",
  },
  {
    name: "ABP & PPG Physiological Signal Analysis",
    category: "Signal Processing",
    domain: "Signal Processing",
    icon: HeartPulse,
    tag: "Signal Processing",
  },
  {
    name: "Clinical AI & Translational Healthcare",
    category: "Research Domain",
    domain: "Translational Healthcare AI",
    icon: Activity,
    tag: "Clinical Translation",
  },
  {
    name: "PyTorch & Scientific Computing",
    category: "Tools & Frameworks",
    domain: "AI & Deep Learning",
    icon: Code,
    tag: "Primary Framework",
  },
];

export const skillDomains = [
  "All Capabilities",
  "Medical Imaging",
  "AI & Deep Learning",
  "Research Domains",
  "Signal Processing",
  "Translational Healthcare AI",
];

export interface Skills1Props {
  showHero?: boolean;
  heroBadge?: string;
  heroTitle?: string;
  heroDescription?: string;
  showCategories?: boolean;
  heading?: string;
  description?: string;
  skills?: SkillItem[];
  showCta?: boolean;
  className?: string;
}

const Skills1 = ({
  showHero = true,
  heroBadge = "Research Competencies",
  heroTitle = "Skills & Methodologies",
  heroDescription = "Core research competencies across medical imaging, deep learning architectures (U-Net, Residual, Attention networks), neurovascular disease analysis, and physiological signal processing.",
  showCategories = true,
  heading = "Technical Competencies",
  description = "Specialized expertise in deep learning architectures, neurovascular imaging pipelines, cerebral vessel segmentation, radiomics, and physiological signal analysis.",
  skills = defaultSkills,
  showCta = true,
  className,
}: Skills1Props) => {
  const [selectedDomain, setSelectedDomain] = useState("All Capabilities");

  const filteredSkills =
    selectedDomain === "All Capabilities"
      ? skills
      : skills.filter(
          (s) =>
            s.domain === selectedDomain ||
            s.category.toLowerCase().includes(selectedDomain.toLowerCase()),
        );

  return (
    <div className="w-full">
      {/* 1. Page Hero / Introduction */}
      {showHero && (
        <section className="pt-12 pb-6 lg:pt-20 lg:pb-10 border-b border-border/40 bg-muted/20">
          <div className="container">
            <div className="max-w-3xl space-y-4">
              {heroBadge && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary">
                  <Brain className="size-3.5" />
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

      {/* 2. Skill Domain Categories */}
      {showCategories && (
        <section className="py-8 border-b border-border/40">
          <div className="container">
            <div className="flex flex-wrap items-center gap-2">
              {skillDomains.map((domain) => {
                const isSelected = selectedDomain === domain;
                return (
                  <button
                    key={domain}
                    type="button"
                    onClick={() => setSelectedDomain(domain)}
                    className={`rounded-full px-3.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-primary font-semibold text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {domain}
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 3. Primary Skills 2-Column Section */}
      <section className={cn("py-12 lg:py-20", className)}>
        <div className="container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-6 lg:gap-20">
            <div className="top-24 col-span-2 h-fit w-full space-y-6 lg:sticky">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground lg:text-5xl">
                {heading}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {description}
              </p>

              <div className="mt-12 flex w-full flex-wrap justify-between gap-4 border-t border-border pt-6 lg:mt-24">
                <Button
                  variant="ghost"
                  className="tracking-tight text-foreground hover:text-primary lg:text-base"
                  render={<Link href="/research" />}
                  nativeButton={false}
                >
                  <CornerDownRight className="size-4 text-primary mr-2" /> View Research
                </Button>
                <Button
                  variant="ghost"
                  className="tracking-tight text-foreground hover:text-primary lg:text-base"
                  render={<Link href="/contact" />}
                  nativeButton={false}
                >
                  <CornerDownRight className="size-4 text-primary mr-2" /> Get in touch
                </Button>
              </div>
            </div>

            <ul className="relative col-span-4 w-full space-y-4">
              {filteredSkills.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li
                    key={index}
                    className="flex flex-row items-center justify-between gap-6 rounded-2xl border border-border/50 bg-card p-3 sm:p-4 transition-colors hover:border-primary/40"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex size-14 sm:size-16 items-center justify-center rounded-2xl bg-muted p-2 text-primary shrink-0">
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold tracking-tight text-foreground">
                          {item.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-mono text-muted-foreground uppercase">
                          {item.category}
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-full border border-border/60 bg-muted/60 px-3 py-1.5 text-xs font-medium text-foreground">
                      {item.tag}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Research Connection Banner */}
      <section className="py-12 border-t border-border/40 bg-muted/10">
        <div className="container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-foreground">
              Explore Research Investigations Applying These Methodologies
            </h3>
            <p className="text-sm text-muted-foreground">
              Review case studies, algorithmic pipelines, and peer-reviewed publications.
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

      {/* 5. Bottom CTA */}
      {showCta && (
        <Cta41
          heading="Collaborate on Medical AI Research"
          description="Open to joint research initiatives, technical advising on neurovascular image segmentation, and clinical healthcare AI."
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
      )}
    </div>
  );
};

export { Skills1 };
