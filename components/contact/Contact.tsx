"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Headset, ArrowRight, User, MessageCircle, Send } from "lucide-react";

// --- 🎨 THEME CONFIGURATION ---
const THEME = {
  accent: "#A797F7", // Your Company Color
  accentHover: "#9685eb", // Slightly darker for hover states
  accentGlow: "rgba(167, 151, 247, 0.4)", 
  bgDark: "#000000", 
  cardBg: "#0a0a0a", 
  textMuted: "#a1a1aa", 
};

export default function ContactSection() {
  return (
    <section 
      className="min-h-screen w-full py-24 px-4 relative overflow-hidden flex flex-col items-center justify-center"
      style={{ backgroundColor: THEME.bgDark, color: "white" }}
    >
      {/* Background Ambient Glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ backgroundColor: THEME.accent }}
      />

      {/* Header Section */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-16 space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs tracking-wider font-semibold uppercase"
          style={{ 
            backgroundColor: `${THEME.accent}15`, // 15% opacity
            border: `1px solid ${THEME.accent}30`, // 30% opacity
            color: THEME.accent
          }}
        >
          <Phone size={12} fill="currentColor" />
          <span>Contact Us</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-medium tracking-tight"
        >
          Reach Us <span className="font-serif italic text-white/60">Anytime</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg max-w-xl mx-auto"
          style={{ color: THEME.textMuted }}
        >
          Have questions or need help? We're here for you.
        </motion.p>
      </div>

      {/* Main Grid */}
      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN (Info Cards) */}
        <div className="lg:col-span-5 space-y-5 order-2 lg:order-1">
            
            {/* Card 1: Email */}
            <InfoCard 
                icon={<Mail size={22} />}
                title="Email Us"
                description="Facing technical challenges or product concerns? We're here to assist."
                delay={0.3}
                theme={THEME}
                footer={
                  <a href="mailto:northstargroup@support.com" 
                     className="inline-flex items-center gap-2 text-sm font-medium transition-opacity underline decoration-white/20 underline-offset-4 hover:decoration-[#A797F7]"
                     style={{ color: THEME.accent }}
                  >
                    northstargroup@support.com
                  </a>
                }
            />
            
            {/* Card 2: Sales */}
            <InfoCard 
                icon={<User size={22} />}
                title="Contact Sales"
                description="Let's collaborate on custom solutions or discuss product insights."
                delay={0.4}
                theme={THEME}
                footer={
                  <a href="https://cal.northstargroup.ch/nsg/book" 
                     className="inline-flex items-center gap-2 text-sm font-medium transition-opacity underline decoration-white/20 underline-offset-4 hover:decoration-[#A797F7]"
                     style={{ color: THEME.accent }}
                  >
                    Book a consultation call
                  </a>
                }
            />

            {/* Card 3: Instant Chat */}
            <InfoCard 
                icon={<MessageCircle size={22} />}
                title="Instant Chat"
                description="Need a quick answer? Chat with our team directly on your favorite app."
                delay={0.5}
                theme={THEME}
                footer={
                  <div className="flex flex-col gap-3">
                     {/* WhatsApp */}
                    <a href="https://wa.me/41799453373" className="flex items-center gap-3 text-sm font-medium text-white/70 hover:text-white transition-colors group/link">
                        <div className="p-1.5 rounded-full bg-[#25D366]/10 text-[#25D366] group-hover/link:bg-[#25D366] group-hover/link:text-white transition-all">
                           <MessageCircle size={14} />
                        </div>
                        <span>+41 079 945 33 73</span>
                     </a>
                     
                     {/* Telegram */}
                     <a href="https://t.me/northstargroup" className="flex items-center gap-3 text-sm font-medium text-white/70 hover:text-white transition-colors group/link">
                        <div className="p-1.5 rounded-full bg-[#0088cc]/10 text-[#0088cc] group-hover/link:bg-[#0088cc] group-hover/link:text-white transition-all">
                           <Send size={14} />
                        </div>
                        <span>@northstargroup_support</span>
                     </a>
                  </div>
                }
            />
        </div>

        {/* RIGHT COLUMN (Contact Form) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="lg:col-span-7 p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden order-1 lg:order-2 flex flex-col justify-between"
          style={{ backgroundColor: THEME.cardBg }}
        >
            <div className="flex flex-col items-center text-center mb-10">
                <div 
                    className="p-3 rounded-2xl mb-4"
                    style={{ backgroundColor: `${THEME.accent}15`, color: THEME.accent }}
                >
                    <Headset size={32} />
                </div>
                <h3 className="text-2xl font-medium">We'd love to help! Let us know how.</h3>
            </div>

            <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                        <Label>Full Name</Label>
                        <Input placeholder="Jane Doe" theme={THEME} />
                    </div>
                    <div className="space-y-1.5">
                        <Label>Email Address</Label>
                        <Input placeholder="jane@company.com" theme={THEME} />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <Label>Subject</Label>
                    <Input placeholder="Project inquiry..." theme={THEME} />
                </div>

                <div className="space-y-1.5">
                    <Label>Message</Label>
                    <textarea 
                        rows={4}
                        placeholder="Tell us about your needs..."
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none transition-all resize-none"
                        style={{ 
                            // Dynamic focus style applied via style prop for ease, usually done in CSS
                            outlineColor: THEME.accent 
                        }}
                        // Tailwind specific focus utility to use CSS variable or arbitrary value
                        onFocus={(e) => e.target.style.borderColor = THEME.accent}
                        onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                    />
                </div>

                <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl font-bold text-black flex items-center justify-center gap-2 mt-4 transition-all shadow-[0_0_20px_-5px_rgba(167,151,247,0.3)] hover:shadow-[0_0_30px_-5px_rgba(167,151,247,0.5)]"
                    style={{ backgroundColor: THEME.accent }}
                >
                    <span>Send Message</span>
                    <ArrowRight size={18} />
                </motion.button>
            </form>
        </motion.div>
      </div>
    </section>
  );
}

// --- SUB-COMPONENTS ---

function InfoCard({ icon, title, description, footer, delay, theme }: any) {
    return (
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay, duration: 0.5 }}
            className="p-6 rounded-2xl border border-white/5 relative group hover:border-white/10 transition-colors"
            style={{ backgroundColor: theme.cardBg }}
        >
            <div className="flex items-start gap-5">
                <div 
                    className="p-3 rounded-xl shrink-0"
                    style={{ backgroundColor: `${theme.accent}10`, color: theme.accent }}
                >
                    {icon}
                </div>
                <div>
                    <h3 className="text-lg font-medium mb-1 text-white">{title}</h3>
                    <p className="text-sm mb-4 leading-relaxed" style={{ color: theme.textMuted }}>{description}</p>
                    {footer}
                </div>
            </div>
        </motion.div>
    )
}

function Label({ children }: { children: React.ReactNode }) {
    return <label className="text-xs font-medium text-white/50 uppercase tracking-wide ml-1">{children}</label>;
}

function Input({ placeholder, theme }: { placeholder: string, theme: any }) {
    return (
        <input 
            type="text" 
            placeholder={placeholder}
            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none transition-all"
            onFocus={(e) => e.target.style.borderColor = theme.accent}
            onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
        />
    );
}