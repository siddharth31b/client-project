import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero224 } from "@/components/section/hero224";
import { About20 } from "@/components/section/about20";
import { Stats4 } from "@/components/section/stats4";
import { Bento53 } from "@/components/section/bento53";
import { Projects13 } from "@/components/section/projects13";
import { Cta41 } from "@/components/section/cta41";
import { PROJECTS_DATA } from "@/lib/projects-data";

export default function Home() {
  const selectedProjects = PROJECTS_DATA.slice(0, 3).map((p) => ({
    id: p.id,
    slug: p.slug,
    title: p.title,
    description: p.description,
    launchDate: p.launchDate,
    image: p.image,
  }));

  return (
    <main className="flex-1">
      {/* 1. HERO */}
      <Hero224 />

      {/* 2. SHORT ABOUT / INTRODUCTION */}
      <About20
        heading="About"
        eyebrow="POST DOCTORAL FELLOW"
        description={"Subhash Chandra Pal is a researcher in medical image analysis and artificial intelligence, with a focus on developing deep learning–based tools for the diagnosis, treatment, and follow-up of intracranial aneurysms.\n\nHis work integrates multi-modal neuroimaging, radiomics, and clinical data to enable accurate, interpretable, and clinically relevant solutions for neurovascular disease management."}
      />

      {/* 3. RESEARCH / ACADEMIC METRICS */}
      <Stats4 />

      {/* 4. RESEARCH FOCUS / MAJOR AREAS */}
      <section className="py-16 border-t border-border/40">
        <div className="container mb-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                Core Domains
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Research Focus & Methodological Areas
              </h2>
              <p className="mt-3 text-base text-muted-foreground">
                Deep learning architectures, neurovascular imaging, cerebral vessel segmentation, and clinical insight.
              </p>
            </div>
            <Link
              href="/research"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              <span>Explore full research</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
        <Bento53 />
      </section>

      {/* 5. SELECTED RESEARCH / PROJECTS */}
      <section className="py-16 border-t border-border/40 bg-muted/10">
        <div className="container">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between mb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                Featured Studies
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Selected Research Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              <span>View all projects</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
        <Projects13 asSection={false} className="py-6" projects={selectedProjects} />
      </section>

      {/* 6. SHORT CTA */}
      <Cta41
        heading="Let's Connect & Collaborate"
        description="Open for academic research collaborations, joint proposals, and clinical healthcare AI initiatives."
        buttons={{
          primary: {
            text: "Get in Touch",
            url: "/contact",
          },
          secondary: {
            text: "Explore Research",
            url: "/research",
          },
        }}
      />
    </main>
  );
}