import React from "react";
import { motion } from "framer-motion";
import { 
  FaBolt, 
  FaBrain, 
  FaSlack, 
  FaDatabase, 
  FaEnvelope 
} from "react-icons/fa";

const WorkflowCard = () => {
  return (
    <div
      className="
        p-8 
        rounded-3xl 
        bg-white/5 
        border border-white/10 
        backdrop-blur-xl 
        relative 
        overflow-hidden
        flex 
        flex-col 
        min-h-[500px]
        w-full
        max-w-lg
        mx-auto
      "
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-purple-500/20 blur-[80px] rounded-full pointer-events-none" />
      
      <div className="relative flex-grow w-full flex items-center justify-center py-10">
        
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 400 300"
          fill="none"
          stroke="currentColor"
        >
          <AnimatedBeam d="M 60 150 C 100 150, 120 150, 180 150" delay={0} />
          <AnimatedBeam d="M 220 150 C 270 150, 280 80, 340 80" delay={1.5} />
          <AnimatedBeam d="M 220 150 C 270 150, 280 150, 340 150" delay={1.6} />
          <AnimatedBeam d="M 220 150 C 270 150, 280 220, 340 220" delay={1.7} />
        </svg>

        {/* Trigger Node */}
        <Node icon={<FaBolt />} label="Avvio" x="15%" y="50%" color="text-yellow-400" delay={0} />

        {/* AI Agent Node */}
        <motion.div 
           className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10"
        >
          <motion.div 
            animate={{ 
              boxShadow: ["0 0 0px rgba(168,85,247,0)", "0 0 20px rgba(168,85,247,0.6)", "0 0 0px rgba(168,85,247,0)"],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
            className="w-16 h-16 bg-black/40 border border-purple-500/50 rounded-2xl flex items-center justify-center backdrop-blur-sm"
          >
            <FaBrain className="text-nsg text-2xl" />
          </motion.div>
          <span className="text-xs text-neutral-400 mt-2 font-medium tracking-wide">Agente AI</span>
        </motion.div>

        {/* Action Nodes */}
        <Node icon={<FaSlack />} label="Notifica" x="85%" y="26%" color="text-emerald-400" delay={2} />
        <Node icon={<FaDatabase />} label="Archivia" x="85%" y="50%" color="text-blue-400" delay={2.1} />
        <Node icon={<FaEnvelope />} label="Email" x="85%" y="74%" color="text-pink-400" delay={2.2} />
        
      </div>

      <div className="mt-auto pt-6 text-center z-20 relative">
        <h3 className="text-white text-2xl font-semibold">
          Flussi di lavoro automatizzati
        </h3>
        <p className="text-neutral-400 mt-2 leading-relaxed text-sm">
          Visualizza e automatizza logiche complesse. Collega i tuoi agenti AI 
          ad azioni reali in modo semplice.
        </p>
      </div>
    </div>
  );
};

// Node Component
const Node = ({ icon, label, x, y, color, delay }: any) => {
  return (
    <div 
      className="absolute flex flex-col items-center z-10"
      style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: delay, duration: 0.5 }}
        className={`
          w-10 h-10 
          rounded-xl 
          bg-white/5 
          border border-white/10 
          flex items-center justify-center 
          ${color}
          shadow-lg
        `}
      >
        {icon}
      </motion.div>
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.2 }}
        className="text-[10px] text-neutral-500 mt-2 font-mono uppercase"
      >
        {label}
      </motion.span>
    </div>
  );
};

// Beam Component
const AnimatedBeam = ({ d, delay }: { d: string, delay: number }) => {
  return (
    <>
      <path 
        d={d} 
        stroke="rgba(255,255,255,0.1)" 
        strokeWidth="2" 
        fill="none" 
        strokeLinecap="round"
      />
      
      <motion.path
        d={d}
        stroke="url(#gradient-beam)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: [0, 1],
          opacity: [0, 1, 0],
          strokeDashoffset: [0, -10]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 1,
          delay: delay,
          ease: [0.42, 0, 0.58, 1]
        }}
      />

      <defs>
        <linearGradient id="gradient-beam" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(168,85,247,0)" />
          <stop offset="50%" stopColor="rgba(168,85,247,1)" />
          <stop offset="100%" stopColor="rgba(168,85,247,0)" />
        </linearGradient>
      </defs>
    </>
  );
};

export default WorkflowCard;
