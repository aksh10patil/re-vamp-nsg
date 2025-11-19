"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Top-right expanding yellow overlay menu
 * - Tailwind v4 Zero-Config compatible
 * - Animations: morphing pill -> panel, staggered links
 * - Locks body scroll while open
 */

const PANEL_BG =
  "linear-gradient(180deg, rgba(202, 165, 255, 1), rgba(165, 130, 235, 1))";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  // lock scroll when open
  useEffect(() => {
  if (open) {
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = scrollBarWidth + "px";
  } else {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  }
}, [open]);

  // Panel animation variants: start as small pill at button location, expand to panel
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.88, y: -6, borderRadius: 999, boxShadow: "0 4px 18px rgba(0,0,0,0.12)" },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      borderRadius: 16,
      boxShadow: "0 18px 80px rgba(255,180,60,0.18)",
      transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } // smooth easeOut-like
    },
    exit: {
      opacity: 0,
      scale: 0.94,
      y: -4,
      transition: { duration: 0.32, ease: "easeInOut" }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 8 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.06 * i + 0.08, duration: 0.36, ease: "easeOut" }
    })
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 pointer-events-none">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    
    {/* LOGO */}
    <div className="pointer-events-auto text-white font-semibold text-lg tracking-tight">
        <Image
        src="/images/main/NorthStarLogo.webp"        
        alt="Logo"
        width={40}             
        height={40}
        className="select-none"
    />
    </div>

    {/* MENU BUTTON */}
    <button
      ref={btnRef}
      onClick={() => setOpen(true)}
      aria-expanded={open}
      className="pointer-events-auto flex items-center gap-3 px-5 py-2.5 rounded-full bg-[rgba(255,255,255,0.09)] border border-white/10 text-white text-sm font-medium backdrop-blur-md hover:bg-[rgba(255,255,255,0.11)] transition"
    >
      {/* Hamburger icon */}
      <span className="flex flex-col gap-[3px]">
        <span className="block w-4 h-[2px] bg-white/85 rounded"></span>
        <span className="block w-3.5 h-[2px] bg-white/85 rounded"></span>
        <span className="block w-2.5 h-[2px] bg-white/85 rounded"></span>
      </span>

      <span>menu</span>
    </button>

  </div>
</nav>


      {/* Animated panel that expands from the button position and sits top-right */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate="show"
            exit="exit"
            variants={containerVariants}
            style={{
              // fixed position near top-right with some margin
              position: "fixed",
              top: 18,
              right: 24,
              zIndex: 60,
              // initial size (will be morphed by framer variants)
              minWidth: 64,
                width: 280,         // <— CONTROL WIDTH HERE
                 height: 280,        
              // we use background via inline style to ensure gradient fidelity
              background: PANEL_BG,
              // keep text readable
              color: "#0b0b0b"
            }}
            className="rounded-[16px] overflow-hidden"
          >
            {/* Panel inner container */}
            <div className="px-6 py-4">
              {/* Header row: title + close button */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    aria-hidden
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-black/10 border border-black/10"
                    style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)" }}
                  >
                    {/* small icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-black/90">
                      <path d="M4 7h16M4 12h10M4 17h16" stroke="#1f1f1f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  <div>
                    <div className="text-sm font-semibold leading-none">Menu</div>
                    <div className="text-xs text-black/60">Quick links</div>
                  </div>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="ml-4 px-3 py-1 rounded-md bg-black/5 text-black/90 hover:bg-black/8 transition"
                >
                  ✕
                </button>
              </div>

              {/* Divider */}
              <div className="mt-4 h-px bg-black/6" />

              {/* Links (staggered) */}
              <div className="mt-4 flex flex-col gap-3">
                <motion.a
                  href="#home"
                  variants={linkVariants}
                  initial="hidden"
                  animate="show"
                  custom={1}
                  className="block text-black font-semibold text-lg md:text-xl hover:opacity-90 transition"
                >
                  Home
                </motion.a>

                <motion.a
                  href="#product"
                  variants={linkVariants}
                  initial="hidden"
                  animate="show"
                  custom={2}
                  className="block text-black font-semibold text-lg md:text-xl hover:opacity-90 transition"
                >
                  Product
                </motion.a>

                <motion.a
                  href="#pricing"
                  variants={linkVariants}
                  initial="hidden"
                  animate="show"
                  custom={3}
                  className="block text-black font-semibold text-lg md:text-xl hover:opacity-90 transition"
                >
                  Pricing
                </motion.a>

                <motion.a
                  href="#blog"
                  variants={linkVariants}
                  initial="hidden"
                  animate="show"
                  custom={4}
                  className="block text-black font-semibold text-lg md:text-xl hover:opacity-90 transition"
                >
                  Blog
                </motion.a>

                <motion.a
                  href="#contact"
                  variants={linkVariants}
                  initial="hidden"
                  animate="show"
                  custom={5}
                  className="block text-black font-semibold text-lg md:text-xl hover:opacity-90 transition"
                >
                  Contact
                </motion.a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
