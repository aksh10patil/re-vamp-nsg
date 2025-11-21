"use client";

import dynamic from "next/dynamic";

// --- Standard Imports (Load immediately for SEO & LCP) ---
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// --- Dynamic Imports (Load on client side only to fix 'window' error) ---

// If DashboardPreview uses 3D or heavy motion, lazy load it. 
// If it's just an image, you can switch this back to a standard import.
const DashboardPreview = dynamic(() => import("@/components/DashboardPreview"), { 
  ssr: false 
});

const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"), { 
  ssr: false 
});

// This is the likely cause of your build error
const AnimationCard = dynamic(() => import("@/components/AnimationCard"), { 
  ssr: false 
});

const TestimonialSection = dynamic(() => import("@/components/TestimonialSection"), { 
  ssr: false 
});

const FAQSection = dynamic(() => import("@/components/FAQSection"), { 
  ssr: false 
});


export default function Page() {
  return (
    <main className="min-h-screen font-raleway">
      <Navbar />
      
      <section className="relative z-10 mt-30">
        <Hero />
      </section>

      <section className="px-6 md:px-12 lg:px-24 mt-16">
        <DashboardPreview />
        <WhyChooseUs />
        <AnimationCard />
        <TestimonialSection />
        <FAQSection />
      </section>
    </main>
  );
}