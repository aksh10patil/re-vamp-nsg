"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  Palmtree, 
  Landmark, 
  Factory, 
  Rocket, 
  TrendingUp, 
  LifeBuoy,
  MapPin,
  CheckCircle2
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Locations Data ---
const locations = [
  {
    title: "Lugano e Luganese",
    description: "Siti web per aziende, negozi e professionisti di Lugano, Paradiso, Massagno, Savosa e dintorni.",
    services: [
      "E-commerce per boutique",
      "Siti per studi professionali",
      "Portali per servizi finanziari"
    ],
    icon: Building2,
    gradient: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-400"
  },
  {
    title: "Locarno e Locarnese",
    description: "Sviluppo web per hotel, ristoranti e attività turistiche di Locarno, Ascona, Minusio e valli.",
    services: [
      "Siti per hotel e B&B",
      "Booking per ristoranti",
      "Portali turistici"
    ],
    icon: Palmtree,
    gradient: "from-orange-500/20 to-yellow-500/20",
    iconColor: "text-orange-400"
  },
  {
    title: "Bellinzona e Bellinzonese",
    description: "Creazione siti web per amministrazioni, PMI e artigiani di Bellinzona, Giubiasco, Camorino.",
    services: [
      "Siti istituzionali",
      "Portali per PMI",
      "Web per artigiani"
    ],
    icon: Landmark,
    gradient: "from-red-500/20 to-rose-500/20",
    iconColor: "text-red-400"
  },
  {
    title: "Mendrisiotto e Chiasso",
    description: "Soluzioni web per commercio, industria e servizi di Mendrisio, Chiasso, Stabio e regione.",
    services: [
      "E-commerce B2B/B2C",
      "Siti industriali",
      "Portali logistici"
    ],
    icon: Factory,
    gradient: "from-slate-500/20 to-gray-500/20",
    iconColor: "text-slate-400"
  }
];

// --- General Offerings Data ---
const offerings = [
  {
    title: "Sviluppo Web Rapido",
    icon: Rocket,
    items: [
      "Siti web professionali in 48-72 ore",
      "Design responsive per mobile e tablet",
      "Ottimizzazione velocità di caricamento",
      "Integrazione con sistemi esistenti"
    ]
  },
  {
    title: "SEO e Marketing Locale",
    icon: TrendingUp,
    items: [
      "Posizionamento su Google per ricerche locali",
      "Ottimizzazione Google My Business",
      "AI SEO per ChatGPT e Perplexity",
      "Campagne Google Ads mirate"
    ]
  },
  {
    title: "Supporto Completo",
    icon: LifeBuoy,
    items: [
      "Assistenza in italiano, tedesco e inglese",
      "Manutenzione e aggiornamenti inclusi",
      "Formazione per gestione autonoma",
      "Backup e sicurezza garantiti"
    ]
  }
];

export default function TicinoLocations() {
  return (
    <section className="relative bg-black py-24 px-4 sm:px-6 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-[#a797f7]/5 rounded-full blur-[120px]" />
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
            <MapPin className="w-4 h-4" />
            <span>Presenza Locale</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Creazione Siti Web e AI in <br/>
            <span className="text-[#a797f7]">Tutto il Ticino, Svizzera</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral-400 leading-relaxed max-w-3xl mx-auto"
          >
            Web agency specializzata in creazione siti web professionali e soluzioni di intelligenza artificiale per PMI in tutto il Canton Ticino. 
            Presenza locale a Lugano, Locarno, Bellinzona e Mendrisio con supporto in italiano.
          </motion.p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {locations.map((loc, index) => (
            <motion.div
              key={loc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md overflow-hidden hover:bg-white/[0.08] hover:border-[#a797f7]/30 transition-all duration-300"
            >
              {/* Background Gradient Hover */}
              <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br",
                loc.gradient
              )} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-4 rounded-xl bg-white/5 p-3 w-fit ring-1 ring-inset ring-white/10">
                  <loc.icon className={cn("h-6 w-6", loc.iconColor)} />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{loc.title}</h3>
                <p className="text-sm text-neutral-400 mb-6 flex-grow">
                  {loc.description}
                </p>

                <div className="space-y-2 border-t border-white/5 pt-4">
                  {loc.services.map((service, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="mt-1.5 w-1 h-1 rounded-full bg-[#a797f7] flex-shrink-0" />
                      <span className="text-xs text-neutral-300 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* General Offerings Section */}
        <div className="bg-neutral-900/50 rounded-3xl border border-white/10 p-8 md:p-12 backdrop-blur-xl">
           <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-white mb-2">Cosa offriamo in tutto il Ticino</h3>
              <p className="text-neutral-400 text-sm">Standard di qualità svizzera ovunque tu sia</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {offerings.map((offer, idx) => (
                <div key={offer.title} className="flex flex-col">
                   <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-[#a797f7]/10">
                         <offer.icon className="w-5 h-5 text-[#a797f7]" />
                      </div>
                      <h4 className="font-bold text-white">{offer.title}</h4>
                   </div>
                   
                   <ul className="space-y-4">
                      {offer.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                           <CheckCircle2 className="w-4 h-4 text-emerald-500/70 flex-shrink-0 mt-0.5" />
                           {item}
                        </li>
                      ))}
                   </ul>
                </div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
}