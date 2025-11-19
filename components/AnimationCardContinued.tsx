"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  FaSearch, FaUserFriends, FaStar, FaChartLine, 
  FaEnvelope, FaUsers, FaDatabase, FaCode 
} from "react-icons/fa";

// Typewriter animation helper
function useTypewriter(text: string, speed = 34) {
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

export default function AnimationCardContinued() {

  const codeText = useTypewriter(
`class AutomationAgent:
def __init__(self, activation_limit):
        self.activation_limit = activation_limit
        self.current_mode = "idle"`,
  );

  const orbitIcons = [
    <FaEnvelope size={20} key="1" />,
    <FaUsers size={20} key="2" />,
    <FaDatabase size={20} key="3" />,
    <FaChartLine size={20} key="4" />,
  ];

  return (
    <section className="w-full py-10 px-6 flex flex-col items-center">

      {/* GRID — RESPONSIVE */}
      <div className="
        grid 
        grid-cols-1 
        md:grid-cols-3 
        gap-10 
        w-full 
        max-w-7xl
      ">

        {/* LEFT CARD */}
        <div className="
          relative 
          p-8 rounded-3xl 
          bg-white/5 border border-white/10 
          backdrop-blur-xl 
          flex flex-col 
          justify-between
        ">

          {/* SEARCH BAR */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              w-full flex items-center justify-between
              px-5 py-3 rounded-xl 
              bg-black/30 border border-white/10 
              text-white
            "
          >
            <div className="flex items-center gap-2 opacity-80">
              <FaSearch className="text-sm" />
              <span className="text-sm">Research anything...</span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="
                px-4 py-1 
                rounded-full 
                bg-purple-600/30 
                border border-purple-400/30 
                text-xs text-purple-200
              "
            >
              Research
            </motion.button>
          </motion.div>

          {/* INDUSTRIES */}
          <div className="mt-6 flex flex-col gap-3">
            {[
              "Software & App Industry",
              "UX & UI Design Industry",
              "High Converting Customer",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 * idx }}
                className="
                  flex items-center justify-between 
                  px-4 py-3 rounded-xl 
                  bg-white/5 border border-white/10 
                  text-white
                "
              >
                <div className="flex items-center gap-3 opacity-80 text-sm">
                  <FaUserFriends className="text-purple-300" />
                  {item}
                </div>
                <FaChartLine className="text-purple-300" />
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-white text-lg md:text-xl font-semibold">
              Real-Time Intelligence
            </h3>
            <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
              Make smarter decisions with live data insights.
            </p>
          </div>
        </div>


        {/* MIDDLE CARD — FIXED CODE WINDOW */}
        <div className="
          p-8 rounded-3xl 
          bg-white/5 border border-white/10 
          backdrop-blur-xl 
          flex flex-col
        ">

          {/* CODE HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              flex items-center justify-between 
              px-5 py-3 
              bg-black/30 border border-white/10 
              rounded-xl text-white
            "
          >
            <span className="opacity-80 text-sm">Code</span>
            <FaCode className="text-xs opacity-70" />
          </motion.div>

          {/* FIXED HEIGHT CODE BLOCK */}
          <div className="
  mt-6 
  bg-black/20 
  border border-white/10 
  rounded-xl 
  p-4 
  h-[230px] md:h-[260px] 
  overflow-y-auto 
  overflow-x-hidden
">
  <pre className="
    text-purple-200 
    text-[8px] sm:text-[10px] md:text-xs 
    font-mono 
    leading-relaxed 
    whitespace-pre-wrap 
    break-words
  ">
    {codeText}
  </pre>
</div>


          <div className="mt-10">
            <h3 className="text-white text-lg md:text-xl font-semibold">
              Custom AI Agent Development
            </h3>
            <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
              Custom AI agents that integrate seamlessly with your tools.
            </p>
          </div>
        </div>


        {/* RIGHT CARD (unchanged) */}
        <div className="
          relative 
          p-8 rounded-3xl 
          bg-white/5 border border-white/10 
          backdrop-blur-xl 
          flex flex-col justify-between 
          overflow-hidden
        ">

          {/* CENTER GLOW */}
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="
              absolute left-1/2 top-1/3 
              -translate-x-1/2 
              rounded-full
              w-44 h-44 
              bg-[radial-gradient(circle,rgba(150,80,255,0.25),transparent)]
              blur-3xl
            "
          />

          {/* ORBITING ICONS */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="
              relative 
              w-64 h-64 mx-auto
              hidden sm:block
            "
          >
            {orbitIcons.map((icon, i) => (
              <motion.div
                key={i}
                className="
                  absolute 
                  left-1/2 top-1/2 
                  -translate-x-1/2 -translate-y-1/2
                  w-10 h-10 
                  flex items-center justify-center 
                  bg-white/5 border border-white/10 
                  rounded-xl 
                  text-neutral-200
                "
                style={{
                  rotate: `${(360 / orbitIcons.length) * i}deg`,
                  transformOrigin: "0 115px",
                }}
              >
                {icon}
              </motion.div>
            ))}
          </motion.div>

          <div className="
            absolute left-1/2 top-1/3 
            -translate-x-1/2 
            -translate-y-1/2
            flex items-center justify-center 
            rounded-full 
            w-20 h-20 
            bg-black/40 border border-white/10 
            text-white
          ">
            <FaStar className="text-3xl" />
          </div>

          <div className="mt-48 sm:mt-52">
            <h3 className="text-white text-lg md:text-xl font-semibold">
              AI Strategy Consulting
            </h3>
            <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
              Expert guidance to implement AI solutions that drive growth.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
