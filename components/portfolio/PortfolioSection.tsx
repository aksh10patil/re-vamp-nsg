"use client";

import React from "react";
// Removed Next.js Image to prevent build errors in preview
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Layers, 
  ExternalLink, 
  Code2, 
  Palette, 
  Globe 
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Projects Data ---
// NOTE: Assicurati di aggiungere le immagini reali nella cartella /public/images/portfolio/
const projects = [
  {
    title: "Abasto Caviar",
    category: "Web Development & Consulting",
    description: "Sviluppo web e Business Consulting per un'azienda di caviale di lusso.",
    tags: ["Catalogo prodotti", "Ecommerce e Web", "Business Strategy"],
    extraTags: "+1",
    gradient: "from-amber-900/80 to-black/80",
    imageSrc: "/images/showcase/item-2.png", // Placeholder image
    link: "#"
  },
  {
    title: "Bar La Vela",
    category: "Web Development",
    description: "Sito web moderno e responsive per un bar locale.",
    tags: ["Menu digitale", "Sistema prenotazioni", "Gallery eventi"],
    extraTags: "+1",
    gradient: "from-blue-900/80 to-black/80",
    imageSrc: "/images/showcase/item-1.png", 
    link: "#"
  },
  {
    title: "Karin Lerch",
    category: "Web Development",
    description: "Portfolio personale con design creativo.",
    tags: ["Portfolio interattivo", "Animazioni personalizzate", "Contatti diretti"],
    gradient: "from-purple-900/80 to-black/80",
    imageSrc: "/images/showcase/item-4.png", 
    link: "#"
  },
  {
    title: "ESB Healthcare",
    category: "Web Development",
    description: "Piattaforma web per servizi sanitari.",
    tags: ["Sistema di contatto sicuro", "Gestione documenti", "Comunicazione sicura"],
    gradient: "from-emerald-900/80 to-black/80",
    imageSrc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop", // Placeholder image
    link: "#"
  },
  {
    title: "Estate Flow",
    category: "Web Development",
    description: "Sistema di gestione immobiliare digitale.",
    tags: ["Gestione proprietà", "Portale clienti", "Documenti automatizzati"],
    extraTags: "+1",
    gradient: "from-slate-800/80 to-black/80",
    imageSrc: "/images/showcase/item-4.png",  // Placeholder image
    link: "#"
  },
  {
    title: "E-Mobility 24",
    category: "Web Development",
    description: "Piattaforma per la mobilità elettrica.",
    tags: ["Prenotazione veicoli", "Pagamenti integrati", "Mappa interattiva"],
    extraTags: "+1",
    gradient: "from-cyan-900/80 to-black/80",
    imageSrc: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800&auto=format&fit=crop", // Placeholder image
    link: "#"
  }
];

export default function PortfolioSection() {
  return (
    <section className="relative bg-black py-24 px-4 sm:px-6 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#a797f7]/5 rounded-full blur-[120px]" />
         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px]" />
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
            <Layers className="w-4 h-4" />
            <span>Portfolio</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Progetti <span className="text-[#a797f7]">Recenti</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto"
          >
            Esplora i nostri progetti di successo e scopri come abbiamo aiutato i nostri clienti a trasformare le loro idee in realtà digitali.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col rounded-3xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-md hover:border-[#a797f7]/30 transition-all duration-500 hover:-translate-y-1"
            >
              
              {/* Image Area */}
              <div className="h-48 w-full relative overflow-hidden bg-neutral-900">
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />

                {/* Overlay on hover with gradient and button */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center",
                  project.gradient
                )}>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        Visualizza Progetto <ArrowUpRight className="w-4 h-4" />
                    </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Category */}
                <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#a797f7]">
                        {project.category}
                    </span>
                    <a href={project.link} className="text-neutral-500 hover:text-white transition-colors">
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>

                {/* Title & Desc */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#a797f7] transition-colors">
                    {project.title}
                </h3>
                <p className="text-sm text-neutral-400 mb-6 line-clamp-2">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] text-neutral-300 bg-white/5 border border-white/5 px-2 py-1 rounded-md whitespace-nowrap">
                            {tag}
                        </span>
                    ))}
                    {project.extraTags && (
                        <span className="text-[10px] text-[#a797f7] bg-[#a797f7]/10 border border-[#a797f7]/20 px-2 py-1 rounded-md font-medium">
                            {project.extraTags}
                        </span>
                    )}
                </div>

                {/* Bottom Link (Mobile/Accessibilty) */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-sm font-medium text-white group-hover:text-[#a797f7] transition-colors cursor-pointer">
                    Scopri di più <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Additional Icons - kept for reference
function BuildingIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01" />
        <path d="M16 6h.01" />
        <path d="M12 6h.01" />
        <path d="M12 10h.01" />
        <path d="M12 14h.01" />
        <path d="M16 10h.01" />
        <path d="M16 14h.01" />
        <path d="M8 10h.01" />
        <path d="M8 14h.01" />
      </svg>
    )
}

function ZapIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    )
}