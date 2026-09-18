import type { Metadata } from "next";
import { Experience1 } from "@/components/section/experience1";

export const metadata: Metadata = {
  title: "Experience | Subhash Chandra Pal",
  description:
    "Academic appointments, doctoral research fellowships, and scientific reviewer appointments of Subhash Chandra Pal.",
};

export default function ExperiencePage() {
  return (
    <main className="flex-1">
      <Experience1 />
    </main>
  );
}
