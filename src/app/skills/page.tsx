import type { Metadata } from "next";
import { Skills1 } from "@/components/section/skills1";

export const metadata: Metadata = {
  title: "Skills & Methodologies | Subhash Chandra Pal",
  description:
    "Medical image analysis, deep learning architectures, neurovascular imaging, and biomedical signal processing competencies of Subhash Chandra Pal.",
};

export default function SkillsPage() {
  return (
    <main className="flex-1">
      <Skills1 />
    </main>
  );
}
