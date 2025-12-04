"use client";

import { motion } from "framer-motion";
import { FaChartBar, FaShareAlt, FaTachometerAlt } from "react-icons/fa";
import type { Variants } from "framer-motion";

const cardVariants: Variants = {
  initial: { scale: 1, y: 0, opacity: 1 },
  hover: {
    scale: 1.03,
    y: -6,
    boxShadow: "0 0 45px rgba(150, 90, 255, 0.22)",
    transition: { duration: 0.35, ease: [0, 0, 0.58, 1] },
  },
};

const iconVariants: Variants = {
  initial: { scale: 1, opacity: 0.9 },
  hover: {
    scale: 1.14,
    opacity: 1,
    transition: { duration: 0.36, ease: [0, 0, 0.58, 1] },
  },
};

export default function WhyChooseUs() {
  const features = [
    {
      title: "Intelligenza in Tempo Reale",
      desc: "Accedi a dati accurati e aggiornati in tempo reale per prendere decisioni più intelligenti",
      icon: <FaTachometerAlt className="text-[#cdb6ff] text-5xl" />,
    },
    {
      title: "Impatto Misurabile",
      desc: "Monitora le prestazioni, individua insight e ottieni crescita basata sui dati",
      icon: <FaChartBar className="text-[#cdb6ff] text-5xl" />,
    },
    {
      title: "Integrazione Senza Interruzioni",
      desc: "Collega strumenti, team e workflow attraverso automazioni intelligenti",
      icon: <FaShareAlt className="text-[#cdb6ff] text-5xl" />,
    },
  ];

  return (
    <section className="w-full py-10 px-6 flex flex-col items-center">
      <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs mb-4">
        BENEFICI
      </div>

      <h2 className="text-white text-4xl md:text-5xl font-semibold tracking-tight">
        Perché Scegliere <span className="italic text-[#d8c7ff]">Noi?</span>
      </h2>

      <p className="text-neutral-400 text-center max-w-xl mt-4">
        Tutto ciò di cui hai bisogno per automatizzare, ottimizzare e scalare
      </p>

      <div
        className="
          mt-10 grid 
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          gap-8 w-full max-w-7xl
        "
      >
        {features.map((item, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            className="
              p-8 sm:p-10 rounded-3xl
              backdrop-blur-xl 
              bg-white/5 
              border border-white/10 
              transition-all
              hover:border-purple-400/30
              relative overflow-hidden
              flex flex-col
            "
          >
            {/* Hover glow */}
            <motion.div
              variants={iconVariants}
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 20% 20%, rgba(150,80,255,0.12), transparent 30%)",
                opacity: 0,
              }}
            />

            <motion.div variants={iconVariants} className="mb-6">
              {item.icon}
            </motion.div>

            <h3 className="text-white text-xl font-semibold mb-3">
              {item.title}
            </h3>

            <p className="text-neutral-400 leading-relaxed mt-auto">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
