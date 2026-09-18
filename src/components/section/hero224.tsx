"use client";

import { ArrowRight } from "lucide-react";
import React from "react";
import Link from "next/link";

import { useTheme } from "next-themes";

import { Button } from "@/vendors/ui/button";
import { cn } from "@/lib/utils";
import ShapeWaves from "@/components/section/ShapeWaves";

interface Hero224Props {
  className?: string;
}

const Hero224 = ({ className }: Hero224Props) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme !== "light" : true;

  return (
    <section className={cn("relative py-24 md:py-36 overflow-hidden", className)}>
      {/* ShapeWaves Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <ShapeWaves
          key={isDark ? "dark" : "light"}
          text=""
          fontFamily='Geist, "Geist Sans", system-ui, sans-serif'
          fontWeight={500}
          textSize={0.6}
          shapes="mixed"
          cellSize={10}
          dotSize={0.75}
          color={isDark ? "#737373" : "#cbd5e1"}
          hoverColor={isDark ? "#ffffff" : "#0f172a"}
          backgroundColor={isDark ? "#000000" : "#ffffff"}
          speed={1}
          scale={1}
          contrast={1}
          brightness={isDark ? 0.35 : 0.65}
          flow={0}
          direction={0}
          fade={0.25}
          interactive={true}
          splashRadius={40}
          splashStrength={0.4}
          glow={isDark ? 0.35 : 0.15}
          intro={true}
          introDuration={1.6}
          paused={false}
        />
        {/* Soft readability scrim: ensures text is 100% crisp and readable in both dark & light modes */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-transparent sm:bg-gradient-to-r sm:from-background sm:via-background/85 sm:to-transparent w-full sm:w-4/5 lg:w-3/5 pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto flex w-full flex-col justify-center">
        <div className="w-full max-w-2xl xl:max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary backdrop-blur-xs">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            <span>Post Doctoral Fellow · IIT Mandi iHUB & HCI Foundation</span>
          </div>
          <h1 className="relative z-20 max-w-xl xl:max-w-2xl 2xl:max-w-3xl text-5xl font-medium tracking-tight sm:text-6xl md:text-7xl xl:text-8xl text-foreground">
            Subhash Chandra <br />
            <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
              Pal
            </span>
          </h1>
          <p className="relative z-20 mt-3 text-lg font-semibold text-primary md:text-xl">
            AI for Neurovascular Imaging and Clinical Insight
          </p>
          <p className="relative z-20 mt-4 max-w-lg xl:max-w-xl 2xl:max-w-2xl text-base xl:text-lg text-muted-foreground leading-relaxed">
            Researcher in medical image analysis and artificial intelligence, focused on developing deep learning-based methods for neurovascular imaging, intracranial aneurysm analysis, segmentation, quantification, and clinically relevant healthcare AI.
          </p>
          <div className="relative z-20 mt-8 flex flex-wrap items-center gap-4">
            <Button
              variant="default"
              className="text-base group flex w-fit items-center justify-center gap-2 rounded-full px-6 py-2.5 tracking-tight shadow-md hover:shadow-lg transition-all"
              render={<Link href="/research" />}
              nativeButton={false}
            >
              <span>Explore Research</span>
              <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-2 group-hover:rotate-0" />
            </Button>
            <Button
              variant="secondary"
              className="text-base group flex w-fit items-center justify-center gap-2 rounded-full px-6 py-2.5 tracking-tight hover:bg-accent transition-all"
              render={<Link href="/publications" />}
              nativeButton={false}
            >
              <span>View Publications</span>
              <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-2 group-hover:rotate-0" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero224 };
export default Hero224;
