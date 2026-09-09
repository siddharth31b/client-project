"use client";

import { motion } from "framer-motion";

const W = "text-muted-foreground";
const C = "text-muted-foreground";
const O = "text-chart-1";
const T = "text-chart-2";

const LINES: [string, string][][] = [
  [["// SPDX-License-Identifier: MIT", C]],
  [["pragma solidity ^0.8.0;", W]],
  [[" ", W]],
  [["import ", W], ['"./IERC20.sol"', O], [";", W]],
  [[" ", W]],
  [["contract MyToken ", W], ["is", T], [" IERC20 {", W]],
  [["  string public name = ", W], ['"MyToken"', O], [";", W]],
  [["  string public symbol = ", W], ['"MT"', O], [";", W]],
  [["  ", W], ["uint256", O], [" public override totalSupply;", W]],
  [
    ["  ", W],
    ["mapping", O],
    ["(", W],
    ["address", T],
    [" => ", W],
    ["uint256", O],
    [") public override balanceOf;", W],
  ],
  [
    ["  ", W],
    ["mapping", O],
    ["(", W],
    ["address", T],
    [" => ", W],
    ["mapping", O],
    ["(", W],
    ["address", T],
    [" => ", W],
    ["uint256", O],
    [")) public override allowance;", W],
  ],
];

export function Bento53Tile3() {
  return (
    <div className="@container flex min-h-101 flex-col overflow-hidden p-6">
      <h3 className="text-xl font-bold text-foreground">
        Powerful APIs for developers
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Seamless Integration for your company
      </p>

      <div className="mt-auto font-mono text-xs leading-5">
        {LINES.map((line, i) => (
          <motion.div
            key={i}
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.28, ease: "linear" }}
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
