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

// Utility for cleaner tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Types ---
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
  details: ServiceDetails; // Added detailed info
}

// --- Data ---
const services: ServiceItem[] = [
  {
    title: "E-Commerce",
    description: "High-performance storefronts with sub-second page loads and secure checkout flows.",
    icon: ShoppingBag,
    gradient: "from-blue-500/20 to-blue-500/20 hover:from-rose-500/30 hover:to-red-500/30",
    textGradient: "from-blue-400 to-blue-300",
    borderColor: "group-hover:border-rose-500/50",
    features: ["Stripe & PayPal", "Inventory Sync", "AI Recommendations"],
    details: {
      longDescription: "Our e-commerce architecture is built for scale. Whether you are running a flash sale with 100k concurrent users or managing a complex multi-vendor marketplace, our edge-cached frontend ensures instant load times globally. We handle the heavy lifting of PCI compliance and inventory management so you can focus on sales.",
      stats: [
        { label: "Uptime", value: "99.99%" },
        { label: "Avg Load", value: "< 100ms" },
        { label: "Conversion", value: "+45%" },
      ],
      integrations: ["Shopify Headless", "WooCommerce", "Salesforce Commerce", "Segment"],
    }
  },
  {
    title: "Real Estate",
    description: "Immersive property listings with virtual tours and high-res image optimization.",
    icon: Home,
    gradient: "from-pink-500/20 to-pink-500/20 hover:from-pink-500/30 hover:to-pink-500/30",
    textGradient: "from-pink-400 to-pink-300",
    borderColor: "group-hover:border-orange-500/50",
    features: ["Virtual Tours (VR)", "Mapbox Integration", "Lead CRM"],
    details: {
      longDescription: "Transform how buyers experience properties with our immersive real estate engine. We auto-optimize 4K imagery and support Matterport 3D tours directly in the browser. Our integrated CRM captures leads from map interactions and scheduling forms, syncing them directly to your agent's calendar.",
      stats: [
        { label: "Img Compression", value: "60%" },
        { label: "Lead Capture", value: "2.5x" },
        { label: "Map Load", value: "Instant" },
      ],
      integrations: ["Matterport", "Mapbox", "HubSpot", "Zillow API"],
    }
  },
  {
    title: "Trust & Legal",
    description: "Secure document handling and client portals with enterprise-grade encryption.",
    icon: ShieldCheck,
    gradient: "from-yellow-500/20 to-orange-500/20 hover:from-yellow-500/30 hover:to-orange-500/30",
    textGradient: "from-yellow-400 to-orange-300",
    borderColor: "group-hover:border-yellow-500/50",
    features: ["AES-256 Encryption", "eSignatures", "Audit Logs"],
    details: {
      longDescription: "Security is not optional. Our Trust & Legal infrastructure is SOC2 Type II compliant out of the box. We provide granular permission controls, document watermarking, and blockchain-backed immutable audit logs. Perfect for law firms, notaries, and sensitive corporate data handling.",
      stats: [
        { label: "Encryption", value: "AES-256" },
        { label: "Compliance", value: "SOC2" },
        { label: "Storage", value: "Unlimited" },
      ],
      integrations: ["DocuSign", "Clio", "Google Drive Enterprise", "Auth0"],
    }
  },
  {
    title: "Hospitality",
    description: "Real-time reservation systems and dynamic digital menus for bars & restaurants.",
    icon: UtensilsCrossed,
    gradient: "from-emerald-500/20 to-teal-500/20 hover:from-emerald-500/30 hover:to-teal-500/30",
    textGradient: "from-emerald-400 to-teal-300",
    borderColor: "group-hover:border-emerald-500/50",
    features: ["Table Booking", "QR Menus", "Staff Scheduling"],
    details: {
      longDescription: "Sync your front-of-house with your back-of-house seamlessly. Our Hospitality stack includes a Kitchen Display System (KDS) integration, real-time inventory tracking down to the ingredient level, and a dynamic QR menu system that updates pricing based on demand or happy hour schedules.",
      stats: [
        { label: "Sync Speed", value: "Real-time" },
        { label: "Staff Save", value: "10hrs/wk" },
        { label: "Orders", value: "1M+" },
      ],
      integrations: ["Toast", "7shifts", "OpenTable", "UberEats"],
    }
  },
];

// --- Sub-Component: The Compact Card ---
const Card = ({ 
  item, 
  index, 
  onClick 
}: { 
  item: ServiceItem; 
  index: number; 
  onClick: () => void;
}) => {
  return (
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
      {/* Background Gradient Blob Effect */}
      <div
        className={cn(
          "absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl transition-all duration-500 group-hover:opacity-100 opacity-0 bg-gradient-to-br pointer-events-none",
          item.gradient
        )}
      />

      {/* Header Section */}
      <div className="relative z-10 pointer-events-none">
        <div className="mb-6 flex items-start justify-between">
          <motion.div 
            layoutId={`icon-${item.title}`}
            className={cn("rounded-2xl bg-neutral-800 p-3 ring-1 ring-inset ring-white/10")}
          >
            <item.icon className="h-6 w-6 text-white" />
          </motion.div>
          <div
            className="rounded-full border border-neutral-700 bg-neutral-800 p-2 text-neutral-400 group-hover:border-neutral-500 group-hover:text-white transition-colors"
          >
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

        <motion.p 
          layoutId={`desc-${item.title}`}
          className="text-sm leading-relaxed text-neutral-400"
        >
          {item.description}
        </motion.p>
      </div>

      {/* Footer Features */}
      <div className="relative z-10 mt-8 pointer-events-none">
        <div className="space-y-3 border-t border-white/5 pt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Includes</p>
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
};

// --- Sub-Component: The Expanded Card (Modal) ---
const ExpandedCard = ({ 
  item, 
  onClose 
}: { 
  item: ServiceItem; 
  onClose: () => void;
}) => {
  // Close on click outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
      />

      {/* Expanded Content */}
      <motion.div
        layoutId={`card-${item.title}`}
        className={cn(
          "relative w-full max-w-2xl overflow-hidden rounded-3xl border border-neutral-700 bg-neutral-900 shadow-2xl",
          item.borderColor.replace("group-hover:", "") // Apply border color statically
        )}
      >
        {/* Background Gradient */}
        <div
          className={cn(
            "absolute -right-32 -top-32 h-96 w-96 rounded-full blur-3xl opacity-20 bg-gradient-to-br pointer-events-none",
            item.gradient
          )}
        />

        {/* Close Button */}
        <button 
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="absolute top-4 right-4 z-20 rounded-full bg-neutral-800/50 p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors"
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

            {/* Detailed Body */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-8"
            >
                {/* Long Description */}
                <div className="prose prose-invert max-w-none">
                    <p className="text-lg leading-relaxed text-neutral-300">
                        {item.details.longDescription}
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                    {item.details.stats.map((stat, i) => (
                        <div key={i} className="rounded-2xl bg-neutral-800/50 p-4 border border-neutral-700/50 text-center">
                            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-xs font-medium uppercase tracking-wider text-neutral-500">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Integrations & Features */}
                <div className="grid md:grid-cols-2 gap-8">
                     <div>
                        <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-4">
                            <Zap className="h-4 w-4" /> Core Features
                        </h4>
                        <ul className="space-y-2">
                            {item.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 text-neutral-300">
                                    <CheckCircle2 className="h-4 w-4 text-green-500/80" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                     </div>

                     <div>
                        <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-4">
                            <Globe2 className="h-4 w-4" /> Integrations
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {item.details.integrations.map((tech, i) => (
                                <span key={i} className="px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-xs text-neutral-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                     </div>
                </div>
                
                {/* CTA */}
                <div className="pt-4">
                    <button className="w-full py-4 rounded-xl bg-white text-black font-bold text-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
                        Start with {item.title} <ArrowUpRight className="h-5 w-5" />
                    </button>
                </div>

            </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

// --- Main Section Component ---
export default function TailoredSolutions() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedItem = services.find((s) => s.title === selectedId);

  return (
    <section className="py-24 bg-black min-h-screen">
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

        {/* Grid Layout */}
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

        {/* Expansion Overlay */}
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