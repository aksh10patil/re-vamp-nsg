"use client"

import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Gamepad2, 
  MessageSquare, 
  Youtube, 
  Slack, 
  Mail, 
  Box, 
  Terminal,
  Cpu,
  Zap,
  Layout,
  Users,
  ShoppingBag,
  Home,
  FileText,
  Utensils,
  ArrowUpRight,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

// --- Custom Hooks for Animations ---

const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // Easing function for smooth stop
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
  accentColor?: string; // Optional custom accent color
}

const Card = ({ children, className = "", noPadding = false, accentColor = "#A797F7" }: CardProps) => (
  <div 
    className={`relative group overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 transition-all duration-500 ${className}`}
  >
    {/* Dynamic Hover Border - z-20 sits behind content (z-30) but above background */}
    <div 
      className="absolute inset-0 border-2 border-transparent group-hover:border-current opacity-0 group-hover:opacity-50 transition-all duration-500 rounded-3xl pointer-events-none z-20"
      style={{ color: accentColor }}
    />

    {/* Dynamic Hover Glow - z-10 sits at the bottom */}
    <div 
      className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" 
      style={{
        background: `linear-gradient(135deg, ${accentColor}15 0%, transparent 100%)`
      }}
    />
    
    {/* Content - z-30 ensures it is always clickable and visible above effects */}
    <div className={`relative z-30 h-full ${noPadding ? '' : 'p-8'}`}>
      {children}
    </div>
  </div>
);

// 1. Hosting / Orbit Card
const HostingCard = () => {
  return (
    <Card className="col-span-1 md:col-span-1 lg:col-span-4 min-h-[400px]">
      <div className="h-full flex flex-col justify-between relative overflow-hidden">
        {/* Orbit Animation Container */}
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] pointer-events-none opacity-50 md:opacity-100">
          {/* Circles */}
          <div className="absolute inset-0 border border-zinc-800 rounded-full" />
          <div className="absolute inset-[15%] border border-zinc-800 rounded-full" />
          <div className="absolute inset-[30%] border border-zinc-800 rounded-full" />
          
          {/* Orbiting Icons */}
          {/* Orbit 1 */}
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-zinc-950 p-2 rounded-full border border-zinc-800 text-[#A797F7] shadow-[0_0_15px_rgba(167,151,247,0.3)]">
              <Twitter size={20} />
            </div>
          </div>
          
          {/* Orbit 2 */}
          <div className="absolute inset-[15%] animate-spin-reverse-slower">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 bg-zinc-950 p-2 rounded-full border border-zinc-800 text-white">
               <Linkedin size={18} />
            </div>
            <div className="absolute top-1/2 right-0 translate-x-4 -translate-y-1/2 bg-zinc-950 p-2 rounded-full border border-zinc-800 text-white">
               <Facebook size={18} />
            </div>
          </div>

           {/* Orbit 3 */}
           <div className="absolute inset-[30%] animate-spin-slow">
            <div className="absolute top-1/2 left-0 -translate-x-4 -translate-y-1/2 bg-zinc-950 p-2 rounded-full border border-zinc-800 text-zinc-400">
               <Gamepad2 size={16} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-auto relative z-20 max-w-md">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A797F7]/10 text-[#A797F7] text-xs font-medium mb-4 border border-[#A797F7]/20">
            <Cpu size={14} />
            <span>Edge Network</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Hosting over <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">the edge</span>
          </h3>
          <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
            With our edge network, we host your website by going into each city by ourselves. 
            Delivering content faster than ever before.
          </p>
        </div>
      </div>
    </Card>
  );
};

// 2. Global Availability Card
const GlobalCard = () => {
  const count = useCounter(100);
  
  // Generating a grid of dots to simulate a map aesthetic
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
            Available in <br />
            <span className="text-[#A797F7]">every country</span>
          </h3>
          <p className="text-zinc-400 text-sm max-w-xs mb-8">
            Access our platform from anywhere in the world with our globally distributed network.
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
              {count}+
            </span>
          </div>
          <span className="text-xl text-zinc-500 font-medium">Countries</span>
          
          {/* Animated Globe Icon */}
          <div className="absolute bottom-0 right-0 p-4 bg-[#A797F7]/10 rounded-full animate-bounce-slow">
             <Globe className="text-[#A797F7]" size={32} />
          </div>
        </div>
      </div>
    </Card>
  );
};

// 3. Adoption Card
const AdoptionCard = () => {
  const userCount = useCounter(542);
  
  const icons = [
    { Icon: Youtube, color: "text-red-500" },
    { Icon: Slack, color: "text-amber-500" },
    { Icon: Layout, color: "text-white" }, // Simulated X logo
    { Icon: Mail, color: "text-blue-400" },
    { Icon: Box, color: "text-white" }
  ];

  const avatars = [
    "https://i.pravatar.cc/150?u=1",
    "https://i.pravatar.cc/150?u=2",
    "https://i.pravatar.cc/150?u=3",
    "https://i.pravatar.cc/150?u=4",
    "https://i.pravatar.cc/150?u=8",
    "https://i.pravatar.cc/150?u=6",
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
              {userCount},000
              <span className="block text-3xl text-zinc-500 font-normal mt-1">Users</span>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-white mb-2">Major <br/> User Adoption</h4>
              <p className="text-zinc-500 text-xs max-w-[200px]">
                Join our growing community of over 500,000 users who trust our platform.
              </p>
            </div>
         </div>

         {/* Avatar Grid */}
         <div className="grid grid-cols-3 gap-2">
            {avatars.map((src, i) => (
              <img 
                key={i} 
                src={src} 
                alt="User" 
                className="w-10 h-10 rounded-lg object-cover grayscale hover:grayscale-0 transition-all duration-300 border border-zinc-800 hover:border-[#A797F7]"
              />
            ))}
         </div>
       </div>
    </Card>
  );
};

// 4. Testimonial / "Love Us" Card
const TestimonialCard = () => {
  return (
    <Card className="col-span-1 md:col-span-1 lg:col-span-4 min-h-[350px] overflow-visible">
       <h3 className="text-3xl font-bold text-white mb-2">
         People <br />
         <span className="text-zinc-500">love us</span>
       </h3>
       <p className="text-zinc-400 text-sm mb-8">
         See what our users are saying about their experience with our platform.
       </p>

       <div className="relative mt-8">
         {/* Stacked Cards Effect */}
         <div className="absolute top-0 left-0 right-0 h-32 bg-zinc-800 rounded-2xl transform scale-90 -translate-y-6 opacity-30" />
         <div className="absolute top-0 left-0 right-0 h-32 bg-zinc-800 rounded-2xl transform scale-95 -translate-y-3 opacity-60" />
         
         {/* Main Card */}
         <div className="relative bg-zinc-950 border border-zinc-800 p-5 rounded-2xl shadow-xl hover:border-[#A797F7]/30 transition-colors cursor-default">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden">
                <img src="https://i.pravatar.cc/150?u=60" alt="Elijah" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Elijah Wireman</div>
                <div className="text-zinc-500 text-xs">@elijahw</div>
              </div>
              <Twitter className="ml-auto text-zinc-600" size={16} />
            </div>
                  <p className="text-zinc-300 text-sm leading-relaxed">
          Absolutely phenomenal team — <span className="bg-[#A797F7]/20 text-[#A797F7] px-1 rounded">outstanding work!</span> 
          Honestly, no one around here comes close to the quality they delivered. 
          <span className="text-[#A797F7] font-semibold hover:underline cursor-pointer"> Thank You NorthStarGroup</span>.
        </p>
         </div>
       </div>
    </Card>
  );
};

// --- New Section: Industry Expertise ---

const ProjectCard = ({ 
  title, 
  subtitle, 
  icon: Icon, 
  color,
  features 
}: { 
  title: string, 
  subtitle: string, 
  icon: any, 
  color: string,
  features: string[] 
}) => {
  return (
    <Card accentColor={color} className="col-span-1 md:col-span-2 lg:col-span-1 min-h-[300px] flex flex-col justify-between group/card relative">
      {/* Decorative Background Icon */}
      <div 
        className="absolute -right-12 -bottom-12 opacity-5 group-hover/card:opacity-10 transition-opacity duration-500 pointer-events-none"
        style={{ color: color }}
      >
         <Icon size={200} />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Header: Icon & Link */}
        <div className="flex justify-between items-start mb-6">
          <div 
            className="p-3 rounded-2xl text-white transition-all duration-300 group-hover/card:bg-transparent group-hover/card:p-0"
            style={{ backgroundColor: `${color}20`, color: color }}
          >
            <Icon size={32} className="transition-transform duration-300 group-hover/card:scale-90 group-hover/card:origin-top-left" />
          </div>
          <div className="p-2 rounded-full bg-white/5 text-zinc-400 group-hover/card:text-white group-hover/card:bg-white/10 transition-colors">
             <ArrowUpRight size={16} />
          </div>
        </div>
        
        {/* Title Section (Moves up on hover) */}
        <div className="transition-all duration-500 group-hover/card:-translate-y-2">
          <h4 className="text-2xl font-bold text-white mb-2 group-hover/card:text-transparent group-hover/card:bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, white, ${color})` }}>
            {title}
          </h4>
          {/* Subtitle hides on hover to make room for details */}
          <p className="text-zinc-400 text-sm leading-relaxed h-auto max-h-[100px] opacity-100 transition-all duration-300 group-hover/card:max-h-0 group-hover/card:opacity-0 overflow-hidden">
            {subtitle}
          </p>
        </div>

        {/* Detailed Features (Reveals on hover) */}
        <div className="mt-auto transform translate-y-4 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-500 delay-75 absolute bottom-8 left-8 right-8">
           <div className="space-y-3 mb-6">
              {features.map((feature, i) => (
                 <div key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                    <CheckCircle2 size={16} color={color} className="shrink-0" />
                    <span className="font-medium">{feature}</span>
                 </div>
              ))}
           </div>
           
           <button 
             className="w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all hover:brightness-110 active:scale-95"
             style={{ backgroundColor: `${color}20`, color: color }}
           >
              View Case Study <ArrowRight size={14} />
           </button>
        </div>
      </div>
    </Card>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-4 md:p-8 lg:p-12">
      
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
          <GlobalCard />
          <AdoptionCard />
          <TestimonialCard />
        </div>
        

        


      </div>
    </div>
  );
}