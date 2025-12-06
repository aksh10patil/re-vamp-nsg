"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Ghost, 
  MonitorX, 
  Wallet, 
  SearchX, 
  AlertTriangle, 
  Clock, 
  TrendingDown,
  XCircle
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Data (Translated to Italian) ---
const cards = [
  {
    step: "01",
    title: "Invisibile Online",
    subtitle: "Perdi clienti potenziali ogni giorno",
    icon: Ghost,
    gradient: "from-neutral-700/20 to-neutral-800/20",
    points: [
      {
        icon: SearchX,
        text: "Zero presenza su Google",
        subtext: "I clienti ti cercano ma trovano altri",
      },
      {
        icon: AlertTriangle,
        text: "Nessuna credibilità",
        subtext: "Difficile instaurare fiducia senza un sito",
      },
    ],
    highlight: "Entrate perse ogni anno",
    highlightColor: "text-red-400",
  },
  {
    step: "02",
    title: "Sito Obsoleto",
    subtitle: "Conversioni sotto il 2%",
    icon: MonitorX,
    gradient: "from-neutral-700/20 to-neutral-800/20",
    points: [
      {
        icon: TrendingDown,
        text: "Lento su mobile",
        subtext: "Il 60% abbandona entro 3 secondi",
      },
      {
        icon: XCircle,
        text: "Zero automazioni",
        subtext: "Niente prenotazioni o moduli smart",
      },
    ],
    highlight: "Perdi 20+ ore/mese manuali",
    highlightColor: "text-orange-400",
  },
  {
    step: "03",
    title: "Budget Limitato",
    subtitle: "Preventivi da 5-10K CHF",
    icon: Wallet,
    gradient: "from-neutral-700/20 to-neutral-800/20",
    points: [
      {
        icon: TrendingDown,
        text: "Agenzie troppo costose",
        subtext: "Acconto pesante + costi elevati",
      },
      {
        icon: Clock,
        text: "Tempi biblici",
        subtext: "2-3 mesi per andare online",
      },
    ],
    highlight: "Risultato: Perdi opportunità",
    highlightColor: "text-neutral-400",
  },
];

export default function WhyNeedWebsite() {
  return (
    <section className="relative bg-black py-24 px-4 sm:px-6 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#a797f7]/10 rounded-full blur-[120px]" />
         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px]" />
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
            Perché hai bisogno di un <br/>
            <span className="text-[#a797f7]">sito web professionale?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-400"
          >
            Senza una presenza online, perdi clienti ogni giorno. Scopri come un sito web aumenta la tua visibilità su Google e automatizza il tuo lavoro.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:bg-white/[0.07] hover:border-[#a797f7]/30"
            >
              {/* Step Number Background */}
              <div className="absolute -right-4 -top-4 text-9xl font-bold text-white/[0.02] pointer-events-none select-none group-hover:text-[#a797f7]/[0.05] transition-colors">
                {card.step}
              </div>

              <div>
                {/* Icon Header */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="rounded-2xl bg-white/10 p-3 ring-1 ring-inset ring-white/10 group-hover:bg-[#a797f7]/10 group-hover:ring-[#a797f7]/30 transition-all">
                    <card.icon className="h-6 w-6 text-white group-hover:text-[#a797f7] transition-colors" />
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-sm font-medium text-neutral-400 mb-8 border-l-2 border-[#a797f7]/50 pl-3">
                  {card.subtitle}
                </p>

                {/* Points List */}
                <div className="space-y-6">
                  {card.points.map((point, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1 flex-shrink-0">
                        <point.icon className="h-5 w-5 text-neutral-500" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-neutral-200">
                          {point.text}
                        </p>
                        <p className="text-xs text-neutral-500 mt-0.5">
                          {point.subtext}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Highlight */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className={cn("text-sm font-bold flex items-center gap-2", card.highlightColor)}>
                   {card.highlight}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}