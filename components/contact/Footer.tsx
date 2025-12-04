"use client"

import { motion, type Variants } from "framer-motion";
import { 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronDown, 
  ArrowRight
} from 'lucide-react';
import { useState } from "react";

// --- Animation Variants ---

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0, 0, 0.58, 1] },
  },
};

const currentYear = new Date().getFullYear();

export default function Footer() {

   const [open, setOpen] = useState(false);

const servicesLinks = [
  { label: "Sviluppo Web", href: "/services/web" },
  { label: "Sviluppo App", href: "/services/app" },
  { label: "Sviluppo AI", href: "/services/ai" },
  { label: "Social Media", href: "/services/social" },
];

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "Servizi", href: "/services" },
  { label: "Casi d’Uso", href: "/services/ai" },
  { label: "Prezzi", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Termini di Servizio", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Responsabili del Trattamento", href: "/data" },
];

  return (
    <footer className="relative  text-white overflow-hidden pt-20 pb-10 border-t border-white/5">
      
      {/* --- Ambient Background Effects --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full pointer-events-none" />
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- Header Section (Logo & Tagline) --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="mb-6 p-3 rounded-2xl backdrop-blur-sm flex justify-center">
            <img 
              src="/images/main/NorthStarLogo.webp"
              alt="NorthStar Logo"
              className="w-16 h-auto object-contain"
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-light text-neutral-200 max-w-2xl leading-relaxed">
            Trasformiamo le idee in{" "}
            <span className="text-[#A797F7] font-medium">realtà digitali innovative</span>{" "}
            per il tuo business.
          </h2>
        </motion.div>

        {/* --- Main Grid Container --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20"
        >
          {/* Column 1: Services */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h3 className="text-lg font-semibold text-white mb-6">Servizi</h3>

            <ul className="space-y-4">
              {servicesLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-2 text-neutral-400 hover:text-[#A797F7] transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A797F7]/0 group-hover:bg-[#A797F7] transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 2: Menu */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h3 className="text-lg font-semibold text-white mb-6">Menu</h3>

            <ul className="space-y-4 mb-8">
                {menuLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-neutral-400 hover:text-white transition-colors relative inline-block group"
                    >
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#A797F7] transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
            </ul>

             <div className="relative">
                    <button
                      onClick={() => setOpen(!open)}
                      className="flex items-center justify-between w-full max-w-[200px] px-4 py-3 rounded-lg bg-white/5 border border-white/10 
                                hover:border-[#A797F7]/50 hover:bg-white/10 transition-all text-sm text-neutral-300 group"
                    >
                      <span>Altri Strumenti</span>
                      <ChevronDown
                        className={`w-4 h-4 text-neutral-500 group-hover:text-[#A797F7] transition-transform duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {open && (
                      <div className="absolute left-0 mt-2 w-[200px] rounded-lg bg-neutral-900/90 backdrop-blur-xl border border-white/10 shadow-xl p-1">
                       <a
                          href="https://www.nebulino.ch/"
                          className="block w-full text-left px-4 py-2 rounded-md text-sm text-neutral-300 
                                    hover:bg-white/10 hover:text-[#A797F7] transition"
                        >
                          Nebula
                        </a>

                      </div>
                    )}
            </div>
          </motion.div>

          {/* Column 3: Contacts */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h3 className="text-lg font-semibold text-white mb-6">Contatti</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-neutral-400 group">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#A797F7]/20 transition-colors">
                  <MapPin className="w-5 h-5 text-[#A797F7]" />
                </div>
                <span className="text-sm leading-relaxed group-hover:text-white transition-colors">
                  Via alla Chiesa 40
                  <br />
                  6595 Riazzino
                </span>
              </li>
              <li className="flex items-center gap-4 text-neutral-400 group">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#A797F7]/20 transition-colors">
                  <Phone className="w-5 h-5 text-[#A797F7]" />
                </div>
                <span className="text-sm group-hover:text-white transition-colors">
                  +41 79 945 33 73
                </span>
              </li>
              <li className="flex items-center gap-4 text-neutral-400 group">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#A797F7]/20 transition-colors">
                  <Mail className="w-5 h-5 text-[#A797F7]" />
                </div>
                <span className="text-sm group-hover:text-white transition-colors">
                 info@northstargroup.ch
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: CTA */}
          <motion.div variants={itemVariants} className="lg:col-span-3 lg:pl-4">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 text-center lg:text-left">
              <h3 className="text-xl font-bold text-white mb-2">
                Pronto a iniziare?
              </h3>
              <p className="text-neutral-400 text-sm mb-6">
                Costruiamo insieme qualcosa di straordinario.
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full group overflow-hidden rounded-xl bg-gradient-to-br from-[#A797F7] to-[#8b7be0] p-[1px] shadow-lg shadow-[#A797F7]/20"
              >
                <div className="relative bg-zinc-950 group-hover:bg-opacity-0 transition-colors duration-300 rounded-[11px] h-full">
                  <div className="relative px-6 py-3 flex items-center justify-center gap-2">
                    <span className="font-semibold text-white">Avvia Progetto</span>
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* --- Footer Bottom --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pt-8 border-t border-white/10 flex flex-col-reverse md:flex-row justify-between items-center gap-6"
        >
          <div className="text-neutral-500 text-sm">
            © {currentYear} NorthStarGroup. Tutti i diritti riservati.
          </div>

          <div className="flex gap-6">
            {[Twitter, Linkedin, Instagram, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-neutral-400 hover:text-[#A797F7] transition-colors hover:scale-110 transform duration-200"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="flex gap-6 text-sm font-medium text-neutral-400">
          {legalLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
