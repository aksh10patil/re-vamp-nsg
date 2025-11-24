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
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          
          {/* Primary Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-full bg-gradient-to-b from-[#6366f1] to-[#4f46e5] text-white font-semibold shadow-[0px_0px_20px_0px_rgba(99,102,241,0.5)] hover:shadow-[0px_0px_40px_0px_rgba(99,102,241,0.7)] transition-shadow duration-300"
          >
            <span className="relative z-10">START FOR FREE</span>
            {/* Inner Shine */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-50" />
          </motion.button>

          {/* Secondary Button */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:border-white/20 transition-colors backdrop-blur-sm"
          >
            GET A PLAN
          </motion.button>

        </motion.div>
      </div>
    </footer>
  );
}