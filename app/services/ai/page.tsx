import FeaturesCard from "@/components/ai/FeatureCard";
import FeaturesGridAI from "@/components/ai/FeaturesGridAI";
import ProcessWorkflow from "@/components/ai/ProcessWorklfow";
import Footer from "@/components/contact/Footer";
import Navbar from "@/components/landing/Navbar";
import TestimonialSection from "@/components/landing/TestimonialSection";

export default function Page() {
    return (
        <main className=" font-raleway">
            <Navbar />

            <section>
                <FeaturesGridAI/>
                <FeaturesCard />
                <ProcessWorkflow />
                <TestimonialSection />
                <Footer />
            </section>
        </main>
    )
}