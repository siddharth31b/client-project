"use client";

import { motion } from "framer-motion";

const LEFT = "M0,54 L54,54 Q60,54 60,60 L60,74 Q60,80 66,80 L230,80";
const RIGHT = "M308,80 L472,80 Q478,80 478,86 L478,100 Q478,106 484,106 L538,106";

export function Bento53Tile2() {
  return (
    <div className="@container flex min-h-79 flex-col overflow-hidden p-6">
      <h3 className="text-xl font-bold text-foreground">For growing teams</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Tailored support to give you progress
      </p>

      <div className="relative -mx-6 mt-auto h-40">
        <svg
          viewBox="0 0 538 160"
          fill="none"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <path d={LEFT} stroke="var(--chart-1)" strokeWidth="1.5" opacity="0.55" />
          <path d={RIGHT} stroke="var(--chart-1)" strokeWidth="1.5" opacity="0.55" />
          <g>
            <animateMotion
              dur="2.6s"
              repeatCount="indefinite"
              calcMode="linear"
              path={LEFT}
            />
            <circle r="7" fill="var(--chart-1)" opacity="0.25" />
            <circle r="3" fill="var(--chart-1)" />
          </g>
          <g>
            <animateMotion
              dur="2.6s"
              repeatCount="indefinite"
              keyPoints="1;0"
              keyTimes="0;1"
              calcMode="linear"
              path={RIGHT}
            />
            <circle r="7" fill="var(--chart-1)" opacity="0.25" />
            <circle r="3" fill="var(--chart-1)" />
          </g>
        </svg>

        <motion.span
          animate={{ opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-chart-1 blur-3xl"
        />

        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2.5 rounded-full border border-border/50 bg-muted/50 px-5 py-4">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/bento/bento53-block2envelope.svg"
            alt=""
            className="size-4.5 shrink-0"
          />
          <span className="whitespace-nowrap font-mono text-xs font-medium text-foreground">
            Invite user to this team
          </span>
        </div>
      </div>
    </div>
  );
}
