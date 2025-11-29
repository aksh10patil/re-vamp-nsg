import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Smartphone, 
  Share2, 
  Bot, 
  ArrowRight, 
  Cpu, 
  Zap, 
  BarChart3, 
  CheckCircle2,
  Code2,
  Layers,
  MessageSquare,
  Database,
  Bell
} from 'lucide-react';

// --- Types & Interfaces ---
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string;
  children?: React.ReactNode;
  delay?: number;
}

// --- Components ---

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 text-xs font-medium tracking-wider text-[#A797F7] uppercase bg-[#A797F7]/10 rounded-full border border-[#A797F7]/20 mb-4 inline-block">
    {children}
  </span>
);

const Card = ({ title, description, icon: Icon, className = "", children, delay = 0 }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative overflow-hidden rounded-3xl bg-neutral-900/50 border border-neutral-800 p-8 transition-all duration-500 hover:border-[#A797F7]/30 group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${delay}ms`
      }}
    >
      {/* Background Gradient Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(167, 151, 247, 0.08), transparent 40%)'
        }}
      />

      <div className="relative z-10 h-full flex flex-col">
        <div className="mb-6 inline-flex p-3 rounded-2xl bg-neutral-800/50 border border-neutral-700/50 group-hover:bg-[#A797F7]/10 group-hover:border-[#A797F7]/20 transition-colors duration-300 w-fit">
          <Icon className="w-6 h-6 text-neutral-300 group-hover:text-[#A797F7] transition-colors" />
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#C4BBF9] transition-colors">
          {title}
        </h3>
        
        <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow max-w-[100%] sm:max-w-[70%] z-20">
          {description}
        </p>

        {children}
      </div>

      {/* Decorative Blur */}
      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#A797F7]/5 rounded-full blur-3xl group-hover:bg-[#A797F7]/10 transition-colors duration-500" />
    </div>
  );
};

// --- Custom Internal Components for specific cards ---

const TaskItem = ({ icon: Icon, text, delay }: { icon: any, text: string, delay: number }) => (
  <div 
    className="flex items-center gap-3 p-3 rounded-xl bg-neutral-800/40 border border-neutral-700/50 mb-3 transform transition-all duration-500 hover:translate-x-1 hover:bg-neutral-800/60"
    style={{ animation: `slideIn 0.5s ease-out forwards ${delay}ms`, opacity: 0 }}
  >
    <div className="p-2 rounded-lg bg-neutral-900 text-[#A797F7]">
      <Icon size={14} />
    </div>
    <span className="text-sm text-neutral-300 font-medium">{text}</span>
    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#A797F7]/50 animate-pulse" />
  </div>
);

// --- FIXED AI GRAPH COMPONENT ---
const AIGraph = () => {
  return (
    // Container positioned absolutely on the right side of the card
    <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[55%] h-full pointer-events-none">
      <div className="relative w-full h-full">
        
        {/* SVG Layer: 
            viewBox="0 0 100 100" establishes a 100x100 coordinate system.
            preserveAspectRatio="none" stretches the SVG to fill the container exactly,
            matching the percentage-based positioning of the HTML nodes.
        */}
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
        >
          <defs>
             <linearGradient id="trace-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(167, 151, 247, 0)" />
                <stop offset="50%" stopColor="rgba(167, 151, 247, 1)" />
                <stop offset="100%" stopColor="rgba(167, 151, 247, 0)" />
             </linearGradient>
          </defs>
          
          {/* Path 1: Trigger (15, 50) -> AI Core (50, 50) */}
          <path 
            d="M 15 50 C 35 50, 35 50, 50 50" 
            fill="none" 
            stroke="rgba(167, 151, 247, 0.2)" 
            strokeWidth="0.5" 
            vectorEffect="non-scaling-stroke"
          />
          <path 
            d="M 15 50 C 35 50, 35 50, 50 50" 
            fill="none" 
            stroke="url(#trace-gradient)" 
            strokeWidth="0.5" 
            vectorEffect="non-scaling-stroke"
            className="animate-trace"
          />

          {/* Path 2: AI Core (50, 50) -> Store (85, 25) */}
          <path 
            d="M 50 50 C 65 50, 65 25, 85 25" 
            fill="none" 
            stroke="rgba(167, 151, 247, 0.2)" 
            strokeWidth="0.5" 
            vectorEffect="non-scaling-stroke"
          />
           <path 
            d="M 50 50 C 65 50, 65 25, 85 25" 
            fill="none" 
            stroke="url(#trace-gradient)" 
            strokeWidth="0.5" 
            vectorEffect="non-scaling-stroke"
            className="animate-trace-delayed-1"
          />

          {/* Path 3: AI Core (50, 50) -> Notify (85, 75) */}
          <path 
            d="M 50 50 C 65 50, 65 75, 85 75" 
            fill="none" 
            stroke="rgba(167, 151, 247, 0.2)" 
            strokeWidth="0.5" 
            vectorEffect="non-scaling-stroke"
          />
           <path 
            d="M 50 50 C 65 50, 65 75, 85 75" 
            fill="none" 
            stroke="url(#trace-gradient)" 
            strokeWidth="0.5" 
            vectorEffect="non-scaling-stroke"
            className="animate-trace-delayed-2"
          />
        </svg>

        {/* HTML Nodes Layer:
            Positioned using left/top percentages that EXACTLY match the SVG coordinates above.
            transform: translate(-50%, -50%) centers the div on that coordinate point.
        */}
        
        {/* Trigger Node: (15%, 50%) */}
        <div className="absolute left-[15%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-2">
           <div className="w-10 h-10 bg-neutral-900 rounded-xl border border-neutral-700 flex items-center justify-center shadow-lg group-hover:border-[#A797F7]/50 transition-colors">
              <Zap size={18} className="text-yellow-400" />
           </div>
           <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Trigger</span>
        </div>

        {/* AI Core Node: (50%, 50%) */}
        <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2">
           <div className="w-16 h-16 bg-neutral-900 rounded-2xl border border-[#A797F7]/40 flex items-center justify-center shadow-[0_0_30px_rgba(167,151,247,0.15)] animate-pulse-slow">
              <Cpu className="text-[#A797F7] w-8 h-8" />
           </div>
           <span className="text-[10px] text-[#A797F7] font-mono font-bold uppercase tracking-wider">AI Core</span>
        </div>

        {/* Store Node: (85%, 25%) */}
        <div className="absolute left-[85%] top-[25%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-2">
           <div className="w-10 h-10 bg-neutral-900 rounded-xl border border-neutral-700 flex items-center justify-center shadow-lg group-hover:border-[#A797F7]/50 transition-colors">
              <Database size={18} className="text-blue-400" />
           </div>
           <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Store</span>
        </div>

        {/* Notify Node: (85%, 75%) */}
        <div className="absolute left-[85%] top-[75%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-2">
           <div className="w-10 h-10 bg-neutral-900 rounded-xl border border-neutral-700 flex items-center justify-center shadow-lg group-hover:border-[#A797F7]/50 transition-colors">
              <Bell size={18} className="text-pink-400" />
           </div>
           <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Notify</span>
        </div>

      </div>
    </div>
  );
};


// --- Main App Component ---

export default function App() {
  return (
    <div className="min-h-screen bg-black text-neutral-100 p-6 md:p-12 selection:bg-[#A797F7]/30">
      {/* Inline Styles for Animations */}
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes trace {
          0% { stroke-dasharray: 0, 100; stroke-dashoffset: 0; opacity: 0; }
          20% { opacity: 1; }
          100% { stroke-dasharray: 100, 0; stroke-dashoffset: -100; opacity: 0; }
        }
        .animate-trace {
          animation: trace 3s linear infinite;
        }
        .animate-trace-delayed-1 {
          animation: trace 3s linear infinite;
          animation-delay: 1s;
        }
        .animate-trace-delayed-2 {
          animation: trace 3s linear infinite;
          animation-delay: 1.5s;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes width {
          from { width: 0; }
          to { width: 85%; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <Badge>Our Expertise</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Digital Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A797F7] to-white">Modern Growth</span>
          </h1>
          <p className="text-neutral-400 text-lg">
            We transform businesses through cutting-edge technology, blending creativity with technical excellence to scale your vision.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. Website Development */}
          <Card 
            title="Website Development" 
            description="Blazing fast, SEO-optimized websites built with Next.js and React. We create digital experiences that convert visitors into customers."
            icon={Globe}
            delay={0}
          >
             <div className="mt-auto pt-4 flex gap-2">
                <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-[#A797F7] w-[85%] rounded-full animate-[width_2s_ease-in-out]" />
                </div>
                <span className="text-xs text-[#A797F7] font-mono">98% Perf</span>
             </div>
          </Card>

          {/* 2. App Development */}
          <Card 
            title="App Development" 
            description="Native and cross-platform mobile applications that provide seamless user experiences across iOS and Android devices."
            icon={Smartphone}
            delay={100}
          >
            <div className="mt-auto relative h-16 w-full bg-neutral-800/50 rounded-lg border border-neutral-700/50 overflow-hidden flex items-center justify-center group-hover:border-[#A797F7]/30 transition-colors">
              <div className="flex gap-4 opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                <Code2 size={24} className="text-blue-400" />
                <Layers size={24} className="text-white" />
                <Zap size={24} className="text-[#A797F7]" />
              </div>
            </div>
          </Card>

          {/* 3. Social Media Management */}
          <Card 
            title="Social Media Management" 
            description="Strategic content creation and community management to amplify your brand voice and engage your target audience."
            icon={Share2}
            delay={200}
          >
            <div className="mt-auto flex -space-x-3 pt-4">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-neutral-900 bg-neutral-800 flex items-center justify-center text-[10px] text-neutral-400 font-bold">
                   U{i}
                </div>
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-neutral-900 bg-[#A797F7] flex items-center justify-center text-[10px] text-white font-bold">
                +1k
              </div>
            </div>
          </Card>

          {/* 4. Integrated Strategy (Visual: List of tasks) */}
          <div className="md:col-span-1 min-h-[300px] md:h-auto">
            <Card 
              title="Strategic Operations" 
              description="We streamline your digital presence with a comprehensive management workflow."
              icon={BarChart3}
              className="h-full"
              delay={300}
            >
              <div className="mt-4 flex flex-col gap-1">
                <TaskItem icon={MessageSquare} text="Community Engagement" delay={100} />
                <TaskItem icon={BarChart3} text="Performance Analytics" delay={200} />
                <TaskItem icon={CheckCircle2} text="SEO & Content Audit" delay={300} />
              </div>
            </Card>
          </div>

          {/* 5. AI Solutions (Visual: Node Graph) */}
          <div className="md:col-span-2 min-h-[300px]">
            <Card 
              title="AI Solutions & Automation" 
              description="Leverage the power of Artificial Intelligence to automate workflows, analyze data, and create personalized user experiences."
              icon={Bot}
              className="h-full relative group"
              delay={400}
            >
              {/* Using the new fixed AIGraph component */}
              <div className="hidden sm:block">
                 <AIGraph />
              </div>
            </Card>
          </div>

        </div>

        {/* CTA Section */}
        <div className="flex justify-center pt-8">
           <button className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full flex items-center gap-2 hover:bg-[#A797F7] hover:text-white transition-all hover:pr-10 hover:shadow-[0_0_40px_rgba(167,151,247,0.4)]">
              Start Your Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
           </button>
        </div>

      </div>
    </div>
  );
}