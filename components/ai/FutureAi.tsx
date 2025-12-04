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
  Sparkles,
  Building2,
  ShoppingCart,
  FileText,
  Headphones,
  Check
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
    description: "Quando devi prendere una decisione importante, hai tutte le informazioni giuste al momento giusto. Nessun rumore, solo ciò che conta davvero.",
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

// --- Data: Transformations Section ---
const transformations = [
  {
    id: 1,
    icon: Building2,
    title: "Il tuo team, potenziato",
    subtitle: "Trasforma la routine in opportunità di crescita",
    items: [
      "Prima: Ore spese in compiti ripetitivi → Ora: Focus su strategie e innovazione",
      "Prima: Errori umani inevitabili → Ora: Accuratezza costante con supervisione umana",
      "Prima: Sistemi isolati → Ora: Tutto connesso, tutto fluido",
      "Prima: Report di fine mese → Ora: Insight in tempo reale quando ti servono"
    ],
    footer: "Un’AI che lavora con te, non al posto tuo",
    color: "bg-purple-500"
  },
  {
    id: 2,
    icon: Users,
    title: "Relazioni che crescono",
    subtitle: "Connettiti con il tuo pubblico in modo autentico",
    items: [
      "Contenuti che risuonano con la tua voce unica",
      "Tempismo perfetto basato sui ritmi della tua community",
      "Conversazioni autentiche, amplificate dall’intelligenza",
      "Comprensione profonda di ciò che funziona e perché"
    ],
    footer: "Autenticità amplificata, non automatizzata",
    color: "bg-pink-500"
  },
  {
    id: 3,
    icon: ShoppingCart,
    title: "Esperienze memorabili",
    subtitle: "Ogni cliente si sente davvero ascoltato",
    items: [
      "Risposte istantanee che sembrano personali perché lo sono",
      "Suggerimenti che anticipano desideri inespressi",
      "Percorsi d’acquisto fluidi come una conversazione",
      "Fiducia costruita attraverso una comprensione autentica"
    ],
    footer: "Tecnologia invisibile, esperienza indimenticabile",
    color: "bg-blue-500"
  },
  {
    id: 4,
    icon: FileText,
    title: "Storie che ispirano",
    subtitle: "La tua esperienza trasformata in contenuti di valore",
    items: [
      "Le tue idee espresse con chiarezza cristallina",
      "Contenuti che educano e coinvolgono naturalmente",
      "La tua voce, in ogni lingua del mondo",
      "Messaggi che arrivano al cuore del problema"
    ],
    footer: "La tua saggezza, amplificata",
    color: "bg-orange-500"
  },
  {
    id: 5,
    icon: BarChart3,
    title: "Insight che guidano",
    subtitle: "Vedi oltre i numeri per capire il perché",
    items: [
      "Dashboard che raccontano storie, non solo dati",
      "Trend che emergono prima che diventino ovvi",
      "Anomalie spiegate nel contesto corretto",
      "Decisioni guidate da una comprensione profonda"
    ],
    footer: "Dati con significato, non solo statistiche",
    color: "bg-emerald-500"
  },
  {
    id: 6,
    icon: Headphones,
    title: "Conversazioni che contano",
    subtitle: "Ogni chiamata diventa un’opportunità",
    items: [
      "Accoglienza calorosa in ogni lingua, in ogni momento",
      "Appuntamenti gestiti con cura personale",
      "Qualificazione naturale attraverso il dialogo",
      "Il tuo team libero per conversazioni strategiche"
    ],
    footer: "Perfetta prima impressione, sempre",
    color: "bg-indigo-500"
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

const TransformationCard = ({ item, index }: { item: typeof transformations[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col h-full rounded-3xl bg-neutral-900/50 border border-neutral-800 hover:border-[#A797F7]/30 transition-all duration-500 p-8"
    >
      {/* Icon */}
      <div className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110",
        "bg-neutral-800 border border-white/5 group-hover:border-[#A797F7]/30"
      )}>
        <item.icon className="w-6 h-6 text-[#A797F7]" />
      </div>

      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#C4BBF9] transition-colors">
          {item.title}
        </h3>
        <p className="text-neutral-400 text-sm">
          {item.subtitle}
        </p>
      </div>

      {/* List */}
      <ul className="space-y-4 mb-8 flex-grow">
        {item.items.map((point, idx) => (
          <li key={idx} className="flex items-start gap-3">
             <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-[#A797F7]/10 flex items-center justify-center">
                <Check className="w-3 h-3 text-[#A797F7]" />
             </div>
             <span className="text-sm text-neutral-300 leading-relaxed">
               {point}
             </span>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="pt-6 border-t border-neutral-800 mt-auto">
        <p className="text-xs text-neutral-500 italic group-hover:text-neutral-400 transition-colors">
          {item.footer}
        </p>
      </div>
    </motion.div>
  )
}

// --- Main Layout ---

export default function FutureAi() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#A797F7]/30">
      
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
      
      {/* SECTION 3: TRANSFORMATIONS */}
      <section className="py-32 px-6 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          
          <div className="text-center mb-20 space-y-6">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
             >
                <Badge className="bg-[#A797F7]/10 border-[#A797F7]/20 text-[#A797F7]">
                  Trasformazioni reali
                </Badge>
             </motion.div>

             <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold tracking-tight text-white"
             >
                Il futuro è <span className="text-[#A797F7]">Collaborativo</span>
             </motion.h2>

             <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
               className="text-neutral-400 text-lg max-w-2xl mx-auto"
             >
               Scopri come l’unione tra intelligenza umana e artificiale crea risultati straordinari.
             </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transformations.map((item, index) => (
               <TransformationCard key={item.id} item={item} index={index} />
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
