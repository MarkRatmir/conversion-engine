import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPointSection from "@/components/PainPointSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CalculatorSection from "@/components/CalculatorSection";
import LeadFormSection from "@/components/LeadFormSection";
import FooterSection from "@/components/FooterSection";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PainPointSection />
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="calculator">
        <CalculatorSection />
      </section>
      <LeadFormSection />
      <FooterSection />
      <StickyMobileCTA />
    </main>
  );
};

export default Index;
