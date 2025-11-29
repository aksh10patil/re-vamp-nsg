import Footer from "@/components/contact/Footer";
import CookiePolicy from "@/components/cookie/Cookie";

import Navbar from "@/components/landing/Navbar";


export default function Page() {
    return (
        <main className="font-raleway">
            <Navbar />

            <section className="bg-black">
                    <CookiePolicy />
               
                <Footer />
            </section>
        </main>
    )
}