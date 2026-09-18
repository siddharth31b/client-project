import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProjectItem13 {
  id: number | string;
  title: string;
  description: string;
  launchDate: string;
  image: string;
  slug?: string;
}

export interface Projects13Props {
  className?: string;
  projects?: ProjectItem13[];
  asSection?: boolean;
  showHero?: boolean;
  heroBadge?: string;
  heroTitle?: string;
  heroDescription?: string;
}

import { PROJECTS_DATA } from "@/lib/projects-data";

const defaultProjects: ProjectItem13[] = PROJECTS_DATA.map((p) => ({
  id: p.id,
  slug: p.slug,
  title: p.title,
  description: p.description,
  launchDate: p.launchDate,
  image: p.image,
}));

const Projects13 = ({
  className,
  projects = defaultProjects,
  asSection = true,
  showHero = false,
  heroBadge = "Research Projects",
  heroTitle = "Research Projects & Studies",
  heroDescription = "Computational methodologies in deep learning, MRA neurovascular imaging, intracranial aneurysm segmentation, and quantitative physiological signal processing.",
}: Projects13Props) => {
  const tableContent = (
    <div className="container">
      <ul className="relative w-full">
        <li className="hidden justify-between gap-10 border-b pt-15 pb-2 text-sm tracking-tight text-foreground/40 uppercase lg:flex lg:text-base">
          <p className="w-1/4">PROJECTS</p>
          <p className="w-2/4">DESCRIPTION</p>
          <p className="w-1/4 text-right">GALLERY</p>
        </li>
        {projects.map((project, index) => {
          const projectSlug =
            project.slug ||
            project.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)+/g, "");

          return (
            <li
              key={project.id}
              className="group flex w-full flex-col justify-between gap-10 border-b py-10 transition-colors hover:border-primary/40 lg:flex-row lg:py-15"
            >
              <div className="flex gap-4 text-xl font-medium tracking-tighter uppercase lg:w-1/4">
                <p className="text-muted-foreground">0{index + 1}</p>
                <div className="flex flex-col gap-1">
                  <Link
                    href={`/projects/${projectSlug}`}
                    className="group-hover:text-primary transition-colors inline-flex items-center gap-1 font-semibold"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <p className="text-sm text-muted-foreground font-normal normal-case">
                    ({project.launchDate})
                  </p>
                </div>
              </div>
              <div className="text-2xl text-foreground/90 lg:w-2/4 lg:text-3xl">
                <Link
                  href={`/projects/${projectSlug}`}
                  className="hover:text-primary transition-colors block leading-relaxed"
                >
                  {project.description}
                </Link>
              </div>
              <div className="w-full text-right text-sm text-foreground/50 uppercase lg:h-30 lg:w-1/4 lg:pl-20 lg:text-base">
                <Link
                  href={`/projects/${projectSlug}`}
                  className="block h-full w-full overflow-hidden rounded-lg relative min-h-[100px]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={225}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );

  const mainBody = asSection ? (
    <section className={cn("py-32", className)}>{tableContent}</section>
  ) : (
    <div className={cn("w-full", className)}>{tableContent}</div>
  );

  if (!showHero) {
    return mainBody;
  }

  return (
    <div className="w-full">
      {/* 1. Page Hero / Introduction */}
      {showHero && (
        <section className="pt-12 pb-6 lg:pt-20 lg:pb-10 border-b border-border/40 bg-muted/20">
          <div className="container">
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
          </div>
        </section>
      )}

      {/* 2. Projects List */}
      {mainBody}
    </div>
  );
};

export { Projects13 };
