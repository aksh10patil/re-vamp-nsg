"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  Smartphone, 
  Layers, 
  Code2, 
  Bug, 
  Rocket, 
  Cpu,
  Wifi
} from "lucide-react";

// --- 🎨 THEME CONFIG ---
const THEME = {
  accent: "#A797F7", // Brand Color
  bgDark: "#050505", 
  cardBg: "#0F0F0F",
  textMuted: "#a1a1aa",
};

export default function AppDevelopmentWorkflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Smooth out the scroll value for a fluid "tracing" effect
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map progress to height for the purple line
  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    {
      id: "01",
      title: "Blueprint & UI/UX",
      description: "We start with high-fidelity wireframes and interactive prototypes to ensure the user journey feels native and intuitive.",
      icon: <Layers size={24} />,
    },
    {
      id: "02",
      title: "Native Engineering",
      description: "Whether it's Swift, Kotlin, or React Native, we write clean, performant code optimized for specific device hardware.",
      icon: <Code2 size={24} />,
    },
    {
      id: "03",
      title: "Beta Testing & QA",
      description: "Rigorous stress testing across multiple devices. We squash bugs and optimize battery usage before the public sees it.",
      icon: <Bug size={24} />,
    },
    {
      id: "04",
      title: "App Store Launch",
      description: "We handle the complex submission process, ASO metadata, and release management for both Apple and Google stores.",
      icon: <Rocket size={24} />,
    },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-24 px-4 overflow-hidden min-h-[120vh] flex flex-col items-center"
      style={{ backgroundColor: THEME.bgDark, color: "white" }}
    >
      {/* BACKGROUND: Floating Tech Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
         {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-[#A797F7] opacity-10"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                scale: 0.5,
              }}
              animate={{
                y: [null, Math.random() * -100],
                opacity: [0.1, 0.3, 0],
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
                {i % 3 === 0 ? <Smartphone size={24} /> : i % 3 === 1 ? <Cpu size={20} /> : <Wifi size={24} />}
            </motion.div>
         ))}
      </div>

      {/* HEADER */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-24">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#A797F7]/30 bg-[#A797F7]/10 text-[#A797F7] text-sm font-medium mb-6"
        >
            <Smartphone size={14} className="fill-[#A797F7]" />
            <span>The Mobile Lifecycle</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-semibold tracking-tight mb-4"
        >
          From Concept to <br />
          <span style={{ color: THEME.accent }}>App Store</span>
        </motion.h2>
        <p style={{ color: THEME.textMuted }} className="text-lg">
           We architect scalable mobile solutions that users love to touch.
        </p>
      </div>

      {/* TIMELINE CONTAINER */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col gap-0">
        
        {/* --- THE TRACING LINE (Absolute Center) --- */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 h-full z-0">
            {/* Background Track (Dark Gray) */}
            <div className="absolute inset-0 bg-white/5 rounded-full" />

            {/* Active Trace Line (Purple) */}
            <motion.div 
                style={{ height: lineHeight }}
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#A797F7] via-[#A797F7] to-[#8b7be0] rounded-full shadow-[0_0_15px_#A797F7]"
            >
                {/* THE TRACING SMARTPHONE ICON (Stays at the tip of the line) */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20">
                    <div className="relative w-10 h-10 flex items-center justify-center">
                        <motion.div 
                           animate={{ scale: [1, 1.2, 1] }}
                           transition={{ duration: 1.5, repeat: Infinity }}
                           className="absolute inset-0 bg-[#A797F7] rounded-full blur-md opacity-50"
                        />
                        <div className="relative z-10 w-8 h-8 bg-[#A797F7] rounded-full flex items-center justify-center shadow-lg border-2 border-[#050505]">
                            <Smartphone size={14} className="text-white fill-white" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        {steps.map((step, index) => (
          <WorkflowStep 
            key={step.id} 
            step={step} 
            index={index} 
          />
        ))}

      </div>
    </section>
  );
}

// --- SUB-COMPONENT: INDIVIDUAL STEP ---
function WorkflowStep({ step, index }: any) {
    const isEven = index % 2 === 0;

    return (
        <motion.div 
            className={`flex flex-col md:flex-row items-start md:items-center w-full mb-24 relative ${isEven ? 'md:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }} // Triggers when step enters view
            transition={{ duration: 0.5, delay: 0.1 }}
        >
            {/* 1. CONTENT CARD */}
            <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                <div 
                    className="p-8 rounded-3xl border border-white/10 relative group hover:border-[#A797F7]/50 transition-colors duration-500 overflow-hidden"
                    style={{ backgroundColor: THEME.cardBg }}
                >
                    {/* Glow Effect on Hover */}
                    <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
                        style={{
                            background: `radial-gradient(400px circle at ${isEven ? '0% 50%' : '100% 50%'}, ${THEME.accent}15, transparent 40%)`
                        }}
                    />

                    {/* Step Badge */}
                    <div className={`inline-flex items-center justify-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono mb-6 text-white/70 group-hover:text-[#A797F7] group-hover:border-[#A797F7]/30 transition-colors ${isEven ? '' : 'md:ml-auto'}`}>
                        Step {step.id}
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#A797F7] transition-colors">{step.title}</h3>
                    <p style={{ color: THEME.textMuted }} className="leading-relaxed">
                        {step.description}
                    </p>
                </div>
            </div>

            {/* 2. CENTER ICON NODE (Static targets on the line) */}
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
                
                {/* The Circle on the track */}
                <div 
                    className="w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-white/20 z-10"
                />
            </div>

            {/* 3. EMPTY SPACER (For Flex Balance) */}
            <div className="w-full md:w-[45%]" />

        </motion.div>
    )
}