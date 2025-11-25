"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FooterCTA() {
  return (
    <footer className="relative w-full bg-[#030014] overflow-hidden flex flex-col items-center justify-center border-t border-white/5">
      
      {/* --- Background Effects --- */}
      
      {/* 1. Vertical Grid Lines (Subtler for footer) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, #ffffff03 1px, transparent 1px)",
          backgroundSize: "60px 100%", 
        }}
      />
      
      {/* 2. Bottom Purple Glow */}
      <div className="absolute bottom-[-30%] left-0 right-0 h-[400px] bg-purple-800/20 blur-[100px] rounded-full pointer-events-none z-0" />
      
      {/* 3. Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030014_100%)] z-10 pointer-events-none" />


      {/* --- Content (Padding adjusted for Footer sizing) --- */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 py-24 max-w-4xl mx-auto">
        
        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-neutral-400 text-sm font-medium tracking-wide">
            Smarter Workflow. Better Words
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
        >
          Boost creativity.<br />
          Maximize efficiency.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-neutral-400 max-w-2xl mb-10 leading-relaxed"
        >
          A Company who’s passionate about performance, security, and great user experience. From concept to clean code.
        </motion.p>

        {/* Buttons Container */}

        <div> 
            <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="
          magnetic-btn
          relative
          z-10 
          mt-6 
          px-8 
          py-3 
          rounded-full 
          bg-[#a797f7] 
          text-black 
          font-semibold 
          text-base 
          md:text-lg 
          flex 
          items-center 
          gap-3 
          transition 
          hover:brightness-110
        "
      >
        {/* PARTICLE FIELD */}
        <div
          className="magnetic-field"
          style={{ "--radius": "160px" } as React.CSSProperties}
        >
          {[...Array(14)].map((_, i) => (
            <span
              key={i}
              className="particle"
              style={{
                "--x": `${Math.random() * 160 - 80}px`,
                "--y": `${Math.random() * 160 - 80}px`,
                animationDelay: `${Math.random() * 1.2}s`,
              } as React.CSSProperties}
            />
          ))}
        </div>

        Start 14-day trial

        <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-black flex items-center justify-center text-white">
          →
        </span>
            </motion.button>
        </div>
 

     
      </div>
    </footer>
  );
}