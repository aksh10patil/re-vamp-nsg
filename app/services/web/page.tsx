import Footer from "@/components/contact/Footer";
import Navbar from "@/components/landing/Navbar";
import TestimonialSection from "@/components/landing/TestimonialSection";
import FeaturesGrid from "@/components/product/FeaturesGrid";
import ShowcaseScroll from "@/components/product/ScrollingShowcase";
import CarouselCard from "@/components/web/CarouselCard";

export default function Page() {
    return (
        <main className=" font-raleway">
            <Navbar />

            <section>
                <FeaturesGrid />
                <CarouselCard />
                <ShowcaseScroll />
                <TestimonialSection />
                <Footer />
            </section>
        </main>
    )
}