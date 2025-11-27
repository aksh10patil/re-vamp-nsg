import Footer from "@/components/contact/Footer";
import Navbar from "@/components/landing/Navbar";
import TestimonialSection from "@/components/landing/TestimonialSection";
import ScrollingShowcase from "@/components/product/ScrollingShowcase";
import CarouselCard from "@/components/web/CarouselCard";
import FeaturesGridWeb from "@/components/web/FeaturesGridWeb";
import TailoredSolutions from "@/components/web/TailoredSolutions";

export default function Page() {
    return (
        <main className="font-raleway">
            <Navbar />

            <section>
                <FeaturesGridWeb />
                <ScrollingShowcase />
                <CarouselCard />
                <TailoredSolutions />
                <TestimonialSection />
                <Footer />
            </section>
        </main>
    )
}