import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Steps } from "@/components/sections/steps";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Steps />
      <Testimonials />
      <Pricing />
      <Faq />
      <Cta />
    </>
  );
}
