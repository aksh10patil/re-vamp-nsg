"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Utensils, 
  MessageCircle, 
  Image as ImageIcon, 
  FileText, 
  Search,
  Palette,
  Code2,
  Zap,
  ArrowRight,
  Puzzle
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Add-Ons Data ---
const addOns = [
  {
    title: "Sistema di Prenotazione",
    description: "Gestisci appuntamenti e prenotazioni online 24/7 con conferme automatiche.",
    icon: Calendar,
    tags: ["Ristoranti", "Professionisti"],
    gradient: "from-blue-500/10 to-indigo-500/10",
    iconColor: "text-blue-400"
  },
  {
    title: "Menu Digitale",
    description: "Menu interattivo sempre aggiornato, modificabile in tempo reale.",
    icon: Utensils,
    tags: ["Ristoranti", "Bar"],
    included: "Incluso nel Web Master",
    gradient: "from-orange-500/10 to-red-500/10",
    iconColor: "text-orange-400"
  },
  {
    title: "SEO + Visibilità AI",
    description: "Google + ChatGPT, Perplexity e Ricerche AI.",
    icon: Search,
    tags: ["Per tutti"],
    included: "Incluso nel Web Master",
    gradient: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-400"
  },
  {
    title: "Live Chat",
    description: "Pulsante WhatsApp sempre visibile per un contatto immediato.",
    icon: MessageCircle,
    tags: ["Artigiani", "Servizi"],
    included: "Incluso nel Web Master",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-400"
  },
  {
    title: "Portfolio Illimitato",
    description: "Galleria professionale per mostrare tutti i tuoi lavori.",
    icon: ImageIcon,
    tags: ["Creativi", "Artigiani"],
    gradient: "from-pink-500/10 to-rose-500/10",
    iconColor: "text-pink-400"
  },
  {
    title: "Moduli Smart",
    description: "Questionari che qualificano automaticamente i clienti.",
    icon: FileText,
    tags: ["B2B", "Servizi"],
    gradient: "from-cyan-500/10 to-teal-500/10",
    iconColor: "text-cyan-400"
  }
];

// --- Custom Features List ---
const customFeatures = [
  "Integrazioni API",
  "Funzionalità Uniche",
  "Automazioni Speciali",
  "Preventivo Gratuito"
];

export default function AddOnsSection() {
  return (
    <section className="relative bg-black py-24 px-4 sm:px-6 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#a797f7]/5 rounded-full blur-[120px]" />
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
            Funzionalità Extra <br/>
            <span className="text-[#a797f7]">Personalizza con gli Add-On</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-400"
          >
            Aggiungi solo le funzionalità di cui hai veramente bisogno per il tuo business, 
            con soluzioni di automazione e intelligenza artificiale dal Ticino.
          </motion.p>
        </div>

        {/* Add-Ons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {addOns.map((addon, index) => (
            <motion.div
              key={addon.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md overflow-hidden hover:bg-white/[0.08] hover:border-[#a797f7]/30 transition-all duration-300"
            >
              {/* Hover Gradient */}
              <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br",
                addon.gradient
              )} />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-2xl bg-white/5 ring-1 ring-inset ring-white/10">
                    <addon.icon className={cn("w-6 h-6", addon.iconColor)} />
                  </div>
                  {addon.included && (
                    <span className="text-[10px] font-bold text-[#a797f7] bg-[#a797f7]/10 px-2 py-1 rounded-full border border-[#a797f7]/20">
                      Incluso nel Web Master
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{addon.title}</h3>
                <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                  {addon.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {addon.tags.map(tag => (
                    <span key={tag} className="text-xs text-neutral-500 bg-white/5 px-2 py-1 rounded-md border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Add-Ons Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-[#a797f7]/20 bg-gradient-to-br from-[#a797f7]/5 to-purple-900/10 p-8 md:p-12 overflow-hidden"
        >
          {/* Decorative Elements */}
          <Palette className="absolute top-6 right-6 text-[#a797f7]/20 w-12 h-12" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            
            {/* Left: Description */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-[#a797f7]/20">
                   <Puzzle className="w-6 h-6 text-[#a797f7]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Add-On Personalizzati</h3>
              </div>
              
              <p className="text-neutral-300 mb-6 leading-relaxed">
                Non trovi quello che cerchi? Siamo felici di creare <span className="text-white font-semibold">add-on personalizzati</span> su misura per le tue esigenze specifiche. 
                Dai sistemi di prenotazione avanzati all'integrazione con i tuoi strumenti aziendali, creiamo soluzioni che si adattano perfettamente al tuo business.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {customFeatures.map((feat) => (
                  <div key={feat} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#a797f7]/20 flex items-center justify-center">
                        <Code2 className="w-3 h-3 text-[#a797f7]" />
                    </div>
                    <span className="text-sm font-medium text-white/90">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: CTA */}
            <div className="flex flex-col items-center justify-center text-center bg-black/40 rounded-2xl p-8 border border-white/5 backdrop-blur-sm">
               <div className="mb-4 text-[#a797f7] font-bold tracking-wider text-sm uppercase flex items-center gap-2">
                 <Zap className="w-4 h-4" /> Hai già un sito web?
               </div>
               <h4 className="text-xl font-bold text-white mb-2">
                 Scopri come integrare gli add-on!
               </h4>
               <p className="text-neutral-400 text-sm mb-8">
                 Possiamo potenziare il tuo sito esistente con le nostre tecnologie.
               </p>
               
               <button className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
                 Integra gli add-on nel tuo sito <ArrowRight className="w-4 h-4" />
               </button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}