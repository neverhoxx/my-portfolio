import { Container } from "@/components/shared/container";

import AboutHero from "@/components/shared/about/hero";
import Facts from "@/components/shared/about/facts";

//import Footer from "@/components/shared/footer";
//import Faq from "@/components/shared/faq";

import AboutFeatures from "@/components/shared/about/whatican";

/*
    <Faq />
    <Footer />
*/

export default function About() {
    return (
        <div className="flex flex-col flex-auto-1">
            <AboutHero />
            <Facts />
            <AboutFeatures />

        </div >

    );
}

