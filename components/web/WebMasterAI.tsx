"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Bot, 
  Target, 
  Rocket, 
  TrendingUp, 
  CheckCircle2, 
  Cpu, 
  Sparkles,
  Lock
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Features Data ---
const benefits = [
  {
    title: "Visibilità su ChatGPT & Perplexity",
    description: "La tua attività apparirà quando le persone chiederanno consigli all'AI. Posizionati dove conta davvero oggi.",
    icon: Target,
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400"
  },
  {
    title: "Vantaggio Competitivo Immediato",
    description: "Sii tra i primi nel tuo settore ad essere ottimizzato per l'AI. Supera la concorrenza che si affida solo a Google.",
    icon: Rocket,
    gradient: "from-[#a797f7]/20 to-purple-500/20",
    iconColor: "text-[#a797f7]"
  },
  {
    title: "Traffico da Fonti Multiple",
    description: "Non solo Google: Ottieni clienti qualificati da ogni piattaforma AI, assistenti vocali e motori di ricerca semantici.",
    icon: TrendingUp,
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400"
  }
];

// --- Tech Checklist Data ---
const techChecklist = [
  "Markup Schema Avanzato",
  "Dati strutturati per l'AI",
  "Ottimizzazione Knowledge Graph",
  "Riconoscimento entità potenziato"
];

export default function WebMasterAI() {
  return (
    <section className="relative bg-black py-24 px-4 sm:px-6 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Central Purple Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#a797f7]/5 rounded-full blur-[120px]" />
         {/* Secondary Blue Glow */}
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl z-10">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-[#a797f7]/10 border border-[#a797f7]/20 px-4 py-1.5 text-sm font-bold text-[#a797f7] mb-6 shadow-[0_0_15px_-3px_rgba(167,151,247,0.3)]"
          >
            <Bot className="w-4 h-4" />
            <span>Web Master ESCLUSIVO</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Soluzioni AI per Aziende <br/>
            in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a797f7] to-purple-400">Ticino, Svizzera</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto"
          >
            Intelligenza artificiale applicata al web: <strong className="text-white">AI SEO</strong> per visibilità su ChatGPT e Perplexity, automazione dei processi, chatbot intelligenti. Tecnologia AI al servizio delle PMI Ticinesi.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {benefits.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md overflow-hidden hover:bg-white/[0.08] hover:border-[#a797f7]/30 transition-all duration-300"
            >
              {/* Background Gradient Hover */}
              <div className={cn(
                "absolute -right-20 -top-20 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br",
                item.gradient
              )} />

              <div>
                <div className="mb-6 rounded-2xl bg-white/5 p-4 ring-1 ring-inset ring-white/10 w-fit">
                  <item.icon className={cn("h-8 w-8", item.iconColor)} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Tech & CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative rounded-3xl border border-[#a797f7]/20 bg-gradient-to-br from-[#a797f7]/5 to-purple-900/10 p-8 md:p-12 overflow-hidden"
        >
          {/* Decorative Sparkles */}
          <Sparkles className="absolute top-6 right-6 text-[#a797f7]/20 w-12 h-12" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left: Tech Stack */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-[#a797f7]/20">
                   <Cpu className="w-6 h-6 text-[#a797f7]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Tecnologia AI SEO</h3>
              </div>
              
              <p className="text-neutral-400 mb-8">
                Ottimizzazione strutturata specificamente per i motori AI, garantendo che il tuo brand venga compreso e raccomandato dagli algoritmi moderni.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {techChecklist.map((tech) => (
                  <div key={tech} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-white/90">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: CTA Card */}
            <div className="flex flex-col items-center justify-center text-center bg-black/40 rounded-2xl p-8 border border-white/5 backdrop-blur-sm">
               <div className="mb-4 text-[#a797f7] font-bold tracking-wider text-sm uppercase flex items-center gap-2">
                 <Lock className="w-4 h-4" /> Esclusivo
               </div>
               <h4 className="text-2xl font-bold text-white mb-2">
                 Attiva AI SEO con Web Master
               </h4>
               <p className="text-neutral-400 text-sm mb-8">
                 Potenzia la tua presenza digitale con la nostra tecnologia proprietaria.
               </p>
               
               <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#a797f7] text-black font-bold hover:bg-[#9785f0] transition-colors shadow-[0_0_20px_-5px_rgba(167,151,247,0.4)]">
                 Richiedi Accesso Web Master
               </button>
               
               <p className="mt-4 text-[10px] text-neutral-500">
                 * Disponibile solo nel pacchetto Web Master
               </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}