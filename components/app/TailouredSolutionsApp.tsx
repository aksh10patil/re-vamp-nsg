"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Smartphone, 
  Bot, 
  Layers, 
  Watch, 
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Cpu
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility: Class Merger ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Types ---
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  textGradient: string;
  borderColor: string;
  features: string[];
}

// --- Data: Mobile & iOS Development Services ---
const mobileServices: ServiceCardProps[] = [
  {
    title: "iOS Nativo",
    description: "Esperienze premium progettate specificamente per l’ecosistema Apple, con un design pixel-perfect.",
    icon: Smartphone,
    gradient: "from-blue-500/20 to-indigo-500/20 hover:from-blue-500/30 hover:to-indigo-500/30",
    textGradient: "from-blue-400 to-indigo-300",
    borderColor: "group-hover:border-blue-500/50",
    features: ["Swift & SwiftUI", "App Clips", "Integrazione CoreML"],
  },
  {
    title: "Android Nativo",
    description: "Applicazioni robuste e scalabili pensate per la vasta varietà di dispositivi Android.",
    icon: Bot,
    gradient: "from-emerald-500/20 to-green-500/20 hover:from-emerald-500/30 hover:to-green-500/30",
    textGradient: "from-emerald-400 to-green-300",
    borderColor: "group-hover:border-emerald-500/50",
    features: ["Kotlin & Jetpack", "Material Design 3", "Accesso all’Hardware"],
  },
  {
    title: "Cross-Platform",
    description: "Distribuisci su iOS e Android da una singola codebase senza sacrificare le prestazioni.",
    icon: Layers,
    gradient: "from-violet-500/20 to-purple-500/20 hover:from-violet-500/30 hover:to-purple-500/30",
    textGradient: "from-violet-400 to-purple-300",
    borderColor: "group-hover:border-violet-500/50",
    features: ["React Native / Flutter", "Logica Condivisa", "Hot Reloading"],
  },
  {
    title: "Wearables & IoT",
    description: "Espandi la tua presenza mobile su smartwatch, case intelligenti e dispositivi industriali connessi.",
    icon: Watch,
    gradient: "from-orange-500/20 to-amber-500/20 hover:from-orange-500/30 hover:to-amber-500/30",
    textGradient: "from-orange-400 to-amber-300",
    borderColor: "group-hover:border-orange-500/50",
    features: ["WatchOS & WearOS", "Bluetooth LE", "Dati HealthKit"],
  },
];

// --- Sub-Component: The Card ---
const Card = ({ item, index }: { item: ServiceCardProps; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm transition-all duration-300",
        item.borderColor
      )}
    >
      <div
        className={cn(
          "absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl transition-all duration-500 group-hover:opacity-100 opacity-0 bg-gradient-to-br",
          item.gradient
        )}
      />

      {/* Header Section */}
      <div className="relative z-10">
        <div className="mb-6 flex items-start justify-between">
          <div className={cn("rounded-2xl bg-neutral-800 p-3 ring-1 ring-inset ring-white/10")}>
            <item.icon className="h-6 w-6 text-white" />
          </div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 45 }}
            className="cursor-pointer rounded-full border border-neutral-700 bg-neutral-800 p-2 text-neutral-400 hover:border-neutral-500 hover:text-white"
          >
            <ArrowUpRight className="h-4 w-4" />
          </motion.div>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-2xl font-bold text-white">
          <span className={cn("bg-gradient-to-r bg-clip-text text-transparent", item.textGradient)}>
            {item.title}
          </span>
        </h3>

        <p className="text-sm leading-relaxed text-neutral-400">
          {item.description}
        </p>
      </div>

      {/* Features */}
      <div className="relative z-10 mt-8">
        <div className="space-y-3 border-t border-white/5 pt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
            {item.features.map((feature: string, i: number) => (
                <span 
                    key={i} 
                    className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-white/10 transition-colors group-hover:bg-white/10"
                >
                    <CheckCircle2 className={cn("h-3 w-3 opacity-70", item.textGradient.split(" ")[1].replace("text-", "text-"))} /> 
                    {feature}
                </span>
            ))}
            </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Section Component ---
export default function TailouredSolutionsApp() {
  return (
    <section className="py-24 min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center rounded-full bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/20">
                  <Code2 className="mr-1 h-3 w-3" />
                  Engineering
                </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Sviluppo di App Mobile
            </h2>

            <p className="mt-4 text-lg text-neutral-400">
              Da app iOS e Android native a complessi ecosistemi cross-platform, sviluppiamo applicazioni che dominano gli App Store.
            </p>
          </div>
          
          <div className="mt-6 flex flex-col gap-4 md:mt-0 md:items-end">
             <a
                href="https://cal.northstargroup.ch/nsg/book"
                className="group flex items-center gap-2 text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
            >
                Avvia il tuo progetto
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mobileServices.map((service, index) => (
            <Card key={service.title} item={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
