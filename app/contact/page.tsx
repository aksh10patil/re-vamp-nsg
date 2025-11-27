
import ContactSection from "@/components/contact/Contact";
import Footer from "@/components/contact/Footer";
import Navbar from "@/components/landing/Navbar";

export default function Page() {
    return (
        <main className=" font-raleway">
            <Navbar />

            <section>
                <ContactSection />
                
            <section className="bg-black">
                <Footer />
            </section>
                
            </section>
        </main>
    )
}