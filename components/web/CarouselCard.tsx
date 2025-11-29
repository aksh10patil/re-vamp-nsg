"use client"

import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Gamepad2, 
  Layout, 
  Mail, 
  Box, 
  Cpu, 
  ShoppingBag,
  Edit,
  Zap,
  Sparkles,
  MousePointerClick
} from 'lucide-react';

// --- Custom Hooks for Animations ---

const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return count;
};

// --- Components ---

interface CardProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
  accentColor?: string;
}

const Card = ({ children, className = "", noPadding = false, accentColor = "#A797F7" }: CardProps) => (
  <div 
    className={`relative group overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 transition-all duration-500 ${className}`}
  >
    <div 
      className="absolute inset-0 border-2 border-transparent group-hover:border-current opacity-0 group-hover:opacity-50 transition-all duration-500 rounded-3xl pointer-events-none z-20"
      style={{ color: accentColor }}
    />
    <div 
      className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" 
      style={{
        background: `linear-gradient(135deg, ${accentColor}15 0%, transparent 100%)`
      }}
    />
    <div className={`relative z-30 h-full ${noPadding ? '' : 'p-8'}`}>
      {children}
    </div>
  </div>
);

// 1. Professional Hosting Card
const HostingCard = () => {
  return (
    <Card className="col-span-1 md:col-span-1 lg:col-span-4 min-h-[400px]">
      <div className="h-full flex flex-col justify-between relative overflow-hidden">
        {/* Orbit Animation Container */}
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] pointer-events-none opacity-50 md:opacity-100">
          <div className="absolute inset-0 border border-zinc-800 rounded-full" />
          <div className="absolute inset-[15%] border border-zinc-800 rounded-full" />
          <div className="absolute inset-[30%] border border-zinc-800 rounded-full" />
          
          {/* Orbiting Icons */}
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-zinc-950 p-2 rounded-full border border-zinc-800 text-[#A797F7] shadow-[0_0_15px_rgba(167,151,247,0.3)]">
              <Zap size={20} />
            </div>
          </div>
          <div className="absolute inset-[15%] animate-spin-reverse-slower">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 bg-zinc-950 p-2 rounded-full border border-zinc-800 text-white">
               <Cpu size={18} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-auto relative z-20 max-w-md">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[#A797F7] text-xs font-medium mb-4 border border-[#A797F7]/20">
            <Cpu size={14} />
            <span>99.9% Uptime</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Professional <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Hosting</span>
          </h3>
          <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
            Your business deserves a home that is secure, fast, and always online. We provide professional-grade infrastructure that scales with you.
          </p>
        </div>
      </div>
    </Card>
  );
};

// 2. Ecommerce Opportunity Card
const OpportunityCard = () => {
  const count = useCounter(24, 3000); // 24/7
  
  const dots = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    active: Math.random() > 0.8,
    delay: Math.random() * 2
  }));

  return (
    <Card className="col-span-1 md:col-span-1 lg:col-span-5 min-h-[400px]">
      <div className="h-full flex flex-col relative">
        <div className="relative z-10">
          <h3 className="text-3xl font-bold text-white mb-2">
            People shop online, <br />
            <span className="text-[#A797F7]">don't miss the opportunity</span>
          </h3>
          <p className="text-zinc-400 text-sm max-w-xs mb-8">
            The digital market never sleeps. Ensure your products are visible to the world every single second.
          </p>
        </div>

        {/* Abstract Map Visualization */}
        <div className="absolute inset-0 top-20 opacity-40 mask-image-linear-gradient">
           <div className="grid grid-cols-8 gap-4 transform rotate-12 scale-110 translate-x-10">
              {dots.map((dot) => (
                <div 
                  key={dot.id}
                  className={`
                    w-2 h-2 rounded-full 
                    ${dot.active ? 'bg-[#A797F7] shadow-[0_0_10px_#A797F7]' : 'bg-zinc-800'}
                    ${dot.active ? 'animate-pulse' : ''}
                  `}
                  style={{ animationDelay: `${dot.delay}s` }}
                />
              ))}
           </div>
        </div>
        
        {/* Bottom Stats */}
        <div className="mt-auto pt-10 relative z-10">
          <div className="flex items-baseline gap-1">
            <span className="text-6xl font-bold text-white tracking-tighter">
              {count}/7
            </span>
          </div>
          <span className="text-xl text-zinc-500 font-medium">Always Open</span>
          
          <div className="absolute bottom-0 right-0 p-4 bg-[#A797F7]/10 rounded-full animate-bounce-slow">
             <ShoppingBag className="text-[#A797F7]" size={32} />
          </div>
        </div>
      </div>
    </Card>
  );
};

// 3. User Friendly / Editable Card
const UserFriendlyCard = () => {
  const editCount = useCounter(100);
  
  const icons = [
    { Icon: Edit, color: "text-blue-400" },
    { Icon: Layout, color: "text-amber-500" },
    { Icon: MousePointerClick, color: "text-white" },
    { Icon: Zap, color: "text-[#A797F7]" },
  ];

  return (
    <Card className="col-span-1 md:col-span-1 lg:col-span-5 min-h-[350px]">
       {/* Top Row Icons */}
       <div className="flex gap-3 mb-12">
          {icons.map((item, idx) => (
            <div key={idx} className="w-12 h-12 bg-zinc-800/50 rounded-xl flex items-center justify-center border border-zinc-700/50 hover:scale-110 hover:bg-zinc-800 transition-all duration-300 cursor-pointer group/icon">
              <item.Icon size={24} className={`${item.color} opacity-70 group-hover/icon:opacity-100`} />
            </div>
          ))}
       </div>

       <div className="flex justify-between items-end">
         <div>
            <div className="text-5xl font-bold text-white mb-2 tabular-nums">
              {editCount}%
              <span className="block text-3xl text-zinc-500 font-normal mt-1">Editable</span>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-white mb-2">Sites Easily <br/> Editable & Friendly</h4>
              <p className="text-zinc-500 text-xs max-w-[200px]">
                No coding required. We build sites that you can easily update, manage, and grow on your own terms.
              </p>
            </div>
         </div>

         {/* Visual representation of ease */}
         <div className="w-32 h-32 bg-zinc-800/50 rounded-2xl border border-zinc-700/50 flex flex-col p-3 relative overflow-hidden group hover:border-[#A797F7] transition-colors">
            <div className="h-2 w-1/2 bg-zinc-600 rounded mb-2" />
            <div className="h-2 w-3/4 bg-zinc-700 rounded mb-2" />
            <div className="h-16 w-full bg-zinc-900 rounded border border-zinc-700/50 flex items-center justify-center text-xs text-zinc-500">
               Drag & Drop
            </div>
            {/* Cursor */}
            <div className="absolute bottom-2 right-2 text-[#A797F7] animate-bounce">
               <MousePointerClick size={20} fill="#A797F7" />
            </div>
         </div>
       </div>
    </Card>
  );
};

// 4. New Age Perspective Card
const PerspectiveCard = () => {
  return (
    <Card className="col-span-1 md:col-span-1 lg:col-span-4 min-h-[350px] overflow-visible">
       <div className="flex items-center gap-2 mb-2">
         <Sparkles className="text-[#A797F7]" size={20} />
         <span className="text-[#A797F7] text-xs font-bold uppercase tracking-wider">New Age Vision</span>
       </div>
       <h3 className="text-3xl font-bold text-white mb-2">
         A young <br />
         <span className="text-zinc-500">point of view</span>
       </h3>
       <p className="text-zinc-400 text-sm mb-8">
         We've grown in the new age of tech. We don't just follow trends; we understand the native language of the modern web.
       </p>

       <div className="relative mt-8">
         {/* Stacked Cards Effect */}
         <div className="absolute top-0 left-0 right-0 h-32 bg-zinc-800 rounded-2xl transform scale-90 -translate-y-6 opacity-30" />
         <div className="absolute top-0 left-0 right-0 h-32 bg-zinc-800 rounded-2xl transform scale-95 -translate-y-3 opacity-60" />
         
         {/* Main Card */}
         <div className="relative bg-zinc-950 border border-zinc-800 p-5 rounded-2xl shadow-xl hover:border-[#A797F7]/30 transition-colors cursor-default">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#A797F7] to-purple-900 flex items-center justify-center text-white font-bold text-xs">
                GZ
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Gen Z Built</div>
                <div className="text-zinc-500 text-xs">@future_ready</div>
              </div>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed">
              "Finally, a team that understands <span className="text-[#A797F7]">modern aesthetics</span> and speed. They bring a fresh energy that old agencies just lack."
            </p>
         </div>
       </div>
    </Card>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 lg:p-12 selection:bg-[#A797F7]/30">
      
      {/* Dynamic Styles for Animations */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse-slower {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse-slower {
          animation: spin-reverse-slower 30s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
             <div className="w-3 h-3 rounded-full bg-[#A797F7] animate-pulse" />
             <span className="text-[#A797F7] font-mono text-sm tracking-widest uppercase">System Operational</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Infrastructure for <br/>
            <span className="text-[#A797F7]">modern applications</span>
          </h1>
        </header>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-6 mb-24">
          <HostingCard />
          <OpportunityCard />
          <UserFriendlyCard />
          <PerspectiveCard />
        </div>
        
      </div>
    </div>
  );
}