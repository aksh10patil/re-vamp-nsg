"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const lastYear = [11, 12, 15, 12, 9, 14, 11, 13];
const thisYear = [20, 18, 22, 18, 17, 22, 24, 28];

export default function ProductSalesCard() {
  const [mode, setMode] = useState<"last" | "this">("this");
  const data = mode === "this" ? thisYear : lastYear;
  
  const [heightMultiplier, setHeightMultiplier] = useState(3.6);

  useEffect(() => {
    const handleResize = () => {
      setHeightMultiplier(window.innerWidth < 640 ? 2.4 : 3.6);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const total = data.reduce((a, b) => a + b, 0);

  const mv = useMotionValue(total);
  const spring = useSpring(mv, { stiffness: 140, damping: 18 });
  const [displayTotal, setDisplayTotal] = useState(total);

  useEffect(() => {
    mv.set(total);
    const unsub = spring.on("change", (v) => setDisplayTotal(Math.round(v)));
    return () => unsub();
  }, [total, mv, spring]);

  return (
    <div className="p-6 rounded-[22px] border border-white/10 bg-white/5 backdrop-blur-md w-full">
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:items-center">
        <div>
          <div className="text-sm text-neutral-300">Vendite del prodotto</div>
          <div className="text-3xl font-semibold text-white">{displayTotal}</div>
        </div>

        <div className="rounded-full bg-white/10 p-[4px] flex items-center w-fit">
          <button
            onClick={() => setMode("last")}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition ${
              mode === "last" ? "bg-white/20 text-white" : "text-neutral-400 hover:text-white"
            }`}
          >
            Anno scorso
          </button>
          <button
            onClick={() => setMode("this")}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition ${
              mode === "this" ? "bg-white/20 text-white" : "text-neutral-400 hover:text-white"
            }`}
          >
            Quest'anno
          </button>
        </div>
      </div>

      {/* CHART */}
      <div className="mt-8 flex flex-col sm:flex-row gap-6">

        {/* Bars */}
        <div className="h-48 flex items-end gap-2 sm:gap-3 flex-1">
          {data.map((val, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: val * heightMultiplier }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
              className="rounded-t-sm bg-gradient-to-b from-purple-300 to-purple-600 shadow-[0_10px_30px_rgba(255,200,80,0.12)]"
              style={{
                width: "100%",
                maxWidth: "24px",
                minWidth: "8px"
              }}
            />
          ))}
        </div>

        {/* Right side text */}
        <div className="flex flex-col justify-between flex-1 min-w-[120px]">
          <div className="text-sm text-neutral-300 font-medium">Approfondimenti</div>
          <div className="text-xs text-neutral-400 leading-relaxed mt-2">
            Confronto tra <span className="text-purple-300">2023</span> e <span className="text-purple-300">2024</span>. 
            La crescita è stata costante nel Q3 e Q4.
          </div>
        </div>
      </div>
    </div>
  );
}
