import { Hero } from "@/components/hero/hero";
import { ProblemSection } from "@/components/sections/problem";
import { SolutionSection } from "@/components/sections/solution";
import { ProductsSection } from "@/components/sections/products";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ComparisonSection } from "@/components/sections/comparison";
import { PricingSection } from "@/components/sections/pricing";
import { FAQSection } from "@/components/sections/faq";
import { FinalCTASection } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ProductsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ComparisonSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
