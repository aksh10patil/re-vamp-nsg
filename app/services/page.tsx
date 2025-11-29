import Footer from "@/components/contact/Footer";
import AnimationCard from "@/components/landing/AnimationCard";
import AnimationCardContinued from "@/components/landing/AnimationCardContinued";
import Navbar from "@/components/landing/Navbar";
import TestimonialSection from "@/components/landing/TestimonialSection";
import FeaturesGrid from "@/components/product/FeaturesGrid";
import ShowcaseScroll from "@/components/product/ScrollingShowcase";

export default function Page() {
    return (
        <main className="font-raleway">
            <Navbar />

            <section className="bg-black">
                <FeaturesGrid />
                <AnimationCardContinued />
                <ShowcaseScroll />
                <TestimonialSection />
                <Footer />
            </section>
        </main>
    )
}