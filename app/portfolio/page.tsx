import Footer from "@/components/contact/Footer";

import Navbar from "@/components/landing/Navbar";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import PrivacyPolicy from "@/components/privacy/PrivacyPolicy";


export default function Page() {
    return (
        <main className="font-raleway">
            <Navbar />

            <section className="bg-black">
                <PortfolioSection />
                <Footer />
            </section>
        </main>
    )
}