import FeaturesCard from "@/components/ai/FeatureCard";
import FeaturesGridAI from "@/components/ai/FeaturesGridAI";
import ProcessWorkflow from "@/components/ai/ProcessWorklfow";
import Footer from "@/components/contact/Footer";
import Navbar from "@/components/landing/Navbar";
import TestimonialSection from "@/components/landing/TestimonialSection";
import FeaturesGrid from "@/components/product/FeaturesGrid";
import ShowcaseScroll from "@/components/product/ScrollingShowcase";

export default function Page() {
    return (
        <main className=" font-raleway">
            <Navbar />

            <section>
                <FeaturesGridAI/>
                <FeaturesCard />
                <ProcessWorkflow />



                <ShowcaseScroll />
                <TestimonialSection />

                <Footer />
            </section>
        </main>
    )
}