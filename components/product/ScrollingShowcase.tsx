"use client";

import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility for merging classes ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const row1 = [
  "/images/showcase/item-1.png",
  "/images/showcase/item-2.png",
  "/images/showcase/item-3.png",
  "/images/showcase/item-4.png",
  "/images/showcase/item-2.png",
];

const row2 = [
  "/images/showcase/item-1.png",
  "/images/showcase/item-2.png",
  "/images/showcase/item-3.png",
  "/images/showcase/item-4.png",
  "/images/showcase/item-2.png",
];

const row3 = [
  "/images/showcase/item-1.png",
  "/images/showcase/item-2.png",
  "/images/showcase/item-3.png",
  "/images/showcase/item-4.png",
  "/images/showcase/item-2.png",
];

// --- Sub-component: The Marquee Row ---
const MarqueeRow = ({
  images,
  direction = "left",
  speed = 20,
}: {
  images: string[];
  direction?: "left" | "right";
  speed?: number;
}) => {
  return (
    <div className="flex overflow-hidden select-none gap-6 p-2">
      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex flex-shrink-0 gap-6 min-w-full"
      >
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            className="relative group rounded-2xl w-[250px] h-[160px] md:w-[400px] md:h-[250px] overflow-hidden flex-shrink-0 border border-white/10 bg-neutral-900"
          >
            <img
              src={src}
              alt={`Vetrina ${index}`}
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-4 left-4 text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
              Mockup {index + 1}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// --- Main Component ---
export default function ScrollingShowcase() {
  return (
    <section className="relative min-h-screen bg-black flex flex-col justify-center items-center py-20 overflow-hidden">
      
      {/* Background Gradient Spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Header Text */}
      <div className="text-center mb-12 z-10 px-4">
        <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
          Internet è la tua tela
        </h2>
        <p className="text-neutral-400 mt-4 max-w-lg mx-auto">
          Trova il tuo logo, costruisci il tuo brand.  
          Collaborazione multiplayer per macOS.
        </p>
      </div>

      {/* Grids */}
      <div className="w-full max-w-[1400px] -rotate-2 transform-gpu scale-105">
        
        <MarqueeRow images={row1} direction="left" speed={35} />
        
        <MarqueeRow images={row2} direction="right" speed={40} />
        
        <MarqueeRow images={row3} direction="left" speed={30} />

      </div>

      {/* Vignette Fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black to-transparent z-20" />
      
    </section>
  );
}
