"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cookie, 
  ShieldCheck, 
  ToggleLeft, 
  Settings, 
  Globe, 
  Database, 
  Eye, 
  AlertTriangle, 
  RefreshCcw, 
  ChevronDown, 
  Download,
  Fingerprint,
  Info,
  CheckCircle2,
  XCircle,
  MousePointerClick
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

// 3. Status Badge
const ComplianceBadge = () => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A797F7]/10 border border-[#A797F7]/20 text-[#A797F7] text-xs font-medium">
    <div className="w-1.5 h-1.5 rounded-full bg-[#A797F7] animate-pulse" />
    Conforme a GDPR / ePrivacy
  </div>
);

// --- Main Component ---

export default function CookiePolicy() {
  const [openSection, setOpenSection] = useState<string | null>("general");

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
             Informativa <span className="text-[#A797F7]">Cookie</span>
           </h1>
           <p className="max-w-2xl mx-auto text-neutral-400 text-lg">
             Informazioni complete sull’uso di cookie e tecnologie simili.
             <br/>Trasparente, sicuro e rispettoso delle tue scelte.
           </p>
           <div className="text-xs text-neutral-500 font-mono">
             Ultimo aggiornamento: 29 Novembre 2025 • Versione 2.0
           </div>
        </div>

        {/* Quick Info Grid */}
        <div className="grid md:grid-cols-2 gap-4">
           <InfoCard 
             title="Il nostro impegno"
             subtitle="Privacy Prima di Tutto"
             icon={ShieldCheck}
             accent={true}
             content={
               <div className="space-y-2">
                 <p>Utilizziamo solo cookie strettamente necessari per impostazione predefinita.</p>
                 <div className="flex flex-wrap gap-2 mt-2">
                   <span className="flex items-center gap-1 px-2 py-1 rounded bg-[#A797F7]/20 border border-[#A797F7]/30 text-xs text-[#A797F7]">
                     <CheckCircle2 size={12} /> Nessun Profiling
                   </span>
                   <span className="flex items-center gap-1 px-2 py-1 rounded bg-[#A797F7]/20 border border-[#A797F7]/30 text-xs text-[#A797F7]">
                     <CheckCircle2 size={12} /> Nessun Marketing
                   </span>
                 </div>
               </div>
             }
           />
           <InfoCard 
             title="Cosa sono i Cookie?"
             subtitle="Definizioni"
             icon={Cookie}
             content={
               <div className="space-y-2">
                 <p>Piccoli file salvati sul tuo dispositivo per ricordare preferenze e impostazioni.</p>
                 <div className="grid grid-cols-2 gap-2 mt-2">
                   <div className="p-2 rounded bg-neutral-800 border border-neutral-700 text-xs">
                     <span className="block text-white font-bold">Tecnici</span>
                     Funzionamento essenziale
                   </div>
                   <div className="p-2 rounded bg-neutral-800 border border-neutral-700 text-xs">
                     <span className="block text-white font-bold">Non Tecnici</span>
                     Analisi & Funzionalità Extra
                   </div>
                 </div>
               </div>
             }
           />
        </div>

        {/* The Interactive Policy Vault */}
        <div className="rounded-3xl border border-neutral-800 bg-neutral-950 overflow-hidden shadow-2xl">
          
          {/* Section 1: General Info */}
          <Section 
            number="01" title="Informazioni Generali" icon={Info}
            isOpen={openSection === "general"} toggle={() => toggleSection("general")}
          >
            <p className="mb-4">
              I cookie permettono al sito di ricordare le tue preferenze e migliorare l’esperienza. Li classifichiamo rigorosamente:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
               <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> Tecnici</h4>
                  <p className="text-xs">Essenziali per il funzionamento del sito (es. sicurezza, sessioni).</p>
               </div>
               <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Fingerprint size={16} className="text-[#A797F7]"/> Non Tecnici</h4>
                  <p className="text-xs">Per analisi, personalizzazione e marketing (solo con consenso).</p>
               </div>
            </div>
          </Section>

          {/* Section 2: Legal Basis */}
          <Section 
            number="02" title="Base Legale & Consenso" icon={ToggleLeft}
            isOpen={openSection === "legal"} toggle={() => toggleSection("legal")}
          >
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                 <div className="flex-1 p-4 rounded-xl border border-green-500/20 bg-green-500/5">
                    <h4 className="text-green-400 font-bold mb-2 text-sm uppercase">Consenso NON Richiesto</h4>
                    <ul className="space-y-1 text-sm text-neutral-300">
                      <li>• Cookie Strettamente Necessari</li>
                      <li>• Cookie tecnici di sessione</li>
                      <li>• Cookie di sicurezza</li>
                    </ul>
                 </div>
                 <div className="flex-1 p-4 rounded-xl border border-[#A797F7]/20 bg-[#A797F7]/5">
                    <h4 className="text-[#A797F7] font-bold mb-2 text-sm uppercase">Consenso RICHIESTO</h4>
                    <ul className="space-y-1 text-sm text-neutral-300">
                      <li>• Cookie analitici</li>
                      <li>• Cookie di preferenza</li>
                      <li>• Cookie di terze parti</li>
                    </ul>
                 </div>
              </div>
              <p className="text-sm bg-neutral-900 p-4 rounded-xl border border-neutral-800">
                <span className="text-white font-bold">La tua scelta:</span> Al primo accesso mostriamo un banner. Puoi Accettare Tutto, Rifiutare i Non Essenziali oppure Personalizzare. Puoi modificare tutto in qualsiasi momento.
              </p>
            </div>
          </Section>

          {/* Section 3: Cookie Details */}
          <Section 
            number="03" title="Cookie Utilizzati in Dettaglio" icon={Database}
            isOpen={openSection === "details"} toggle={() => toggleSection("details")}
          >
             <div className="space-y-8">
                {/* Essential Table */}
                <div>
                   <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-green-500" /> Strettamente Necessari
                   </h4>
                   <div className="overflow-x-auto rounded-xl border border-neutral-800">
                      <table className="w-full text-left text-sm text-neutral-400">
                        <thead className="bg-neutral-900 text-white text-xs uppercase">
                          <tr><th className="p-3">Nome</th><th className="p-3">Scopo</th><th className="p-3">Durata</th></tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-800 bg-neutral-950">
                          <tr><td className="p-3 font-mono text-[#A797F7]">PHPSESSID</td><td className="p-3">Mantiene la sessione utente</td><td className="p-3">Sessione</td></tr>
                          <tr><td className="p-3 font-mono text-[#A797F7]">csrf_token</td><td className="p-3">Protezione di sicurezza</td><td className="p-3">Sessione</td></tr>
                          <tr><td className="p-3 font-mono text-[#A797F7]">cookie_consent</td><td className="p-3">Memorizza preferenze</td><td className="p-3">1 Anno</td></tr>
                        </tbody>
                      </table>
                   </div>
                </div>

                {/* Analytical Table */}
                <div>
                   <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-[#A797F7]" /> Analitici (Con Consenso)
                   </h4>
                   <div className="overflow-x-auto rounded-xl border border-neutral-800">
                      <table className="w-full text-left text-sm text-neutral-400">
                        <thead className="bg-neutral-900 text-white text-xs uppercase">
                          <tr><th className="p-3">Nome</th><th className="p-3">Provider</th><th className="p-3">Durata</th></tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-800 bg-neutral-950">
                          <tr><td className="p-3 font-mono text-[#A797F7]">_ga</td><td className="p-3">Google Analytics</td><td className="p-3">2 Anni</td></tr>
                          <tr><td className="p-3 font-mono text-[#A797F7]">_gid</td><td className="p-3">Google Analytics</td><td className="p-3">24 Ore</td></tr>
                        </tbody>
                      </table>
                   </div>
                   <p className="mt-2 text-xs text-neutral-500">Nota: Google Analytics è configurato in modalità anonima (anonymizeIp: true).</p>
                </div>
             </div>
          </Section>

          {/* Section 4: Third Party */}
          <Section 
            number="04" title="Terze Parti & Opt-Out" icon={Globe}
            isOpen={openSection === "thirdparty"} toggle={() => toggleSection("thirdparty")}
          >
             <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                   <h4 className="text-white font-bold mb-2">Google Analytics</h4>
                   <ul className="space-y-1 text-sm text-neutral-400 mb-4">
                     <li>• IP anonimizzato</li>
                     <li>• Nessun profiling personale</li>
                     <li>• Dati aggregati</li>
                   </ul>
                   <button className="text-xs text-[#A797F7] hover:text-white border border-[#A797F7]/30 px-2 py-1 rounded">Disattiva GA</button>
                </div>
                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                   <h4 className="text-white font-bold mb-2">Google Fonts</h4>
                   <ul className="space-y-1 text-sm text-neutral-400">
                     <li>• Serviti localmente dal nostro server</li>
                     <li>• Nessuna richiesta ai server Google</li>
                     <li>• Privacy garantita</li>
                   </ul>
                </div>
             </div>
             <div className="mt-4 p-4 border-t border-neutral-800">
               <h4 className="text-white text-sm font-bold mb-1">Trasferimenti Internazionali</h4>
               <p className="text-xs text-neutral-400">Servizi come GA possono trasferire dati negli USA sotto Clausole Contrattuali Standard (SCC) approvate dalla Commissione UE.</p>
             </div>
          </Section>

          {/* Section 5: Manage */}
          <Section 
            number="05" title="Gestisci Preferenze" icon={Settings}
            isOpen={openSection === "manage"} toggle={() => toggleSection("manage")}
          >
             <div className="flex flex-col gap-4">
               <div className="flex items-center justify-between p-4 bg-[#A797F7]/10 rounded-xl border border-[#A797F7]/20">
                  <div>
                    <h4 className="text-[#A797F7] font-bold text-sm">Apri Banner Cookie</h4>
                    <p className="text-xs text-neutral-400">Modifica il consenso quando vuoi.</p>
                  </div>
                  <button className="px-4 py-2 bg-[#A797F7] text-white rounded-lg text-sm font-bold hover:bg-[#9585e5] transition-colors">
                    Gestisci Cookie
                  </button>
               </div>
               
               <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-800">
                  <h4 className="text-white font-bold text-sm mb-2">Impostazioni Browser</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Chrome", "Firefox", "Safari", "Edge"].map(b => (
                      <span key={b} className="px-2 py-1 bg-neutral-800 border border-neutral-700 text-neutral-300 text-xs rounded">{b}</span>
                    ))}
                  </div>
                  <p className="mt-2 text-xs text-neutral-500">
                    ⚠️ Disattivare i cookie può limitare funzionalità (moduli, preferenze, ecc.).
                  </p>
               </div>
             </div>
          </Section>

          {/* Section 6: DNT & GPC */}
          <Section 
            number="06" title="Do Not Track & GPC" icon={Eye}
            isOpen={openSection === "dnt"} toggle={() => toggleSection("dnt")}
          >
             <div className="p-5 rounded-2xl border border-green-500/20 bg-green-500/5">
                <h4 className="text-green-400 font-bold mb-2 flex items-center gap-2">
                  <ShieldCheck size={18} /> Rispettiamo i segnali di privacy
                </h4>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                     <strong className="text-white text-sm">Do Not Track (DNT)</strong>
                     <p className="text-xs text-neutral-400">Se attivo, non usiamo cookie analitici senza consenso.</p>
                  </div>
                  <div>
                     <strong className="text-white text-sm">Global Privacy Control (GPC)</strong>
                     <p className="text-xs text-neutral-400">Interpretiamo GPC come rifiuto dei cookie non essenziali.</p>
                  </div>
                </div>
             </div>
          </Section>

           {/* Section 7: Rights */}
           <Section 
            number="07" title="I Tuoi Diritti sui Cookie" icon={MousePointerClick}
            isOpen={openSection === "rights"} toggle={() => toggleSection("rights")}
          >
             <p className="mb-4">Ai sensi del GDPR/ePrivacy, hai il diritto di:</p>
             <div className="grid grid-cols-2 gap-2 mb-6">
               {[
                 "Essere informato",
                 "Dare/Negare consenso",
                 "Revocare consenso",
                 "Accedere ai dati raccolti",
                 "Richiedere cancellazione",
                 "Opporsi al trattamento"
               ].map(r => (
                 <div key={r} className="flex items-center gap-2 text-sm text-neutral-300">
                   <div className="w-1.5 h-1.5 bg-[#A797F7] rounded-full" /> {r}
                 </div>
               ))}
             </div>
             <div className="text-sm text-neutral-400">
               Per esercitare i diritti, contatta il nostro DPO: <a href="mailto:privacy@northstargroup.ch" className="text-[#A797F7] hover:underline">privacy@northstargroup.ch</a>
             </div>
          </Section>

           {/* Section 8: Changes */}
           <Section 
            number="08" title="Modifiche all’Informativa" icon={RefreshCcw}
            isOpen={openSection === "changes"} toggle={() => toggleSection("changes")}
          >
             <p className="mb-2">Aggiornamenti possono essere effettuati per nuovi servizi o normative.</p>
             <ul className="space-y-1 text-sm text-neutral-400">
               <li>• Le modifiche sostanziali richiedono nuovo consenso.</li>
               <li>• Viene mostrato un banner informativo per 30 giorni.</li>
               <li>• La cronologia versioni è disponibile su richiesta.</li>
             </ul>
          </Section>

        </div>

      </div>
    </div>
  );
}
