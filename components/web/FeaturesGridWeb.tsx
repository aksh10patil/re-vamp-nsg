"use client";

import { motion, type Variants } from "framer-motion";
import { 
  Monitor, 
  Smartphone, 
  Layers, 
  Zap, 
  Search, 
  Globe, 
  Database,
  Code,
  
} from "lucide-react";
import React, { useEffect, useState } from "react";


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

// New variants for staggered score animations
const scoreContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3 // Wait a bit for parent card to settle
    }
  }
};

const scoreItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

// --- Custom Animated Circle Component for "Lighthouse" Score ---
const ScoreCircle = ({ score, label, index }: { score: number, label: string, index: number }) => {
  const [currentScore, setCurrentScore] = useState(0);
  const radius = 36;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    // Stagger the start of the number animation based on index
    const delayTimer = setTimeout(() => {
        let start = 0;
        const duration = 2000; // Slower, smoother animation
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Cubic ease out for a smooth deceleration
            const ease = 1 - Math.pow(1 - progress, 3);
            
            setCurrentScore(Math.floor(ease * score));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, 300 + (index * 150)); // Initial delay + staggered delay

    return () => clearTimeout(delayTimer);
  }, [score, index]);

  const strokeDashoffset = circumference - (currentScore / 100) * circumference;

  return (
    <motion.div 
      variants={scoreItemVariants}
      className="flex flex-col items-center gap-4"
    >
      <div className="relative w-24 h-24 flex items-center justify-center group">
        {/* Glow effect behind the circle */}
        <div className="absolute inset-0 bg-[#A797F7]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Background Circle */}
        <svg className="w-full h-full transform -rotate-90 relative z-10">
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="transparent"
            className="text-white/10"
          />
          {/* Progress Circle */}
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="#A797F7"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-300 ease-out drop-shadow-[0_0_10px_rgba(167,151,247,0.3)]"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center z-20">
            <span className="text-2xl font-bold text-white font-mono">
            {currentScore}
            </span>
        </div>
      </div>
      <span className="text-sm text-neutral-300 font-semibold tracking-wider uppercase text-center">{label}</span>
    </motion.div>
  );
};

export default function WebDevFeatures() {
  return (
    <section className="relative w-full py-24 px-6 bg-[#050505] overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-[#A797F7]/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* --- Header Section --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#A797F7]/30 bg-[#A797F7]/10 text-[#A797F7] text-sm font-medium mb-6">
            Web Engineering
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Exceptional websites for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A797F7] to-indigo-400">
              scaling your brand
            </span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            We don't just write code; we architect digital experiences. From high-conversion 
            landing pages to complex e-commerce platforms, we engineer the pixel-perfect 
            web presence your business deserves.
          </p>
        </motion.div>

        {/* --- Bento Grid Layout --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-6 auto-rows-[minmax(200px,auto)] gap-6"
        >

          {/* 1. PERFORMANCE / CORE WEB VITALS (Large Card) */}
          <motion.div 
            variants={itemVariants}
            className="col-span-1 md:col-span-4 row-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col justify-between min-h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#A797F7]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#A797F7]/20 rounded-lg">
                   <Zap className="text-[#A797F7] w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Performance First Architecture</h3>
              </div>
              <p className="text-neutral-400 max-w-md">
                We obsess over Core Web Vitals. Blazing fast load times and silky smooth interactions improve SEO and keep users engaged.
              </p>
            </div>

            {/* Visual: Simulated Lighthouse Scores */}
            <motion.div 
                variants={scoreContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative mt-10 w-full grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-white/5 backdrop-blur-lg border border-[#A797F7]/20 rounded-3xl overflow-hidden"
            >
               {/* Scanline Effect - Subtler and slower */}
               <motion.div 
                 initial={{ top: "-50%" }}
                 animate={{ top: "150%" }}
                 transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                 className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[#A797F7]/5 to-transparent pointer-events-none z-0"
               />

               <ScoreCircle score={97} label="Performance" index={0} />
               <ScoreCircle score={98} label="Accessibility" index={1} />
               <ScoreCircle score={99} label="Best Practices" index={2} />
               <ScoreCircle score={100} label="SEO" index={3} />
            </motion.div>
          </motion.div>


          {/* 2. RESPONSIVE DESIGN (Top Right) */}
          <motion.div 
            variants={itemVariants}
            className="col-span-1 md:col-span-2 row-span-1 relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-[#A797F7]/30 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-blue-500/20 rounded-lg text-blue-300">
                <Monitor size={24} />
              </div>
              <div className="flex gap-1">
                 <Smartphone className="text-neutral-600 group-hover:text-white transition-colors" size={18} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Responsive Design</h3>
            <p className="text-sm text-neutral-400">
              Fluid layouts that adapt perfectly to mobile, tablet, and desktop screens.
            </p>
          </motion.div>


          {/* 3. MODERN TECH STACK (Row 2 Right) */}
          <motion.div 
            variants={itemVariants}
            className="col-span-1 md:col-span-2 row-span-1 relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-[#A797F7]/30 transition-colors"
          >
            <div className="absolute right-4 top-4 opacity-20">
               <Code className="text-white w-12 h-12" />
            </div>
            <div className="p-2 w-fit bg-pink-500/20 rounded-lg text-pink-300 mb-4">
               <Layers size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Modern Stack</h3>
            <div className="flex gap-2 flex-wrap mt-2">
                <span className="text-xs px-2 py-1 rounded bg-white/10 text-neutral-300 border border-white/5">Next.js</span>
                <span className="text-xs px-2 py-1 rounded bg-white/10 text-neutral-300 border border-white/5">React</span>
                <span className="text-xs px-2 py-1 rounded bg-white/10 text-neutral-300 border border-white/5">Tailwind</span>
                <span className="text-xs px-2 py-1 rounded bg-white/10 text-neutral-300 border border-white/5">TypeScript</span>
                <span className="text-xs px-2 py-1 rounded bg-white/10 text-neutral-300 border border-white/5">Node.js</span>
                <span className="text-xs px-2 py-1 rounded bg-white/10 text-neutral-300 border border-white/5">HTML</span>
                <span className="text-xs px-2 py-1 rounded bg-white/10 text-neutral-300 border border-white/5">Docker</span>
                <span className="text-xs px-2 py-1 rounded bg-white/10 text-neutral-300 border border-white/5">CSS</span>
                <span className="text-xs px-2 py-1 rounded bg-white/10 text-neutral-300 border border-white/5">AWS</span>
            </div>
          </motion.div>

          {/* 4. SEO OPTIMIZED (Row 3 Left) */}
          <motion.div 
            variants={itemVariants}
            className="col-span-1 md:col-span-2 row-span-1 relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-[#A797F7]/30 transition-colors"
          >
             <div className="p-2 w-fit bg-emerald-500/20 rounded-lg text-emerald-300 mb-4">
                <Search size={24} />
              </div>
            <h3 className="text-lg font-semibold text-white mb-1">SEO Optimized</h3>
            <p className="text-sm text-neutral-400">
              Semantic HTML5, metadata management, and sitemaps built-in for maximum visibility.
            </p>
          </motion.div>

          {/* 5. CMS INTEGRATION (Row 3 Middle) */}
          <motion.div 
            variants={itemVariants}
            className="col-span-1 md:col-span-2 row-span-1 relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-[#A797F7]/30 transition-colors"
          >
             <div className="p-2 w-fit bg-orange-500/20 rounded-lg text-orange-300 mb-4">
                <Database size={24} />
              </div>
            <h3 className="text-lg font-semibold text-white mb-1">Headless CMS</h3>
            <p className="text-sm text-neutral-400">
              Empower your team to update content easily with Sanity, Contentful, or Strapi integrations.
            </p>
          </motion.div>

          {/* 6. GLOBAL DEPLOYMENT (Row 3 Right) */}
          <motion.div 
            variants={itemVariants}
            className="col-span-1 md:col-span-2 row-span-1 relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 flex flex-col justify-center items-center text-center hover:border-[#A797F7]/30 transition-colors"
          >
             {/* Animated Gradient Background */}
             <motion.div
               animate={{ 
                 backgroundPosition: ["0% 0%", "100% 100%"],
                 opacity: [0.1, 0.3, 0.1] 
               }}
               transition={{ 
                 duration: 8, 
                 repeat: Infinity, 
                 repeatType: "reverse",
                 ease: "linear" 
               }}
               className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#A797F7]/20 via-transparent to-transparent bg-[length:200%_200%]"
             />

             <div className="relative z-10">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="p-3 bg-[#A797F7]/20 rounded-full inline-block mb-4"
                >
                  <Globe className="text-[#A797F7] w-6 h-6" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-1">Global Edge Network</h3>
                <p className="text-sm text-neutral-400">
                   Deployed instantly to 100+ regions worldwide.
                </p>
             </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}