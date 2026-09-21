"use client";

import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Badge } from "@/vendors/ui/badge";
import { cn } from "@/lib/utils";

export interface GalleryItem {
  id: string;
  title: string;
  href: string;
  image: string;
  badge1?: string;
  badge2?: string;
  organization?: string;
  category?: string;
  description?: string;
}

export const defaultCertificates: GalleryItem[] = [
  {
    id: "cert-1",
    title: "Certificate of Appreciation — IEEE IICAIET 2023",
    href: "/certificates/IICAIET-2023.jpg",
    image: "/certificates/IICAIET-2023.jpg",
    badge1: "IEEE IICAIET 2023",
    badge2: "Appreciation",
    organization: "IEEE",
    category: "IEEE Conferences",
    description:
      "Official peer review recognition and conference credential honoring technical evaluation contributions.",
  },
  {
    id: "cert-2",
    title: "Certificate of Appreciation — KIT Tiptur ICDSNS 2023",
    href: "/certificates/ICDSNS-2023.jpg",
    image: "/certificates/ICDSNS-2023.jpg",
    badge1: "KIT Tiptur ICDSNS 2023",
    badge2: "Appreciation",
    organization: "KIT Tiptur",
    category: "International Conferences",
    description:
      "Official certificate of appreciation recognizing technical evaluation and scholarly participation.",
  },
  {
    id: "cert-3",
    title: "Certificate of Appreciation — Sharnbasva University ICIICS 2023",
    href: "/certificates/ICIICS-2023.jpg",
    image: "/certificates/ICIICS-2023.jpg",
    badge1: "Sharnbasva University ICIICS 2023",
    badge2: "Appreciation",
    organization: "Sharnbasva University",
    category: "International Conferences",
    description:
      "Certificate of appreciation recognizing reviewer and evaluator participation for ICIICS 2023.",
  },
  {
    id: "cert-4",
    title: "Certificate of Appreciation — BITM Ballari ICDCECE 2024",
    href: "/certificates/ICDCECE-2024.jpg",
    image: "/certificates/ICDCECE-2024.jpg",
    badge1: "BITM Ballari ICDCECE 2024",
    badge2: "Appreciation",
    organization: "BITM Ballari",
    category: "International Conferences",
    description:
      "Official certificate of appreciation recognizing technical review and academic conference contributions.",
  },
];

export const credentialPills = [
  "All Certificates",
  "IEEE Conferences",
  "International Conferences",
  "Reviewer Recognitions",
  "Academic Appreciations",
];

export interface Gallery1Props {
  className?: string;
  showHero?: boolean;
  heroBadge?: string;
  heroTitle?: string;
  heroDescription?: string;
  showCategories?: boolean;
  items?: GalleryItem[];
}

const motionEase = "ease-[cubic-bezier(0.22,1,0.36,1)]";
const motionDuration = "duration-500";

const Gallery1 = ({
  className,
  showHero = true,
  heroBadge = "Verified Qualifications",
  heroTitle = "Certificates & Recognitions",
  heroDescription = "Official certificates of appreciation and recognitions from IEEE and international conferences honoring technical reviewing and academic contributions.",
  showCategories = true,
  items = defaultCertificates,
}: Gallery1Props) => {
  const [selection, setSelection] = useState(items[0]?.id || "cert-1");
  const [selectedCategory, setSelectedCategory] = useState("All Certificates");

  const filteredItems =
    selectedCategory === "All Certificates"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full">
      {/* 1. Page Hero / Introduction */}
      {showHero && (
        <section className="pt-12 pb-6 lg:pt-20 lg:pb-10 border-b border-border/40 bg-muted/20">
          <div className="container">
            <div className="max-w-3xl space-y-4">
              {heroBadge && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary">
                  <CheckCircle2 className="size-3.5" />
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

      {/* 2. Credential Categories */}
      {showCategories && (
        <section className="py-8 border-b border-border/40">
          <div className="container">
            <div className="flex flex-wrap items-center gap-2">
              {credentialPills.map((pill) => {
                const isSelected = selectedCategory === pill;
                return (
                  <button
                    key={pill}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(pill);
                      const matching =
                        pill === "All Certificates"
                          ? items
                          : items.filter((item) => item.category === pill);
                      if (matching.length > 0) {
                        setSelection(matching[0].id);
                      }
                    }}
                    className={`rounded-full px-3.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-primary font-semibold text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {pill}
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 3. ONE Certificate Showcase Section */}
      <section className={cn("py-12 lg:py-16", className)}>
        <div className="container">
          {/* DESKTOP VIEW: Horizontal Expandable Gallery (lg: and above) */}
          <div className="hidden lg:flex flex-row gap-4 xl:gap-5 lg:min-h-[470px] lg:h-[490px]">
            {filteredItems.map((item) => {
              const isOpen = selection === item.id;
              return (
                <div
                  key={item.id}
                  data-state={isOpen ? "open" : "closed"}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  aria-label={item.title}
                  className={cn(
                    "group relative cursor-pointer overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm transition-all",
                    isOpen
                      ? "border-primary/50 shadow-md ring-1 ring-primary/20"
                      : "border-border hover:border-primary/40",
                    "lg:transform-gpu lg:transition-[width,border-color,box-shadow]",
                    motionDuration,
                    motionEase,
                    "motion-reduce:lg:transition-none",
                    'lg:data-[state="closed"]:w-[18%] lg:data-[state="open"]:w-[46%]',
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  )}
                  onMouseEnter={() => setSelection(item.id)}
                  onClick={() => setSelection(item.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelection(item.id);
                    }
                  }}
                >
                  {/* CLOSED CARD STATE (Desktop) */}
                  <div
                    className={cn(
                      "absolute inset-0 flex flex-col justify-between p-4 transition-opacity",
                      motionDuration,
                      motionEase,
                      isOpen ? "opacity-0 pointer-events-none" : "opacity-100",
                    )}
                  >
                    <div className="absolute inset-0 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="25vw"
                        className="object-cover object-center brightness-[0.25] blur-[1px] scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-card via-card/85 to-card/50" />
                    </div>

                    <div className="relative z-10">
                      <Badge
                        variant="secondary"
                        className="text-[10px] font-mono font-medium truncate max-w-full"
                      >
                        {item.badge2 || item.badge1}
                      </Badge>
                    </div>

                    <div className="relative z-10 space-y-1.5">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-semibold block truncate">
                        {item.organization}
                      </span>
                      <h4 className="text-sm font-semibold text-foreground line-clamp-2 leading-tight">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-1 text-[11px] text-muted-foreground pt-1">
                        <span>View Credential</span>
                        <ArrowUpRight className="size-3" />
                      </div>
                    </div>
                  </div>

                  {/* OPEN CARD STATE (Desktop) */}
                  <div
                    className={cn(
                      "h-full w-full flex flex-row transition-opacity p-4 lg:p-5 gap-5",
                      motionDuration,
                      motionEase,
                      !isOpen ? "opacity-0 pointer-events-none" : "opacity-100",
                    )}
                  >
                    <div className="relative w-[58%] h-full flex items-center justify-center min-w-0">
                      <div className="relative w-full h-full max-h-[380px] flex items-center justify-center overflow-hidden rounded-xl border border-border/80 bg-background/50 shadow-inner p-2">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={700}
                          height={500}
                          className="max-h-full max-w-full w-auto h-auto object-contain rounded drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.01]"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col justify-between w-[42%] min-w-0 py-1">
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {item.badge1 && (
                            <Badge variant="secondary" className="text-xs">
                              {item.badge1}
                            </Badge>
                          )}
                          {item.badge2 && (
                            <Badge variant="outline" className="text-xs">
                              {item.badge2}
                            </Badge>
                          )}
                        </div>

                        <div>
                          <span className="text-xs font-mono font-medium text-primary uppercase tracking-wider block">
                            {item.organization}
                          </span>
                          <h3 className="mt-1.5 text-lg xl:text-xl font-bold text-foreground leading-snug">
                            {item.title}
                          </h3>
                        </div>

                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-border/50 flex items-center justify-between mt-3">
                        <span className="text-xs font-medium text-muted-foreground">
                          Verified Credential
                        </span>
                        <a
                          href={item.href || item.image}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          aria-label={`Open certificate for ${item.title} in new tab`}
                        >
                          <span>Open Document</span>
                          <ArrowUpRight className="size-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RESPONSIVE TABLET & MOBILE VIEW (< lg) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-4 sm:gap-5">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm p-4 transition-all duration-300 hover:border-primary/40 hover:shadow-md"
              >
                <div className="space-y-3.5">
                  <div className="h-[200px] sm:h-[220px] w-full rounded-xl border border-border/80 bg-background/50 flex items-center justify-center p-2.5 overflow-hidden shadow-inner">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="max-h-full max-w-full w-auto h-auto object-contain rounded drop-shadow-sm"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5">
                    {item.badge1 && (
                      <Badge variant="secondary" className="text-xs">
                        {item.badge1}
                      </Badge>
                    )}
                    {item.badge2 && (
                      <Badge variant="outline" className="text-xs">
                        {item.badge2}
                      </Badge>
                    )}
                  </div>

                  <div>
                    <span className="text-xs font-mono font-medium text-primary uppercase tracking-wider block">
                      {item.organization}
                    </span>
                    <h3 className="mt-1 text-base font-bold text-foreground leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/50 flex items-center justify-between mt-4">
                  <span className="text-xs font-medium text-muted-foreground">
                    Verified Credential
                  </span>
                  <a
                    href={item.href || item.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label={`Open certificate for ${item.title} in new tab`}
                  >
                    <span>View Certificate</span>
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Supporting Link to Publications */}
      <section className="py-12 border-t border-border/40 bg-muted/10">
        <div className="container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-foreground">
              Explore Documented Publications
            </h3>
            <p className="text-sm text-muted-foreground">
              Review published journal papers and conference proceedings in medical image analysis.
            </p>
          </div>
          <Link
            href="/publications"
            className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline shrink-0 text-sm"
          >
            <span>View Publications</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export { Gallery1 };
