import AppDevFeatures from "@/components/app/AppDevFeatures";
import AppDevelopmentWorkflow from "@/components/app/AppWorkflow";
import TailouredSolutionsApp from "@/components/app/TailouredSolutionsApp";
import Footer from "@/components/contact/Footer";
import Navbar from "@/components/landing/Navbar";
import TestimonialSection from "@/components/landing/TestimonialSection";
import FeaturesGrid from "@/components/product/FeaturesGrid";
import ShowcaseScroll from "@/components/product/ScrollingShowcase";
import TailoredSolutions from "@/components/web/TailoredSolutions";

export default function Page() {
    return (
        <main className=" font-raleway">
            <Navbar />

            <section className="bg-black">
                <AppDevFeatures />
                <AppDevelopmentWorkflow />
                <TailouredSolutionsApp />
                <TestimonialSection />
                <Footer />
            </section>
        </main>
    )
}