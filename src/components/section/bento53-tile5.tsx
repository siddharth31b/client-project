"use client";

import { motion } from "framer-motion";

const PILLS = [
  "Web 3.0 development",
  "Growth",
  "APIs",
  "Go-to-Market Solutions",
  "Easy-to-use interface",
  "Scalable",
  "Fast Integrations",
  "Accessibility",
];

export function Bento53Tile5() {
  return (
    <div className="@container flex min-h-101 flex-col overflow-hidden p-6">
      <h3 className="text-2xl font-medium text-foreground">Web 3.0 development</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Crafting tomorrow's digital landscape today
      </p>

      <div className="mt-auto flex flex-wrap gap-3">
        {PILLS.map((label, i) => (
          <motion.span
            key={label}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.08, ease: "easeOut" }}
            className="whitespace-nowrap rounded-full border border-border/50 bg-muted/50 px-4 py-2.5 font-mono text-xs text-foreground"
          >
            {label}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
