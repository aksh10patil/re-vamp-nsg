"use client";

import { motion } from "framer-motion";
import { 
  Bot, 
  Code2, 
  CloudLightning, 
  Share2, 
  Smartphone, 
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Sparkles
} from "lucide-react";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function FeaturesGrid() {
  return (
    <section className="relative w-full py-24 px-6 bg-[#050505] overflow-hidden font-raleway">
      
      {/* Background Ambient Glow (Purple) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* --- Header Section --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6">
            Our Expertise
          </span>
          {/* Removed tracking-tight to preserve your font's natural look */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Smart tools for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              growing your business
            </span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            We don't just build software; we build growth engines. From AI agents to 
            cloud infrastructure, we provide the full stack of digital dominance.
          </p>
        </motion.div>

        {/* --- Bento Grid Layout --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          // Using auto-rows to let the grid expand naturally to 3 rows
          className="grid grid-cols-1 md:grid-cols-6 auto-rows-[minmax(200px,auto)] gap-6"
        >

          {/* 1. LARGE DASHBOARD CARD (Rows 1 & 2) */}
          <motion.div 
            variants={itemVariants}
            className="col-span-1 md:col-span-4 row-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col justify-between min-h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                   <BarChart3 className="text-purple-300 w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Data-Driven Growth</h3>
              </div>
              <p className="text-neutral-400 max-w-md">
                Our solutions provide real-time analytics. Whether it's app performance or AI efficiency, you see the impact instantly.
              </p>
            </div>

            {/* Simulated Dashboard UI */}
            <div className="relative mt-8 w-full h-64 bg-neutral-900/50 border border-white/10 rounded-xl p-6 overflow-hidden">
               {/* Chart Lines */}
               <div className="flex items-end justify-between h-32 gap-2 mt-8 opacity-70">
                  {[40, 65, 45, 80, 55, 90, 70, 95].map((height, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="w-full bg-gradient-to-t from-purple-600 to-indigo-400 rounded-t-sm"
                    />
                  ))}
               </div>

               {/* Floating Info Cards */}
               <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 right-4 bg-neutral-800/90 border border-white/10 p-4 rounded-xl shadow-xl backdrop-blur-md"
               >
                  <p className="text-xs text-neutral-400">Total Engagement</p>
                  <p className="text-xl font-bold text-white mt-1">86.5% <span className="text-green-400 text-xs">↑</span></p>
               </motion.div>

               <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-4 left-4 bg-neutral-800/90 border border-white/10 p-4 rounded-xl shadow-xl backdrop-blur-md"
               >
                  <p className="text-xs text-neutral-400">Active Users</p>
                  <p className="text-xl font-bold text-white mt-1">2.45M</p>
               </motion.div>
            </div>
          </motion.div>


          {/* 2. AI AUTOMATION (Row 1 Right) */}
          <motion.div 
            variants={itemVariants}
            className="col-span-1 md:col-span-2 row-span-1 relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-purple-500/30 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-blue-500/20 rounded-lg text-blue-300">
                <Bot size={24} />
              </div>
              <ArrowRight className="text-neutral-600 group-hover:text-white transition-colors" size={20} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">AI Automation</h3>
            <p className="text-sm text-neutral-400">
              Custom agents that handle support, lead gen, and workflows 24/7.
            </p>
            {/* Abstract Node Visual */}
            <div className="absolute right-[-20px] bottom-[-20px] opacity-20 group-hover:opacity-40 transition-opacity">
              <Bot size={120} />
            </div>
          </motion.div>


          {/* 3. WEB & APP DEVELOPMENT (Row 2 Right) */}
          <motion.div 
            variants={itemVariants}
            className="col-span-1 md:col-span-2 row-span-1 relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-pink-500/30 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-pink-500/20 rounded-lg text-pink-300">
                <Code2 size={24} />
              </div>
              <div className="flex gap-2">
                 <Smartphone className="text-neutral-500" size={16} />
                 <ArrowRight className="text-neutral-600 group-hover:text-white transition-colors" size={20} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Web & App Dev</h3>
            <p className="text-sm text-neutral-400">
              Blazing fast Next.js sites and native mobile apps built for scale.
            </p>
             {/* Visual Decoration */}
             <motion.div 
               className="mt-4 flex gap-1"
               initial="hidden"
               whileInView="visible"
             >
               <span className="w-2 h-2 rounded-full bg-red-500/50" />
               <span className="w-2 h-2 rounded-full bg-yellow-500/50" />
               <span className="w-2 h-2 rounded-full bg-green-500/50" />
             </motion.div>
          </motion.div>


          {/* 4. HOSTING & CLOUD (Row 3 Left - Expanded) */}
          <motion.div 
            variants={itemVariants}
            className="col-span-1 md:col-span-2 row-span-1 relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-yellow-500/30 transition-colors"
          >
             <div className="p-2 w-fit bg-yellow-500/20 rounded-lg text-yellow-300 mb-4">
                <CloudLightning size={24} />
              </div>
            <h3 className="text-lg font-semibold text-white mb-1">Cloud Hosting</h3>
            <p className="text-sm text-neutral-400">
              99.9% Uptime, AWS & Vercel managed infrastructure.
            </p>
          </motion.div>

          {/* 5. SOCIAL MEDIA SERVICES (Row 3 Middle - Expanded) */}
          <motion.div 
            variants={itemVariants}
            className="col-span-1 md:col-span-2 row-span-1 relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-green-500/30 transition-colors"
          >
             <div className="p-2 w-fit bg-green-500/20 rounded-lg text-green-300 mb-4">
                <Share2 size={24} />
              </div>
            <h3 className="text-lg font-semibold text-white mb-1">Social Growth</h3>
            <p className="text-sm text-neutral-400">
              Organic strategy, content creation & automated posting.
            </p>
          </motion.div>

          {/* 6. FUTURE-PROOF STRATEGY (Row 3 Right - New Animated Card) */}
          <motion.div 
            variants={itemVariants}
            className="col-span-1 md:col-span-2 row-span-1 relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 flex flex-col justify-center items-center text-center hover:border-indigo-500/30 transition-colors"
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
               className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent bg-[length:200%_200%]"
             />

             <div className="relative z-10">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="p-3 bg-indigo-500/20 rounded-full inline-block mb-4"
                >
                  <Sparkles className="text-indigo-300 w-6 h-6" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-1">Future-Proof Strategy</h3>
                <p className="text-sm text-neutral-400">
                  We stay ahead of the curve so you don't have to.
                </p>
             </div>
          </motion.div>

        </motion.div>

        {/* CTA Button at bottom */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            View All Documentation
          </button>
        </motion.div>

      </div>
    </section>
  );
}