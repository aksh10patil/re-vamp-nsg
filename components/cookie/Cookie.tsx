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
    GDPR / ePrivacy Compliant
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
             Cookie <span className="text-[#A797F7]">Policy</span>
           </h1>
           <p className="max-w-2xl mx-auto text-neutral-400 text-lg">
             Complete information on the use of cookies and similar technologies.
             <br/>Transparent, secure, and respectful of your choices.
           </p>
           <div className="text-xs text-neutral-500 font-mono">
             Last updated: November 29, 2025 • Version 2.0
           </div>
        </div>

        {/* Quick Info Grid */}
        <div className="grid md:grid-cols-2 gap-4">
           <InfoCard 
             title="Our Commitment"
             subtitle="Privacy First"
             icon={ShieldCheck}
             accent={true}
             content={
               <div className="space-y-2">
                 <p>We only use strictly necessary cookies by default.</p>
                 <div className="flex flex-wrap gap-2 mt-2">
                   <span className="flex items-center gap-1 px-2 py-1 rounded bg-[#A797F7]/20 border border-[#A797F7]/30 text-xs text-[#A797F7]">
                     <CheckCircle2 size={12} /> No Profiling
                   </span>
                   <span className="flex items-center gap-1 px-2 py-1 rounded bg-[#A797F7]/20 border border-[#A797F7]/30 text-xs text-[#A797F7]">
                     <CheckCircle2 size={12} /> No Marketing
                   </span>
                 </div>
               </div>
             }
           />
           <InfoCard 
             title="What are Cookies?"
             subtitle="Definitions"
             icon={Cookie}
             content={
               <div className="space-y-2">
                 <p>Small text files saved on your device to remember preferences.</p>
                 <div className="grid grid-cols-2 gap-2 mt-2">
                   <div className="p-2 rounded bg-neutral-800 border border-neutral-700 text-xs">
                     <span className="block text-white font-bold">Technical</span>
                     Essential functioning
                   </div>
                   <div className="p-2 rounded bg-neutral-800 border border-neutral-700 text-xs">
                     <span className="block text-white font-bold">Non-Technical</span>
                     Analytics & Extras
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
            number="01" title="General Information" icon={Info}
            isOpen={openSection === "general"} toggle={() => toggleSection("general")}
          >
            <p className="mb-4">
              Cookies allow the site to remember your preferences and improve your experience. We categorize them strictly:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
               <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> Technical</h4>
                  <p className="text-xs">Essential for the functioning of the site (e.g., security, session).</p>
               </div>
               <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Fingerprint size={16} className="text-[#A797F7]"/> Non-Technical</h4>
                  <p className="text-xs">For analytics, personalization, and marketing (Only with consent).</p>
               </div>
            </div>
          </Section>

          {/* Section 2: Legal Basis */}
          <Section 
            number="02" title="Legal Basis & Consent" icon={ToggleLeft}
            isOpen={openSection === "legal"} toggle={() => toggleSection("legal")}
          >
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                 <div className="flex-1 p-4 rounded-xl border border-green-500/20 bg-green-500/5">
                    <h4 className="text-green-400 font-bold mb-2 text-sm uppercase">Consent NOT Required</h4>
                    <ul className="space-y-1 text-sm text-neutral-300">
                      <li>• Strictly Necessary Cookies</li>
                      <li>• Technical session cookies</li>
                      <li>• Security Cookies</li>
                    </ul>
                 </div>
                 <div className="flex-1 p-4 rounded-xl border border-[#A797F7]/20 bg-[#A797F7]/5">
                    <h4 className="text-[#A797F7] font-bold mb-2 text-sm uppercase">Consent REQUIRED</h4>
                    <ul className="space-y-1 text-sm text-neutral-300">
                      <li>• Analytical cookies</li>
                      <li>• Preference cookies</li>
                      <li>• Third-party cookies</li>
                    </ul>
                 </div>
              </div>
              <p className="text-sm bg-neutral-900 p-4 rounded-xl border border-neutral-800">
                <span className="text-white font-bold">Your Choice:</span> When you first access the site, we present a banner. You can Accept All, Refuse Non-Essential, or Customize. You can change this at any time.
              </p>
            </div>
          </Section>

          {/* Section 3: Cookie Details */}
          <Section 
            number="03" title="Cookies Used in Detail" icon={Database}
            isOpen={openSection === "details"} toggle={() => toggleSection("details")}
          >
             <div className="space-y-8">
                {/* Essential Table */}
                <div>
                   <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-green-500" /> Strictly Necessary
                   </h4>
                   <div className="overflow-x-auto rounded-xl border border-neutral-800">
                      <table className="w-full text-left text-sm text-neutral-400">
                        <thead className="bg-neutral-900 text-white text-xs uppercase">
                          <tr><th className="p-3">Name</th><th className="p-3">Purpose</th><th className="p-3">Duration</th></tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-800 bg-neutral-950">
                          <tr><td className="p-3 font-mono text-[#A797F7]">PHPSESSID</td><td className="p-3">Maintains user session</td><td className="p-3">Session</td></tr>
                          <tr><td className="p-3 font-mono text-[#A797F7]">csrf_token</td><td className="p-3">Security protection</td><td className="p-3">Session</td></tr>
                          <tr><td className="p-3 font-mono text-[#A797F7]">cookie_consent</td><td className="p-3">Stores preferences</td><td className="p-3">1 Year</td></tr>
                        </tbody>
                      </table>
                   </div>
                </div>

                {/* Analytical Table */}
                <div>
                   <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-[#A797F7]" /> Analytical (With Consent)
                   </h4>
                   <div className="overflow-x-auto rounded-xl border border-neutral-800">
                      <table className="w-full text-left text-sm text-neutral-400">
                        <thead className="bg-neutral-900 text-white text-xs uppercase">
                          <tr><th className="p-3">Name</th><th className="p-3">Provider</th><th className="p-3">Duration</th></tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-800 bg-neutral-950">
                          <tr><td className="p-3 font-mono text-[#A797F7]">_ga</td><td className="p-3">Google Analytics</td><td className="p-3">2 Years</td></tr>
                          <tr><td className="p-3 font-mono text-[#A797F7]">_gid</td><td className="p-3">Google Analytics</td><td className="p-3">24 Hours</td></tr>
                        </tbody>
                      </table>
                   </div>
                   <p className="mt-2 text-xs text-neutral-500">Note: Google Analytics is configured in anonymized mode (anonymizeIp: true).</p>
                </div>
             </div>
          </Section>

          {/* Section 4: Third Party */}
          <Section 
            number="04" title="Third Party & Opt-Out" icon={Globe}
            isOpen={openSection === "thirdparty"} toggle={() => toggleSection("thirdparty")}
          >
             <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                   <h4 className="text-white font-bold mb-2">Google Analytics</h4>
                   <ul className="space-y-1 text-sm text-neutral-400 mb-4">
                     <li>• Anonymized IP</li>
                     <li>• No personal profiling</li>
                     <li>• Aggregated data only</li>
                   </ul>
                   <button className="text-xs text-[#A797F7] hover:text-white border border-[#A797F7]/30 px-2 py-1 rounded">Opt-out of GA</button>
                </div>
                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                   <h4 className="text-white font-bold mb-2">Google Fonts</h4>
                   <ul className="space-y-1 text-sm text-neutral-400">
                     <li>• Served locally from our server</li>
                     <li>• No requests to Google servers</li>
                     <li>• Privacy protected</li>
                   </ul>
                </div>
             </div>
             <div className="mt-4 p-4 border-t border-neutral-800">
               <h4 className="text-white text-sm font-bold mb-1">International Transfers</h4>
               <p className="text-xs text-neutral-400">Services like GA may transfer data to the US under Standard Contractual Clauses (SCCs) approved by the EU Commission.</p>
             </div>
          </Section>

          {/* Section 5: Manage */}
          <Section 
            number="05" title="Manage Preferences" icon={Settings}
            isOpen={openSection === "manage"} toggle={() => toggleSection("manage")}
          >
             <div className="flex flex-col gap-4">
               <div className="flex items-center justify-between p-4 bg-[#A797F7]/10 rounded-xl border border-[#A797F7]/20">
                  <div>
                    <h4 className="text-[#A797F7] font-bold text-sm">Open Cookie Banner</h4>
                    <p className="text-xs text-neutral-400">Change your consent choices anytime.</p>
                  </div>
                  <button className="px-4 py-2 bg-[#A797F7] text-white rounded-lg text-sm font-bold hover:bg-[#9585e5] transition-colors">
                    Manage Cookies
                  </button>
               </div>
               
               <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-800">
                  <h4 className="text-white font-bold text-sm mb-2">Browser Settings</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Chrome", "Firefox", "Safari", "Edge"].map(b => (
                      <span key={b} className="px-2 py-1 bg-neutral-800 border border-neutral-700 text-neutral-300 text-xs rounded">{b}</span>
                    ))}
                  </div>
                  <p className="mt-2 text-xs text-neutral-500">
                    ⚠️ Disabling cookies may limit functionality (forms, preferences, etc).
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
                  <ShieldCheck size={18} /> We respect privacy signals
                </h4>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                     <strong className="text-white text-sm">Do Not Track (DNT)</strong>
                     <p className="text-xs text-neutral-400">If enabled, we do not activate analytical cookies without consent.</p>
                  </div>
                  <div>
                     <strong className="text-white text-sm">Global Privacy Control (GPC)</strong>
                     <p className="text-xs text-neutral-400">We interpret GPC as a refusal of non-essential cookies.</p>
                  </div>
                </div>
             </div>
          </Section>

           {/* Section 7: Rights */}
           <Section 
            number="07" title="Your Cookie Rights" icon={MousePointerClick}
            isOpen={openSection === "rights"} toggle={() => toggleSection("rights")}
          >
             <p className="mb-4">Under GDPR/ePrivacy, you have the right to:</p>
             <div className="grid grid-cols-2 gap-2 mb-6">
               {["Be informed", "Give/Deny consent", "Withdraw consent", "Access collected data", "Request deletion", "Object to processing"].map(r => (
                 <div key={r} className="flex items-center gap-2 text-sm text-neutral-300">
                   <div className="w-1.5 h-1.5 bg-[#A797F7] rounded-full" /> {r}
                 </div>
               ))}
             </div>
             <div className="text-sm text-neutral-400">
               To exercise these rights, contact our DPO: <a href="mailto:privacy@northstargroup.ch" className="text-[#A797F7] hover:underline">privacy@northstargroup.ch</a>
             </div>
          </Section>

           {/* Section 8: Changes */}
           <Section 
            number="08" title="Changes to Policy" icon={RefreshCcw}
            isOpen={openSection === "changes"} toggle={() => toggleSection("changes")}
          >
             <p className="mb-2">Updates may occur due to new services or regulations.</p>
             <ul className="space-y-1 text-sm text-neutral-400">
               <li>• Substantial changes require new consent.</li>
               <li>• Information banner will be shown for 30 days.</li>
               <li>• Version history is available upon request.</li>
             </ul>
          </Section>

        </div>


      </div>
    </div>
  );
}