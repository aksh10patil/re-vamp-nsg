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
      className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shadow-inner"
      style={{ background: color, color: "rgba(0,0,0,0.7)" }}
    >
      {initials}
    </div>
  );
}

export default function NewClients() {
  return (
    <div className="p-6 rounded-[22px] border border-white/10 bg-white/5 backdrop-blur-md w-full h-full flex flex-col">
      {/* Top row */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-neutral-300 font-medium">Nuovi clienti</div>
        <a href="#" className="text-xs text-purple-300 hover:text-purple-200 transition-colors">
          Vedi tutto
        </a>
      </div>

      {/* Client list */}
      <div className="flex flex-col gap-4 flex-1 justify-center">
        {clients.map((client, index) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="flex items-center justify-between gap-3"
          >
            {/* Left: Avatar + Name */}
            <div className="flex items-center gap-3">
              <Avatar name={client.name} color={client.color} />
              <div className="flex flex-col">
                <span className="text-white font-medium text-sm leading-none">
                  {client.name}
                </span>
                <span className="text-[10px] text-neutral-400 mt-1 uppercase tracking-wide">
                  Verificato
                </span>
              </div>
            </div>

            {/* Right: Small indicator or progress */}
            <div className="hidden sm:block w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-white/80"
                style={{ width: `${Math.random() * 40 + 40}%` }} // Mock progress
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
