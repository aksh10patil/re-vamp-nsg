"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShoppingBag, 
  Home, 
  ShieldCheck, 
  UtensilsCrossed, 
  ArrowUpRight,
  CheckCircle2
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for cleaner tailwind classes
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
  features: string[];
  delay: number;
}

// --- Data ---
const services = [
  {
    title: "E-Commerce",
    description: "High-performance storefronts with sub-second page loads and secure checkout flows.",
    icon: ShoppingBag,
    gradient: "from-blue-500/20 to-blue-500/20 hover:from-rose-500/30 hover:to-red-500/30",
    textGradient: "from-blue-400 to-blue-300",
    borderColor: "group-hover:border-rose-500/50",
    features: ["Stripe & PayPal", "Inventory Sync", "AI Recommendations"],
  },
  {
    title: "Real Estate",
    description: "Immersive property listings with virtual tours and high-res image optimization.",
    icon: Home,
    gradient: "from-pink-500/20 to-pink-500/20 hover:from-pink-500/30 hover:to-pink-500/30",
    textGradient: "from-pink-400 to-pink-300",
    borderColor: "group-hover:border-orange-500/50",
    features: ["Virtual Tours (VR)", "Mapbox Integration", "Lead CRM"],
  },
  {
    title: "Trust & Legal",
    description: "Secure document handling and client portals with enterprise-grade encryption.",
    icon: ShieldCheck,
    gradient: "from-yellow-500/20 to-orange-500/20 hover:from-yellow-500/30 hover:to-orange-500/30",
    textGradient: "from-yellow-400 to-orange-300",
    borderColor: "group-hover:border-yellow-500/50",
    features: ["AES-256 Encryption", "eSignatures", "Audit Logs"],
  },
  {
    title: "Hospitality",
    description: "Real-time reservation systems and dynamic digital menus for bars & restaurants.",
    icon: UtensilsCrossed,
     gradient: "from-emerald-500/20 to-teal-500/20 hover:from-emerald-500/30 hover:to-teal-500/30",
    textGradient: "from-emerald-400 to-teal-300",
    borderColor: "group-hover:border-emerald-500/50",
    features: ["Table Booking", "QR Menus", "Staff Scheduling"],
  },
];

// --- Sub-Component: The Card ---
const Card = ({ item, index }: { item: any; index: number }) => {
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
      {/* Background Gradient Blob Effect */}
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

        {/* Title with Gradient Text */}
        <h3 className="mb-3 text-2xl font-bold text-white">
          <span className={cn("bg-gradient-to-r bg-clip-text text-transparent", item.textGradient)}>
            {item.title}
          </span>
        </h3>

        <p className="text-sm leading-relaxed text-neutral-400">
          {item.description}
        </p>
      </div>

      {/* Detailed Features (The requested "More Details") */}
      <div className="relative z-10 mt-8">
        <div className="space-y-3 border-t border-white/5 pt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Includes</p>
            <div className="flex flex-wrap gap-2">
            {item.features.map((feature: string, i: number) => (
                <span 
                    key={i} 
                    className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-white/10"
                >
                    <CheckCircle2 className={cn("h-3 w-3", item.textGradient.split(" ")[1].replace("text-", "text-"))} /> 
                    {/* Note: Ideally pass a solid color class for icon, simplistic hack above */}
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
export default function TailoredSolutions() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Tailored Solutions
            </h2>
            <p className="mt-4 text-lg text-neutral-400">
              Specialized infrastructure built for the specific needs of every industry vertical.
            </p>
          </div>
          <a
            href="#"
            className="group mt-6 flex items-center gap-2 text-sm font-semibold text-indigo-400 transition-colors hover:text-indigo-300 md:mt-0"
          >
            View all integrations
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Grid Layout - Changed to be more responsive and spacious */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={service.title} item={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}