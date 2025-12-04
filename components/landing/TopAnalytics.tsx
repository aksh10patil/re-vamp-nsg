"use client";
import { motion } from "framer-motion";

function StatCard({ title, value, change }: { title: string; value: string; change?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-white/95"
    >
      <div className="text-xs text-neutral-300">{title}</div>
      <div className="text-2xl font-semibold mt-2">{value}</div>
      {change && <div className="text-sm text-green-400 mt-1">{change}</div>}
    </motion.div>
  );
}

export default function TopAnalytics() {
  return (
    <div
      className="
        grid
        grid-cols-2
        sm:grid-cols-3
        gap-4 w-full
      "
    >
      <StatCard title="Entrate" value="$38K" change="+5%" />
      <StatCard title="Utenti" value="850" change="+12%" />
      <StatCard title="Conversioni" value="2.5%" change="+3%" />
    </div>
  );
}
