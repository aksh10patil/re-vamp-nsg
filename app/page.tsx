import Hero from "@/components/Hero";
import DashboardPreview from "@/components/DashboardPreview";
import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import AnimationCard from "@/components/AnimationCard";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";


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
        <AnimationCard/>
        <TestimonialSection />
        <FAQSection/>
      </section>
    </main>
  );
}
