"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { Plus, MoreHorizontal, Check, Cloud, Cpu, Globe } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- 🎨 THEME CONFIG ---
const THEME = {
  accent: "#A797F7", // Your Indigo
  accentGlow: "rgba(99, 102, 241, 0.4)",
  bgDark: "#000000",
  cardBg: "#121212",
  textMuted: "#a1a1aa",
  border: "rgba(255,255,255,0.1)",
};

// --- UTILS ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function FeaturesCard() {
  return (
    <section
      className="w-full py-20 px-4 flex justify-center items-center"
      style={{ backgroundColor: THEME.bgDark, color: "white" }}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT CARD: LLM Support */}
        <FeatureCard className="relative overflow-hidden">
          <div className="relative z-20 mb-8">
            <h3 className="text-2xl font-semibold mb-2">We support every single LLM</h3>
            <p className="text-sm leading-relaxed" style={{ color: THEME.textMuted }}>
              Whether it's OpenAI, Groq or custom local models, we provide a unified API 
              to manage and switch between them instantly.
            </p>
          </div>

          {/* MOCK UI */}
          <div 
            className="w-full bg-[#1A1A1A] border rounded-xl overflow-hidden relative shadow-2xl"
            style={{ borderColor: THEME.border }}
          >
            {/* Mock Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
              <span className="text-xs font-semibold text-white/80">Add LLM</span>
              <button className="flex items-center gap-1 px-2 py-1 rounded bg-white/10 hover:bg-white/20 transition text-[10px] font-medium">
                <Plus size={12} /> Add
              </button>
            </div>

            {/* Scrolling List */}
            <div className="relative h-[220px] overflow-hidden">
                <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#1A1A1A]" />
                <LLMList />
            </div>
          </div>
        </FeatureCard>

        {/* RIGHT CARD: Deploy (Tech Stack) */}
        <FeatureCard className="relative overflow-hidden flex flex-col">
          <div className="relative z-20 mb-8">
            <h3 className="text-2xl font-semibold mb-2">Deploy in seconds</h3>
            <p className="text-sm leading-relaxed" style={{ color: THEME.textMuted }}>
              With our blazing fast edge network, you can deploy your models globally. 
              Supports Vercel, AWS, Docker, and more out of the box.
            </p>
          </div>

          {/* VISUAL: GLOBE + MARQUEE */}
          <div className="flex-1 w-full relative flex flex-col justify-center items-center overflow-hidden min-h-[250px]">
             
             {/* Abstract Globe Glow */}
             <div 
                className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full blur-[80px] opacity-40 z-0"
                style={{ backgroundColor: THEME.accent }}
             />
             <div className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: `radial-gradient(circle at center, white 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
                }}
             />

             {/* Marquee Rows */}
             <div className="relative z-10 w-full flex flex-col gap-4 rotate-[-5deg] scale-110">
                <MarqueeRow direction="left" speed={20}>
                    <Badge icon={<Cloud size={14} />} text="Digital Ocean" />
                    <Badge icon={<Cpu size={14} />} text="Vercel" />
                    <Badge icon={<Globe size={14} />} text="AWS" />
                    <Badge icon={<Cloud size={14} />} text="Azure" />
                </MarqueeRow>
                
                <MarqueeRow direction="right" speed={25}>
                    <Badge icon={<Cloud size={14} />} text="Docker" />
                    <Badge icon={<Cpu size={14} />} text="Kubernetes" />
                    <Badge icon={<Globe size={14} />} text="Redis" />
                    <Badge icon={<Cloud size={14} />} text="Supabase" />
                </MarqueeRow>

                <MarqueeRow direction="left" speed={22}>
                    <Badge icon={<Cloud size={14} />} text="Tailwind" />
                    <Badge icon={<Cpu size={14} />} text="Next.js" />
                    <Badge icon={<Globe size={14} />} text="React" />
                    <Badge icon={<Cloud size={14} />} text="Framer" />
                </MarqueeRow>
             </div>
          </div>
        </FeatureCard>
      </div>
    </section>
  );
}

// --- SUB COMPONENTS ---

function FeatureCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "p-8 rounded-3xl border relative group",
        className
      )}
      style={{ 
        backgroundColor: THEME.cardBg, 
        borderColor: THEME.border 
      }}
    >
        {/* Subtle Gradient Overlay on Hover */}
        <div 
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
            style={{
                background: `radial-gradient(600px circle at top right, ${THEME.accent}15, transparent 40%)`
            }}
        />
      {children}
    </motion.div>
  );
}

// LLM List Item Component
const llms = [
    { name: "Groq LPU", date: "23rd March", active: true },
    { name: "OpenAI GPT-4", date: "21st March", active: true },
    { name: "Claude 3.5", date: "15th April", active: false },
    { name: "Llama 3 70B", date: "1st April", active: true },
    { name: "Mistral Large", date: "10th May", active: false },
    { name: "Gemini Pro", date: "12th May", active: true },
];

function LLMList() {
    return (
        <div className="flex flex-col">
            {/* Duplicating array for infinite scroll effect */}
            <motion.div
                animate={{ y: [0, -300] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="flex flex-col"
            >
                {[...llms, ...llms, ...llms].map((item, i) => (
                    <div 
                        key={i} 
                        className="flex items-center justify-between px-4 py-3 border-b border-white/5 hover:bg-white/[0.02] transition"
                    >
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-white/90">{item.name}</span>
                            <span className="text-[10px] text-white/40">{item.date}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            {/* Toggle Switch */}
                            <div 
                                className={`w-8 h-4 rounded-full relative transition-colors ${item.active ? 'bg-indigo-500' : 'bg-white/20'}`}
                                style={{ backgroundColor: item.active ? THEME.accent : undefined }}
                            >
                                <div className={`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-transform ${item.active ? 'translate-x-4' : 'translate-x-0'}`} />
                            </div>
                            <MoreHorizontal size={14} className="text-white/30" />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

// Marquee Components for Tech Stack
function MarqueeRow({ children, direction = "left", speed = 20 }: { children: React.ReactNode, direction?: "left"|"right", speed?: number }) {
    return (
        <div className="flex overflow-hidden w-full mask-linear">
             <motion.div
                initial={{ x: direction === "left" ? 0 : "-50%" }}
                animate={{ x: direction === "left" ? "-50%" : 0 }}
                transition={{ repeat: Infinity, ease: "linear", duration: speed }}
                className="flex gap-4 shrink-0 px-2"
             >
                {children}
                {children}
                {children}
                {children}
             </motion.div>
        </div>
    );
}

function Badge({ icon, text }: { icon: any, text: string }) {
    return (
        <div 
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-sm whitespace-nowrap"
            style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
        >
            <span className="text-white/60">{icon}</span>
            <span className="text-xs font-medium text-white/90">{text}</span>
        </div>
    )
}