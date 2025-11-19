"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const lastYear = [11, 12, 15, 12, 9, 14, 11, 13];
const thisYear = [20, 18, 22, 18, 17, 22, 24, 28];

export default function ProductSalesCard() {
  const [mode, setMode] = useState<"last" | "this">("this");
  const data = mode === "this" ? thisYear : lastYear;

  const total = data.reduce((a, b) => a + b, 0);

  const mv = useMotionValue(total);
  const spring = useSpring(mv, { stiffness: 140, damping: 18 });
  const [displayTotal, setDisplayTotal] = useState(total);

  useEffect(() => {
    mv.set(total);
    const unsub = spring.on("change", (v) => setDisplayTotal(Math.round(v)));
    return () => unsub();
  }, [total]);

  return (
    <div className="card p-6 glow rounded-[22px] w-full">
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:items-center">
        <div>
          <div className="text-sm text-neutral-300">Product sales</div>
          <div className="text-3xl font-semibold text-white">{displayTotal}</div>
        </div>

        <div className="rounded-full bg-white/10 p-[6px] flex items-center w-fit">
          <button
            onClick={() => setMode("last")}
            className={`px-3 py-1 rounded-full text-sm transition ${mode === "last" ? "bg-white/20 text-white" : "text-neutral-300"}`}
          >
            Last year
          </button>
          <button
            onClick={() => setMode("this")}
            className={`px-3 py-1 rounded-full text-sm transition ${mode === "this" ? "bg-white/20 text-white" : "text-neutral-300"}`}
          >
            This year
          </button>
        </div>
      </div>

      {/* CHART */}
      <div className="mt-6 flex flex-col sm:flex-row gap-6">

        {/* Bars */}
        <div className="h-48 flex items-end gap-3 flex-1">
          {data.map((val, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: val * (window.innerWidth < 640 ? 2.4 : 3.6) }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
              className="rounded-md bg-gradient-to-b from-purple-300 to-purple-600 shadow-[0_10px_30px_rgba(255,200,80,0.12)]"
              style={{
                width: window.innerWidth < 640 ? "10px" : "24px",
              }}
            />
          ))}
        </div>

        {/* Right side text */}
        <div className="flex flex-col justify-between flex-1">
          <div className="text-sm text-neutral-300">Notes</div>
          <div className="text-sm text-neutral-400">
            View the comparison between last year and this year. Bars animate smoothly when toggled.
          </div>
        </div>
      </div>
    </div>
  );
}
