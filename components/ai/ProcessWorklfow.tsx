"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Zap, Box, Rocket, CheckCircle2 } from "lucide-react";

// --- 🎨 THEME CONFIG ---
const THEME = {
  accent: "#A797F7", // Your Indigo
  accentGlow: "rgba(99, 102, 241, 0.5)",
  bgDark: "#000000", // Deep dark bg
  cardBg: "#0F0F0F",
  textMuted: "#a1a1aa",
};

export default function ProcessWorkflow() {
  const steps = [
    {
      id: "01",
      title: "Choose Your Workflow",
      description: "Select from our library of pre-built defense mechanisms or create a custom rule set tailored to your specific needs.",
      icon: <FileText size={24} />,
    },
    {
      id: "02",
      title: "Integrate API",
      description: "Copy your unique API key and drop it into your env file. We auto-detect your framework and configure the rest.",
      icon: <Zap size={24} />,
    },
    {
      id: "03",
      title: "Test Connection",
      description: "Run a quick diagnostic. Our system creates a sandbox environment to ensure your rules are firing correctly.",
      icon: <Box size={24} />,
    },
    {
      id: "04",
      title: "Go Live",
      description: "Deploy to production with confidence. Real-time monitoring and threat alerts are automatically enabled.",
      icon: <Rocket size={24} />,
    },
  ];

  return (
    <section 
      className="relative w-full py-24 px-4 overflow-hidden min-h-screen flex flex-col items-center"
      style={{ backgroundColor: THEME.bgDark, color: "white" }}
    >
      {/* BACKGROUND: Starry Particles */}
      <div className="absolute inset-0 z-0">
         {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full opacity-20"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y: [null, Math.random() * -100],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ width: Math.random() * 3 + 1, height: Math.random() * 3 + 1 }}
            />
         ))}
      </div>

      {/* HEADER */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-semibold tracking-tight mb-4"
        >
          How We Make It <span style={{ color: THEME.accent }}>Happen</span>
        </motion.h2>
        <p style={{ color: THEME.textMuted }} className="text-lg">
           From simple integration to full-scale deployment in four simple steps.
        </p>
      </div>

      {/* TIMELINE CONTAINER */}
      <div className="relative z-10 max-w-3xl w-full flex flex-col gap-0">
        
        {/* The Vertical Connecting Line (Behind cards) */}
        <div className="absolute left-8 md:left-1/2 top-4 bottom-12 w-0.5 bg-white/10 -translate-x-1/2 hidden md:block" />
        <div className="absolute left-8 top-4 bottom-12 w-0.5 bg-white/10 -translate-x-1/2 md:hidden" />

        {steps.map((step, index) => (
          <WorkflowStep 
            key={step.id} 
            step={step} 
            index={index} 
            isLast={index === steps.length - 1} 
          />
        ))}

      </div>
    </section>
  );
}

// --- SUB-COMPONENT: INDIVIDUAL STEP ---
function WorkflowStep({ step, index, isLast }: any) {
    const isEven = index % 2 === 0;

    return (
        <motion.div 
            className={`flex flex-col md:flex-row items-start md:items-center w-full mb-12 relative ${isEven ? 'md:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            {/* 1. CONTENT CARD */}
            <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${isEven ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                <div 
                    className="p-8 rounded-3xl border border-white/10 relative group hover:border-white/20 transition-colors duration-500"
                    style={{ backgroundColor: THEME.cardBg }}
                >
                    {/* Glow Effect on Hover */}
                    <div 
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
                        style={{
                            background: `radial-gradient(400px circle at center, ${THEME.accent}10, transparent 40%)`
                        }}
                    />

                    {/* Step Badge */}
                    <div className={`inline-flex items-center justify-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono mb-6 text-white/70 ${isEven ? '' : 'md:ml-auto'}`}>
                        Step {step.id}
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                    <p style={{ color: THEME.textMuted }} className="leading-relaxed">
                        {step.description}
                    </p>
                </div>
            </div>

            {/* 2. CENTER ICON NODE */}
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
                
                {/* The Glowing Circle */}
                <div 
                    className="w-16 h-16 rounded-full border border-white/10 bg-[#0a0a0a] flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                >
                    {/* Active Pulse Ring */}
                    <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full border"
                        style={{ borderColor: THEME.accent }}
                    />
                    
                    {/* Icon */}
                    <div style={{ color: THEME.accent }}>
                        {step.icon}
                    </div>
                </div>
            </div>

            {/* 3. EMPTY SPACER (For Flex Balance) */}
            <div className="w-full md:w-[45%]" />

        </motion.div>
    )
}