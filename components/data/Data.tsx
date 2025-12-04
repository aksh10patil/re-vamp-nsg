"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Server, 
  ShieldCheck, 
  Globe, 
  Mail, 
  BarChart3, 
  Workflow, 
  Code2, 
  CreditCard, 
  Lock, 
  FileCheck, 
  ChevronDown, 
  Download, 
  CheckCircle2, 
  Flag,
  Cloud,
  ShieldAlert,
  Search,
  RefreshCcw,
  Building2
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

// 1. Info Card (Bento Style)
const InfoCard = ({ 
  title, 
  subtitle, 
  content, 
  icon: Icon,
  accent = false
}: { 
  title: string, 
  subtitle: string, 
  content: React.ReactNode, 
  icon: any,
  accent?: boolean
}) => (
  <div className={cn(
    "group relative overflow-hidden rounded-3xl border p-6 transition-all duration-300",
    accent 
      ? "bg-[#A797F7]/5 border-[#A797F7]/30 hover:border-[#A797F7]/60" 
      : "bg-neutral-900 border-neutral-800 hover:border-[#A797F7]/50"
  )}>
    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
      <Icon size={100} className={cn(accent ? "text-[#A797F7]" : "text-white")} />
    </div>
    
    <div className="relative z-10">
      <div className={cn(
        "w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",
        accent ? "bg-[#A797F7] text-white shadow-lg shadow-[#A797F7]/20" : "bg-neutral-800 text-[#A797F7]"
      )}>
        <Icon size={24} />
      </div>
      
      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      <span className={cn(
        "inline-block text-xs font-medium mb-4 uppercase tracking-wider",
        accent ? "text-[#A797F7]" : "text-neutral-500"
      )}>
        {subtitle}
      </span>
      
      <div className="text-sm text-neutral-400 leading-relaxed">
        {content}
      </div>
    </div>
  </div>
);

// 2. Expandable Section
const Section = ({ 
  number, 
  title, 
  icon: Icon, 
  children, 
  isOpen, 
  toggle 
}: { 
  number: string, 
  title: string, 
  icon: any, 
  children: React.ReactNode, 
  isOpen: boolean, 
  toggle: () => void 
}) => {
  return (
    <div className={cn(
      "border-b border-neutral-800 bg-neutral-900/30 transition-colors duration-300",
      isOpen ? "bg-neutral-900/80" : "hover:bg-neutral-900/50"
    )}>
      <button 
        onClick={toggle}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <span className={cn(
            "text-sm font-mono transition-colors",
            isOpen ? "text-[#A797F7]" : "text-neutral-500"
          )}>
            {number}
          </span>
          <div className="flex items-center gap-3">
             <Icon size={20} className={cn("transition-colors", isOpen ? "text-[#A797F7]" : "text-neutral-400")} />
             <h2 className={cn("text-lg font-semibold transition-colors", isOpen ? "text-white" : "text-neutral-300")}>
               {title}
             </h2>
          </div>
        </div>
        <ChevronDown 
          className={cn(
            "text-neutral-500 transition-transform duration-300",
            isOpen ? "rotate-180 text-[#A797F7]" : ""
          )} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 pl-16 text-neutral-400 leading-relaxed text-sm md:text-base">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// 3. Vendor Card
const VendorCard = ({
    name,
    location,
    services,
    guarantees
}: {
    name: string,
    location: string,
    services: string[],
    guarantees: string[]
}) => (
    <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-[#A797F7]/30 transition-colors">
        <div className="flex justify-between items-start mb-4">
            <h4 className="text-white font-bold">{name}</h4>
            <span className="text-xs px-2 py-1 rounded bg-neutral-800 text-neutral-400 border border-neutral-700">
                {location}
            </span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
            <div>
                <p className="text-xs font-semibold text-[#A797F7] mb-2 uppercase tracking-wider">Servizi</p>
                <ul className="space-y-1">
                    {services.map((s, i) => (
                        <li key={i} className="text-xs text-neutral-400 flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-neutral-600" /> {s}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <p className="text-xs font-semibold text-[#A797F7] mb-2 uppercase tracking-wider">Privacy</p>
                <ul className="space-y-1">
                    {guarantees.map((g, i) => (
                        <li key={i} className="text-xs text-neutral-300 flex items-center gap-2">
                            <ShieldCheck size={10} className="text-green-500" /> {g}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

// 3. Status Badge
const ComplianceBadge = () => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A797F7]/10 border border-[#A797F7]/20 text-[#A797F7] text-xs font-medium">
    <div className="w-1.5 h-1.5 rounded-full bg-[#A797F7] animate-pulse" />
    Conforme Art. 28 GDPR
  </div>
);

// --- Main Component ---

export default function DataProcessors() {
  const [openSection, setOpenSection] = useState<string | null>("infrastructure");

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#A797F7]/30 p-4 md:p-8">
      
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header Hero */}
        <div className="text-center space-y-6 pt-12">
           <ComplianceBadge />
           <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
             Responsabili del <span className="text-[#A797F7]">Trattamento</span>
           </h1>
           <p className="max-w-2xl mx-auto text-neutral-400 text-lg">
             Trasparenza totale sui nostri partner tecnologici e fornitori di servizi che trattano dati personali per nostro conto.
           </p>
           <div className="flex items-center justify-center gap-4 text-xs text-neutral-500 font-mono">
             <span>Ultimo aggiornamento: 29 Novembre 2025</span>
             <span className="w-1 h-1 rounded-full bg-neutral-700" />
             <span>Prossima revisione: 27 Febbraio 2026</span>
           </div>
        </div>

        {/* Quick Info Grid */}
        <div className="grid md:grid-cols-2 gap-4">
           <InfoCard 
             title="Il nostro impegno"
             subtitle="Due Diligence"
             icon={ShieldCheck}
             accent={true}
             content={
               <div className="space-y-3">
                 <p>Selezioniamo con cura ogni fornitore per garantire il massimo livello di protezione dei dati.</p>
                 <div className="flex items-center gap-2 text-xs text-neutral-300 bg-[#A797F7]/10 p-2 rounded-lg border border-[#A797F7]/20">
                    <FileCheck size={14} className="text-[#A797F7]" />
                    Tutti i responsabili vincolati da DPA conformi al GDPR.
                 </div>
               </div>
             }
           />
           <InfoCard 
             title="Governance"
             subtitle="Controllo Continuo"
             icon={RefreshCcw}
             content={
               <div className="space-y-2">
                 <p>Il nostro processo di gestione dei fornitori include verifiche rigorose.</p>
                 <div className="grid grid-cols-2 gap-2 mt-2">
                   <div className="p-2 rounded bg-neutral-800 border border-neutral-700 text-xs">
                     <span className="block text-white font-bold">Trimestrale</span>
                     Ciclo di Revisione
                   </div>
                   <div classpointer-events-none="p-2 rounded bg-neutral-800 border border-neutral-700 text-xs">
                     <span className="block text-white font-bold">Annuale</span>
                     Audit di Sicurezza
                   </div>
                 </div>
               </div>
             }
           />
        </div>

        {/* Interactive Policy Vault */}
        <div className="rounded-3xl border border-neutral-800 bg-neutral-950 overflow-hidden shadow-2xl">
          
          {/* Section 1: Infrastructure */}
          <Section 
            number="01" 
            title="Infrastruttura & Hosting" 
            icon={Server}
            isOpen={openSection === "infrastructure"} 
            toggle={() => toggleSection("infrastructure")}
          >
            <div className="grid gap-4">
                <VendorCard 
                    name="Green.ch AG"
                    location="🇨🇭 Svizzera"
                    services={["Hosting Dedicato", "Server Virtuali", "Backup Automatici", "Certificati SSL"]}
                    guarantees={["Certificazione ISO 27001", "Conforme FINMA", "100% Energia Rinnovabile", "DPA firmato (01.01.23)"]}
                />
                <VendorCard 
                    name="Cloudflare, Inc."
                    location="🇺🇸 USA (SCC)"
                    services={["CDN", "Protezione DDoS", "Firewall WAF", "Gestione DNS"]}
                    guarantees={["Clausole Contrattuali Standard", "SOC 2 Type II", "Data Processing Addendum", "Misure EDPB"]}
                />
            </div>
          </Section>

          {/* Section 2: Communication */}
          <Section 
            number="02" 
            title="Comunicazione" 
            icon={Mail}
            isOpen={openSection === "communication"} 
            toggle={() => toggleSection("communication")}
          >
             <VendorCard 
                name="ProtonMail (Proton AG)"
                location="🇨🇭 Svizzera"
                services={["Email Crittografata", "ProtonCalendar", "ProtonDrive", "VPN per Team"]}
                guarantees={["Cifratura end-to-end", "Cifratura zero-access", "Legge Svizzera sulla Protezione dei Dati", "Politica No-logs"]}
            />
            <div className="mt-4 p-4 rounded-xl bg-blue-500/5 border border-blue-500/20 flex items-start gap-3">
                <Lock size={18} className="text-blue-400 mt-0.5" />
                <div>
                    <h5 className="text-blue-400 text-sm font-bold">Privacy by Design</h5>
                    <p className="text-xs text-blue-200/70 mt-1">Grazie alla cifratura end-to-end, Proton non può accedere ai contenuti delle tue comunicazioni.</p>
                </div>
            </div>
          </Section>

          {/* Section 3: Analytics */}
          <Section 
            number="03" 
            title="Analytics & Monitoraggio" 
            icon={BarChart3}
            isOpen={openSection === "analytics"} 
            toggle={() => toggleSection("analytics")}
          >
             <VendorCard 
                name="Google Ireland Limited"
                location="🇮🇪 Irlanda (UE)"
                services={["Google Analytics 4", "Search Console", "Tag Manager", "reCAPTCHA Enterprise"]}
                guarantees={["Anonimizzazione IP", "Conservazione: 14 mesi", "No Remarketing", "Signals Disattivato"]}
            />
          </Section>

          {/* Section 4: Automation */}
          <Section 
            number="04" 
            title="Automazione & Integrazioni" 
            icon={Workflow}
            isOpen={openSection === "automation"} 
            toggle={() => toggleSection("automation")}
          >
             <VendorCard 
                name="n8n (Self-Hosted)"
                location="🇨🇭 Svizzera"
                services={["Automazione Workflow", "Elaborazione Form", "Integrazioni API", "Trasformazione Dati"]}
                guarantees={["100% Self-Hosted", "Dati in CH", "Nessuna Dipendenza Cloud", "Controllo Totale"]}
            />
             <div className="mt-4 p-4 rounded-xl bg-green-500/5 border border-green-500/20 flex items-start gap-3">
                <ShieldCheck size={18} className="text-green-400 mt-0.5" />
                <div>
                    <h5 className="text-green-400 text-sm font-bold">Massima Privacy</h5>
                    <p className="text-xs text-green-200/70 mt-1">n8n è completamente self-hosted sui nostri server svizzeri. Nessun dato di automazione lascia la nostra infrastruttura.</p>
                </div>
            </div>
          </Section>

          {/* Section 5: Development */}
          <Section 
            number="05" 
            title="Sviluppo & Repository" 
            icon={Code2}
            isOpen={openSection === "dev"} 
            toggle={() => toggleSection("dev")}
          >
             <div className="grid gap-6">
                 <VendorCard 
                    name="GitHub, Inc."
                    location="🇺🇸 USA (SCC)"
                    services={["Repo Private", "CI/CD Actions", "Issue Tracking", "Code Review"]}
                    guarantees={["Solo Codice Sorgente", "Nessun Dato Personale Clienti", "Solo Metadati Sviluppatori"]}
                />
                
                <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
                    <div className="flex justify-between items-start mb-4">
                        <h4 className="text-white font-bold flex items-center gap-2"><ShieldAlert size={16} className="text-[#A797F7]" /> Google reCAPTCHA</h4>
                        <span className="text-xs px-2 py-1 rounded bg-neutral-800 text-neutral-400 border border-neutral-700">USA</span>
                    </div>
                    <p className="text-sm text-neutral-400 mb-4">Protegge i form da spam e attività fraudolente analizzando le interazioni.</p>
                    <div className="grid grid-cols-2 gap-2 text-xs text-neutral-500">
                        <span className="bg-neutral-800 px-2 py-1 rounded">Dato trattato: IP</span>
                        <span className="bg-neutral-800 px-2 py-1 rounded">Comportamento Utente</span>
                        <span className="bg-neutral-800 px-2 py-1 rounded">Punteggio di Rischio (0.0–1.0)</span>
                    </div>
                </div>
             </div>
          </Section>

          {/* Section 6: Payments */}
          <Section 
            number="06" 
            title="Responsabili Pagamenti" 
            icon={CreditCard}
            isOpen={openSection === "payments"} 
            toggle={() => toggleSection("payments")}
          >
             <p className="text-neutral-400 mb-4">
               North Star Group utilizza principalmente bonifici bancari diretti e TWINT Business. Non memorizziamo dati delle carte.
             </p>
             <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/50 flex items-center gap-4">
                <CreditCard className="text-neutral-500" />
                <div className="text-sm text-neutral-300">
                   Per pagamenti con carta utilizziamo solo processori certificati <span className="text-[#A797F7]">PCI DSS Level 1</span> su richiesta specifica del cliente.
                </div>
             </div>
          </Section>

          {/* Section 7: Security */}
          <Section 
            number="07" 
            title="Misure di Sicurezza" 
            icon={Lock}
            isOpen={openSection === "security"} 
            toggle={() => toggleSection("security")}
          >
             <div className="grid md:grid-cols-2 gap-8">
               <div>
                 <h4 className="text-white font-bold mb-3 pb-2 border-b border-neutral-800">Contrattuali</h4>
                 <ul className="space-y-2 text-sm text-neutral-400">
                   <li>• DPA (Data Processing Agreement)</li>
                   <li>• Clausole di riservatezza</li>
                   <li>• Diritto di audit</li>
                   <li>• Notifica violazioni (24h)</li>
                 </ul>
               </div>
               <div>
                 <h4 className="text-white font-bold mb-3 pb-2 border-b border-neutral-800">Tecniche</h4>
                 <ul className="space-y-2 text-sm text-neutral-400">
                   <li>• Cifratura TLS 1.3 in transito</li>
                   <li>• Cifratura a riposo</li>
                   <li>• Accesso MFA</li>
                   <li>• Log Immutabili</li>
                 </ul>
               </div>
             </div>
          </Section>

          {/* Section 8: Rights */}
          <Section 
            number="08" 
            title="I Tuoi Diritti" 
            icon={FileCheck}
            isOpen={openSection === "rights"} 
            toggle={() => toggleSection("rights")}
          >
             <p className="mb-4">Hai il diritto di sapere quali fornitori trattano i tuoi dati. Puoi:</p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
               {[
                 "Richiedere l’elenco aggiornato dei sub-processori", 
                 "Opporsi a specifici trasferimenti", 
                 "Richiedere dettagli sulle misure di sicurezza", 
                 "Ottenere copia del DPA (parti rilevanti)"
                ].map(r => (
                 <div key={r} className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-sm text-neutral-300 flex items-center gap-3">
                   <Search size={14} className="text-[#A797F7]" /> {r}
                 </div>
               ))}
             </div>
             <div className="flex items-center gap-3 p-4 rounded-xl bg-[#A797F7]/5 border border-[#A797F7]/20">
                <Mail size={16} className="text-[#A797F7]" />
                <span className="text-sm text-neutral-300">Contatta il DPO: <strong className="text-white">privacy@northstargroup.ch</strong></span>
             </div>
          </Section>

        </div>

        {/* Footer Actions */}
        <div className="flex justify-center pb-12">
           <button className="group flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-700 hover:border-[#A797F7] text-neutral-400 hover:text-white transition-all bg-neutral-900/50">
             <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
             Scarica elenco fornitori (PDF)
           </button>
        </div>

      </div>
    </div>
  );
}
