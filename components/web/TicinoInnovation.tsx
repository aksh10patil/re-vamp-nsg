"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  Bot, 
  Rocket, 
  Check, 
  X, 
  Clock, 
  Search, 
  Cpu, 
  Server,
  MessageSquare
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Features Data ---
const features = [
  {
    title: "Consegna in 48 ore",
    description: "Mentre altri impiegano 2-4 settimane, noi consegniamo siti web professionali in 48-72 ore. La tecnologia automatizzata garantisce che la qualità non sia mai compromessa.",
    icon: Clock,
    badge: "15x più veloce",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400"
  },
  {
    title: "Tecnologia AI Integrata",
    description: "Unici in Ticino con SEO nativa per AI: il tuo sito apparirà su ChatGPT, Perplexity e motori di ricerca AI. Ottimizzazione automatica e chatbot intelligenti inclusi.",
    icon: Bot,
    badge: "Esclusività territoriale",
    badgeColor: "bg-[#a797f7]/10 text-[#a797f7] border-[#a797f7]/20",
    gradient: "from-purple-500/20 to-indigo-500/20",
    iconColor: "text-[#a797f7]"
  },
  {
    title: "Performance Superiori",
    description: "React e tecnologie moderne vs CMS tradizionali. Caricamento sotto 1 secondo, punteggio Google PageSpeed 95+. Hosting svizzero ultra-veloce.",
    icon: Rocket,
    badge: "5x più veloce",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    gradient: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400"
  }
];

// --- Comparison Data ---
const comparisonData = [
  {
    feature: "Tempi di consegna",
    us: "48-72 ore",
    them: "2-4 settimane",
    icon: Clock
  },
  {
    feature: "SEO AI (ChatGPT/Perplexity)",
    us: "✓ Inclusa",
    them: "✗ Non disponibile",
    icon: Search
  },
  {
    feature: "Velocità di caricamento",
    us: "< 1 secondo",
    them: "3-5 secondi",
    icon: Zap
  },
  {
    feature: "Tecnologia",
    us: "React Moderno",
    them: "WordPress/CMS",
    icon: Cpu
  },
  {
    feature: "Chatbot AI integrato",
    us: "✓ Disponibile",
    them: "✗ Non incluso",
    icon: MessageSquare
  },
  {
    feature: "Hosting Svizzera",
    us: "✓ Incluso",
    them: "✓ Incluso",
    icon: Server
  }
];

export default function TicinoInnovation() {
  return (
    <section className="relative bg-black py-24 px-4 sm:px-6 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#a797f7]/5 rounded-full blur-[120px]" />
         <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl z-10">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-sm font-medium text-[#a797f7] mb-6"
          >
            <Zap className="w-4 h-4" />
            <span>TICINO INNOVATION</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Sviluppo Web di <br/>
            <span className="text-[#a797f7]">Nuova Generazione</span> in Ticino
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral-400 leading-relaxed"
          >
            A differenza delle agenzie web tradizionali, integriamo l'intelligenza artificiale in ogni progetto. 
            I siti web sono più veloci, più visibili e pronti per il futuro digitale.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md overflow-hidden hover:bg-white/[0.08] hover:border-[#a797f7]/30 transition-all duration-300"
            >
              {/* Background Gradient Hover */}
              <div className={cn(
                "absolute -right-20 -top-20 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br",
                feature.gradient
              )} />

              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-inset ring-white/10">
                    <feature.icon className={cn("h-8 w-8", feature.iconColor)} />
                  </div>
                  <span className={cn("px-3 py-1 rounded-full text-xs font-bold border", feature.badgeColor)}>
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Confronto con Agenzie Web Tradizionali
            </h3>
            <p className="text-neutral-400">
              Perché North Star è la scelta intelligente per il tuo business
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/50 backdrop-blur-xl"
          >
            <div className="grid grid-cols-12 bg-white/5 border-b border-white/10 text-sm font-semibold text-white">
              <div className="col-span-4 p-6 text-neutral-400">Caratteristica</div>
              <div className="col-span-4 p-6 bg-[#a797f7]/10 text-[#a797f7] border-x border-white/10 flex items-center gap-2 justify-center md:justify-start">
                <Zap className="w-4 h-4" /> North Star (Noi)
              </div>
              <div className="col-span-4 p-6 text-neutral-400 flex items-center gap-2 justify-center md:justify-start">
                Agenzie Tradizionali
              </div>
            </div>

            {comparisonData.map((row, i) => (
              <div 
                key={row.feature}
                className="grid grid-cols-12 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
              >
                {/* Feature Name */}
                <div className="col-span-4 p-6 flex items-center gap-3 text-white font-medium">
                  <row.icon className="w-5 h-5 text-neutral-500 hidden md:block" />
                  <span className="text-xs md:text-sm">{row.feature}</span>
                </div>

                {/* Us */}
                <div className="col-span-4 p-6 bg-[#a797f7]/5 border-x border-white/5 text-white font-bold text-xs md:text-sm flex items-center">
                  {row.us.includes("✓") ? (
                    <span className="flex items-center gap-2 text-emerald-400">
                      <Check className="w-4 h-4" /> {row.us.replace("✓", "")}
                    </span>
                  ) : (
                    row.us
                  )}
                </div>

                {/* Them */}
                <div className="col-span-4 p-6 text-neutral-400 text-xs md:text-sm flex items-center">
                  {row.them.includes("✗") ? (
                    <span className="flex items-center gap-2 text-neutral-500">
                      <X className="w-4 h-4" /> {row.them.replace("✗", "")}
                    </span>
                  ) : row.them.includes("✓") ? (
                    <span className="flex items-center gap-2 text-emerald-500/70">
                      <Check className="w-4 h-4" /> {row.them.replace("✓", "")}
                    </span>
                  ) : (
                    row.them
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}