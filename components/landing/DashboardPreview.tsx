"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

// --- COMPONENT 1: Top Analytics ---

function StatCard({ title, value, change }: { title: string; value: string; change?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-white/95"
    >
      <div className="text-xs text-neutral-300">{title}</div>
      <div className="text-2xl font-semibold mt-2">{value}</div>
      {change && <div className="text-sm text-green-400 mt-1">{change}</div>}
    </motion.div>
  );
}

function TopAnalytics() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
      <StatCard title="Entrate" value="$38K" change="+5%" />
      <StatCard title="Utenti" value="850" change="+12%" />
      <StatCard title="Conversioni" value="2.5%" change="+3%" />
    </div>
  );
}

// --- COMPONENT 2: Product Sales Card ---

const lastYearData = [11, 12, 15, 12, 9, 14, 11, 13];
const thisYearData = [20, 18, 22, 18, 17, 22, 24, 28];

function ProductSalesCard() {
  const [mode, setMode] = useState<"last" | "this">("this");
  const data = mode === "this" ? thisYearData : lastYearData;
  
  const [heightMultiplier, setHeightMultiplier] = useState(3.6);

  useEffect(() => {
    const handleResize = () => {
      setHeightMultiplier(window.innerWidth < 640 ? 2.4 : 3.6);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMode((prev) => (prev === "this" ? "last" : "this"));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animated Total
  const total = data.reduce((a, b) => a + b, 0);
  const mv = useMotionValue(total);
  const spring = useSpring(mv, { stiffness: 100, damping: 20 });
  const [displayTotal, setDisplayTotal] = useState(total);

  useEffect(() => {
    mv.set(total);
    const unsub = spring.on("change", (v) => setDisplayTotal(Math.round(v)));
    return () => unsub();
  }, [total, mv, spring]);


  return (
    <div className="p-6 rounded-[22px] border border-white/10 bg-white/5 backdrop-blur-md w-full h-full flex flex-col justify-between">
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:items-center">
        <div>
          <div className="text-sm text-neutral-300">Vendite prodotto</div>
          <div className="text-3xl font-semibold text-white">{displayTotal}</div>
        </div>

        {/* Mode Indicators */}
        <div className="rounded-full bg-white/10 p-[4px] flex items-center w-fit">
          <button
            onClick={() => setMode("last")}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
              mode === "last" ? "bg-white/20 text-white shadow-sm" : "text-neutral-400 hover:text-white"
            }`}
          >
            Anno scorso
          </button>
          <button
            onClick={() => setMode("this")}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
              mode === "this" ? "bg-white/20 text-white shadow-sm" : "text-neutral-400 hover:text-white"
            }`}
          >
            Quest’anno
          </button>
        </div>
      </div>

      {/* CHART */}
      <div className="mt-8 flex flex-col sm:flex-row gap-6 flex-1 items-end">
        <div className="h-48 flex items-end gap-2 sm:gap-3 flex-1 w-full">
          {data.map((val, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: val * heightMultiplier }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 25,
                delay: i * 0.03 
              }}
              className="rounded-t-sm bg-gradient-to-b from-purple-300 to-purple-600 shadow-[0_10px_30px_rgba(255,200,80,0.12)] relative group"
              style={{
                width: "100%",
                maxWidth: "24px",
                minWidth: "8px"
              }}
            >
                {/* Tooltip */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    {val} unità
                </div>
            </motion.div>
          ))}
        </div>

        {/* Legend / Info */}
        <div className="flex flex-col justify-end flex-1 min-w-[120px] pb-2">
          <div className="text-sm text-neutral-300 font-medium">Approfondimenti</div>
          <div className="text-xs text-neutral-400 leading-relaxed mt-2">
            <span className="block mb-1">
              Stai visualizzando:{" "}
              <span className="text-purple-300 font-semibold">
                {mode === "this" ? "Dati 2024" : "Dati 2023"}
              </span>
            </span>
            <span className="opacity-70">
              Aggiornamenti in tempo reale. I dati si aggiornano automaticamente.
            </span>

            {/* Live Indicator */}
            <div className="mt-3 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-green-400">Live</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- COMPONENT 3: New Clients ---

const clients = [
  { name: "Eliza Thornton", color: "#E07A5F" },
  { name: "Javier Ramirez", color: "#3AAFA9" },
  { name: "Zara Mahmood", color: "#FFD166" },
  { name: "Freya Lindholm", color: "#8ECAE6" },
  { name: "Marcus Blackwood", color: "#C77DFF" }
];

function Avatar({ name, color }: { name: string; color: string }) {
  const initials = name.split(" ").map((n) => n[0]).slice(0, 2).join("");
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shadow-inner"
      style={{ background: color, color: "rgba(0,0,0,0.7)" }}
    >
      {initials}
    </div>
  );
}

function NewClients() {
  return (
    <div className="p-6 rounded-[22px] border border-white/10 bg-white/5 backdrop-blur-md w-full h-full flex flex-col">
      
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-neutral-300 font-medium">Nuovi clienti</div>
        <a href="#" className="text-xs text-purple-300 hover:text-purple-200 transition-colors">
          Vedi tutti
        </a>
      </div>

      <div className="flex flex-col gap-4 flex-1 justify-center">
        {clients.map((client, index) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="flex items-center justify-between gap-3 group cursor-default"
          >
            {/* Left */}
            <div className="flex items-center gap-3">
              <Avatar name={client.name} color={client.color} />
              <div className="flex flex-col">
                <span className="text-white font-medium text-sm leading-none group-hover:text-purple-300 transition-colors">
                  {client.name}
                </span>
                <span className="text-[10px] text-neutral-400 mt-1 uppercase tracking-wide">
                  Verificato
                </span>
              </div>
            </div>

            {/* Right */}
            <div className="hidden sm:block w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-white/80"
                initial={{ width: 0 }}
                whileInView={{ width: `${Math.random() * 40 + 40}%` }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// --- MAIN DASHBOARD SECTION ---

export default function DashboardSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
      
      <div className="absolute inset-0 -z-10 bg-[#050505]">
        <div className="absolute top-0 left-0 w-full h-full" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(50,20,100,0.3),transparent_70%)] blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Controllo totale sulle tue <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
              analisi aziendali.
            </span>
          </motion.h2>

          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-neutral-400 max-w-2xl mx-auto"
          >
            Elaborazione dati in tempo reale con strumenti avanzati di visualizzazione progettati per aiutarti a prendere decisioni più velocemente.
          </motion.p>
        </div>

        {/* Dashboard Grid */}
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
        >
          <TopAnalytics />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 h-full min-h-[400px]">
              <ProductSalesCard />
            </div>
            <div className="h-full min-h-[400px]">
              <NewClients />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
