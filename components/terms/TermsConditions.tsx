"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Scale, 
  Building2, 
  FileSignature, 
  Briefcase, 
  CreditCard, 
  Copyright, 
  ShieldAlert, 
  Lock, 
  XCircle, 
  Gavel, 
  ChevronDown, 
  CheckCircle2, 
  Download,
  ScrollText,
  Clock,
  Code2,
  AlertTriangle,
  Globe2
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
const LegalBadge = () => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A797F7]/10 border border-[#A797F7]/20 text-[#A797F7] text-xs font-medium">
    <div className="w-1.5 h-1.5 rounded-full bg-[#A797F7] animate-pulse" />
    CO / GDPR Compliant
  </div>
);

// --- Main Component ---

export default function TermsAndConditions() {
  const [openSection, setOpenSection] = useState<string | null>("formation");

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#A797F7]/30 p-4 md:p-8">
      
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header Hero */}
        <div className="text-center space-y-6 pt-12">
           <LegalBadge />
           <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
             General <span className="text-[#A797F7]">Terms</span>
           </h1>
           <p className="max-w-2xl mx-auto text-neutral-400 text-lg">
             Governing the provision of digital services by North Star Group Sagl. Transparent, fair, and legally binding.
           </p>
           <div className="text-xs text-neutral-500 font-mono">
             Last updated: November 29, 2025 • Version 2.0
           </div>
        </div>

        {/* Key Entities Grid */}
        <div className="grid md:grid-cols-2 gap-4">
           <InfoCard 
             title="North Star Group Sagl"
             subtitle="The Supplier"
             icon={Building2}
             accent={true}
             content={
               <div className="space-y-1">
                 <p>Via alla Chiesa 40, 6595 Riazzino, Switzerland</p>
                 <p>Email: info@northstargroup.ch</p>
                 <p>Tel: +41 79 945 33 73</p>
               </div>
             }
           />
           <InfoCard 
             title="The Customer"
             subtitle="Counterparty"
             icon={Briefcase}
             content={
               <div className="space-y-2">
                 <p>Any natural or legal person who commissions services.</p>
                 <div className="flex gap-2 mt-2">
                   <span className="px-2 py-1 rounded bg-neutral-800 border border-neutral-700 text-xs">Project Agreement</span>
                   <span className="px-2 py-1 rounded bg-neutral-800 border border-neutral-700 text-xs">Specific Deliverables</span>
                 </div>
               </div>
             }
           />
        </div>

        {/* The Interactive Policy Vault */}
        <div className="rounded-3xl border border-neutral-800 bg-neutral-950 overflow-hidden shadow-2xl">
          
          {/* Section 2: Formation */}
          <Section 
            number="02" title="Formation of Contract" icon={FileSignature}
            isOpen={openSection === "formation"} toggle={() => toggleSection("formation")}
          >
            <div className="grid md:grid-cols-4 gap-4 mb-6">
               {["Request", "Detailed Offer", "Written Acceptance", "Confirmation"].map((step, i) => (
                 <div key={i} className="relative p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex flex-col items-center text-center">
                    <div className="w-8 h-8 rounded-full bg-[#A797F7]/10 text-[#A797F7] flex items-center justify-center font-bold text-sm mb-2">
                      {i + 1}
                    </div>
                    <span className="text-sm font-medium text-white">{step}</span>
                 </div>
               ))}
            </div>
            
            <div className="p-4 rounded-xl bg-[#A797F7]/5 border border-[#A797F7]/20">
               <h4 className="text-[#A797F7] font-medium mb-2 text-sm">Document Hierarchy (Order of Precedence)</h4>
               <ol className="list-decimal list-inside space-y-1 text-sm text-neutral-300">
                 <li>Project-specific contract</li>
                 <li>Accepted Offer</li>
                 <li>Technical Specifications</li>
                 <li>These General Terms (GTC)</li>
               </ol>
            </div>
          </Section>

          {/* Section 3: Services */}
          <Section 
            number="03" title="Description of Services" icon={Code2}
            isOpen={openSection === "services"} toggle={() => toggleSection("services")}
          >
            <div className="grid md:grid-cols-2 gap-8">
               <div className="space-y-4">
                  <h4 className="text-white font-medium border-b border-neutral-800 pb-2">Software Development</h4>
                  <ul className="space-y-2">
                    {["Websites & PWAs", "Mobile Apps (iOS/Android)", "E-commerce", "Custom ERP/CRM", "API Integrations", "Process Automation"].map(i => (
                      <li key={i} className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#A797F7]" /> {i}</li>
                    ))}
                  </ul>
               </div>
               <div className="space-y-4">
                  <h4 className="text-white font-medium border-b border-neutral-800 pb-2">Digital Services</h4>
                  <ul className="space-y-2">
                    {["Strategic Consulting", "UI/UX Design", "SEO & Marketing", "Hosting & Maintenance", "Training", "Data Analysis"].map(i => (
                      <li key={i} className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#A797F7]" /> {i}</li>
                    ))}
                  </ul>
               </div>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800">
               <p className="text-sm"><strong className="text-white">Methodology:</strong> Agile (2-week sprints) ensuring transparency, incremental delivery, and active customer involvement.</p>
            </div>
          </Section>

          {/* Section 4: Obligations */}
          <Section 
            number="04" title="Obligations of Parties" icon={Scale}
            isOpen={openSection === "obligations"} toggle={() => toggleSection("obligations")}
          >
             <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
                   <h4 className="text-[#A797F7] font-bold mb-4 flex items-center gap-2"><Building2 size={16} /> North Star Group</h4>
                   <ul className="space-y-2 text-sm">
                      <li>• Professional diligence</li>
                      <li>• Respect deadlines</li>
                      <li>• Maintain confidentiality</li>
                      <li>• Legal compliance</li>
                   </ul>
                </div>
                <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
                   <h4 className="text-white font-bold mb-4 flex items-center gap-2"><Briefcase size={16} /> Customer</h4>
                   <ul className="space-y-2 text-sm">
                      <li>• Accurate information</li>
                      <li>• Timely feedback</li>
                      <li>• Payment adherence</li>
                      <li>• Access provision</li>
                   </ul>
                </div>
             </div>
          </Section>

          {/* Section 5: Pricing */}
          <Section 
            number="05" title="Prices & Payment" icon={CreditCard}
            isOpen={openSection === "pricing"} toggle={() => toggleSection("pricing")}
          >
             <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-3">
               {["Fixed Price", "Hourly (150-250 CHF)", "Retainer", "Rev Share"].map(p => (
                 <div key={p} className="p-2 text-center rounded bg-neutral-900 text-xs font-medium border border-neutral-800 text-neutral-300">
                   {p}
                 </div>
               ))}
             </div>

             <div className="overflow-x-auto rounded-xl border border-neutral-800 mb-6">
                <table className="w-full text-left text-sm text-neutral-400">
                  <thead className="bg-neutral-900 text-white uppercase text-xs font-bold tracking-wider">
                    <tr>
                      <th className="p-4 border-b border-neutral-800">Milestone</th>
                      <th className="p-4 border-b border-neutral-800">Amount</th>
                      <th className="p-4 border-b border-neutral-800">Timing</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800 bg-neutral-950">
                    <tr>
                      <td className="p-4 text-white font-medium">Initial Deposit</td>
                      <td className="p-4 text-[#A797F7]">50%</td>
                      <td className="p-4">Upon signing</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-white font-medium">Interim</td>
                      <td className="p-4 text-[#A797F7]">Monthly</td>
                      <td className="p-4">For projects &gt; 3 months</td>
                    </tr>
                     <tr>
                      <td className="p-4 text-white font-medium">Final Balance</td>
                      <td className="p-4 text-[#A797F7]">Remainder</td>
                      <td className="p-4">30 days from delivery</td>
                    </tr>
                  </tbody>
                </table>
             </div>
             
             <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-neutral-500 bg-neutral-900/50 p-4 rounded-xl">
                <div>
                   <span className="text-white font-medium">Accepted:</span> SEPA, PostFinance, TWINT, Cards (+2.5%)
                </div>
                <div className="text-xs">
                   Late fees: 5% annual interest + CHF 50 admin fee.
                </div>
             </div>
          </Section>

          {/* Section 6: IP Rights */}
          <Section 
            number="06" title="Intellectual Property" icon={Copyright}
            isOpen={openSection === "ip"} toggle={() => toggleSection("ip")}
          >
             <div className="grid md:grid-cols-2 gap-0 border border-neutral-800 rounded-2xl overflow-hidden">
                <div className="bg-neutral-900/80 p-6 border-b md:border-b-0 md:border-r border-neutral-800">
                   <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                     <CheckCircle2 size={16} className="text-green-500" /> Transferred to Customer
                   </h4>
                   <ul className="space-y-2 text-sm text-neutral-300">
                     <li>• Project-specific source code</li>
                     <li>• Custom design & graphics</li>
                     <li>• Ad hoc content</li>
                     <li>• Databases</li>
                   </ul>
                </div>
                <div className="bg-neutral-900/30 p-6">
                   <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                     <Lock size={16} className="text-[#A797F7]" /> Remains at North Star
                   </h4>
                   <ul className="space-y-2 text-sm text-neutral-300">
                     <li>• Proprietary frameworks</li>
                     <li>• Generic reusable code</li>
                     <li>• Internal tools</li>
                     <li>• Methodology know-how</li>
                   </ul>
                </div>
             </div>
             <p className="mt-4 text-xs text-neutral-500">
               Note: Third-party components (Open Source, Commercial) are subject to their respective licenses.
             </p>
          </Section>

          {/* Section 7: Warranty */}
          <Section 
            number="07" title="Warranty & Liability" icon={ShieldAlert}
            isOpen={openSection === "warranty"} toggle={() => toggleSection("warranty")}
          >
             <div className="flex flex-col gap-4">
               <div className="p-4 border-l-2 border-green-500 bg-neutral-900/50">
                 <h4 className="text-white font-bold text-sm mb-1">90-Day Bug Fix Warranty</h4>
                 <p className="text-xs text-neutral-400">We guarantee code compliance and bug fixes for 90 days post-delivery.</p>
               </div>
               
               <div className="p-4 border-l-2 border-red-500 bg-neutral-900/50">
                 <h4 className="text-white font-bold text-sm mb-1">Limitations (Art. 97-101 CO)</h4>
                 <ul className="text-xs text-neutral-400 space-y-1 mt-2">
                   <li>• Max compensation: Total contract value</li>
                   <li>• Excludes: Indirect damages, loss of profit, data loss</li>
                   <li>• Claim deadline: 12 months</li>
                 </ul>
               </div>
             </div>
          </Section>

          {/* Section 8: Confidentiality */}
          <Section 
            number="08" title="Confidentiality" icon={Lock}
            isOpen={openSection === "confidentiality"} toggle={() => toggleSection("confidentiality")}
          >
             <p className="mb-4">Both parties agree to protect trade secrets, financial data, and source code.</p>
             <div className="flex items-center gap-4 text-sm font-medium text-white">
               <span className="px-3 py-1 rounded bg-[#A797F7]/20 text-[#A797F7] border border-[#A797F7]/30">Duration: 5 Years</span>
               <span className="text-neutral-500">Processing via GDPR/nLPD standards.</span>
             </div>
          </Section>

          {/* Section 9: Termination */}
          <Section 
            number="09" title="Resolution & Withdrawal" icon={XCircle}
            isOpen={openSection === "termination"} toggle={() => toggleSection("termination")}
          >
             <div className="grid md:grid-cols-2 gap-6">
                <div>
                   <h4 className="text-white font-medium mb-2">Notice Periods</h4>
                   <ul className="space-y-1 text-sm">
                     <li><strong>Projects:</strong> 60 days</li>
                     <li><strong>Hosting:</strong> 30 days</li>
                   </ul>
                </div>
                <div>
                   <h4 className="text-white font-medium mb-2">Just Cause</h4>
                   <p className="text-sm">Serious breach, Non-payment (&gt;60 days), Insolvency.</p>
                </div>
             </div>
          </Section>

           {/* Section 10: Final */}
           <Section 
            number="10" title="Final Provisions" icon={Gavel}
            isOpen={openSection === "final"} toggle={() => toggleSection("final")}
          >
             <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
               <div className="flex items-center gap-2 mb-2">
                 <Globe2 size={16} className="text-[#A797F7]" />
                 <span className="text-white font-bold">Jurisdiction</span>
               </div>
               <p className="text-sm">Swiss Law applies. Exclusive jurisdiction: <strong>Courts of Bellinzona, Ticino</strong>.</p>
             </div>
          </Section>

        </div>


      </div>
    </div>
  );
}