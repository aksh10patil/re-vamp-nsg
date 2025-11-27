"use client";
import { motion } from "framer-motion";

function StatCard({ title, value, change }: { title: string; value: string; change?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      // Added background and border for better visibility on dark backgrounds if needed
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
        grid-cols-2          /* MOBILE: 2 in a row (adjusted for better fit) */
        sm:grid-cols-3       /* SMALL SCREENS: 3 per row */
        gap-4 w-full
      "
    >
      <StatCard title="Revenue" value="$38K" change="+5%" />
      <StatCard title="Users" value="850" change="+12%" />
      <StatCard title="Conversions" value="2.5%" change="+3%" />
    </div>
  );
}