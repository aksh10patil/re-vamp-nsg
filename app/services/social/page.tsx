import Footer from "@/components/contact/Footer";
import Navbar from "@/components/landing/Navbar";
import TestimonialSection from "@/components/landing/TestimonialSection";
import SocialMediaFeatures from "@/components/social/SocialMediaFeatures";
import TailoredSolutionsSocial from "@/components/social/TailoredSolutionsSocial";
import SocialMediaWorkflow from "@/components/social/Workflow";

export default function Page() {
    return (
        <main className=" font-raleway">
            <Navbar />

           <section className="bg-black">
                <SocialMediaFeatures />
                <SocialMediaWorkflow />
                <TailoredSolutionsSocial />
                <TestimonialSection />
                <Footer />
            </section>
        </main>
    )
}