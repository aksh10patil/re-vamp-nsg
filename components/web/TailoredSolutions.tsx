"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingBag, 
  Home, 
  ShieldCheck, 
  UtensilsCrossed, 
  ArrowUpRight,
  CheckCircle2,
  X,
  Zap,
  BarChart,
  Globe2,
  Lock
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Types
interface ServiceDetails {
  longDescription: string;
  stats: { label: string; value: string }[];
  integrations: string[];
}

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  textGradient: string;
  borderColor: string;
  features: string[];
  details: ServiceDetails;
}

// Data (Translated)
const services: ServiceItem[] = [
  {
    title: "E-Commerce",
    description: "Storefront ad alte prestazioni con tempi di caricamento sotto il secondo e checkout sicuri.",
    icon: ShoppingBag,
    gradient: "from-blue-500/20 to-blue-500/20 hover:from-rose-500/30 hover:to-red-500/30",
    textGradient: "from-blue-400 to-blue-300",
    borderColor: "group-hover:border-rose-500/50",
    features: ["Stripe & PayPal", "Sync Inventario", "Raccomandazioni AI"],
    details: {
      longDescription:
        "La nostra architettura e-commerce è progettata per scalare. Che tu gestisca un flash sale con 100k utenti simultanei o un marketplace multi-venditore, il frontend con caching edge garantisce caricamenti istantanei in tutto il mondo. Gestiamo PCI compliance, checkout sicuri e inventario real-time, così tu puoi concentrarti sulle vendite.",
      stats: [
        { label: "Uptime", value: "99.99%" },
        { label: "Load Medio", value: "< 100ms" },
        { label: "Conversioni", value: "+45%" },
      ],
      integrations: ["Shopify Headless", "WooCommerce", "Salesforce Commerce", "Segment"],
    },
  },

  {
    title: "Real Estate",
    description: "Annunci immersivi con tour virtuali e ottimizzazione immagini ad alta risoluzione.",
    icon: Home,
    gradient: "from-pink-500/20 to-pink-500/20 hover:from-pink-500/30 hover:to-pink-500/30",
    textGradient: "from-pink-400 to-pink-300",
    borderColor: "group-hover:border-orange-500/50",
    features: ["Tour Virtuali (VR)", "Integrazione Mapbox", "Lead CRM"],
    details: {
      longDescription:
        "Trasforma l’esperienza degli acquirenti con un motore immobiliare immersivo. Ottimizziamo automaticamente immagini 4K e supportiamo tour Matterport 3D direttamente nel browser. Il nostro CRM integrato cattura lead attraverso mappe interattive, richieste e calendari.",
      stats: [
        { label: "Compressione Img", value: "60%" },
        { label: "Lead Capture", value: "2.5x" },
        { label: "Caricamento Mappe", value: "Istantaneo" },
      ],
      integrations: ["Matterport", "Mapbox", "HubSpot", "Zillow API"],
    },
  },

  {
    title: "Trust & Legal",
    description: "Gestione documenti sicura e portali clienti con crittografia enterprise-grade.",
    icon: ShieldCheck,
    gradient: "from-yellow-500/20 to-orange-500/20 hover:from-yellow-500/30 hover:to-orange-500/30",
    textGradient: "from-yellow-400 to-orange-300",
    borderColor: "group-hover:border-yellow-500/50",
    features: ["Crittografia AES-256", "Firma Digitale", "Audit Log"],
    details: {
      longDescription:
        "La sicurezza non è opzionale. La nostra infrastruttura Trust & Legal è conforme SOC2 Type II. Offriamo controlli di permesso granulari, watermark dinamici e audit log immutabili basati su blockchain. Perfetto per studi legali, notai e aziende che gestiscono dati sensibili.",
      stats: [
        { label: "Crittografia", value: "AES-256" },
        { label: "Conformità", value: "SOC2" },
        { label: "Archiviazione", value: "Illimitata" },
      ],
      integrations: ["DocuSign", "Clio", "Google Drive Enterprise", "Auth0"],
    },
  },

  {
    title: "Hospitality",
    description: "Sistemi di prenotazione in tempo reale e menu digitali dinamici.",
    icon: UtensilsCrossed,
    gradient: "from-emerald-500/20 to-teal-500/20 hover:from-emerald-500/30 hover:to-teal-500/30",
    textGradient: "from-emerald-400 to-teal-300",
    borderColor: "group-hover:border-emerald-500/50",
    features: ["Prenotazione Tavoli", "Menu QR", "Gestione Staff"],
    details: {
      longDescription:
        "Collega perfettamente sala, cucina e sistema gestionale. Offriamo integrazione con KDS, tracciamento scorte in tempo reale fino al singolo ingrediente e menu QR dinamici che si aggiornano in base a orari, disponibilità o listini.",
      stats: [
        { label: "Velocità Sync", value: "Real-time" },
        { label: "Tempo Risparmiato", value: "10h/set" },
        { label: "Ordini Elaborati", value: "1M+" },
      ],
      integrations: ["Toast", "7shifts", "OpenTable", "UberEats"],
    },
  },
];

// COMPACT CARD
const Card = ({ item, index, onClick }: any) => (
  <motion.div
    layoutId={`card-${item.title}`}
    onClick={onClick}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={cn(
      "group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-neutral-900/80",
      item.borderColor
    )}
  >
    {/* Background */}
    <div
      className={cn(
        "absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none bg-gradient-to-br",
        item.gradient
      )}
    />

    {/* Header */}
    <div className="relative z-10 pointer-events-none">
      <div className="mb-6 flex items-start justify-between">
        <motion.div
          layoutId={`icon-${item.title}`}
          className="rounded-2xl bg-neutral-800 p-3 ring-1 ring-inset ring-white/10"
        >
          <item.icon className="h-6 w-6 text-white" />
        </motion.div>

        <div className="rounded-full border border-neutral-700 bg-neutral-800 p-2 text-neutral-400 group-hover:text-white transition-colors">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>

      {/* Title */}
      <motion.h3 
        layoutId={`title-${item.title}`}
        className="mb-3 text-2xl font-bold text-white"
      >
        <span className={cn("bg-gradient-to-r bg-clip-text text-transparent", item.textGradient)}>
          {item.title}
        </span>
      </motion.h3>

      {/* Description */}
      <motion.p 
        layoutId={`desc-${item.title}`}
        className="text-sm leading-relaxed text-neutral-400"
      >
        {item.description}
      </motion.p>
    </div>

    {/* Features */}
    <div className="relative z-10 mt-8 pointer-events-none">
      <div className="space-y-3 border-t border-white/5 pt-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
          Incluso
        </p>
        <div className="flex flex-wrap gap-2">
          {item.features.slice(0, 3).map((feature: string, i: number) => (
            <span 
              key={i}
              className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-white/10"
            >
              <CheckCircle2 className="h-3 w-3 text-neutral-400" />
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

// EXPANDED MODAL
const ExpandedCard = ({ item, onClose }: any) => {
  useEffect(() => {
    const close = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* BACKDROP */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
      />

      {/* CARD */}
      <motion.div
        layoutId={`card-${item.title}`}
        className={cn(
          "relative w-full max-w-2xl overflow-hidden rounded-3xl border border-neutral-700 bg-neutral-900 shadow-2xl"
        )}
      >
        {/* Gradient */}
        <div
          className={cn(
            "absolute -right-32 -top-32 h-96 w-96 rounded-full blur-3xl opacity-20 bg-gradient-to-br pointer-events-none",
            item.gradient
          )}
        />

        {/* Close */}
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="absolute top-4 right-4 z-20 rounded-full bg-neutral-800/50 p-2 text-neutral-400 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative z-10 p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <motion.div 
              layoutId={`icon-${item.title}`}
              className="rounded-2xl bg-neutral-800 p-4 ring-1 ring-inset ring-white/10"
            >
              <item.icon className="h-8 w-8 text-white" />
            </motion.div>

            <div>
              <motion.h3 
                layoutId={`title-${item.title}`}
                className="text-3xl font-bold text-white"
              >
                <span className={cn("bg-gradient-to-r bg-clip-text text-transparent", item.textGradient)}>
                  {item.title}
                </span>
              </motion.h3>

              <motion.p 
                layoutId={`desc-${item.title}`}
                className="text-neutral-400"
              >
                {item.description}
              </motion.p>
            </div>
          </div>

          {/* BODY */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            {/* Long description */}
            <p className="text-lg leading-relaxed text-neutral-300">
              {item.details.longDescription}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {item.details.stats.map((stat: any, i: number) => (
                <div 
                  key={i}
                  className="rounded-2xl bg-neutral-800/50 p-4 border border-neutral-700/50 text-center"
                >
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-neutral-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Features + Integrations */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold uppercase text-neutral-500 mb-4">
                  <Zap className="h-4 w-4" /> Funzionalità Core
                </h4>
                <ul className="space-y-2">
                  {item.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-center gap-2 text-neutral-300">
                      <CheckCircle2 className="h-4 w-4 text-green-500/80" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold uppercase text-neutral-500 mb-4">
                  <Globe2 className="h-4 w-4" /> Integrazioni
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.details.integrations.map((tech: string, i: number) => (
                    <span 
                      key={i}
                      className="px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-xs text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <button className="w-full py-4 rounded-xl bg-white text-black font-bold text-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
              Inizia con {item.title} <ArrowUpRight className="h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

// Main Component
export default function TailoredSolutions() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedItem = services.find((s) => s.title === selectedId);

  return (
    <section className="py-24 bg-black min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Soluzioni su Misura
            </h2>
            <p className="mt-4 text-lg text-neutral-400">
              Infrastrutture specializzate pensate per le esigenze specifiche di ogni settore.
            </p>
          </div>

          <a
            href="#"
            className="group mt-6 flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 md:mt-0"
          >
            Vedi tutte le integrazioni
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              item={service}
              index={index}
              onClick={() => setSelectedId(service.title)}
            />
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedId && selectedItem && (
            <ExpandedCard 
              item={selectedItem}
              onClose={() => setSelectedId(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
