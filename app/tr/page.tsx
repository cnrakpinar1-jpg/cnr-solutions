import type { Metadata } from "next";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { TrHero } from "@/components/tr/TrHero";
import { TrProblem } from "@/components/tr/TrProblem";
import { TrDemoBridge } from "@/components/tr/TrDemoBridge";
import { TrFoundingProgram } from "@/components/tr/TrFoundingProgram";
import { TrProcess } from "@/components/tr/TrSetupProcess";
import { TrOpportunityCard } from "@/components/tr/TrOpportunityCard";
import { TrSectorScenarios } from "@/components/tr/TrSectorScenarios";
import { TrProofSimulation } from "@/components/tr/TrProofSimulation";
import { TrWhoWeServe } from "@/components/tr/TrWhoWeServe";
import { TrComparison } from "@/components/tr/TrComparison";
import { TrNormIQ } from "@/components/tr/TrNormIQ";
import { TrFounderNote } from "@/components/tr/TrFounderNote";
import { TrTrust } from "@/components/tr/TrTrust";
import { TrCta } from "@/components/tr/TrCta";
import { TrMobileStickyCta } from "@/components/tr/TrMobileStickyCta";
import { TrFloatingWhatsApp } from "@/components/tr/TrFloatingWhatsApp";

export const metadata: Metadata = {
  title: "Norm | Müşteri Akışı Standardı",
  description:
    "Norm, WhatsApp, Instagram, telefon ve web formundan gelen müşteri taleplerini tek akışta görünür hale getiren müşteri akışı sistemidir. Randevu, teklif ve bilgi taleplerini takip edin; geciken dönüşleri ve kaçan fırsat riskini görün.",
  openGraph: {
    title: "Norm | Müşteri Akışı Standardı",
    description:
      "Norm, WhatsApp, Instagram, telefon ve web formundan gelen müşteri taleplerini tek akışta görünür hale getiren müşteri akışı sistemidir. Randevu, teklif ve bilgi taleplerini takip edin; geciken dönüşleri ve kaçan fırsat riskini görün.",
  },
};

const navLinks = [
  { href: "#norm", label: "Norm" },
  { href: "#nasil-calisir", label: "Nasıl Çalışır?" },
  { href: "#kurucu-program", label: "Kurucu Program" },
  { href: "#kimler", label: "Kimler İçin?" },
  { href: "#rapor-ornegi", label: "Rapor Örneği" },
  { href: "#basvuru", label: "Başvur" },
];

export default function TrPage() {
  return (
    <main className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[linear-gradient(180deg,rgba(56,189,248,0.08),rgba(6,8,22,0))] blur-3xl"
      />
      <Header locale="tr" navLinks={navLinks} />
      <TrHero />
      <TrProblem />
      <TrDemoBridge />
      <TrFoundingProgram />
      <TrProcess />
      <TrOpportunityCard />
      <TrSectorScenarios />
      <TrProofSimulation />
      <TrWhoWeServe />
      <TrComparison />
      <TrNormIQ />
      <TrFounderNote />
      <TrTrust />
      <TrCta />
      <Footer locale="tr" />
      <TrMobileStickyCta />
      <TrFloatingWhatsApp />
    </main>
  );
}
