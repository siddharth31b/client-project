"use client";

import { motion } from "framer-motion";
import { Activity, Brain, HeartPulse, Layers, Scan, Sparkles, Stethoscope, Waves } from "lucide-react";

const MODALITIES = [
  { label: "3D TOF-MRA", icon: Scan, pos: "left-28 top-1.5", color: "text-chart-1 bg-chart-1/10 border-chart-1/20" },
  { label: "Vessel Segmentation", icon: Brain, pos: "left-44 top-6", color: "text-chart-2 bg-chart-2/10 border-chart-2/20" },
  { label: "Aneurysm Volume", icon: Layers, pos: "left-52 top-22.5", color: "text-primary bg-primary/10 border-primary/20" },
  { label: "Radiomics", icon: Sparkles, pos: "left-44 top-37.25", color: "text-chart-3 bg-chart-3/10 border-chart-3/20" },
  { label: "PPG & ABP Signals", icon: HeartPulse, pos: "left-28 top-43.75", color: "text-chart-4 bg-chart-4/10 border-chart-4/20" },
  { label: "Clinical AI", icon: Stethoscope, pos: "left-12 top-37.25", color: "text-chart-5 bg-chart-5/10 border-chart-5/20" },
  { label: "Hemodynamics", icon: Waves, pos: "left-6 top-22.5", color: "text-chart-1 bg-chart-1/10 border-chart-1/20" },
  { label: "Condition Metrics", icon: Activity, pos: "left-12 top-6", color: "text-chart-2 bg-chart-2/10 border-chart-2/20" },
];

export function Bento53Tile4() {
  return (
    <div className="@container flex min-h-101 flex-col overflow-hidden p-6">
      <h3 className="text-xl font-bold text-foreground">
        Multimodal Imaging & Biomarkers
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Quantitative analysis across neurovascular modalities
      </p>

      <div className="mt-auto">
        <div className="relative mx-auto h-56 w-75">
          {MODALITIES.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.08,
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                }}
                className={`absolute ${item.pos}`}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 3 + i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium shadow-xs ${item.color}`}
                >
                  <Icon className="size-3.5 shrink-0" />
                  <span className="whitespace-nowrap font-mono text-[10px]">{item.label}</span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
