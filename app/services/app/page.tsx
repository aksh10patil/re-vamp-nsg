import AppDevFeatures from "@/components/app/AppDevFeatures";
import AppDevelopmentWorkflow from "@/components/app/AppWorkflow";
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
                <AppDevFeatures />
                <AppDevelopmentWorkflow />
                <TestimonialSection />
                <Footer />
            </section>
        </main>
    )
}