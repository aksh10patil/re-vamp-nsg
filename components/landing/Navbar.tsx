"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ChevronDown } from "lucide-react"; 

const PANEL_BG =
  "linear-gradient(180deg, rgba(202, 165, 255, 1), rgba(165, 130, 235, 1))";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [ServicesHover, setServicesHover] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (open) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = scrollBarWidth + "px";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }, [open]);

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.88,
      y: -6,
      borderRadius: 999,
      boxShadow: "0 4px 18px rgba(0,0,0,0.12)",
    },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      borderRadius: 16,
      boxShadow: "0 18px 80px rgba(255,180,60,0.18)",
      transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.94,
      y: -4,
      transition: { duration: 0.32, ease: [0.42, 0, 0.58, 1] },
    },
  };

  const linkVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.06 * i + 0.08,
        duration: 0.36,
        ease: [0, 0, 0.58, 1],
      },
    }),
  };

  const menuLinks = [
    { name: "Home", href: "/home" },
    { 
      name: "Servizi", 
      href: "/services", 
      subItems: [
        { name: "Soluzioni AI", href: "/services/ai" },
        { name: "Sviluppo Web", href: "/services/web" },
        { name: "Sviluppo App", href: "/services/app" },
        { name: "Social Media", href: "/services/social" },
      ]
    },
    { name: "Contatti", href: "/contact" },
    { name: "Chi Siamo", href: "/about" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-5 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="pointer-events-auto">
            <div className="text-white font-semibold text-lg tracking-tight">
              <Image
                src="/images/main/NorthStarLogo.webp"
                alt="Logo"
                width={40}
                height={40}
                className="select-none"
              />
            </div>
          </Link>

          <button
            ref={btnRef}
            onClick={() => setOpen(true)}
            aria-expanded={open}
            className="pointer-events-auto flex items-center gap-3 px-5 py-2.5 rounded-full bg-[rgba(255,255,255,0.09)] border border-white/10 text-white text-sm font-medium backdrop-blur-md hover:bg-[rgba(255,255,255,0.11)] transition"
          >
            <span className="flex flex-col gap-[3px]">
              <span className="block w-4 h-[2px] bg-white/85 rounded"></span>
              <span className="block w-3.5 h-[2px] bg-white/85 rounded"></span>
              <span className="block w-2.5 h-[2px] bg-white/85 rounded"></span>
            </span>
            <span>Menu</span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate="show"
            exit="exit"
            variants={containerVariants}
            style={{
              position: "fixed",
              top: 18,
              right: 24,
              zIndex: 60,
              minWidth: 64,
              width: 280,
              background: PANEL_BG,
              color: "#0b0b0b",
            }}
            className="rounded-[16px] overflow-hidden"
          >
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    aria-hidden
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-black/10 border border-black/10"
                    style={{
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-black/90"
                    >
                      <path
                        d="M4 7h16M4 12h10M4 17h16"
                        stroke="#1f1f1f"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold leading-none">Menu</div>
                    <div className="text-xs text-black/60">Collegamenti rapidi</div>
                  </div>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="ml-4 px-3 py-1 rounded-md bg-black/5 text-black/90 hover:bg-black/8 transition"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4 h-px bg-black/6" />

              <div className="mt-4 flex flex-col gap-3">
                {menuLinks.map((link, i) => {
                  const isServices = link.name === "Servizi";
                  return (
                    <motion.div
                      key={link.name}
                      variants={linkVariants}
                      initial="hidden"
                      animate="show"
                      custom={i + 1}
                      onMouseEnter={() => isServices && setServicesHover(true)}
                      onMouseLeave={() => isServices && setServicesHover(false)}
                    >
                      <div className="flex items-center justify-between group">
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="block text-black font-semibold text-lg md:text-xl group-hover:opacity-70 transition flex-1 py-1"
                        >
                          {link.name}
                        </Link>

                        {isServices && (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setServicesHover(!ServicesHover);
                            }}
                            className="p-2 -mr-2 text-black/60 hover:text-black transition-colors"
                          >
                            <motion.div
                              animate={{ rotate: ServicesHover ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown size={20} />
                            </motion.div>
                          </button>
                        )}
                      </div>

                      {isServices && link.subItems && (
                        <AnimatePresence>
                          {ServicesHover && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-col gap-2 pl-4 pt-2 pb-1 border-l-2 border-black/10 mt-1 ml-1">
                                {link.subItems.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    href={sub.href}
                                    onClick={() => setOpen(false)}
                                    className="text-sm font-medium text-black/70 hover:text-black hover:translate-x-1 transition-all"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
