import type { Metadata } from "next";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { TrHero } from "@/components/tr/TrHero";
import { TrFlow } from "@/components/tr/TrFlow";
import { TrProblem } from "@/components/tr/TrProblem";
import { TrCost } from "@/components/tr/TrCost";
import { TrSolution } from "@/components/tr/TrSolution";
import { TrUseCases } from "@/components/tr/TrUseCases";
import { TrCbam } from "@/components/tr/TrCbam";
import { TrFeatures } from "@/components/tr/TrFeatures";
import { TrTrust } from "@/components/tr/TrTrust";
import { TrProofSimulation } from "@/components/tr/TrProofSimulation";
import { TrSetupProcess } from "@/components/tr/TrSetupProcess";
import { TrCta } from "@/components/tr/TrCta";
import { TrFloatingWhatsApp } from "@/components/tr/TrFloatingWhatsApp";
import { PastProjects } from "@/components/shared/PastProjects";

export const metadata: Metadata = {
  title: "CNR Data Room | İhracat Üreticileri İçin Operasyon Veri Sistemi",
  description:
    "CNR Data Room; ihracat yapan üreticiler için ürün, üretim, enerji ve müşteri verilerini tek yerde toplayan operasyon sistemi.",
  openGraph: {
    title: "CNR Data Room | Operational Data System",
    description:
      "İhracat yapan üreticiler için veri odası ve operasyon sistemi.",
  },
};

const navLinks = [
  { href: "#cozum", label: "Çözüm" },
  { href: "#kullanim", label: "Kullanım Alanları" },
  { href: "#akis", label: "Nasıl Çalışır" },
  { href: "#guven", label: "Güven" },
  { href: "#proje-ornekleri", label: "Proje Örnekleri" },
  { href: "#contact", label: "İletişim" },
];

export default function TrPage() {
  return (
    <main className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[linear-gradient(180deg,rgba(125,211,252,0.1),rgba(6,8,22,0))] blur-3xl"
      />
      <Header locale="tr" navLinks={navLinks} />
      <TrHero />
      <TrProblem />
      <TrCost />
      <TrSolution />
      <TrFlow />
      <TrFeatures />
      <TrUseCases />
      <TrCbam />
      <TrTrust />
      <TrProofSimulation />
      <TrSetupProcess />
      <PastProjects locale="tr" />
      <TrCta />
      <Footer locale="tr" />
      <TrFloatingWhatsApp />
    </main>
  );
}
