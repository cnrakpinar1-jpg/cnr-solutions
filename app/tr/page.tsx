import type { Metadata } from "next";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { TrHero } from "@/components/tr/TrHero";
import { TrEducational } from "@/components/tr/TrEducational";
import { TrPositioning } from "@/components/tr/TrFlow";
import { TrProblem } from "@/components/tr/TrProblem";
import { TrSolution } from "@/components/tr/TrSolution";
import { TrSystems } from "@/components/tr/TrUseCases";
import { TrDemoSystems } from "@/components/tr/TrDemoSystems";
import { TrFit } from "@/components/tr/TrCbam";
import { TrWhoWeServe } from "@/components/tr/TrWhoWeServe";
import { TrProcess } from "@/components/tr/TrSetupProcess";
import { TrTrust } from "@/components/tr/TrTrust";
import { TrComparison } from "@/components/tr/TrComparison";
import { TrAbout } from "@/components/tr/TrAbout";
import { TrCta } from "@/components/tr/TrCta";
import { TrFloatingWhatsApp } from "@/components/tr/TrFloatingWhatsApp";

export const metadata: Metadata = {
  title: "CNR Solutions | Türkiye'deki İşletmeler İçin Modern İş Sistemleri",
  description:
    "CNR Solutions, KOBİ'lerin ve büyüyen işletmelerin satış, müşteri yönetimi, operasyon ve veri süreçlerini modern iş sistemleriyle daha görünür, düzenli ve ölçeklenebilir hale getirir.",
  openGraph: {
    title: "CNR Solutions | Türkiye'deki İşletmeler İçin Modern İş Sistemleri",
    description:
      "Dağınık iş akışlarını, akıllı işletme altyapısına çeviren pratik iş sistemleri. CRM, dashboard, otomasyon, portal ve ERP-yanı çözümler.",
  },
};

const navLinks = [
  { href: "#sistemler", label: "Sistemler" },
  { href: "#kimler", label: "Kimler İçin" },
  { href: "#surec", label: "Süreç" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#iletisim", label: "İletişim" },
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
      <TrEducational />
      <TrPositioning />
      <TrProblem />
      <TrSolution />
      <TrSystems />
      <TrDemoSystems />
      <TrFit />
      <TrWhoWeServe />
      <TrProcess />
      <TrTrust />
      <TrComparison />
      <TrAbout />
      <TrCta />
      <Footer locale="tr" />
      <TrFloatingWhatsApp />
    </main>
  );
}
