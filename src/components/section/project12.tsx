"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/vendors/ui/button";
import { cn } from "@/lib/utils";

const defaultHeadingLines = [
  "AI for Neurovascular",
  "Imaging & Clinical",
  "Diagnostic Insight",
];

const maskReveal = {
  hidden: { clipPath: "inset(0% 100% 0% 0%)", opacity: 0 },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export interface Project12Props {
  className?: string;
  headingLines?: string[];
  description?: string;
  metadata?: [string, string][];
  imageSrc?: string;
  imageAlt?: string;
  showBackButton?: boolean;
  backHref?: string;
  backLabel?: string;
}

const Project12 = ({
  className,
  headingLines = defaultHeadingLines,
  description = "Investigating deep learning architectures and quantitative radiomics for non-invasive detection, segmentation, and volumetric monitoring of intracranial aneurysms and major cerebral vessels in magnetic resonance angiography (MRA).",
  metadata = [
    ["Focus", "Neurovascular Image Analysis"],
    ["Domain", "Deep Learning & MRA Segmentation"],
    ["Affiliation", "IIT Mandi iHUB & HCI Foundation"],
  ],
  imageSrc = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pat-whelen-gWfpmH0H2bM-unsplash.jpg",
  imageAlt = "Neurovascular Image Analysis and AI Research",
  showBackButton = false,
  backHref = "/research",
  backLabel = "Back",
}: Project12Props) => {
  return (
    <section className={cn("py-20 lg:py-32", className)}>
      <div className="container space-y-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="flex-1 lg:max-w-2xl">
            {showBackButton && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              >
                <Button
                  variant="secondary"
                  className="mb-6 h-auto p-1 font-normal text-muted-foreground hover:text-foreground"
                  render={<Link href={backHref} />}
                  nativeButton={false}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {backLabel}
                </Button>
              </motion.div>
            )}

            <div className="space-y-2 overflow-hidden">
              {headingLines.map((line, i) => (
                <motion.h2
                  key={i}
                  className="text-3xl leading-tight font-bold text-foreground md:text-4xl lg:text-5xl"
                  initial="hidden"
                  animate="visible"
                  variants={maskReveal}
                  transition={{
                    delay: i * 0.3,
                    duration: 0.9,
                    ease: "easeInOut",
                  }}
                >
                  {line}
                </motion.h2>
              ))}
            </div>
          </div>

          <motion.div
            className="mt-1 flex-shrink-0 lg:w-80"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>

              <div className="space-y-4">
                {metadata.map(([label, value], i) => (
                  <motion.div
                    key={label}
                    variants={fadeUp}
                    transition={{
                      delay: 0.9 + i * 0.2,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    initial="hidden"
                    animate="visible"
                  >
                    <p className="mb-1 text-xs tracking-wide text-muted-foreground uppercase">
                      {label}
                    </p>
                    <p className="font-medium text-foreground">{value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 40, scale: 1.02 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full rounded-xl border border-border object-cover shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export { Project12 };
