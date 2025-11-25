import Navbar from "@/components/landing/Navbar";
import TestimonialSection from "@/components/landing/TestimonialSection";
import FeaturesGrid from "@/components/product/FeaturesGrid";
import ShowcaseScroll from "@/components/product/ScrollingShowcase";

export default function Page() {
    return (
        <main className=" font-raleway">
            <Navbar />

            <section>
                <FeaturesGrid />
                <ShowcaseScroll />
                <TestimonialSection />
            </section>
        </main>
    )
}