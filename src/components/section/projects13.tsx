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

interface Projects13Props {
  className?: string;
  projects?: ProjectItem13[];
}

const defaultProjects: ProjectItem13[] = [
  {
    id: 1,
    slug: "e-commerce-platform",
    title: "E-commerce Platform",
    description:
      "Designed and developed a fully scalable e-commerce platform from scratch, focusing on simplicity and performance, which transformed workflows for over 10,000 users across multiple industries.",
    launchDate: "04.17.2025",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img1.png",
  },
  {
    id: 2,
    slug: "mobile-banking-app",
    title: "Mobile Banking App",
    description:
      "Built a secure and intuitive mobile banking application with real-time transaction processing, biometric authentication, and seamless user experience for financial institutions.",
    launchDate: "03.15.2025",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img2.png",
  },
  {
    id: 3,
    slug: "ai-content-generator",
    title: "AI Content Generator",
    description:
      "Developed an AI-powered content generation platform that helps marketers create engaging content, with advanced NLP capabilities and customizable templates.",
    launchDate: "02.28.2025",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img3.png",
  },
  {
    id: 4,
    slug: "project-management-tool",
    title: "Project Management Tool",
    description:
      "Created a comprehensive project management solution with real-time collaboration, task tracking, and analytics dashboard for remote teams and enterprises.",
    launchDate: "01.20.2025",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img10.png",
  },
];

const Projects13 = ({ className, projects = defaultProjects }: Projects13Props) => {
  return (
    <section className={cn("py-32", className)}>
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
                    className="block h-full w-full overflow-hidden rounded-lg"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export { Projects13 };
