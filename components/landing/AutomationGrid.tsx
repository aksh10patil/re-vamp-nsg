"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaSearch,
  FaUserFriends,
  FaChartLine,
  FaCode,
  FaRobot,
  FaFileAlt,
  FaImage,
  FaDatabase,
  FaCheckCircle,
} from "react-icons/fa";

import type { Variants } from "framer-motion";



// --- Helper: Typewriter Effect for Code Block ---
function useTypewriter(text: string, speed = 30) {
  const [output, setOutput] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setOutput(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text]);
  return output;
}

// --- Animation Variants ---
const containerVariants: Variants  = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants: Variants  = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.58, 1] },
  },
};

export default function AutomationGrid() {
  // 1. Typewriter Text
  const codeText = useTypewriter(
    `class DataProcessor:
  def optimize(self, data):
    self.clean(data)
    self.categorize(data)
    return "Optimized"`,
    40
  );

  // 2. Replay Key for Infinite Loop (Right Card)
  const [replayKey, setReplayKey] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setReplayKey((prev) => prev + 1);
    }, 4000); // Restart animation every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-10 px-6 flex flex-col items-center min-h-screen justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl"
      >
        {/* ========================================== */}
        {/* LEFT CARD: Research & Interactive List     */}
        {/* ========================================== */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -5 }}
          className="
            relative p-8 rounded-3xl 
            bg-white/5 border border-white/10 
            backdrop-blur-xl flex flex-col justify-between
            transition-colors duration-300 hover:bg-white/10
          "
        >
          {/* Search Bar */}
          <div className="w-full flex items-center justify-between px-5 py-3 rounded-xl bg-black/30 border border-white/10 text-white">
            <div className="flex items-center gap-2 opacity-80">
              <FaSearch className="text-sm text-purple-300" />
              <span className="text-sm text-neutral-400">
                Find trends...
              </span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(147, 51, 234, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-1 rounded-full bg-purple-600/30 border border-purple-400/30 text-[10px] font-medium text-purple-200 transition-colors"
            >
              SEARCH
            </motion.button>
          </div>

          {/* Interactive List */}
          <div className="mt-6 flex flex-col gap-3">
            {[
              "Software & SaaS",
              "UI/UX Design Trends",
              "Customer Retention",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  x: 5,
                  backgroundColor: "rgba(255,255,255,0.08)",
                }}
                className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white cursor-default transition-colors duration-200"
              >
                <div className="flex items-center gap-3 opacity-80 text-sm">
                  <FaUserFriends className="text-purple-300/70" />
                  {item}
                </div>
                <FaChartLine className="text-purple-300/50 text-xs" />
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-white text-xl font-semibold">
              Real-Time Insights
            </h3>
            <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
              Track industry trends and make data-backed decisions instantly.
            </p>
          </div>
        </motion.div>

        {/* ========================================== */}
        {/* MIDDLE CARD: Code & Typewriter Effect      */}
        {/* ========================================== */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -5 }}
          className="
            p-8 rounded-3xl 
            bg-white/5 border border-white/10 
            backdrop-blur-xl flex flex-col
            transition-colors duration-300 hover:bg-white/10
          "
        >
          <div className="flex items-center justify-between px-5 py-3 bg-black/30 border border-white/10 rounded-xl text-white">
            <span className="opacity-80 text-xs font-mono tracking-widest">
              AGENT_V1.PY
            </span>
            <FaCode className="text-xs opacity-70" />
          </div>

          {/* Code Window */}
          <div className="mt-6 bg-black/40 border border-white/10 rounded-xl p-5 h-[220px] overflow-hidden relative shadow-inner">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent opacity-20 pointer-events-none" />
            <pre className="text-purple-200 text-[11px] font-mono leading-loose whitespace-pre-wrap break-words">
              <span className="text-pink-400">import</span> openai{"\n"}
              {codeText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1.5 h-3 bg-purple-400 ml-1 align-middle"
              />
            </pre>
          </div>

          <div className="mt-auto pt-6">
            <h3 className="text-white text-xl font-semibold">
              Custom AI Agents
            </h3>
            <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
              Deploy autonomous code that works while you sleep.
            </p>
          </div>
        </motion.div>

        {/* ========================================== */}
        {/* RIGHT CARD: AI Organizing Flow (Animated)  */}
        {/* ========================================== */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -5 }}
          className="
            relative p-8 rounded-3xl 
            bg-white/5 border border-white/10 
            backdrop-blur-xl flex flex-col justify-between
            overflow-hidden transition-colors duration-300 hover:bg-white/10
            min-h-[480px]
          "
        >
          {/* Background Glow */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: [0.42, 0, 0.58, 1] }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-44 h-44 bg-[radial-gradient(circle,rgba(168,85,247,0.4),transparent)] blur-3xl pointer-events-none"
          />

          {/* --- ANIMATION CONTAINER --- */}
          <div
            key={replayKey} // Forces React to rebuild div & restart animations
            className="relative w-full h-[240px] flex items-center justify-center"
          >
            {/* SVG Lines Layer */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
              viewBox="0 0 300 240"
            >
              {/* Input Lines */}
              <path d="M 40 40 Q 150 40 150 120" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M 260 40 Q 150 40 150 120" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
              {/* Output Line */}
              <path d="M 150 120 Q 150 200 150 240" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
            </svg>

            {/* 1. INCOMING CHAOS (Files/Data) */}
            <motion.div
              initial={{ x: -100, y: -80, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, y: 0, opacity: 1, scale: 0.8 }}
              transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1]}}
              className="absolute z-10"
            >
              <div className="p-2 bg-white/10 rounded-lg border border-white/20">
                <FaFileAlt className="text-yellow-200 text-xs" />
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 100, y: -80, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, y: 0, opacity: 1, scale: 0.8 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
              className="absolute z-10"
            >
              <div className="p-2 bg-white/10 rounded-lg border border-white/20">
                <FaDatabase className="text-blue-200 text-xs" />
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 0, y: -100, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, y: 0, opacity: 1, scale: 0.8 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.42, 0, 0.58, 1]}}
              className="absolute z-10"
            >
              <div className="p-2 bg-white/10 rounded-lg border border-white/20">
                <FaImage className="text-pink-200 text-xs" />
              </div>
            </motion.div>

            {/* 2. CENTER AI BRAIN */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative z-20 w-16 h-16 bg-black/80 border border-purple-500/50 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.5)]"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1.2, // Start pulsing after inputs arrive
                }}
              >
                <FaRobot className="text-purple-300 text-2xl" />
              </motion.div>
            </motion.div>

            {/* 3. OUTGOING ORDER (Checkmarks) */}
            <motion.div
              initial={{ y: 0, opacity: 0, scale: 0 }}
              animate={{ y: 80, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.8, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute z-10"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full backdrop-blur-md">
                <FaCheckCircle className="text-emerald-400 text-xs" />
                <span className="text-[10px] font-bold text-emerald-200 uppercase tracking-wider">
                  Organized
                </span>
              </div>
            </motion.div>
          </div>

          {/* Text Bottom */}
          <div className="mt-auto z-20 relative">
            <h3 className="text-white text-xl font-semibold">
              Intelligent Sort
            </h3>
            <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
              AI automatically categorizes, processes, and files your data.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}