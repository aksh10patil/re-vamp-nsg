"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Sparkles, 
  Linkedin, 
  Mail,
  Target,
  History
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Team Data ---
const team = [
  {
    name: "Elia Szpiro",
    role: "Founder",
    description: "Da sempre appassionato del web, guida l'azienda nell'integrazione tra sviluppo tradizionale e le più innovative soluzioni AI.",
    imageSrc: "/images/team/elia.jpg", // Assicurati di avere queste immagini o usa i placeholder
    gradient: "from-purple-500/20 to-indigo-500/20",
    socials: { linkedin: "#", email: "mailto:elia@northstargroup.ch" }
  },
  {
    name: "Tomas Emini",
    role: "Marketing & Sales Manager",
    description: "Con empatia e professionalità, accompagna ogni cliente nel percorso di trasformazione digitale, assicurando un'esperienza personalizzata.",
    imageSrc: "/images/team/tomas.jpg",
    gradient: "from-blue-500/20 to-cyan-500/20",
    socials: { linkedin: "#", email: "mailto:tomas@northstargroup.ch" }
  },
  {
    name: "Nicolò Bacchi",
    role: "Head Salesman & Customer Care",
    description: "Il punto di riferimento per i clienti. Cura ogni dettaglio e relazione, garantendo una comunicazione sempre chiara ed efficace.",
    imageSrc: "/images/team/nicolo.jpg",
    gradient: "from-emerald-500/20 to-teal-500/20",
    socials: { linkedin: "#", email: "mailto:nicolo@northstargroup.ch" }
  },
  {
    name: "Marco Castellari",
    role: "Lead Developer",
    description: "Esperto in programmazione e sistemi AI, docente e relatore, guida lo sviluppo tecnico integrando le tecnologie più avanzate.",
    imageSrc: "/images/team/marco.jpg",
    gradient: "from-amber-500/20 to-orange-500/20",
    socials: { linkedin: "#", email: "mailto:marco@northstargroup.ch" }
  }
];

export default function AboutSection() {
  return (
    <section className="relative bg-black py-24 px-4 sm:px-6 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Top Glow */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-[#a797f7]/5 rounded-full blur-[120px]" />
         {/* Bottom Side Glow */}
         <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl z-10">
        
        {/* --- COMPANY STORY SECTION --- */}
        <div className="mb-32">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-sm font-medium text-[#a797f7] mb-6"
            >
              <History className="w-4 h-4" />
              <span>La Nostra Storia</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Chi <span className="text-[#a797f7]">Siamo</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-32 bg-[#a797f7]/5 rounded-full blur-3xl group-hover:bg-[#a797f7]/10 transition-colors duration-500" />
                
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-[#a797f7]" />
                  L'Azienda
                </h3>
                <p className="text-neutral-300 leading-relaxed mb-6">
                  Nata nel 2022 come agenzia di web development con il nome <span className="text-white font-medium">Platinum Leads</span>, 
                  North Star Group si è evoluta per abbracciare le nuove opportunità offerte dall'intelligenza artificiale 
                  e dalla trasformazione digitale.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  Oggi aiutiamo piccole e medie imprese del Canton Ticino e della Svizzera italiana a sfruttare al meglio 
                  le tecnologie digitali, con particolare attenzione alle soluzioni AI personalizzate e infrastrutture web 
                  completamente localizzate in Svizzera.
                </p>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl border border-[#a797f7]/20 bg-[#a797f7]/5">
                <Target className="w-8 h-8 text-[#a797f7] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Il Nostro Obiettivo</h4>
                  <p className="text-neutral-400 text-sm">
                    Restituirvi più tempo per ciò che conta davvero, automatizzando processi e migliorando la vostra presenza digitale.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Decorative / Image Placeholder */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden border border-white/10"
            >
              {/* Placeholder Gradient Image - Sostituisci con una foto del team o dell'ufficio */}
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="North Star Team Working" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-block px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-sm font-medium mb-2">
                  Established 2022
                </div>
                <h3 className="text-2xl font-bold text-white">Dalla Svizzera, per la Svizzera.</h3>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- TEAM SECTION --- */}
        <div>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-sm font-medium text-[#a797f7] mb-6"
            >
              <Users className="w-4 h-4" />
              <span>Il Nostro Team</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Incontra gli <span className="text-[#a797f7]">Esperti</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-3xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-md hover:border-[#a797f7]/30 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Hover Gradient Overlay */}
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b mix-blend-overlay",
                  member.gradient
                )} />

                {/* Image Area */}
                <div className="h-64 w-full relative overflow-hidden bg-neutral-900 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img
                    src={member.imageSrc}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                    // Placeholder fallback
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${member.name.replace(" ", "+")}&background=1a1a1a&color=fff&size=512`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  
                  {/* Social Icons (appear on hover) */}
                  <div className="absolute bottom-4 right-4 flex gap-2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <a href={member.socials.linkedin} className="p-2 rounded-full bg-white text-black hover:bg-[#a797f7] transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={member.socials.email} className="p-2 rounded-full bg-white text-black hover:bg-[#a797f7] transition-colors">
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#a797f7] transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-4">
                    {member.role}
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed border-t border-white/10 pt-4">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}