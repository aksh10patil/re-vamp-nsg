"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 14 }).map(() => ({
      x: Math.random() * 160 - 80,
      y: Math.random() * 160 - 80,
      delay: Math.random() * 1.2,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    // 1. Removed 'border-2'
    // 2. Kept pt-32/pt-48 so text is pushed down BELOW the navbar area
    // 3. Added w-full
    <section className="relative w-full flex flex-col items-center justify-start pt-32 md:pt-48 text-center min-h-screen px-4 md:px-6 overflow-hidden bg-black">
      
      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(30,30,30,0.5),#000000)]" />

      {/* Waveform Video */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 mix-blend-screen pointer-events-none">
        <video
          src="/video/video_hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/hero-placeholder.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-white font-semibold leading-[1.1] text-[40px] md:text-[72px] lg:text-[86px] flex flex-col items-center gap-2"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
          Turn leads
        </span>

        <span className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <span className="text-white">into</span>
          <span className="
            px-5 md:px-7 py-2 md:py-3 
            rounded-full 
            bg-[#a797f7]/10 
            border border-[#a797f7]/20
            text-[#a797f7] 
            backdrop-blur-md 
            font-semibold
            shadow-[0_0_30px_-5px_rgba(167,151,247,0.3)]
          ">
            clients
          </span>
        </span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative z-10 max-w-xl text-neutral-400 mt-6 text-lg md:text-xl font-light tracking-wide"
      >
        Powerful analytics and reporting that empowers your team to make smarter business choices.
      </motion.p>

      {/* CTA BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <button
          className="
            relative
            z-10 
            mt-10 
            group
            px-8 
            py-4 
            rounded-full 
            bg-[#a797f7] 
            text-black 
            font-bold 
            text-base 
            md:text-lg 
            flex 
            items-center 
            gap-4 
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-[0_0_40px_-10px_rgba(167,151,247,0.6)]
          "
        >
          {particles.length > 0 && (
            <div
              className="absolute inset-0 overflow-hidden rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            >
              {particles.map((p, i) => (
                <span
                  key={i}
                  className="absolute bg-white/40 rounded-full w-1 h-1 animate-pulse"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(${p.x}px, ${p.y}px)`,
                    transition: 'transform 0.5s ease-out',
                  }}
                />
              ))}
            </div>
          )}

          <span>Start 14-day trial</span>

          <span className="w-8 h-8 rounded-full bg-black/90 text-white flex items-center justify-center transition-transform group-hover:translate-x-1">
            <ArrowRightIcon />
          </span>
        </button>
      </motion.div>
    </section>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );
}