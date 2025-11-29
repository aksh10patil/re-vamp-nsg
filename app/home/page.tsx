"use client";

import dynamic from "next/dynamic";

// --- Standard Imports (Load immediately for SEO & LCP) ---
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Footer from "@/components/contact/Footer";
import FeaturesNew from "@/components/landing/FeaturesNew";
import ServingIndustries from "@/components/landing/ServingIndustries";

// --- Dynamic Imports (Load on client side only to fix 'window' error) ---

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
      
      <section className="relative z-10 ">
        <Hero />
      </section>

      <section className="w-full bg-black">
          <DashboardPreview />
          <FeaturesNew />
          <ServingIndustries />
          <WhyChooseUs />
          <AnimationCard />
          <TestimonialSection />
          <FAQSection />
          <Footer />
      </section>
    </main>
  );
}