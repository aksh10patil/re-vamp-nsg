"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  CheckCircle2, 
  SlidersHorizontal, 
  ArrowRight 
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Data (Translated to Italian) ---
const cards = [
  {
    title: "Veloce",
    subtitle: "Online in 48-72 ore, non settimane",
    icon: Zap,
    gradient: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400",
    delay: 0
  },
  {
    title: "Completo",
    subtitle: "Hosting, dominio, SSL, tutto incluso",
    icon: CheckCircle2,
    gradient: "from-emerald-500/20 to-green-500/20",
    iconColor: "text-emerald-400",
    delay: 0.1
  },
  {
    title: "Flessibile",
    subtitle: "Paghi come vuoi, solo per ciò che ti serve",
    icon: SlidersHorizontal,
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
    delay: 0.2
  },
];

export default function SolutionSection() {
  return (
    <section className="relative bg-black py-24 px-4 sm:px-6 overflow-hidden">
      
      {/* Background Ambience (Consistent with previous section) */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#a797f7]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            La Soluzione <span className="text-[#a797f7]">Che Funziona</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-neutral-300 font-light"
          >
            Sito Web Professionale in 48 Ore
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: card.delay, duration: 0.5 }}
              className="group relative flex flex-col items-center text-center rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:bg-white/[0.08] hover:border-[#a797f7]/30 hover:-translate-y-1"
            >
              {/* Hover Gradient Blob */}
              <div 
                className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl rounded-3xl bg-gradient-to-br -z-10",
                  card.gradient
                )} 
              />

              <div className="mb-6 rounded-2xl bg-white/5 p-4 ring-1 ring-inset ring-white/10 group-hover:scale-110 transition-transform duration-300">
                <card.icon className={cn("h-8 w-8", card.iconColor)} />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-neutral-400 leading-relaxed">
                {card.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center"
        >
            <a
                href="https://cal.northstargroup.ch/nsg/book"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#a797f7] text-black font-bold text-lg transition-all hover:brightness-110 hover:shadow-[0_0_30px_-5px_rgba(167,151,247,0.5)]"
                >
                <span>Risolvi il Tuo Problema Ora</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />

                {/* Button Glow */}
                <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all" />
                </a>
        </motion.div>

      </div>
    </section>
  );
}