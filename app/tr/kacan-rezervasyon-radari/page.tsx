import type { Metadata } from "next";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { TrFloatingWhatsApp } from "@/components/tr/TrFloatingWhatsApp";
import { KrrHero } from "@/components/tr/krr/KrrHero";
import { KrrProblem } from "@/components/tr/krr/KrrProblem";
import { KrrDashboard } from "@/components/tr/krr/KrrDashboard";
import { KrrFeatures } from "@/components/tr/krr/KrrFeatures";
import { KrrLeads } from "@/components/tr/krr/KrrLeads";
import { KrrBeforeAfter } from "@/components/tr/krr/KrrBeforeAfter";
import { KrrProcess } from "@/components/tr/krr/KrrProcess";
import { KrrCta } from "@/components/tr/krr/KrrCta";

export const metadata: Metadata = {
  title:
    "Kaçan Rezervasyon Radarı | Düğün Salonları için Talep Takip Sistemi",
  description:
    "WhatsApp, Instagram DM ve formlardan gelen düğün, nişan ve kına taleplerini tek ekranda görün. Sıcak müşterileri ayırın, bugün dönülmesi gerekenleri takip edin, kaçan ciroyu ölçün.",
  openGraph: {
    title:
      "Kaçan Rezervasyon Radarı — Düğün salonları için talep takip sistemi",
    description:
      "Düğün salonları, kır bahçeleri ve organizasyon firmaları için kaçan rezervasyon taleplerini yakalayan takip sistemi.",
  },
};

const navLinks = [
  { href: "#sorun", label: "Sorun" },
  { href: "#panel", label: "Panel" },
  { href: "#ozellikler", label: "Özellikler" },
  { href: "#kurtarilabilir", label: "Kurtarma" },
  { href: "#nasil-calisir", label: "Süreç" },
  { href: "#contact", label: "İletişim" },
];

export default function KacanRezervasyonRadariPage() {
  return (
    <main className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[linear-gradient(180deg,rgba(125,211,252,0.1),rgba(6,8,22,0))] blur-3xl"
      />
      <Header locale="tr" navLinks={navLinks} />
      <KrrHero />
      <KrrProblem />
      <KrrDashboard />
      <KrrFeatures />
      <KrrLeads />
      <KrrBeforeAfter />
      <KrrProcess />
      <KrrCta />
      <Footer locale="tr" />
      <TrFloatingWhatsApp />
    </main>
  );
}
