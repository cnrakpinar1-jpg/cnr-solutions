import { ContactSection } from "@/components/sections/ContactSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { Footer } from "@/components/sections/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { SolutionSection } from "@/components/sections/SolutionSection";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[linear-gradient(180deg,rgba(125,211,252,0.1),rgba(6,8,22,0))] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[22rem] h-[120rem] bg-[linear-gradient(180deg,rgba(8,12,24,0),rgba(16,24,40,0.36)_8%,rgba(10,14,26,0.18)_28%,rgba(8,12,24,0.3)_52%,rgba(10,14,26,0.14)_74%,rgba(8,12,24,0))] blur-2xl"
      />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PortfolioSection />
      <ProcessSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
