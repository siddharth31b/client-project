import type { Metadata } from "next";
import { Projects13 } from "@/components/section/projects13";

export const metadata: Metadata = {
  title: "Projects | Subhash Chandra Pal",
  description:
    "Research projects and computational studies in medical image analysis, neurovascular deep learning, and aneurysm quantification by Subhash Chandra Pal.",
};

export default function ProjectsPage() {
  return (
    <main className="flex-1">
      <Projects13 showHero className="py-12 lg:py-20" />
    </main>
  );
}
