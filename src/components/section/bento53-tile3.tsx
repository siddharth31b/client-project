"use client";

import { motion } from "framer-motion";

const W = "text-muted-foreground";
const C = "text-muted-foreground";
const O = "text-chart-1";
const T = "text-chart-2";

const LINES: [string, string][][] = [
  [["# Neurovascular Segmentation Pipeline", C]],
  [["import ", O], ["torch", W], ["; ", W], ["import ", O], ["torch.nn ", W], ["as ", O], ["nn", W]],
  [[" ", W]],
  [["class ", O], ["ResDualAttentionUNet", T], ["(nn.Module):", W]],
  [["  def __init__(self, in_channels=1, classes=2):", W]],
  [["    super().__init__()", W]],
  [["    self.encoder = ", W], ["DilatedResidualEncoder", T], ["()", W]],
  [["    self.attention = ", W], ["DualAttentionModule", T], ["()", W]],
  [["    self.decoder = ", W], ["MultiLevelDecoder", T], ["(classes)", W]],
  [[" ", W]],
  [["  def forward(self, mra_volume):", W]],
  [["    feat = self.encoder(mra_volume)", W]],
  [["    return self.decoder(self.attention(feat))", W]],
];

export function Bento53Tile3() {
  return (
    <div className="@container flex min-h-101 flex-col overflow-hidden p-6">
      <h3 className="text-xl font-bold text-foreground">
        Deep Learning Architectures
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Residual Dual-Attention & Dilated U-Net Pipelines
      </p>

      <div className="mt-auto font-mono text-xs leading-5">
        {LINES.map((line, i) => (
          <motion.div
            key={i}
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.15, ease: "linear" }}
            className="whitespace-pre"
          >
            {line.map((tok, j) => (
              <span key={j} className={tok[1]}>
                {tok[0]}
              </span>
            ))}
          </motion.div>
        ))}
        <div className="whitespace-pre">
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className="inline-block h-3.5 w-1.5 bg-chart-1 align-text-bottom"
          />
        </div>
      </div>
    </div>
  );
}
