"use client";

import { motion, useInView } from "framer-motion";
import { MoveUpRight } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

const defaultHeroImage =
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/tiny-home/erik-mclean-g3U7sqtdJ1w-unsplash.jpg";

const defaultGridImages = [
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/tiny-home/erik-mclean-u9-yqtr6YrM-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/tiny-home/erik-mclean-VEaI2ftIV2M-unsplash.jpg",
];

const defaultProjectDetails = [
  { label: "Client", value: "Private Residence" },
  { label: "Location", value: "Østfold, Norway" },
  { label: "Year", value: "2024" },
  {
    label: "Scope",
    value: "Prefab Design, Sustainable Materials, Off-Grid Systems",
  },
];

const defaultParagraphs = [
  "Nestled among birch and pine on a quiet Norwegian lakeside, this 380 sq ft tiny home distills Scandinavian design to its essence. Light timber framing and triple-glazed windows maximize natural light during long winters, while a compact footprint leaves the surrounding forest undisturbed.",
  "Every square meter is considered—built-in storage, a fold-down dining table, and a sleeping loft create flexible living without compromise. Heated by a single wood-burning stove and powered by rooftop solar, the retreat operates fully off-grid, embodying the Scandinavian values of simplicity and environmental harmony.",
];

const FadeUpOnScroll = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export interface ProjectDetail {
  label: string;
  value: string;
}

export interface Project1Props {
  className?: string;
  category?: string;
  title?: string;
  description?: string;
  heroImage?: string;
  heroImageAlt?: string;
  paragraphs?: string[];
  details?: ProjectDetail[];
  galleryImages?: string[];
  liveUrl?: string;
}

const Project1 = ({
  className,
  category = "Project",
  title = "Nordic Retreat",
  description = "A minimalist sanctuary that embraces hygge living and the quiet beauty of the Scandinavian forest.",
  heroImage = defaultHeroImage,
  heroImageAlt = "Project showcase visual",
  paragraphs = defaultParagraphs,
  details = defaultProjectDetails,
  galleryImages = defaultGridImages,
  liveUrl,
}: Project1Props) => {
  return (
    <section className={cn("py-8 lg:py-24", className)}>
      <div className="container space-y-8">
        <FadeUpOnScroll>
          <header className="border-b border-border pb-6 md:pb-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-3">
              <span className="text-xl font-medium uppercase tracking-wider text-primary lg:text-2xl">
                {category}
              </span>
              <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {title}
              </h1>
            </div>
          </header>
        </FadeUpOnScroll>

        <div className="flex flex-col justify-between gap-4 font-medium md:flex-row md:items-center">
          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:underline shrink-0"
            >
              <span>Visit Website</span> <MoveUpRight className="size-4" />
            </a>
          ) : (
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-primary hover:underline shrink-0 text-sm"
            >
              <span>Inquire about this project</span> <MoveUpRight className="size-4" />
            </Link>
          )}
        </div>

        <FadeUpOnScroll delay={0.15}>
          <div className="overflow-hidden rounded-xl border border-border">
            <img
              src={heroImage}
              alt={heroImageAlt}
              className="aspect-[16/8] w-full object-cover"
            />
          </div>
        </FadeUpOnScroll>

        <FadeUpOnScroll delay={0.25}>
          <div className="flex flex-col items-end justify-end py-4 md:py-6">
            <div className="space-y-6 lg:w-2/3 xl:w-1/2">
              {paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-base leading-relaxed text-muted-foreground md:text-lg"
                >
                  {p}
                </p>
              ))}

              <div className="space-y-3 pt-4">
                {details.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex flex-col border-b border-border/60 py-3 text-sm sm:flex-row sm:items-center sm:justify-between md:text-base"
                  >
                    <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase md:text-sm">
                      {detail.label}
                    </span>
                    <span className="font-medium text-foreground">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUpOnScroll>

        {galleryImages && galleryImages.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-6 pt-6">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-border"
              >
                <img
                  src={src}
                  alt={`${title} visual preview ${i + 1}`}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export { Project1 };
