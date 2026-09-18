import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { Project1 } from "@/components/section/project1";
import {
  getAllProjects,
  getProjectBySlug,
  getRelatedProjects,
} from "@/lib/projects-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Subhash Chandra Pal`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project.slug, 2);

  const projectDetails = [
    { label: "Category", value: project.category },
    { label: "Timeline", value: project.year },
    { label: "Scope", value: project.scope },
    ...(project.client ? [{ label: "Research Affiliation", value: project.client }] : []),
    ...(project.location ? [{ label: "Location", value: project.location }] : []),
  ];

  return (
    <main className="flex-1">
      {/* Back Navigation Bar */}
      <div className="border-b border-border/40 bg-muted/20 py-4">
        <div className="container">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>
      </div>

      {/* Main Project Case Study */}
      <Project1
        category={project.category}
        title={project.title}
        description={project.description}
        heroImage={project.image}
        heroImageAlt={project.title}
        paragraphs={project.paragraphs}
        details={projectDetails}
        galleryImages={project.galleryImages}
        liveUrl={project.liveUrl}
      />

      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
        <section className="border-t border-border/40 bg-muted/10 py-16">
          <div className="container space-y-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  More Research
                </p>
                <h2 className="text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
                  Related Research Studies
                </h2>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                <span>View All Projects</span>
                <ArrowUpRight className="size-4" />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {relatedProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group block rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-md"
                >
                  <div className="mb-4 aspect-[16/9] w-full overflow-hidden rounded-lg bg-muted">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">
                    {p.category}
                  </p>
                  <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
