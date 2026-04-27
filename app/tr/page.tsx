import type { Metadata } from "next";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { TrHero } from "@/components/tr/TrHero";
import { TrFlow } from "@/components/tr/TrFlow";
import { TrProblem } from "@/components/tr/TrProblem";
import { TrSolution } from "@/components/tr/TrSolution";
import { TrUseCases } from "@/components/tr/TrUseCases";
import { TrCbam } from "@/components/tr/TrCbam";
import { TrFeatures } from "@/components/tr/TrFeatures";
import { TrTrust } from "@/components/tr/TrTrust";
import { TrCta } from "@/components/tr/TrCta";
import { TrFloatingWhatsApp } from "@/components/tr/TrFloatingWhatsApp";

export const metadata: Metadata = {
  title: "CNR Solutions | İhracat Üreticileri İçin Veri Yönetim Sistemi",
  description:
    "CNR Data Room; ürün, üretim, enerji ve müşteri verilerinizi tek yerde toplayıp AB müşteri talepleri ve CBAM uyumluluğuna hazır hale getiren ihracat veri yönetim sistemi.",
  openGraph: {
    title: "CNR Solutions — İhracat Verinizi Yönetin",
    description:
      "CBAM, AB müşteri veri talepleri ve operasyonel raporlama için tek yapı. İhracat üreticileri için veri odası sistemi.",
  },
};

const navLinks = [
  { href: "#akis", label: "Nasıl Çalışır" },
  { href: "#cozum", label: "Çözüm" },
  { href: "#kullanim", label: "Kullanım" },
  { href: "#cbam", label: "CBAM" },
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
      <TrFlow />
      <TrProblem />
      <TrSolution />
      <TrUseCases />
      <TrCbam />
      <TrFeatures />
      <TrTrust />
      <TrCta />
      <Footer locale="tr" />
      <TrFloatingWhatsApp />
    </main>
  );
}
