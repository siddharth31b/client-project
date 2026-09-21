"use client";

import { motion } from "framer-motion";
import { Brain } from "lucide-react";


const ROW1 = [
  { label: "MRA Image Analysis" },
  { label: "Neurovascular Imaging" },
  { label: "Radiomics" },
  { label: "Clinical AI" },
];
const ROW2 = [
  { label: "Intracranial Aneurysms" },
  { label: "Cerebral Vessels" },
  { label: "Deep Learning" },
  { label: "U-Net Architectures" },
];
const ROW3 = [
  { label: "Translational Healthcare" },
  { label: "3D Volumetrics" },
  { label: "Attention Networks" },
  { label: "Computer Vision" },
];

function Pill({ label }: { label: string }) {
  return (
    <div className="flex shrink-0 items-center gap-2 rounded-lg border border-border/50 bg-card px-3 py-2">
      <Brain className="size-4 text-primary shrink-0" />
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
  pills: { label: string }[];
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
      <h3 className="text-xl font-bold text-foreground">Core Research Capabilities</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Deep learning methods for neurovascular disease analysis
      </p>

      <div className="-mx-6 mt-auto flex flex-col gap-3 overflow-hidden pt-6">
        <MarqueeRow pills={ROW1} duration={26} />
        <MarqueeRow pills={ROW2} reverse duration={32} />
        <MarqueeRow pills={ROW3} duration={22} />
      </div>
    </div>
  );
}
