import { Hero } from "@/components/sections/Hero";
import { Solutions } from "@/components/sections/Solutions";
import { Industries } from "@/components/sections/Industries";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <Industries />
      <HowItWorks />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
