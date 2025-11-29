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
    title: "Always answering the same questions",
    solution: "An assistant that learns from your responses and automatically handles recurring requests.",
    delay: 0.1
  },
  {
    id: 2,
    icon: BarChart3,
    title: "Analyzing mountains of data",
    solution: "Insights that emerge naturally, presented exactly when and how you need them.",
    delay: 0.2
  },
  {
    id: 3,
    icon: Users,
    title: "Coordinate teams and processes",
    solution: "Flows that adapt to your way of working, not the other way around.",
    delay: 0.3
  }
];

// --- Data: Adaptation Section ---
const adaptationFeatures = [
  {
    id: "decisions",
    icon: Brain,
    title: "Clearer Decisions",
    description: "When you need to make an important decision, you have all the right information at the right time. No noise, just what matters.",
    highlight: false,
    delay: 0.1
  },
  {
    id: "assistant",
    icon: Bot,
    title: "Always by Your Side",
    description: "An assistant that never sleeps, always ready when you need it. It learns from your style and anticipates your needs.",
    highlight: true,
    delay: 0.2
  },
  {
    id: "dialogue",
    icon: MessageSquare,
    title: "Natural Dialogue",
    description: "Communicate as you would with an experienced colleague. No technical jargon, just productive conversations that get results.",
    highlight: false,
    delay: 0.3
  },
  {
    id: "overview",
    icon: LineChart,
    title: "Overview",
    description: "Patterns emerge naturally from your data. Discover opportunities that were previously hidden in the complexity of everyday life.",
    highlight: false,
    delay: 0.4
  }
];

// --- Data: Transformations Section ---
const transformations = [
  {
    id: 1,
    icon: Building2,
    title: "Your Team, Empowered",
    subtitle: "Turn routine into growth opportunities",
    items: [
      "Before: Hours spent on repetitive tasks → Now: Focus on strategies and innovation",
      "Before: Unavoidable human errors → Now: Consistent accuracy with human supervision",
      "Before: Isolated systems → Now: Everything connected, everything fluid",
      "Before: Month-end reporting → Now: Real-time insights when you need them"
    ],
    footer: "AI that works with you, not instead of you",
    color: "bg-purple-500"
  },
  {
    id: 2,
    icon: Users,
    title: "Relationships that Grow",
    subtitle: "Connect with your audience authentically",
    items: [
      "Content that resonates with your unique voice",
      "Perfect timing based on the rhythms of your community",
      "Genuine conversations, amplified by intelligence",
      "Deep understanding of what works and why"
    ],
    footer: "Authenticity amplified, not automated",
    color: "bg-pink-500"
  },
  {
    id: 3,
    icon: ShoppingCart,
    title: "Memorable Experiences",
    subtitle: "Every customer feels truly listened to",
    items: [
      "Instant responses that feel personal because they are",
      "Suggestions that anticipate unexpressed wishes",
      "Purchasing journeys as fluid as a conversation",
      "Trust built through genuine understanding"
    ],
    footer: "Invisible technology, unforgettable experience",
    color: "bg-blue-500"
  },
  {
    id: 4,
    icon: FileText,
    title: "Stories that Inspire",
    subtitle: "Your expertise transformed into valuable content",
    items: [
      "Your ideas expressed with crystal clarity",
      "Content that educates and engages naturally",
      "Your voice, in every language of the world",
      "Messages that get to the heart of the problem"
    ],
    footer: "Your wisdom, amplified",
    color: "bg-orange-500"
  },
  {
    id: 5,
    icon: BarChart3,
    title: "Insights that Guide",
    subtitle: "See beyond the numbers to understand why",
    items: [
      "Dashboards that tell stories, not just data",
      "Trends that emerge before they become obvious",
      "Anomalies explained in the right context",
      "Decisions informed by deep understanding"
    ],
    footer: "Data with meaning, not just statistics",
    color: "bg-emerald-500"
  },
  {
    id: 6,
    icon: Headphones,
    title: "Conversations that Matter",
    subtitle: "Every call becomes an opportunity",
    items: [
      "Warm welcome in every language, every moment",
      "Appointments managed with personal care",
      "Natural qualification through dialogue",
      "Your free team for strategic conversations"
    ],
    footer: "Perfect first impression, always",
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
        {/* We use the brand color for all icons to maintain consistency as requested */}
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
              Start with a simple question:
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]"
            >
              What takes up the most time <br className="hidden md:block" />
              from you <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A797F7] to-white/80">every day?</span>
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
              Tell us about your challenge
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: ADAPTATION */}
      <section className="py-32 px-6 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
        {/* Ambient Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#A797F7]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full relative z-10">
          
          <div className="text-center mb-20 space-y-6">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
            >
               <Badge className="bg-[#A797F7]/10 border-[#A797F7]/20 text-[#A797F7]">
                 How we work together
               </Badge>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter"
            >
              AI that <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-[#A797F7] to-purple-400">adapts to you</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-neutral-400 text-lg max-w-2xl mx-auto"
            >
              Not another tool to learn, but a natural extension of the way you work.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {adaptationFeatures.map((feature) => (
              <AdaptationCard key={feature.id} item={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: TRANSFORMATIONS (New) */}
      <section className="py-32 px-6 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          
          <div className="text-center mb-20 space-y-6">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
             >
                <Badge className="bg-[#A797F7]/10 border-[#A797F7]/20 text-[#A797F7]">
                  Real Transformations
                </Badge>
             </motion.div>

             <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold tracking-tight text-white"
             >
                The Future is <span className="text-[#A797F7]">Collaborative</span>
             </motion.h2>

             <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
               className="text-neutral-400 text-lg max-w-2xl mx-auto"
             >
               Discover how the union of human and artificial intelligence creates extraordinary results.
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