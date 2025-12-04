import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, 
  Factory, 
  Briefcase, 
  Plane, 
  Building2, 
  Utensils, 
  HeartPulse, 
  GraduationCap,
  ArrowUpRight
} from 'lucide-react';

// --- Types ---
interface Industry {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
}

// --- Data ---
const industries: Industry[] = [
  { 
    id: 'ecom',
    name: 'E-commerce', 
    icon: ShoppingCart, 
    description: 'Vetrine scalabili e processi di checkout senza interruzioni.' 
  },
  { 
    id: 'ind',
    name: 'Industria', 
    icon: Factory, 
    description: 'Integrazione IoT e automazione intelligente per la produzione.' 
  },
  { 
    id: 'serv',
    name: 'Servizi', 
    icon: Briefcase, 
    description: 'Sistemi di prenotazione e CRM ottimizzati per professionisti.' 
  },
  { 
    id: 'tour',
    name: 'Turismo', 
    icon: Plane, 
    description: 'Piattaforme di prenotazione immersive e guide di viaggio.' 
  },
  { 
    id: 'real',
    name: 'Immobiliare', 
    icon: Building2, 
    description: 'Tour virtuali e motori dinamici per annunci immobiliari.' 
  },
  { 
    id: 'cat',
    name: 'Ristorazione', 
    icon: Utensils, 
    description: 'Ordini online e sistemi avanzati di gestione inventario.' 
  },
  { 
    id: 'health',
    name: 'Sanità', 
    icon: HeartPulse, 
    description: 'App di telemedicina e portali sicuri per i dati dei pazienti.' 
  },
  { 
    id: 'edu',
    name: 'Educazione', 
    icon: GraduationCap, 
    description: 'Piattaforme LMS e strumenti e-learning interattivi.' 
  },
];

// --- Sub-components ---

const BackgroundParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
       {[...Array(20)].map((_, i) => (
         <div 
            key={i}
            className="absolute rounded-full bg-[#A797F7]/10 blur-sm animate-float-random"
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDuration: Math.random() * 10 + 10 + 's',
              animationDelay: Math.random() * 5 + 's',
            }}
         />
       ))}
    </div>
  );
};

const IndustryCard = ({ item, index }: { item: Industry; index: number }) => {
  return (
    <div 
      className="group relative h-64 w-full bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:border-[#A797F7]/50 hover:shadow-[0_0_30px_rgba(167,151,247,0.15)]"
      style={{
        animation: `fadeInUp 0.6s ease-out forwards ${index * 100}ms`,
        opacity: 0,
        transform: 'translateY(20px)'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#A797F7]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
        
        <div className="flex justify-between items-start">
          <div className="p-3 bg-neutral-800 rounded-xl group-hover:bg-[#A797F7] group-hover:text-white transition-colors duration-300 text-[#A797F7]">
            <item.icon size={28} />
          </div>
          <ArrowUpRight 
            className="text-neutral-600 group-hover:text-[#A797F7] group-hover:rotate-45 transition-all duration-300 transform translate-x-2 -translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" 
            size={24}
          />
        </div>

        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#C4BBF9]">
            {item.name}
          </h3>
          <p className="text-sm text-neutral-400 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 transform translate-y-4 group-hover:translate-y-0 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>

      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#A797F7]/5 rounded-full blur-2xl group-hover:bg-[#A797F7]/20 transition-all duration-500 group-hover:scale-150" />
    </div>
  );
};

// --- Main Component ---

export default function ServingIndustries() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6 relative selection:bg-[#A797F7]/30">
      
      <style>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float-random {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(10px, -15px); }
          50% { transform: translate(-5px, 10px); }
          75% { transform: translate(-15px, -5px); }
        }
        .animate-float-random {
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>

      <BackgroundParticles />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#A797F7]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block py-1 px-3 rounded-full bg-[#A797F7]/10 border border-[#A797F7]/20 text-[#A797F7] text-xs font-bold tracking-widest uppercase">
            Settori
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Costruiamo per <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A797F7] to-white">Ogni Settore</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Dai flussi e-commerce alle automazioni industriali più complesse, le nostre soluzioni si adattano al tuo mercato.
          </p>
        </div>

        {/* Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard 
              key={industry.id} 
              item={industry} 
              index={index} 
            />
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-2 text-neutral-400 text-sm">
                <span>Non vedi il tuo settore?</span>
                <a
                  href="https://cal.northstargroup.ch/nsg/book"
                  className="text-[#A797F7] font-semibold hover:text-white transition-colors 
                            border-b border-[#A797F7] hover:border-white pb-0.5"
                >
                  Parliamo di soluzioni su misura
                </a>
            </div>
        </div>

      </div>
    </div>
  );
}
