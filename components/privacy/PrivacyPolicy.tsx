"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Lock, 
  User, 
  Mail, 
  Phone, 
  Building2, 
  ChevronDown, 
  Server, 
  Globe, 
  FileText, 
  AlertTriangle,
  Eye,
  Cookie,
  Users,
  Bell,
  RefreshCcw,
  Scale,
  XCircle,
  CheckCircle2,
  Download
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

// 1. The Contact Card (Bento Style)
const ContactCard = ({ 
  title, 
  role, 
  email, 
  phone, 
  address, 
  icon: Icon 
}: { 
  title: string, 
  role: string, 
  email: string, 
  phone?: string, 
  address?: string, 
  icon: any 
}) => (
  <div className="group relative overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800 p-6 transition-all duration-300 hover:border-[#A797F7]/50">
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <Icon size={80} className="text-[#A797F7]" />
    </div>
    
    <div className="relative z-10">
      <div className="w-12 h-12 rounded-2xl bg-[#A797F7]/10 flex items-center justify-center text-[#A797F7] mb-4 group-hover:scale-110 transition-transform">
        <Icon size={24} />
      </div>
      
      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      <span className="inline-block px-2 py-1 rounded-md bg-neutral-800 text-xs font-medium text-neutral-400 mb-4 border border-neutral-700">
        {role}
      </span>
      
      <div className="space-y-2 text-sm text-neutral-400">
        {address && <p className="flex items-start gap-2"><Building2 size={14} className="mt-1 shrink-0" /> {address}</p>}
        {email && (
          <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-[#A797F7] transition-colors">
            <Mail size={14} /> {email}
          </a>
        )}
        {phone && (
          <a href={`tel:${phone}`} className="flex items-center gap-2 hover:text-[#A797F7] transition-colors">
            <Phone size={14} /> {phone}
          </a>
        )}
      </div>
    </div>
  </div>
);

// 2. The Expandable Policy Section
const PolicySection = ({ 
  id, 
  number, 
  title, 
  icon: Icon, 
  children, 
  isOpen, 
  toggle 
}: { 
  id: string, 
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
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
    GDPR / nLPD Compliant
  </div>
);

// --- Main Component ---

export default function InteractivePrivacyPolicy() {
  const [openSection, setOpenSection] = useState<string | null>("categories");

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
             Privacy <span className="text-[#A797F7]">Policy</span>
           </h1>
           <p className="max-w-2xl mx-auto text-neutral-400 text-lg">
             Protecting your personal data is our top priority. Transparent, secure, and compliant.
           </p>
           <div className="text-xs text-neutral-500 font-mono">
             Last updated: November 29, 2025 • Version 2.0
           </div>
        </div>

        {/* Key Contacts Grid */}
        <div className="grid md:grid-cols-2 gap-4">
           <ContactCard 
             title="North Star Group Sagl"
             role="Data Controller"
             address="Via alla Chiesa 40, 6595 Riazzino, CH"
             email="info@northstargroup.ch"
             phone="+41 79 945 33 73"
             icon={Building2}
           />
           <ContactCard 
             title="DPO Office"
             role="Data Protection Officer"
             address="Privacy Department"
             email="privacy@northstargroup.ch"
             icon={ShieldCheck}
           />
        </div>

        {/* The Interactive Policy Vault */}
        <div className="rounded-3xl border border-neutral-800 bg-neutral-950 overflow-hidden shadow-2xl">
          
          {/* Section 2: Categories */}
          <PolicySection 
            id="categories" number="02" title="Categories of Data Collected" icon={Server}
            isOpen={openSection === "categories"} toggle={() => toggleSection("categories")}
          >
            <div className="grid md:grid-cols-2 gap-8">
               <div className="space-y-4">
                  <h4 className="text-white font-medium border-b border-neutral-800 pb-2">Directly Provided</h4>
                  <ul className="space-y-2">
                    {["Name & Surname", "Email Address", "Phone Number", "Postal Address", "Company Details (VAT/Role)"].map(i => (
                      <li key={i} className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#A797F7]" /> {i}</li>
                    ))}
                  </ul>
               </div>
               <div className="space-y-4">
                  <h4 className="text-white font-medium border-b border-neutral-800 pb-2">Automatically Collected</h4>
                  <ul className="space-y-2">
                    {["IP Address", "Browser Info", "Navigation Data", "Traffic Source", "Interactions"].map(i => (
                      <li key={i} className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#A797F7]" /> {i}</li>
                    ))}
                  </ul>
               </div>
            </div>

            {/* Negative Data Collection Box */}
            <div className="mt-8 p-4 rounded-xl bg-red-500/5 border border-red-500/20 flex items-start gap-4">
               <XCircle className="text-red-500 mt-1 shrink-0" size={20} />
               <div>
                  <h4 className="text-red-400 font-bold text-sm uppercase tracking-wide mb-1">We DO NOT Collect</h4>
                  <p className="text-red-200/60 text-sm">
                    Health data, sexual orientation, political opinions, religious beliefs, biometric data, or criminal records.
                  </p>
               </div>
            </div>
          </PolicySection>

          {/* Section 3: Purpose */}
          <PolicySection 
            id="purpose" number="03" title="Purpose & Legal Basis" icon={Scale}
            isOpen={openSection === "purpose"} toggle={() => toggleSection("purpose")}
          >
            <div className="overflow-x-auto rounded-lg border border-neutral-800">
               <table className="w-full text-left text-sm">
                  <thead className="bg-neutral-900 text-neutral-300">
                    <tr>
                      <th className="p-3 font-medium">Purpose</th>
                      <th className="p-3 font-medium">Legal Basis</th>
                      <th className="p-3 font-medium">Retention</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800 text-neutral-400">
                     {[
                       ["Service Provision", "Contract (Art. 6.1.b)", "Contract + 10y"],
                       ["Info Requests", "Legitimate Interest", "6 Months"],
                       ["Newsletters", "Consent (Art. 6.1.a)", "Until Revoked"],
                       ["Accounting", "Legal Obligation", "10 Years"],
                       ["Security", "Legitimate Interest", "12 Months"]
                     ].map(([p, l, r], i) => (
                       <tr key={i} className="hover:bg-neutral-900/50">
                         <td className="p-3 text-white">{p}</td>
                         <td className="p-3 text-[#A797F7]">{l}</td>
                         <td className="p-3">{r}</td>
                       </tr>
                     ))}
                  </tbody>
               </table>
            </div>
          </PolicySection>

          {/* Section 4: Recipients */}
          <PolicySection 
            id="recipients" number="04" title="Recipients & Transfer" icon={Globe}
            isOpen={openSection === "recipients"} toggle={() => toggleSection("recipients")}
          >
             <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                    <h4 className="text-white font-medium mb-2">Infrastructure</h4>
                    <p className="text-sm">Servers in Switzerland (Green.ch), ProtonMail (CH), n8n (Self-hosted).</p>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                    <h4 className="text-white font-medium mb-2">Transfers</h4>
                    <p className="text-sm">Primarily CH. USA transfers via Standard Contractual Clauses (SCC) only.</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-500 italic">All partners are bound by strict DPAs and confidentiality agreements.</p>
             </div>
          </PolicySection>

          {/* Section 5: Rights */}
          <PolicySection 
            id="rights" number="05" title="Your Rights" icon={User}
            isOpen={openSection === "rights"} toggle={() => toggleSection("rights")}
          >
             <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
               {["Access", "Rectification", "Erasure", "Limitation", "Portability", "Objection"].map(r => (
                 <div key={r} className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-center text-sm hover:border-[#A797F7] transition-colors cursor-default text-neutral-300">
                   Right to {r}
                 </div>
               ))}
             </div>
             <div className="flex flex-col sm:flex-row gap-4 items-center p-4 bg-[#A797F7]/5 rounded-xl border border-[#A797F7]/20">
                <div className="flex-1">
                  <h4 className="text-white font-medium mb-1">Exercise your rights</h4>
                  <p className="text-xs text-neutral-400">We respond within 30 days. ID verification required.</p>
                </div>
                <a href="mailto:privacy@northstargroup.ch" className="px-4 py-2 bg-[#A797F7] text-white rounded-lg text-sm font-bold hover:bg-[#9585e5] transition-colors">
                  Contact Privacy Team
                </a>
             </div>
          </PolicySection>

          {/* Section 6: Security */}
          <PolicySection 
            id="security" number="06" title="Security Measures" icon={Lock}
            isOpen={openSection === "security"} toggle={() => toggleSection("security")}
          >
             <div className="flex items-start gap-4 mb-6">
               <div className="p-3 bg-green-500/10 rounded-full text-green-500">
                 <ShieldCheck size={24} />
               </div>
               <div>
                 <h4 className="text-white font-bold text-lg">ISO 27001 Certified Centers</h4>
                 <p className="text-sm text-neutral-400">Our infrastructure complies with FINMA standards.</p>
               </div>
             </div>
             <div className="grid grid-cols-2 gap-2 text-sm">
               {["SSL/TLS Encryption", "AES-256 Data at Rest", "2FA Authentication", "24/7 Monitoring", "Daily Backups", "Firewalls"].map(s => (
                 <div key={s} className="flex items-center gap-2 text-neutral-300">
                   <div className="w-1.5 h-1.5 bg-[#A797F7] rounded-full" /> {s}
                 </div>
               ))}
             </div>
          </PolicySection>
          
           {/* Section 7: Cookies */}
          <PolicySection 
            id="cookies" number="07" title="Cookies & Tech" icon={Cookie}
            isOpen={openSection === "cookies"} toggle={() => toggleSection("cookies")}
          >
             <p className="mb-4">We use cookies to improve experience. <span className="text-[#A797F7]">Essential</span> cookies are necessary. <span className="text-[#A797F7]">Analytical</span> cookies are used only with consent.</p>
          </PolicySection>

          {/* Section 8: Minors */}
          <PolicySection 
            id="minors" number="08" title="Minors" icon={Users}
            isOpen={openSection === "minors"} toggle={() => toggleSection("minors")}
          >
             <p>Services are not for users under 16. We do not knowingly collect data from minors.</p>
          </PolicySection>

          {/* Section 9: Breach */}
          <PolicySection 
            id="breach" number="09" title="Data Breach" icon={AlertTriangle}
            isOpen={openSection === "breach"} toggle={() => toggleSection("breach")}
          >
             <div className="p-4 border-l-2 border-[#A797F7] bg-neutral-900">
               <p><strong>72 Hour Protocol:</strong> We notify the Federal Commissioner and affected users immediately if rights are at risk.</p>
             </div>
          </PolicySection>

           {/* Section 10: Changes */}
           <PolicySection 
            id="changes" number="10" title="Changes" icon={RefreshCcw}
            isOpen={openSection === "changes"} toggle={() => toggleSection("changes")}
          >
             <p>Substantial changes will be notified via email. The "Last Updated" date at the top is the reference.</p>
          </PolicySection>

           {/* Section 11: Authority */}
           <PolicySection 
            id="authority" number="11" title="Supervisory Authority" icon={Building2}
            isOpen={openSection === "authority"} toggle={() => toggleSection("authority")}
          >
             <p className="mb-2"><strong className="text-white">Switzerland:</strong> FDPIC (Bern). <a href="https://www.edoeb.admin.ch" className="text-[#A797F7] hover:underline">www.edoeb.admin.ch</a></p>
             <p><strong className="text-white">EU Citizens:</strong> You may contact your local supervisory authority.</p>
          </PolicySection>

        </div>
      </div>
    </div>
  );
}