import { Hero224 } from "@/components/section/hero224";
import { About20 } from "@/components/section/about20";
import { Stats4 } from "@/components/section/stats4";
import { Bento53 } from "@/components/section/bento53";
import { Experience1 } from "@/components/section/experience1";
import { Projects13 } from "@/components/section/projects13";
import { Project12 } from "@/components/section/project12";
import { Skills1 } from "@/components/section/skills1";
import { Awards3 } from "@/components/section/awards3";
import { Gallery1 } from "@/components/section/gallery1";
import { Contact30 } from "@/components/section/contact30";
import { Cta41 } from "@/components/section/cta41";

export default function Home() {
  return (
    <main className="flex-1">
      {/* 1. HERO */}
      <Hero224 />

      {/* 2. ABOUT PREVIEW */}
      <About20 />

      {/* 3. QUICK STATS */}
      <Stats4 />

      {/* 4. FEATURED / CORE CAPABILITIES */}
      <Bento53 />

      {/* 5. EXPERIENCE PREVIEW */}
      <Experience1 buttonText="View Experience" buttonUrl="/experience" />

      {/* 6. FEATURED PROJECTS */}
      <Projects13 />

      {/* 7. RESEARCH / AI WORK PREVIEW */}
      <Project12 />

      {/* 8. SKILLS PREVIEW */}
      <Skills1 />

      {/* 9. ACHIEVEMENTS PREVIEW */}
      <Awards3 />

      {/* 10. CERTIFICATES / VISUAL CREDENTIALS PREVIEW */}
      <Gallery1 />

      {/* 12. CONTACT PREVIEW */}
      <Contact30 />

      {/* 13. FINAL CTA */}
      <Cta41
        heading="Let's Connect & Collaborate"
        description="Open for research collaborations, engineering leadership, and speaking engagements."
        buttons={{
          primary: {
            text: "Get in Touch",
            url: "/contact",
          },
          secondary: {
            text: "Explore Projects",
            url: "/projects",
          },
        }}
      />
    </main>
  );
}