import type { Metadata } from "next";
import { Awards3 } from "@/components/section/awards3";

export const metadata: Metadata = {
  title: "Achievements & Recognition | Subhash Chandra Pal",
  description:
    "Scientific honors, conference committee appointments, and national qualifications earned by Subhash Chandra Pal.",
};

export default function AchievementsPage() {
  return (
    <main className="flex-1">
      <Awards3 />
    </main>
  );
}
