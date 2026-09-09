"use client";

import { ArrowRight } from "lucide-react";
import React from "react";

import { Button } from "@/vendors/ui/button";
import { cn } from "@/lib/utils";
import { BlinkingSquares } from "@/components/ui/blinking-squares";

interface Hero224Props {
  className?: string;
}

const Hero224 = ({ className }: Hero224Props) => {
  return (
    <section className={cn("relative py-24 md:py-36 overflow-hidden", className)}>
      {/* Blinking Squares Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <BlinkingSquares
          direction="right"
          gridSize={56}
          squareSize={0.58}
          fadeStart={0.3}
          fadeEnd={0.95}
          falloff={1.3}
          minBrightness={0.45}
          twinkleSpeed={1.4}
          twinkleStrength={0.94}
          squareColor="#BB29FF"
          transparentBackground={true}
          className="w-full h-full"
        />
        {/* Subtle radial backdrop glow for depth */}
        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-radial from-purple-500/15 via-transparent to-transparent blur-3xl opacity-60" />
      </div>

      <div className="container relative z-10 mx-auto flex w-full flex-col justify-center">
        <div className="w-full max-w-2xl xl:max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary backdrop-blur-xs">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            <span>Interactive 3D Global Network</span>
          </div>
          <h1 className="relative z-20 max-w-xl xl:max-w-2xl 2xl:max-w-3xl text-5xl font-medium tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
            Search, <br /> Copy, Paste
            <br /> <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">Build</span>
          </h1>
          <p className="relative z-20 mt-6 max-w-lg xl:max-w-xl 2xl:max-w-2xl text-lg xl:text-xl text-muted-foreground leading-relaxed">
            Connect and scale globally with real-time visualization. Interactive 3D globe with animated connection arcs, dynamic location markers, and custom flight routes.
          </p>
          <div className="relative z-20 mt-8 flex flex-wrap items-center gap-4">
            <Button
              variant="default"
              className="text-base group flex w-fit items-center justify-center gap-2 rounded-full px-6 py-2.5 tracking-tight shadow-md hover:shadow-lg transition-all"
            >
              <span>See Pricing</span>
              <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-2 group-hover:rotate-0" />
            </Button>
            <Button
              variant="secondary"
              className="text-base group flex w-fit items-center justify-center gap-2 rounded-full px-6 py-2.5 tracking-tight hover:bg-accent transition-all"
            >
              <span>Try it for free</span>
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
