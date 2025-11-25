"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronDown, 
  ArrowRight, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from "lucide-react";

// --- Configuration ---
// If you ever want to change the color scheme, just swap 'indigo' for 'rose', 'blue', 'emerald', etc.
const accentColor = "indigo"; 

// --- Data ---
const servicesLinks = [
  "Web Development",
  "Artificial Intelligence",
  "Mobile App Development",
  "Social Media Marketing",
  "Complete SaaS Solutions",
];

const menuLinks = ["Home", "Portfolio", "Use Cases", "Pricing"];

const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030014] text-white overflow-hidden pt-20 pb-10 border-t border-white/5 font-sans">
      
      {/* --- Ambient Background Effects --- */}
      {/* Top Center Glow (Matches your Hero Section) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none" />
      {/* Bottom Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- Top Header (Logo & Tagline) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          {/* Animated Icon */}
          <motion.div 
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="mb-6 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <Sparkles className="w-8 h-8 text-indigo-400 fill-indigo-400/20" />
          </motion.div>
          
          <h2 className="text-2xl md:text-3xl font-light text-neutral-200 max-w-2xl leading-relaxed">
            We transform ideas into innovative <span className="text-indigo-400 font-medium">digital realities</span> for your business.
          </h2>
        </motion.div>


        {/* --- Main Grid --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20"
        >
          
          {/* Column 1: Services (Span 3) */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              Services
            </h3>
            <ul className="space-y-4">
              {servicesLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="group flex items-center gap-2 text-neutral-400 hover:text-indigo-300 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/0 group-hover:bg-indigo-500 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 2: Menu (Span 3) */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h3 className="text-lg font-semibold text-white mb-6">Menu</h3>
            <ul className="space-y-4 mb-8">
              {menuLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-neutral-400 hover:text-white transition-colors relative inline-block group">
                    {link}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-500 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Dropdown Mockup */}
            <button className="flex items-center justify-between w-full max-w-[200px] px-4 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 transition-all text-sm text-neutral-300 group">
              <span>More Instruments</span>
              <ChevronDown className="w-4 h-4 text-neutral-500 group-hover:text-indigo-400 transition-colors" />
            </button>
          </motion.div>

          {/* Column 3: Contacts (Span 3) */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h3 className="text-lg font-semibold text-white mb-6">Contacts</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-neutral-400 group">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-indigo-500/20 transition-colors">
                  <MapPin className="w-5 h-5 text-indigo-400" />
                </div>
                <span className="text-sm leading-relaxed group-hover:text-white transition-colors">
                  123 Innovation Dr,<br />Tech Valley, CA 94043
                </span>
              </li>
              <li className="flex items-center gap-4 text-neutral-400 group">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-indigo-500/20 transition-colors">
                  <Phone className="w-5 h-5 text-indigo-400" />
                </div>
                <span className="text-sm group-hover:text-white transition-colors">+1 (555) 000-0000</span>
              </li>
              <li className="flex items-center gap-4 text-neutral-400 group">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-indigo-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-indigo-400" />
                </div>
                <span className="text-sm group-hover:text-white transition-colors">hello@yourcompany.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: CTA (Span 3) */}
          <motion.div variants={itemVariants} className="lg:col-span-3 lg:pl-4">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 text-center lg:text-left">
              <h3 className="text-xl font-bold text-white mb-2">Ready to start?</h3>
              <p className="text-neutral-400 text-sm mb-6">
                Let's build something extraordinary together.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full group overflow-hidden rounded-xl bg-gradient-to-br from-[#6366f1] to-[#4f46e5] p-[1px] shadow-lg shadow-indigo-500/20"
              >
                <div className="relative bg-[#030014] group-hover:bg-opacity-0 transition-colors duration-300 rounded-[11px] h-full">
                  <div className="relative px-6 py-3 flex items-center justify-center gap-2">
                    <span className="font-semibold text-white">Start Project</span>
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
          className="pt-8 border-t border-white/10 flex flex-col-reverse md:flex-row justify-between items-center gap-6"
        >
          <div className="text-neutral-500 text-sm">
            © {currentYear} Your Company. All rights reserved.
          </div>

          <div className="flex gap-6">
             {/* Socials */}
            {[Twitter, Linkedin, Instagram, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="text-neutral-400 hover:text-indigo-400 transition-colors hover:scale-110 transform duration-200">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="flex gap-6 text-sm font-medium text-neutral-400">
            {legalLinks.map((link) => (
              <Link key={link} href="#" className="hover:text-white transition-colors">
                {link}
              </Link>
            ))}
          </div>
        </motion.div>

      </div>
    </footer>
  );
}