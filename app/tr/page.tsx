import type { Metadata } from "next";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { TrHero } from "@/components/tr/TrHero";
import { TrCategory } from "@/components/tr/TrCategory";
import { TrProblem } from "@/components/tr/TrProblem";
import { TrNormProduct } from "@/components/tr/TrUseCases";
import { TrProcess } from "@/components/tr/TrSetupProcess";
import { TrServices } from "@/components/tr/TrServices";
import { TrWhoWeServe } from "@/components/tr/TrWhoWeServe";
import { TrComparison } from "@/components/tr/TrComparison";
import { TrTrust } from "@/components/tr/TrTrust";
import { TrCta } from "@/components/tr/TrCta";
import { TrFloatingWhatsApp } from "@/components/tr/TrFloatingWhatsApp";

export const metadata: Metadata = {
  title: "CNR Norm | Müşteri Akışı Standardı — CNR Solutions",
  description:
    "CNR Norm, işletmenize gelen WhatsApp, Instagram, telefon ve reklam görüşmelerini tek düzene alır; takip, randevu, teklif ve satış sürecinizi görünür hale getirir.",
  openGraph: {
    title: "CNR Norm | Müşteri Akışı Standardı — CNR Solutions",
    description:
      "Dağınık müşteri görüşmelerini standart, görünür ve takip edilebilir bir müşteri akışına dönüştürün. CNR Norm ile işletmenizin yeni normu.",
  },
};

const navLinks = [
  { href: "#cnr-norm", label: "CNR Norm" },
  { href: "#nasil-calisir", label: "Nasıl Çalışır?" },
  { href: "#hizmetler", label: "Destekleyici Hizmetler" },
  { href: "#kimler", label: "Kimler İçin?" },
  { href: "#iletisim", label: "Ücretsiz Analiz" },
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
      <TrCategory />
      <TrProblem />
      <TrNormProduct />
      <TrProcess />
      <TrServices />
      <TrWhoWeServe />
      <TrComparison />
      <TrTrust />
      <TrCta />
      <Footer locale="tr" />
      <TrFloatingWhatsApp />
    </main>
  );
}
