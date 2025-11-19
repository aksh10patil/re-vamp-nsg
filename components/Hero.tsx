"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[70vh] px-4 md:px-6">
      
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(40,40,40,0.28),#000000)]" />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 text-white font-semibold leading-[1.1] text-[36px] md:text-[64px] lg:text-[78px] flex flex-col gap-1"
      >
        <span>Turn leads</span>

        <span className="flex items-center justify-center gap-2 md:gap-3">
          into
          <span className="
            px-4 md:px-5 py-2 md:py-3 
            rounded-[28px] 
            bg-[rgba(167,151,247,0.20)] 
            text-[#a797f7] 
            backdrop-blur-[1px] 
            font-semibold
          ">
            clients
          </span>
        </span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="relative z-10 max-w-xl text-neutral-300 mt-4 text-base md:text-lg"
      >
        Powerful analytics and reporting that empowers your team to make smarter business choices.
      </motion.p>

      {/* CTA BUTTON */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="
          magnetic-btn
          relative
          z-10 
          mt-6 
          px-8 
          py-3 
          rounded-full 
          bg-[#a797f7] 
          text-black 
          font-semibold 
          text-base 
          md:text-lg 
          flex 
          items-center 
          gap-3 
          transition 
          hover:brightness-110
        "
      >
        {/* PARTICLE FIELD */}
        <div
          className="magnetic-field"
          style={{ "--radius": "160px" } as React.CSSProperties}
        >
          {[...Array(14)].map((_, i) => (
            <span
              key={i}
              className="particle"
              style={{
                "--x": `${Math.random() * 160 - 80}px`,
                "--y": `${Math.random() * 160 - 80}px`,
                animationDelay: `${Math.random() * 1.2}s`,
              } as React.CSSProperties}
            />
          ))}
        </div>

        Start 14-day trial

        <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-black flex items-center justify-center text-white">
          →
        </span>
      </motion.button>

    </section>
  );
}
