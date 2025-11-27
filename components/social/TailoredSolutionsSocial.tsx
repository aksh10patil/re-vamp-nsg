"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Heart, 
  ThumbsUp, 
  MessageCircle, 
  Share2, 
  TrendingUp, 
  Users, 
  Video, 
  Megaphone,
  ArrowUpRight,
  CheckCircle2,
  Sparkles
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
  // Specific reaction icon for this card's theme
  reactionIcon: React.ElementType; 
}

// --- Data: Social Media Services ---
const socialServices: ServiceCardProps[] = [
  {
    title: "Viral Content Creation",
    description: "High-impact Reels, TikToks, and visuals designed to stop the scroll and capture attention.",
    icon: Video,
    reactionIcon: Heart,
    gradient: "from-pink-500/20 to-rose-500/20 hover:from-pink-500/30 hover:to-rose-500/30",
    textGradient: "from-pink-400 to-rose-300",
    borderColor: "group-hover:border-pink-500/50",
    features: ["Short-form Video", "Motion Graphics", "Copywriting"],
  },
  {
    title: "Community Growth",
    description: "Building loyal tribes through active engagement, moderation, and authentic conversation.",
    icon: Users,
    reactionIcon: ThumbsUp,
    gradient: "from-violet-500/20 to-purple-500/20 hover:from-violet-500/30 hover:to-purple-500/30",
    textGradient: "from-violet-400 to-purple-300",
    borderColor: "group-hover:border-violet-500/50",
    features: ["24/7 Moderation", "Influencer Outreach", "Crisis Management"],
  },
  {
    title: "Brand Strategy",
    description: "Data-backed positioning to ensure your brand voice resonates across every channel.",
    icon: Megaphone,
    reactionIcon: MessageCircle,
    gradient: "from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30",
    textGradient: "from-amber-400 to-orange-300",
    borderColor: "group-hover:border-amber-500/50",
    features: ["Content Calendar", "Competitor Audit", "Voice & Tone"],
  },
  {
    title: "Analytics & ROI",
    description: "Turning vanity metrics into actionable insights to drive conversions and sales.",
    icon: TrendingUp,
    reactionIcon: Share2,
    gradient: "from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30",
    textGradient: "from-blue-400 to-cyan-300",
    borderColor: "group-hover:border-blue-500/50",
    features: ["Monthly Reporting", "A/B Testing", "Ad Performance"],
  },
];

// --- Sub-Component: Floating Background Reactions ---
const FloatingReactions = ({ icon: Icon, colorClass }: { icon: any, colorClass: string }) => {
  // Generate random positions for subtle background elements
  const items = Array.from({ length: 6 });
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20, scale: 0.5 }}
          whileHover={{ opacity: 0.2, y: -50, scale: 1.2 }} // Animate on parent hover
          transition={{ 
            duration: 2 + Math.random() * 2, 
            repeat: Infinity, 
            repeatType: "reverse", 
            delay: i * 0.5 
          }}
          className={cn("absolute opacity-0 transition-opacity duration-700 group-hover:opacity-10", colorClass)}
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
        >
          <Icon className="w-6 h-6 md:w-8 md:h-8" />
        </motion.div>
      ))}
    </div>
  );
};

// --- Sub-Component: The Card ---
const Card = ({ item, index }: { item: ServiceCardProps; index: number }) => {
  const Icon = item.icon;
  const ReactionIcon = item.reactionIcon;

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
      {/* Subtle Floating Hearts/Likes Background */}
      <FloatingReactions 
        icon={ReactionIcon} 
        colorClass={item.textGradient.split(" ")[0].replace("from-", "text-")} 
      />

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
            <Icon className="h-6 w-6 text-white" />
          </div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 15 }}
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

      {/* Detailed Deliverables Section */}
      <div className="relative z-10 mt-8">
        <div className="space-y-3 border-t border-white/5 pt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 flex items-center gap-1">
              Deliverables
            </p>
            <div className="flex flex-wrap gap-2">
            {item.features.map((feature: string, i: number) => (
                <span 
                    key={i} 
                    className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-white/10 transition-colors group-hover:bg-white/10"
                >
                    {/* Tiny heart/check hybrid for the bullet point */}
                    {i === 0 ? (
                       <item.reactionIcon className={cn("h-3 w-3", item.textGradient.split(" ")[1].replace("text-", "text-"))} />
                    ) : (
                       <CheckCircle2 className={cn("h-3 w-3 opacity-70", item.textGradient.split(" ")[1].replace("text-", "text-"))} /> 
                    )}
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
export default function TailoredSolutionsSocial() {
  return (
    <section className="py-24 min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center rounded-full bg-pink-400/10 px-2 py-1 text-xs font-medium text-pink-400 ring-1 ring-inset ring-pink-400/20">
                  <Sparkles className="mr-1 h-3 w-3" />
                  Social Media
                </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Elevate Your Brand
            </h2>
            <p className="mt-4 text-lg text-neutral-400">
              Strategic storytelling and community management that turns passive followers into active brand advocates.
            </p>
          </div>
          
          <div className="mt-6 flex flex-col gap-4 md:mt-0 md:items-end">
             <a
                href="#"
                className="group flex items-center gap-2 text-sm font-semibold text-pink-400 transition-colors hover:text-pink-300"
            >
                Start your campaign
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {socialServices.map((service, index) => (
            <Card key={service.title} item={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}