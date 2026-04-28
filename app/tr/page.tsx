import type { Metadata } from "next";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { TrHero } from "@/components/tr/TrHero";
import { TrProblem } from "@/components/tr/TrProblem";
import { TrSolution } from "@/components/tr/TrSolution";
import { TrFlow } from "@/components/tr/TrFlow";
import { TrUseCases } from "@/components/tr/TrUseCases";
import { TrCbam } from "@/components/tr/TrCbam";
import { TrSetupProcess } from "@/components/tr/TrSetupProcess";
import { TrCta } from "@/components/tr/TrCta";
import { TrFloatingWhatsApp } from "@/components/tr/TrFloatingWhatsApp";

export const metadata: Metadata = {
  title: "CBAM Data Room | Türk İhracatçı Üreticiler İçin Veri Hazırlama Sistemi",
  description:
    "ERP'ye dokunmadan çalışan sistemlerle üretim, enerji ve ürün verilerinizi düzenleyin; AB müşterilerine gönderilebilir CBAM rapor akışını hızlandırın.",
  openGraph: {
    title: "CBAM Data Room | Türk İhracatçı Üreticiler İçin Veri Hazırlama Sistemi",
    description:
      "Alüminyum, çelik, kablo ve endüstriyel üreticiler için CBAM veri odası.",
  },
};

const navLinks = [
  { href: "#sorun", label: "Sorun" },
  { href: "#cozum", label: "Çözüm" },
  { href: "#akis", label: "Nasıl Çalışır" },
  { href: "#kimler", label: "Kimler İçin" },
  { href: "#pilot", label: "Pilot" },
  { href: "#iletisim", label: "İletişim" },
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
      <TrSolution />
      <TrFlow />
      <TrUseCases />
      <TrCbam />
      <TrSetupProcess />
      <TrCta />
      <Footer locale="tr" />
      <TrFloatingWhatsApp />
    </main>
  );
}
