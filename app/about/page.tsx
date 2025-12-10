import AboutSection from "@/components/about/AboutSection";
import Footer from "@/components/contact/Footer";
import Navbar from "@/components/landing/Navbar";


export default function Page() {
    return (
        <main className=" font-raleway">
            <Navbar />

            <section className="bg-black">
                <AboutSection />
                <Footer/>
            </section>
        </main>
    )
}