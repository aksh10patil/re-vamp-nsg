"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Headset, ArrowRight, User, MessageCircle, Send } from "lucide-react";

// --- 🎨 THEME CONFIGURATION ---
const THEME = {
  accent: "#6366f1", 
  accentGlow: "rgba(99, 102, 241, 0.4)", 
  bgDark: "#0a0a0a", 
  cardBg: "#121212", 
  textMuted: "#a1a1aa", 
};

export default function ContactSection() {
  return (
    <section 
      className="min-h-screen w-full py-20 px-4 relative overflow-hidden flex flex-col items-center justify-center"
      style={{ backgroundColor: THEME.bgDark, color: "white" }}
    >
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs tracking-wider font-medium"
        >
          <Phone size={12} className="text-white" />
          <span>CONTACT</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-medium"
        >
          Reach Us <span className="font-serif italic text-white/80">Anytime</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg"
          style={{ color: THEME.textMuted }}
        >
          Have questions or need help? We're here for you.
        </motion.p>
      </div>

      {/* Main Grid */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN (Info Cards) - Order 2 on mobile, Order 1 on Desktop */}
        <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            
            {/* Card 1: Email */}
            <InfoCard 
                icon={<Mail size={24} />}
                title="Email Us"
                description="Facing technical challenges or product concerns? We're here to assist."
                delay={0.3}
                theme={THEME}
                footer={
                  <a href="mailto:northstargroup@support.com" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity underline decoration-white/20 underline-offset-4">
                    northstargroup@support.com
                  </a>
                }
            />
            
            {/* Card 2: Sales */}
            <InfoCard 
                icon={<User size={24} />}
                title="Contact Sales"
                description="Let's collaborate on custom solutions or discuss product insights."
                delay={0.4}
                theme={THEME}
                footer={
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity underline decoration-white/20 underline-offset-4">
                    Book a call
                  </a>
                }
            />

            {/* Card 3: Instant Chat (WhatsApp/Telegram) */}
            <InfoCard 
                icon={<MessageCircle size={24} />}
                title="Instant Chat"
                description="Need a quick answer? Chat with our team directly on your favorite app."
                delay={0.5}
                theme={THEME}
                footer={
                  <div className="flex flex-col gap-3">
                     {/* WhatsApp Link */}
                     <a href="https://wa.me/1234567890" className="flex items-center gap-3 text-sm font-medium text-white/80 hover:text-white transition-colors group/link">
                        <div className="p-1.5 rounded-full bg-[#25D366]/20 text-[#25D366] group-hover/link:bg-[#25D366] group-hover/link:text-white transition-all">
                           <MessageCircle size={14} />
                        </div>
                        <span>+1 (555) 000-0000</span>
                     </a>
                     
                     {/* Telegram Link */}
                     <a href="https://t.me/username" className="flex items-center gap-3 text-sm font-medium text-white/80 hover:text-white transition-colors group/link">
                        <div className="p-1.5 rounded-full bg-[#0088cc]/20 text-[#0088cc] group-hover/link:bg-[#0088cc] group-hover/link:text-white transition-all">
                           <Send size={14} />
                        </div>
                        <span>@northstargroup_support</span>
                     </a>
                  </div>
                }
            />
        </div>

        {/* RIGHT COLUMN (Contact Form) - Order 1 on mobile, Order 2 on Desktop */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="lg:col-span-7 p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden order-1 lg:order-2"
          style={{ backgroundColor: THEME.cardBg }}
        >
            {/* Ambient Glow Effect */}
            <div 
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-10 pointer-events-none"
                style={{ backgroundColor: THEME.accent }}
            />

            <div className="flex flex-col items-center text-center mb-10">
                <div className="p-3 rounded-2xl border border-white/10 bg-white/5 mb-4">
                    <Headset size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-medium">We'd love to help! Let us know how</h3>
            </div>

            <form className="space-y-6">
                <div className="space-y-1">
                    <Label>Full Name</Label>
                    <Input placeholder="Ikta Sollork" theme={THEME} />
                </div>

                <div className="space-y-1">
                    <Label>Email Address</Label>
                    <Input placeholder="northstargroup@support.com" theme={THEME} />
                </div>

                <div className="space-y-1">
                    <Label>Subject Of Interest</Label>
                    <Input placeholder="Regarding Product" theme={THEME} />
                </div>

                <div className="space-y-1">
                    <Label>How may we assist you?</Label>
                    <textarea 
                        rows={4}
                        placeholder="Give us more info..."
                        className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors resize-none"
                        style={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                    />
                </div>

                <motion.button
                    whileHover={{ scale: 1.01, boxShadow: `0 10px 30px -10px ${THEME.accentGlow}` }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl font-medium text-white flex items-center justify-center gap-2 mt-4 transition-all relative overflow-hidden group"
                    style={{ 
                        background: `linear-gradient(to bottom right, ${THEME.cardBg}, #000)`,
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}
                >
                    <span className="relative z-10">Send Your Message</span>
                    <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                    
                    {/* Button Glow Bottom */}
                    <div 
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-2 blur-md transition-opacity opacity-50 group-hover:opacity-100"
                        style={{ backgroundColor: THEME.accent }} 
                    />
                </motion.button>
            </form>
        </motion.div>
      </div>
    </section>
  );
}

// --- SUB-COMPONENTS ---

/* UPDATED: Added a `footer` prop to allow flexible content (links, buttons, multiple items)
   instead of just a single text string.
*/
function InfoCard({ icon, title, description, footer, delay, theme }: any) {
    return (
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay, duration: 0.5 }}
            className="p-8 rounded-3xl border border-white/10 relative group hover:border-white/20 transition-colors"
            style={{ backgroundColor: theme.cardBg }}
        >
            <div className="mb-6 p-3 w-fit rounded-xl border border-white/10 bg-white/5">
                {React.cloneElement(icon, { className: "text-white/90" })}
            </div>
            <h3 className="text-xl font-medium mb-3">{title}</h3>
            <p className="text-base mb-6 leading-relaxed" style={{ color: theme.textMuted }}>{description}</p>
            
            {/* Render the footer (Links/Buttons) */}
            <div>
              {footer}
            </div>
        </motion.div>
    )
}

function Label({ children }: { children: React.ReactNode }) {
    return <label className="text-sm font-medium text-white/60 block mb-2 ml-1">{children}</label>;
}

function Input({ placeholder, theme }: { placeholder: string, theme: any }) {
    return (
        <input 
            type="text" 
            placeholder={placeholder}
            className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
            style={{ backgroundColor: "rgba(255,255,255,0.02)" }}
        />
    );
}