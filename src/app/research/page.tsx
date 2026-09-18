import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, FileText } from "lucide-react";

import { Bento53 } from "@/components/section/bento53";
import { Project12 } from "@/components/section/project12";
import { List2 } from "@/components/section/list2";

export const metadata: Metadata = {
  title: "Research | Subhash Chandra Pal",
  description:
    "Medical image analysis, deep learning, neurovascular imaging, intracranial aneurysm analysis, and translational healthcare AI by Subhash Chandra Pal.",
};

export default function ResearchPage() {
  return (
    <main className="flex-1">
      {/* 1. Single Authoritative Research Hero */}
      <section className="pt-12 pb-8 lg:pt-20 lg:pb-12 border-b border-border/40 bg-muted/20">
        <div className="container">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary">
              <span>Scientific & Clinical Investigation</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              AI for Neurovascular Imaging
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Developing deep learning architectures and quantitative radiomic algorithms for non-invasive detection, segmentation, and volumetric quantification of intracranial aneurysms and major cerebral vessels in magnetic resonance angiography (MRA).
            </p>
          </div>
        </div>
      </section>

      {/* 2. Core Methodological Domains (Bento Grid) */}
      <section className="py-12 lg:py-16">
        <Bento53 />
      </section>

      {/* 3. Featured Research Initiative Case Study */}
      <Project12
        className="py-16 lg:py-24 border-t border-border/40"
        showBackButton={false}
        headingLines={[
          "Computer-Aided",
          "Aneurysm Analysis",
          "in MRA Datasets",
        ]}
        description="Comprehensive doctoral and postdoctoral investigation formulating novel dilated residual architectures, dual-attention mechanisms, and VOI preprocessing algorithms for 3D TOF-MRA clinical datasets."
        metadata={[
          ["Focus", "Neurovascular Image Analysis"],
          ["Domain", "Deep Learning & MRA Segmentation"],
          ["Affiliation", "IIT Mandi iHUB & HCI Foundation"],
        ]}
        imageAlt="Neurovascular Image Analysis and AI Research"
      />

      {/* 4. Publications Preview (Link to /publications) */}
      <section className="py-16 border-t border-border/40 bg-muted/10">
        <div className="container space-y-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Scholarly Output
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Featured Publications
              </h2>
            </div>
            <Link
              href="/publications"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              <span>Explore all publications</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <List2
            asSection={false}
            buttonText="View Paper"
            items={[
              {
                icon: <FileText className="size-6 text-primary" />,
                title: "Computer‐Aided Volumetric Quantification of Pre‐and Post‐Treatment Intracranial Aneurysms in MRA",
                category: "IET Image Processing (2025)",
                description:
                  "Pal, Subhash Chandra, et al. Automated volume-of-interest reduction and 3D volumetric quantification across clinical treatment timelines.",
                link: "/publications",
              },
              {
                icon: <BookOpen className="size-6 text-primary" />,
                title: "Computationally efficient dilated residual networks for segmentation of major cerebral vessels in MRA",
                category: "Network Modeling Analysis in Health Informatics and Bioinformatics (2025)",
                description:
                  "Pal, Subhash Chandra, et al. High-efficiency dilated residual networks for precise cerebral vessel segmentation with reduced memory footprint.",
                link: "/publications",
              },
            ]}
          />
        </div>
      </section>
    </main>
  );
}
