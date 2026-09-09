"use client";

import { motion } from "framer-motion";

const COINS = [
  { a: "btc", pos: "left-32 top-1.5" },
  { a: "eth", pos: "left-48.25 top-6" },
  { a: "greentoken", pos: "left-54.5 top-22.5" },
  { a: "polka", pos: "left-48.25 top-37.25" },
  { a: "bnb", pos: "left-32 top-43.75" },
  { a: "sol", pos: "left-16.75 top-37.25" },
  { a: "swittch", pos: "left-9.5 top-22.5" },
  { a: "avax", pos: "left-16.75 top-6" },
];

export function Bento53Tile4() {
  return (
    <div className="@container flex min-h-101 flex-col overflow-hidden p-6">
      <h3 className="text-xl font-bold text-foreground">
        The best blockchains out there
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Pioneering paths in decentralized solutions
      </p>

      <div className="mt-auto">
        <div className="relative mx-auto h-56 w-75">
          {COINS.map((coin, i) => (
            <motion.div
              key={coin.a}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
              className={`absolute size-11 ${coin.pos}`}
            >
              <motion.img
                src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/bento/bento53-block4${coin.a}.svg`}
                alt=""
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3 + i * 0.25,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="size-11"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
