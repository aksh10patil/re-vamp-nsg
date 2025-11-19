"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "Eliza Thornton", color: "#E07A5F" },
  { name: "Javier Ramirez", color: "#3AAFA9" },
  { name: "Zara Mahmood", color: "#FFD166" },
  { name: "Freya Lindholm", color: "#8ECAE6" },
  { name: "Marcus Blackwood", color: "#C77DFF" }
];

// Avatar component
function Avatar({ name, color }: { name: string; color: string }) {
  const initials = name.split(" ").map((n) => n[0]).slice(0, 2).join("");

  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold"
      style={{ background: color, color: "rgba(10,10,10,0.9)" }}
    >
      {initials}
    </div>
  );
}

export default function NewClients() {
  return (
    <div className="card p-6 glow rounded-[22px] w-full">
      {/* Top row */}
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm text-neutral-300">New clients</div>
        <a href="#" className="text-sm text-purple-300 hover:underline">
          See all
        </a>
      </div>

      {/* Client list */}
      <div className="flex flex-col gap-4 mt-3">
        {clients.map((client, index) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="flex items-center justify-between flex-wrap gap-4"
          >
            {/* Left: Avatar + Name */}
            <div className="flex items-center gap-3 min-w-[140px]">
              <Avatar name={client.name} color={client.color} />
              <div>
                <div className="text-white font-medium text-sm">
                  {client.name}
                </div>
                <div className="text-xs text-neutral-400">New customer</div>
              </div>
            </div>

            {/* Right: Progress bar */}
            <div className="w-full sm:w-32 h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-white"
                style={{
                  width: `${40 + index * 12}%`,
                  transition: "width 0.6s ease-out"
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
