import Footer from "@/components/contact/Footer";
import DataProcessors from "@/components/data/Data";

import Navbar from "@/components/landing/Navbar";
import PrivacyPolicy from "@/components/privacy/PrivacyPolicy";


export default function Page() {
    return (
        <main className="font-raleway">
            <Navbar />

            <section className="bg-black">
                <DataProcessors />
                <Footer />
            </section>
        </main>
    )
}