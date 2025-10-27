import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import ValueProps from "@/components/sections/ValueProps";
import Tiers from "@/components/sections/Tiers";
import HowItWorks from "@/components/sections/HowItWorks";
import FeaturedMembers from "@/components/sections/FeaturedMembers";
import Partners from "@/components/sections/Partners";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <Tiers />
        <HowItWorks />
        <FeaturedMembers />
        <Partners />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
