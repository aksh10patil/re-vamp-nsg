"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Check, 
  Sparkles, 
  Zap, 
  CreditCard, 
  Calendar, 
  RefreshCcw,
  ArrowRight,
  Bot
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Plans Data ---
const plans = [
  {
    id: "base",
    name: "Base",
    tagline: "Perfetto per iniziare la tua presenza online",
    badge: "Conveniente",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    description: "Minimo investimento, massimi risultati",
    features: [
      { text: "5 Pagine Professionali", sub: "Home, Chi Siamo, Servizi, Portfolio, Contatti" },
      { text: "Design Responsive", sub: "Perfetto su mobile, tablet e desktop" },
      { text: "Modulo Contatto Smart", sub: "Con anti-spam e notifiche email" },
      { text: "Hosting & Dominio", sub: "Tutto incluso, zero pensieri" },
      { text: "1 Add-on Gratuito", sub: "Scegli tra WhatsApp, Menu, Booking" },
    ],
    highlight: false,
    buttonText: "Scegli Base",
    gradient: "from-blue-500/5 to-cyan-500/5"
  },
  {
    id: "webmaster",
    name: "Web Master",
    tagline: "Domina le ricerche AI del futuro",
    badge: "All-Inclusive",
    badgeColor: "bg-[#a797f7]/10 text-[#a797f7] border-[#a797f7]/20",
    description: "L'unico con AI SEO per ChatGPT, Perplexity e motori AI",
    features: [
      { text: "Tutto del Piano Base +", sub: null },
      { text: "AI SEO Esclusivo", sub: "Visibile su ChatGPT, Perplexity e Ricerche AI" },
      { text: "Portfolio Illimitato", sub: "Galleria progetti illimitata" },
      { text: "SEO Pro + Visibilità AI", sub: "Ottimizzazione Google + motori AI" },
      { text: "Google My Business", sub: "Gestione completa profilo GMB" },
      { text: "Analytics & Report", sub: "Dashboard con metriche mensili" },
      { text: "3 Add-ons Inclusi", sub: "Tutto quello che vuoi dal catalogo" },
    ],
    highlight: true,
    buttonText: "Scegli Web Master",
    gradient: "from-[#a797f7]/10 to-purple-900/10"
  }
];

// --- Payment Methods ---
const paymentMethods = [
  {
    title: "Pagamento Standard",
    desc: "Setup iniziale + canone mensile",
    icon: CreditCard
  },
  {
    title: "Pagamento Annuale",
    desc: "Risparmio significativo sul totale",
    icon: Calendar
  },
  {
    title: "Solo Abbonamento",
    desc: "Nessun costo iniziale",
    icon: RefreshCcw
  }
];

export default function PricingSection() {
  return (
    <section className="relative bg-black py-24 px-4 sm:px-6 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#a797f7]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Prezzi <span className="text-[#a797f7]">Trasparenti</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-400"
          >
            Siti web a costi trasparenti. Pacchetti chiavi in mano per PMI, professionisti e aziende. 
            <br className="hidden md:block" />
            Nessun costo nascosto. Paghi solo quello che ti serve.
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative flex flex-col rounded-3xl border p-8 backdrop-blur-md transition-all duration-300",
                plan.highlight 
                  ? "border-[#a797f7]/30 bg-[#a797f7]/5 shadow-[0_0_40px_-10px_rgba(167,151,247,0.15)] md:-mt-8 md:mb-8" 
                  : "border-white/10 bg-white/5 hover:border-white/20"
              )}
            >
              {/* Highlight Tag */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#a797f7] text-black text-xs font-bold tracking-wider uppercase shadow-lg flex items-center gap-2">
                  <RocketIcon className="w-3 h-3" /> FUTURO DEL WEB
                </div>
              )}

              {/* Card Header */}
              <div className="mb-8 text-center">
                <span className={cn("inline-block px-3 py-1 rounded-full text-xs font-bold border mb-4", plan.badgeColor)}>
                  {plan.badge}
                </span>
                <h3 className="text-3xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-neutral-400 text-sm h-10 flex items-center justify-center">
                  {plan.tagline}
                </p>
              </div>

              {/* Features List */}
              <div className="flex-1 space-y-5 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex gap-3 text-left">
                    <div className={cn(
                      "mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center",
                      plan.highlight ? "bg-[#a797f7]/20 text-[#a797f7]" : "bg-white/10 text-neutral-300"
                    )}>
                      <Check className="w-3 h-3" />
                    </div>
                    <div>
                      <p className={cn("text-sm font-medium", plan.highlight ? "text-white" : "text-neutral-200")}>
                        {feature.text}
                      </p>
                      {feature.sub && (
                        <p className="text-xs text-neutral-500 mt-0.5">{feature.sub}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button className={cn(
                "w-full py-4 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2",
                plan.highlight 
                  ? "bg-[#a797f7] text-black hover:bg-[#9683f5] shadow-[0_0_20px_-5px_rgba(167,151,247,0.4)]" 
                  : "bg-white text-black hover:bg-neutral-200"
              )}>
                {plan.buttonText}
                {plan.highlight && <Bot className="w-4 h-4" />}
              </button>

            </motion.div>
          ))}
        </div>

        {/* Payment Methods & CTA Footer */}
        <div className="border-t border-white/10 pt-16">
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-white mb-2">Inizia Ora - Scegli il Tuo Pacchetto Dopo</h3>
            <p className="text-neutral-400 text-sm">Il questionario ti aiuterà a scegliere il pacchetto più adatto</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {paymentMethods.map((method) => (
              <div key={method.title} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/5">
                <div className="mb-4 p-3 rounded-full bg-white/5">
                  <method.icon className="w-6 h-6 text-[#a797f7]" />
                </div>
                <h4 className="text-white font-bold mb-1">{method.title}</h4>
                <p className="text-neutral-500 text-sm">{method.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
             <p className="text-white mb-4">Vuoi un preventivo personalizzato?</p>
             <button className="text-[#a797f7] hover:text-white font-semibold flex items-center justify-center gap-2 mx-auto transition-colors">
               Richiedi una consulenza gratuita <ArrowRight className="w-4 h-4" />
             </button>
          </div>
        </div>

      </div>
    </section>
  );
}

function RocketIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}