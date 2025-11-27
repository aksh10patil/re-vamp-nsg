"use client";

import { motion } from "framer-motion";
import React from "react";
// 1. Import your icons here, or use a placeholder like I did below
import { Box, Sparkles } from "lucide-react"; 
import Image from "next/image";



// --- 🛠️ CONFIGURATION SECTION ---
// Add your icons in the 'icon' property.
// The 'glowColor' determines the ambient light behind the icon.
const TOOLS = [
  
  { 
    name: "Notion", 
    glowColor: "#FFFFFF", 
    icon: 
    (
      <Image 
        src="/images/icons/notion.png" // Path to your image in public folder
        alt="Notion Logo"
        width={40} 
        height={40}
        className="w-full h-full object-contain" // Ensures it fits perfectly
      />
    )// <--- Replace this line with your icon
  },
  { 
    name: "Slack", 
    glowColor: "#E01E5A", 
    icon: (
      <Image 
        src="/images/icons/slack2.png" // Path to your image in public folder
        alt="Slack Logo"
        width={40} 
        height={40}
        className="w-full h-full object-contain" // Ensures it fits perfectly
      />
    )
  },
  { 
    name: "Pinecone", 
    glowColor: "#3B82F6", 
    icon: (
      <Image 
        src="/images/icons/pinecone.webp" // Path to your image in public folder
        alt="Slack Logo"
        width={40} 
        height={40}
        className="w-full h-full object-contain" // Ensures it fits perfectly
      />
    )
  },
  { 
    name: "Gmail", 
    glowColor: "#EA4335", 
    icon: (
      <Image 
        src="/images/icons/gmail.png" // Path to your image in public folder
        alt="Gmail Logo"
        width={40} 
        height={40}
        className="w-full h-full object-contain" // Ensures it fits perfectly
      />
    )
  },
  { 
    name: "OpenAI", 
    glowColor: "#10A37F", 
    // 2. Add the Image component here
    icon: (
      <Image 
        src="/images/icons/openai2.png" // Path to your image in public folder
        alt="OpenAI Logo"
        width={40} 
        height={40}
        className="w-full h-full object-contain" // Ensures it fits perfectly
      />
    )
    // <--- Replace this line with your icon
  },
  { 
    name: "Zapier", 
    glowColor: "#FF4F00", 
    icon: (
      <Image 
        src="/images/icons/zapier.png" // Path to your image in public folder
        alt="Zapier Logo"
        width={40} 
        height={40}
        className="w-full h-full object-contain" // Ensures it fits perfectly
      />
    )
  },
  { 
    name: "Python", 
    glowColor: "#FFD43B", 
    icon: (
      <Image 
        src="/images/icons/python.png" // Path to your image in public folder
        alt="Python Logo"
        width={40} 
        height={40}
        className="w-full h-full object-contain" // Ensures it fits perfectly
      />
    )
  },
];

export default function FeaturesGridAI() {
  return (
    <section className="relative w-full py-24 px-6  overflow-hidden font-raleway min-h-[60vh] flex flex-col items-center justify-center">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10 text-center w-full">
        
        {/* Header Text */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Smart AI tools for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              growing your business
            </span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            We seamlessly integrate with your existing stack.
          </p>
        </motion.div>

        {/* --- FLOATING ICONS ROW --- */}
        <div className="relative w-full">
            {/* This container handles the row layout.
              - On Mobile: Horizontal Scroll (overflow-x-auto)
              - On Desktop: Centered Row (justify-center)
            */}
            <div className="flex items-center justify-start md:justify-center gap-6 md:gap-10 overflow-x-auto pb-12 px-4 scrollbar-hide">
                {TOOLS.map((tool, i) => (
                    <FloatingIcon key={tool.name} tool={tool} index={i} />
                ))}
            </div>
        </div>

      </div>
      
      {/* Utility to hide scrollbar but keep scroll functionality */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

// --- SUB-COMPONENT: The Floating Logic ---

function FloatingIcon({ tool, index }: { tool: any, index: number }) {
    
    // Generate random float values so icons don't move in sync
    const randomDuration = 3 + Math.random() * 2; 
    const randomY = 12 + Math.random() * 8; 

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            animate={{ 
                y: [0, -randomY, 0], // The up/down float animation
            }}
            // @ts-ignore
            transition={{
                duration: randomDuration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
            }}
            className="flex-shrink-0 group relative flex flex-col items-center gap-3 pt-6"
        >
            {/* Icon Container */}
            <div 
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl border flex items-center justify-center transition-all duration-300 relative overflow-hidden"
                style={{ 
                    backgroundColor: "rgba(255,255,255,0.03)",
                    borderColor: "rgba(255,255,255,0.1)",
                }}
            >
                {/* Glow Effect:
                   Uses the 'glowColor' from your config to light up behind the icon on hover.
                */}
                <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-xl"
                    style={{ backgroundColor: tool.glowColor }}
                />

                {/* The Icon Slot */}
                <div className="w-8 h-8 md:w-10 md:h-10 relative z-10 transition-transform duration-300 group-hover:scale-110 text-white">
                    {tool.icon}
                </div>
            </div>
            
            {/* Tool Name Label */}
            <span className="text-xs font-medium text-white/50 group-hover:text-white transition-colors">
                {tool.name}
            </span>
        </motion.div>
    )
}