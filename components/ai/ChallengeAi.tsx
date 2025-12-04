"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  MessageSquare, 
  BarChart3, 
  Users, 
  ArrowRight, 
  Brain, 
  Bot, 
  LineChart,
  Sparkles
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Data: Challenges Section ---
const challenges = [
  {
    id: 1,
    icon: MessageSquare,
    title: "Rispondere sempre alle stesse domande",
    solution: "Un assistente che apprende dalle tue risposte e gestisce automaticamente le richieste ricorrenti.",
    delay: 0.1
  },
  {
    id: 2,
    icon: BarChart3,
    title: "Analizzare montagne di dati",
    solution: "Intuizioni che emergono naturalmente, presentate esattamente quando e come ti servono.",
    delay: 0.2
  },
  {
    id: 3,
    icon: Users,
    title: "Coordinare team e processi",
    solution: "Flussi che si adattano al tuo modo di lavorare, non il contrario.",
    delay: 0.3
  }
];

// --- Data: Adaptation Section ---
const adaptationFeatures = [
  {
    id: "decisions",
    icon: Brain,
    title: "Decisioni più chiare",
    description: "Quando devi prendere una decisione importante, hai tutte le informazioni giuste al momento giusto. Niente rumore, solo ciò che conta.",
    highlight: false,
    delay: 0.1
  },
  {
    id: "assistant",
    icon: Bot,
    title: "Sempre al tuo fianco",
    description: "Un assistente che non dorme mai, sempre pronto quando ne hai bisogno. Apprende dal tuo stile e anticipa le tue necessità.",
    highlight: true,
    delay: 0.2
  },
  {
    id: "dialogue",
    icon: MessageSquare,
    title: "Dialogo naturale",
    description: "Comunica come faresti con un collega esperto. Niente gergo tecnico, solo conversazioni produttive che portano risultati.",
    highlight: false,
    delay: 0.3
  },
  {
    id: "overview",
    icon: LineChart,
    title: "Panoramica",
    description: "I pattern emergono naturalmente dai tuoi dati. Scopri opportunità che prima erano nascoste nella complessità della vita quotidiana.",
    highlight: false,
    delay: 0.4
  }
];

// --- Sub-Components ---

const Badge = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span className={cn("inline-block py-1 px-3 rounded-full text-xs font-semibold tracking-wider uppercase border", className)}>
    {children}
  </span>
);

const ChallengeCard = ({ item }: { item: typeof challenges[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: item.delay }}
    className="group relative flex flex-col h-full p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 hover:border-[#A797F7]/30 transition-all duration-500 overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[#A797F7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    
    <div className="relative z-10 mb-6 w-14 h-14 rounded-2xl bg-neutral-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-[#A797F7]/20">
      <item.icon className="w-7 h-7 text-[#A797F7]" />
    </div>

    <div className="relative z-10 flex-1 flex flex-col">
      <h3 className="text-xl font-bold text-white mb-6 group-hover:text-[#C4BBF9] transition-colors">
        {item.title}
      </h3>
      <div className="mt-auto flex gap-3 text-neutral-400 group-hover:text-neutral-300 transition-colors">
        <span className="text-[#A797F7] mt-1">→</span>
        <p className="text-sm leading-relaxed font-medium">{item.solution}</p>
      </div>
    </div>
  </motion.div>
);

const AdaptationCard = ({ item }: { item: typeof adaptationFeatures[0] }) => {
  const isHighlight = item.highlight;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: item.delay }}
      className={cn(
        "relative p-8 rounded-3xl border transition-all duration-500 flex flex-col h-full",
        isHighlight 
          ? "bg-gradient-to-br from-[#A797F7]/20 to-blue-900/20 border-[#A797F7]/50 shadow-[0_0_40px_-10px_rgba(167,151,247,0.3)]" 
          : "bg-neutral-900/30 border-neutral-800 hover:border-neutral-700"
      )}
    >
      {isHighlight && (
         <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none rounded-3xl" />
      )}

      <div className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors",
        isHighlight ? "bg-[#A797F7] text-white shadow-lg" : "bg-neutral-800 text-[#A797F7]"
      )}>
        <item.icon className="w-6 h-6" />
      </div>

      <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
      <p className={cn("text-sm leading-relaxed", isHighlight ? "text-blue-100/90" : "text-neutral-400")}>
        {item.description}
      </p>
    </motion.div>
  );
};

// --- Main Layout ---

export default function ChallengeAi() {
  return (
    <main className="min-h-screen  bg-black text-white selection:bg-[#A797F7]/30">
      
      {/* SECTION 1: CHALLENGES */}
      <section className="py-24 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-20 space-y-4">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-neutral-400 text-lg font-medium tracking-wide"
            >
              Inizia con una domanda semplice:
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]"
            >
              Cosa ti porta via più tempo <br className="hidden md:block" />
              ogni <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A797F7] to-white/80">giorno?</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {challenges.map((challenge) => (
              <ChallengeCard key={challenge.id} item={challenge} />
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center"
          >
             <button className="group inline-flex items-center gap-2 text-[#A797F7] font-semibold hover:text-white transition-colors relative text-lg">
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#A797F7] transition-all duration-300 group-hover:w-full"></span>
              Raccontaci la tua sfida
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: ADAPTATION (New Component) */}
      <section className="py-10 px-6 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
        {/* Ambient Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#A797F7]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-20 space-y-6">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
            >
               <Badge className="bg-[#A797F7]/10 border-[#A797F7]/20 text-[#A797F7]">
                 Come lavoriamo insieme
               </Badge>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter"
            >
              Un'AI che <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-[#A797F7] to-purple-400">si adatta a te</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-neutral-400 text-lg max-w-2xl mx-auto"
            >
              Non un altro strumento da imparare, ma un'estensione naturale del tuo modo di lavorare.
            </motion.p>
          </div>

          {/* Adaptation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {adaptationFeatures.map((feature) => (
              <AdaptationCard key={feature.id} item={feature} />
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
