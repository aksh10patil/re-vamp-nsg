import ChallengeAi from "@/components/ai/ChallengeAi";
import FeaturesCard from "@/components/ai/FeatureCard";
import FeaturesGridAI from "@/components/ai/FeaturesGridAI";
import FutureAi from "@/components/ai/FutureAi";
import ProcessWorkflow from "@/components/ai/ProcessWorklfow";
import Footer from "@/components/contact/Footer";
import FAQSection from "@/components/landing/FAQSection";
import Navbar from "@/components/landing/Navbar";
import TestimonialSection from "@/components/landing/TestimonialSection";
import AddOnsSection from "@/components/web/AddOnSection";
import PricingSection from "@/components/web/PricingSection";
import WebMasterAI from "@/components/web/WebMasterAI";

export default function Page() {
    return (
        <main className=" font-raleway">
            <Navbar />

           <section className="bg-black">
                <FeaturesGridAI/>
                <ChallengeAi />
                <FutureAi />
                <WebMasterAI />
                <PricingSection />
                <ProcessWorkflow />
                <AddOnsSection />
                <TestimonialSection />
                <FAQSection />
                <Footer />
            </section>
        </main>
    )
}