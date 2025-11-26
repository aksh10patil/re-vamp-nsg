"use client";

import { motion } from "framer-motion";
import { 
  Smartphone, 
  Tablet, 
  Layers, 
  Bell, 
  Cloud, 
  Search, 
  Cpu,
  ArrowRight,
  BarChart3,
  Star,
  Zap
} from "lucide-react";

// --- Configuration ---
const BRAND_COLOR = "#A797F7";

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

export default function AppDevFeatures() {
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
            Mobile Engineering
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary apps for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A797F7] to-indigo-400">
              iOS and Android
            </span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            We build native-grade mobile experiences using cutting-edge cross-platform tech. 
            From seamless UI to robust offline capabilities, we ensure your app stands out on the Store.
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

          {/* 1. LARGE DASHBOARD CARD (Rows 1 & 2) - App Analytics Context */}
          <motion.div 
            variants={itemVariants}
            className="col-span-1 md:col-span-4 row-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col justify-between min-h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#A797F7]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#A797F7]/20 rounded-lg">
                   <BarChart3 className="text-[#A797F7] w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-white">User Growth & Retention</h3>
              </div>
              <p className="text-neutral-400 max-w-md">
                We implement advanced analytics to track user journeys. Optimize your funnel and keep users coming back with data-driven insights.
              </p>
            </div>

            {/* Simulated Mobile Dashboard UI */}
            <div className="relative mt-8 w-full h-64 bg-neutral-900/50 border border-white/10 rounded-xl p-6 overflow-hidden">
               {/* Chart Lines */}
               <div className="flex items-end justify-between h-32 gap-2 mt-8 opacity-70">
                  {[35, 55, 40, 70, 60, 85, 75, 95].map((height, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="w-full bg-gradient-to-t from-[#A797F7] to-indigo-500 rounded-t-sm"
                    />
                  ))}
               </div>

               {/* Floating Info Cards - App Specific */}
               <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 right-4 bg-neutral-800/90 border border-white/10 p-4 rounded-xl shadow-xl backdrop-blur-md"
               >
                  <p className="text-xs text-neutral-400">Retention Rate</p>
                  <p className="text-xl font-bold text-white mt-1">Day 30: 42%</p>
               </motion.div>

               <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-4 left-4 bg-neutral-800/90 border border-white/10 p-4 rounded-xl shadow-xl backdrop-blur-md"
               >
                  <div className="flex items-center gap-2 mb-1">
                     <Star size={12} className="text-yellow-400 fill-yellow-400" />
                     <Star size={12} className="text-yellow-400 fill-yellow-400" />
                     <Star size={12} className="text-yellow-400 fill-yellow-400" />
                     <Star size={12} className="text-yellow-400 fill-yellow-400" />
                     <Star size={12} className="text-yellow-400 fill-yellow-400" />
                  </div>
                  <p className="text-xs text-neutral-400">App Store Rating</p>
                  <p className="text-xl font-bold text-white mt-1">4.9 Stars</p>
               </motion.div>
            </div>
          </motion.div>


          {/* 2. CROSS PLATFORM (Row 1 Right) */}
          <motion.div 
            variants={itemVariants}
            className="col-span-1 md:col-span-2 row-span-1 relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-[#A797F7]/30 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-blue-500/20 rounded-lg text-blue-300">
                <Layers size={24} />
              </div>
              <ArrowRight className="text-neutral-600 group-hover:text-white transition-colors" size={20} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Cross-Platform</h3>
            <p className="text-sm text-neutral-400">
              One codebase for iOS & Android using React Native or Flutter.
            </p>
            {/* Abstract Visual */}
            <div className="absolute right-[-20px] bottom-[-20px] opacity-20 group-hover:opacity-40 transition-opacity">
              <Tablet size={120} />
            </div>
          </motion.div>


          {/* 3. NATIVE PERFORMANCE (Row 2 Right) */}
          <motion.div 
            variants={itemVariants}
            className="col-span-1 md:col-span-2 row-span-1 relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-pink-500/30 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-pink-500/20 rounded-lg text-pink-300">
                <Zap size={24} />
              </div>
              <div className="flex gap-2">
                 <Cpu className="text-neutral-500" size={16} />
                 <ArrowRight className="text-neutral-600 group-hover:text-white transition-colors" size={20} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Native Speed</h3>
            <p className="text-sm text-neutral-400">
              Direct access to device hardware: Camera, GPS, Haptics & Biometrics.
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


          {/* 4. CLOUD BACKEND (Row 3 Left) */}
          <motion.div 
            variants={itemVariants}
            className="col-span-1 md:col-span-2 row-span-1 relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-yellow-500/30 transition-colors"
          >
             <div className="p-2 w-fit bg-yellow-500/20 rounded-lg text-yellow-300 mb-4">
                <Cloud size={24} />
              </div>
            <h3 className="text-lg font-semibold text-white mb-1">Cloud Sync</h3>
            <p className="text-sm text-neutral-400">
              Offline-first architecture with seamless Firebase or AWS sync.
            </p>
          </motion.div>

          {/* 5. ENGAGEMENT / PUSH (Row 3 Middle) */}
          <motion.div 
            variants={itemVariants}
            className="col-span-1 md:col-span-2 row-span-1 relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-green-500/30 transition-colors"
          >
             <div className="p-2 w-fit bg-green-500/20 rounded-lg text-green-300 mb-4">
                <Bell size={24} />
              </div>
            <h3 className="text-lg font-semibold text-white mb-1">Smart Push</h3>
            <p className="text-sm text-neutral-400">
              Targeted notifications to re-engage users at the right time.
            </p>
          </motion.div>

          {/* 6. ASO / MONETIZATION (Row 3 Right) */}
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
                  animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="p-3 bg-[#A797F7]/20 rounded-full inline-block mb-4"
                >
                  <Search className="text-[#A797F7] w-6 h-6" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-1">ASO Ready</h3>
                <p className="text-sm text-neutral-400">
                  Built to rank high on App Store & Google Play.
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
        </motion.div>

      </div>
    </section>
  );
}