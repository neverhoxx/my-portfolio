import Hero from "@/components/shared/hero";
import Features from "@/components/shared/features";
import RecentProjects from "@/components/shared/projects";
import Reviews from "@/components/shared/reviews";
import Experience from "@/components/shared/experince";
import Approach from "@/components/shared/approach";

//import Footer from "@/components/shared/footer";
//import Faq from "@/components/shared/faq";

//<Faq />
//<Footer />

export default function Home() {
  return (
    <div className="flex flex-col flex-auto-1">
      <Hero />
      <Features />
      <RecentProjects />
      <Reviews />
      <Experience />
      <Approach />
    </div >
  );
}
