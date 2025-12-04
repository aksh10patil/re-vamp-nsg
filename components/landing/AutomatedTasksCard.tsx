"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaEnvelopeOpenText,
  FaBell,
  FaFileInvoiceDollar,
  FaCheck,
  FaCog,
} from "react-icons/fa";

const tasks = [
  { icon: <FaCalendarAlt />, text: "Pianifica riunione di follow-up" },
  { icon: <FaEnvelopeOpenText />, text: "Invia email personalizzata" },
  { icon: <FaBell />, text: "Notifica il team su Slack" },
  { icon: <FaFileInvoiceDollar />, text: "Genera report settimanale" },
];

const AutomatedTasksCard = () => {
  // We use this key to force-reset the component animations
  const [replayKey, setReplayKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setReplayKey((prev) => prev + 1);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        p-8 
        rounded-3xl 
        bg-white/5 
        border border-white/10 
        backdrop-blur-xl
        flex 
        flex-col 
        justify-between
        min-h-[480px]
        h-full
        relative
        overflow-hidden
      "
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/20 blur-[80px] rounded-full pointer-events-none" />

      <div key={replayKey} className="flex flex-col gap-4 relative z-10">
        {tasks.map((task, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1.0],
            }}
            className="
              w-full 
              flex items-center justify-between 
              px-4 py-3 
              rounded-xl 
              bg-white/5 
              border border-white/10 
              backdrop-blur-xl 
              text-white
            "
          >
            <div className="flex items-center gap-3 text-neutral-200">
              <div className="text-purple-300 text-lg">{task.icon}</div>
              <span className="text-sm">{task.text}</span>
            </div>

            <div className="w-6 h-6 relative flex items-center justify-center">
              <TaskStatusIcon delay={0.8 + index * 0.2} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Text Bottom */}
      <div className="mt-10 z-10 relative">
        <h3 className="text-white text-2xl font-semibold">
          Automatizza le attività ripetitive
        </h3>
        <p className="text-neutral-400 mt-2 leading-relaxed">
          Ti aiutiamo a ottimizzare le operazioni interne automatizzando i flussi di lavoro manuali.
        </p>
      </div>
    </div>
  );
};

// Sub-component for the icon animation
const TaskStatusIcon = ({ delay }: { delay: number }) => {
  return (
    <>
      {/* 1. Processing Icon (Spinning Cog) */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: 0 }}
        animate={{ 
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.5],
            rotate: 360 
        }}
        transition={{ 
            duration: 1.5,
            delay: delay,
            times: [0, 0.2, 0.8, 1]
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <FaCog className="text-neutral-400 text-sm" />
      </motion.div>

      {/* 2. Success Icon (Checkmark) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
            delay: delay + 1.2,
            type: "spring", 
            stiffness: 200, 
            damping: 15 
        }}
        className="
          absolute inset-0 
          rounded-full 
          bg-purple-500/20 
          border border-purple-400/30 
          flex items-center justify-center
        "
      >
        <FaCheck className="text-purple-200 text-xs" />
      </motion.div>
    </>
  );
};

export default AutomatedTasksCard;
