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

// 3. Vendor Card (Inner Component)
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
                <p className="text-xs font-semibold text-[#A797F7] mb-2 uppercase tracking-wider">Services</p>
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
    Art. 28 GDPR Compliant
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
             Data <span className="text-[#A797F7]">Processors</span>
           </h1>
           <p className="max-w-2xl mx-auto text-neutral-400 text-lg">
             Full transparency into our technology partners and service providers who process personal data on our behalf.
           </p>
           <div className="flex items-center justify-center gap-4 text-xs text-neutral-500 font-mono">
             <span>Last updated: November 29, 2025</span>
             <span className="w-1 h-1 rounded-full bg-neutral-700" />
             <span>Next review: February 27, 2026</span>
           </div>
        </div>

        {/* Quick Info Grid */}
        <div className="grid md:grid-cols-2 gap-4">
           <InfoCard 
             title="Our Commitment"
             subtitle="Due Diligence"
             icon={ShieldCheck}
             accent={true}
             content={
               <div className="space-y-3">
                 <p>We carefully select each service provider to ensure they meet the highest data protection standards.</p>
                 <div className="flex items-center gap-2 text-xs text-neutral-300 bg-[#A797F7]/10 p-2 rounded-lg border border-[#A797F7]/20">
                    <FileCheck size={14} className="text-[#A797F7]" />
                    All processors bound by GDPR-compliant DPAs.
                 </div>
               </div>
             }
           />
           <InfoCard 
             title="Governance"
             subtitle="Continuous Control"
             icon={RefreshCcw}
             content={
               <div className="space-y-2">
                 <p>Our vendor management process includes rigorous checks.</p>
                 <div className="grid grid-cols-2 gap-2 mt-2">
                   <div className="p-2 rounded bg-neutral-800 border border-neutral-700 text-xs">
                     <span className="block text-white font-bold">Quarterly</span>
                     Review Cycle
                   </div>
                   <div className="p-2 rounded bg-neutral-800 border border-neutral-700 text-xs">
                     <span className="block text-white font-bold">Annual</span>
                     Safety Audit
                   </div>
                 </div>
               </div>
             }
           />
        </div>

        {/* The Interactive Policy Vault */}
        <div className="rounded-3xl border border-neutral-800 bg-neutral-950 overflow-hidden shadow-2xl">
          
          {/* Section 1: Infrastructure */}
          <Section 
            number="01" title="Infrastructure & Hosting" icon={Server}
            isOpen={openSection === "infrastructure"} toggle={() => toggleSection("infrastructure")}
          >
            <div className="grid gap-4">
                <VendorCard 
                    name="Green.ch AG"
                    location="🇨🇭 Switzerland"
                    services={["Dedicated Hosting", "Virtual Servers", "Auto Backups", "SSL Certs"]}
                    guarantees={["ISO 27001 Certified", "FINMA Compliant", "100% Renewable Energy", "DPA Signed (01.01.23)"]}
                />
                <VendorCard 
                    name="Cloudflare, Inc."
                    location="🇺🇸 USA (SCC)"
                    services={["CDN Delivery", "DDoS Protection", "WAF Firewall", "DNS Management"]}
                    guarantees={["Standard Contractual Clauses", "SOC 2 Type II", "Data Processing Addendum", "EDPB Measures"]}
                />
            </div>
          </Section>

          {/* Section 2: Communication */}
          <Section 
            number="02" title="Communication" icon={Mail}
            isOpen={openSection === "communication"} toggle={() => toggleSection("communication")}
          >
             <VendorCard 
                name="ProtonMail (Proton AG)"
                location="🇨🇭 Switzerland"
                services={["Encrypted Email", "ProtonCalendar", "ProtonDrive", "VPN for Teams"]}
                guarantees={["End-to-end Encryption", "Zero-access Encryption", "Swiss Data Protection Act", "No-logs Policy"]}
            />
            <div className="mt-4 p-4 rounded-xl bg-blue-500/5 border border-blue-500/20 flex items-start gap-3">
                <Lock size={18} className="text-blue-400 mt-0.5" />
                <div>
                    <h5 className="text-blue-400 text-sm font-bold">Privacy by Design</h5>
                    <p className="text-xs text-blue-200/70 mt-1">Proton cannot access the contents of your communications thanks to end-to-end encryption architecture.</p>
                </div>
            </div>
          </Section>

          {/* Section 3: Analytics */}
          <Section 
            number="03" title="Analytics & Monitoring" icon={BarChart3}
            isOpen={openSection === "analytics"} toggle={() => toggleSection("analytics")}
          >
             <VendorCard 
                name="Google Ireland Limited"
                location="🇮🇪 Ireland (EU)"
                services={["Google Analytics 4", "Search Console", "Tag Manager", "reCAPTCHA Enterprise"]}
                guarantees={["IP Anonymization", "Retention: 14 months", "No Remarketing", "Signals Disabled"]}
            />
          </Section>

          {/* Section 4: Automation */}
          <Section 
            number="04" title="Automation & Integrations" icon={Workflow}
            isOpen={openSection === "automation"} toggle={() => toggleSection("automation")}
          >
             <VendorCard 
                name="n8n (Self-Hosted)"
                location="🇨🇭 Switzerland"
                services={["Workflow Automation", "Form Processing", "API Integrations", "Data Transformation"]}
                guarantees={["100% Self-Hosted", "Data stays in CH", "No Cloud Dependencies", "Full Control"]}
            />
             <div className="mt-4 p-4 rounded-xl bg-green-500/5 border border-green-500/20 flex items-start gap-3">
                <ShieldCheck size={18} className="text-green-400 mt-0.5" />
                <div>
                    <h5 className="text-green-400 text-sm font-bold">Maximum Privacy</h5>
                    <p className="text-xs text-green-200/70 mt-1">n8n is completely self-hosted on our Swiss servers. No automation data leaves our infrastructure.</p>
                </div>
            </div>
          </Section>

          {/* Section 5: Development */}
          <Section 
            number="05" title="Development & Repo" icon={Code2}
            isOpen={openSection === "dev"} toggle={() => toggleSection("dev")}
          >
             <div className="grid gap-6">
                 <VendorCard 
                    name="GitHub, Inc."
                    location="🇺🇸 USA (SCC)"
                    services={["Private Repositories", "CI/CD Actions", "Issue Tracking", "Code Review"]}
                    guarantees={["Source Code Only", "No Personal Customer Data", "Developer Metadata Only"]}
                />
                
                <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
                    <div className="flex justify-between items-start mb-4">
                        <h4 className="text-white font-bold flex items-center gap-2"><ShieldAlert size={16} className="text-[#A797F7]" /> Google reCAPTCHA</h4>
                        <span className="text-xs px-2 py-1 rounded bg-neutral-800 text-neutral-400 border border-neutral-700">USA</span>
                    </div>
                    <p className="text-sm text-neutral-400 mb-4">Protecting forms from spam and fraudulent activity by analyzing interactions.</p>
                    <div className="grid grid-cols-2 gap-2 text-xs text-neutral-500">
                        <span className="bg-neutral-800 px-2 py-1 rounded">Processed: IP Address</span>
                        <span className="bg-neutral-800 px-2 py-1 rounded">Processed: Behavior</span>
                        <span className="bg-neutral-800 px-2 py-1 rounded">Risk Score (0.0-1.0)</span>
                    </div>
                </div>
             </div>
          </Section>

          {/* Section 6: Payments */}
          <Section 
            number="06" title="Payment Processors" icon={CreditCard}
            isOpen={openSection === "payments"} toggle={() => toggleSection("payments")}
          >
             <p className="text-neutral-400 mb-4">
               North Star Group primarily uses direct bank transfers and TWINT Business. We do not store credit card data.
             </p>
             <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/50 flex items-center gap-4">
                <CreditCard className="text-neutral-500" />
                <div className="text-sm text-neutral-300">
                   For card payments, we only use <span className="text-[#A797F7]">PCI DSS Level 1</span> certified processors at the customer's specific request.
                </div>
             </div>
          </Section>

          {/* Section 7: Security */}
          <Section 
            number="07" title="Security Measures" icon={Lock}
            isOpen={openSection === "security"} toggle={() => toggleSection("security")}
          >
             <div className="grid md:grid-cols-2 gap-8">
               <div>
                 <h4 className="text-white font-bold mb-3 pb-2 border-b border-neutral-800">Contractual</h4>
                 <ul className="space-y-2 text-sm text-neutral-400">
                   <li>• DPA (Data Processing Agreement)</li>
                   <li>• Confidentiality clauses</li>
                   <li>• Right to audit</li>
                   <li>• Breach notification (24h)</li>
                 </ul>
               </div>
               <div>
                 <h4 className="text-white font-bold mb-3 pb-2 border-b border-neutral-800">Technical</h4>
                 <ul className="space-y-2 text-sm text-neutral-400">
                   <li>• TLS 1.3 Encryption in transit</li>
                   <li>• Encryption at rest</li>
                   <li>• MFA Access Control</li>
                   <li>• Immutable Logging</li>
                 </ul>
               </div>
             </div>
          </Section>

           {/* Section 8: Rights */}
           <Section 
            number="08" title="Your Rights" icon={FileCheck}
            isOpen={openSection === "rights"} toggle={() => toggleSection("rights")}
          >
             <p className="mb-4">You have the right to know which providers process your data. You can:</p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
               {[
                 "Request updated list of subprocessors", 
                 "Object to specific data transfers", 
                 "Request info on safety measures", 
                 "Obtain copy of DPA (relevant parts)"
                ].map(r => (
                 <div key={r} className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-sm text-neutral-300 flex items-center gap-3">
                   <Search size={14} className="text-[#A797F7]" /> {r}
                 </div>
               ))}
             </div>
             <div className="flex items-center gap-3 p-4 rounded-xl bg-[#A797F7]/5 border border-[#A797F7]/20">
                <Mail size={16} className="text-[#A797F7]" />
                <span className="text-sm text-neutral-300">Contact the DPO for inquiries: <strong className="text-white">privacy@northstargroup.ch</strong></span>
             </div>
          </Section>

        </div>

        {/* Footer Actions */}
        <div className="flex justify-center pb-12">
           <button className="group flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-700 hover:border-[#A797F7] text-neutral-400 hover:text-white transition-all bg-neutral-900/50">
             <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
             Download Vendor List (PDF)
           </button>
        </div>

      </div>
    </div>
  );
}