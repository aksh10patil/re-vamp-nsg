import Footer from "@/components/contact/Footer";
import Navbar from "@/components/landing/Navbar";
import TestimonialSection from "@/components/landing/TestimonialSection";
import ScrollingShowcase from "@/components/product/ScrollingShowcase";
import AddOnsSection from "@/components/web/AddOnSection";
import CarouselCard from "@/components/web/CarouselCard";
import FeaturesGridWeb from "@/components/web/FeaturesGridWeb";
import PricingSection from "@/components/web/PricingSection";
import SolutionSection from "@/components/web/SolutionSection";
import TailoredSolutions from "@/components/web/TailoredSolutions";
import TicinoInnovation from "@/components/web/TicinoInnovation";
import TicinoLocations from "@/components/web/TicinoLocations";
import WebMasterAI from "@/components/web/WebMasterAI";
import WhyNeedWebsite from "@/components/web/WhyNeedWebsite";

export default function Page() {
    return (
        <main className="font-raleway">
            <Navbar />

            <section className="bg-black">
                <FeaturesGridWeb />
                <ScrollingShowcase />
                <CarouselCard />
                <WhyNeedWebsite />
                <SolutionSection />
                <TicinoInnovation />
                <WebMasterAI />
                <PricingSection />
                <AddOnsSection />
                <TicinoLocations />
                <TailoredSolutions />
                <TestimonialSection />
                <Footer />
            </section>
        </main>
    )
}