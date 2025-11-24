"use client";

import dynamic from "next/dynamic";

// --- Standard Imports (Load immediately for SEO & LCP) ---
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Footer from "@/components/landing/FooterCTA";
import FooterCTA from "@/components/landing/FooterCTA";
// import AnimatedFooter from "@/components/landing/AnimatedFooter";

// --- Dynamic Imports (Load on client side only to fix 'window' error) ---

// If DashboardPreview uses 3D or heavy motion, lazy load it. 
// If it's just an image, you can switch this back to a standard import.
const DashboardPreview = dynamic(() => import("@/components/landing/DashboardPreview"), { 
  ssr: false 
});

const WhyChooseUs = dynamic(() => import("@/components/landing/WhyChooseUs"), { 
  ssr: false 
});

// This is the likely cause of your build error
const AnimationCard = dynamic(() => import("@/components/landing/AnimationCard"), { 
  ssr: false 
});

const TestimonialSection = dynamic(() => import("@/components/landing/TestimonialSection"), { 
  ssr: false 
});

const FAQSection = dynamic(() => import("@/components/landing/FAQSection"), { 
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

      <section>
        <FooterCTA />
        {/* <AnimatedFooter /> */}
      </section>
    </main>
  );
}