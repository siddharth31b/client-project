import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { About20 } from "@/components/section/about20";
import { Feature313 } from "@/components/section/feature313";
import { List2, ListItem } from "@/components/section/list2";

export const metadata: Metadata = {
  title: "About | Subhash Chandra Pal",
  description:
    "Learn more about Subhash Chandra Pal, Post Doctoral Fellow researching AI for neurovascular imaging and clinical insight at IIT Mandi iHUB and HCI Foundation.",
};

const educationItems: ListItem[] = [
  {
    icon: <GraduationCap className="size-6 text-primary" />,
    title: "Doctor of Philosophy (Ph.D.) in Electrical Engineering",
    category: "Feb 2022 – July 2025 (Thesis Submitted)",
    description:
      "National Institute of Technology, Durgapur, West Bengal. Thesis: Computer-aided Diagnostic Analysis of Intracranial Aneurysms from MRA Images. Supervised by Dr. Ashis Kumar Dhara (NIT Durgapur) & Prof. Robin Strand (Uppsala University, Sweden).",
    link: "/publications",
  },
  {
    icon: <GraduationCap className="size-6 text-primary" />,
    title: "Master of Technology (M.Tech.) in Electrical Engineering",
    category: "August 2018 – May 2020",
    description:
      "National Institute of Technology, Durgapur, West Bengal. Thesis: Localization of optics disc in retinal fundus images using single shot detector. Supervised by Dr. Ashis Kumar Dhara.",
    link: "/research",
  },
  {
    icon: <GraduationCap className="size-6 text-primary" />,
    title: "Bachelor of Technology (B.Tech.) in Electrical Engineering",
    category: "July 2013 – July 2017",
    description:
      "Dr. B. C. Roy Engineering College, West Bengal. Maulana Abul Kalam Azad University of Technology (MAKAUT), West Bengal.",
    link: "/experience",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* 1. About Hero / Page Introduction */}
      <section className="pt-12 pb-6 lg:pt-20 lg:pb-10 border-b border-border/40 bg-muted/20">
        <div className="container">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary">
              <span>Researcher Profile & Education</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              About Subhash Chandra Pal
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Post Doctoral Fellow at IIT Mandi iHUB & HCI Foundation, specializing in AI-driven medical image analysis, neurovascular diagnostics, and clinical translation across national and international research initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Personal / Professional Overview */}
      <About20
        heading="Academic Biography"
        eyebrow="Profile & Background"
        className="py-16 lg:py-24"
      />

      {/* 3. Core Focus / Capabilities / Technical Philosophy */}
      <Feature313 />

      {/* 4. Verified Education */}
      <List2
        heading="Academic Education"
        items={educationItems}
        buttonText="Related Work"
      />
    </main>
  );
}
