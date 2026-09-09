"use client";

import { motion } from "framer-motion";

const ROW1 = [
  { icon: 1, label: "Powerful APIs" },
  { icon: 2, label: "For Design" },
  { icon: 3, label: "Cybersecurity" },
  { icon: 9, label: "Decentralized" },
];
const ROW2 = [
  { icon: 5, label: "Colaborative teams" },
  { icon: 6, label: "Safe Space" },
  { icon: 7, label: "Revolution" },
  { icon: 8, label: "Scalable" },
];
const ROW3 = [
  { icon: 4, label: "For Teams" },
  { icon: 9, label: "Decentralized" },
  { icon: 10, label: "Cybersecurity" },
  { icon: 1, label: "Powerful APIs" },
];

function Pill({ icon, label }: { icon: number; label: string }) {
  return (
    <div className="flex shrink-0 items-center gap-2 rounded-lg border border-border/50 bg-card px-3 py-2">
      <img
        src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/bento/bento53-icon${icon}.svg`}
        alt=""
        className="size-4.5 shrink-0"
      />
      <span className="whitespace-nowrap font-mono text-xs text-foreground">
        {label}
      </span>
    </div>
  );
}

function MarqueeRow({
  pills,
  reverse,
  duration,
}: {
  pills: { icon: number; label: string }[];
  reverse?: boolean;
  duration: number;
}) {
  return (
    <motion.div
      className="flex w-max"
      animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <div className="flex gap-3 pr-3">
        {pills.map((p, i) => (
          <Pill key={i} {...p} />
        ))}
      </div>
      <div className="flex gap-3 pr-3" aria-hidden>
        {pills.map((p, i) => (
          <Pill key={`b${i}`} {...p} />
        ))}
      </div>
    </motion.div>
  );
}

export function Bento53Tile1() {
  return (
    <div className="@container flex min-h-79 flex-col overflow-hidden rounded-xl bg-muted p-6">
      <h3 className="text-xl font-bold text-foreground">Ready to go services</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Streamlining solutions for swift success
      </p>

      <div className="-mx-6 mt-auto flex flex-col gap-3 overflow-hidden pt-6">
        <MarqueeRow pills={ROW1} duration={26} />
        <MarqueeRow pills={ROW2} reverse duration={32} />
        <MarqueeRow pills={ROW3} duration={22} />
      </div>
    </div>
  );
}
