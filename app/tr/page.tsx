import type { Metadata } from "next";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { TrHero } from "@/components/tr/TrHero";
import { TrCuriosity } from "@/components/tr/TrCuriosity";
import { TrProblem } from "@/components/tr/TrProblem";
import { TrSolution } from "@/components/tr/TrSolution";
import { TrWho } from "@/components/tr/TrWho";
import { TrProjects } from "@/components/tr/TrProjects";
import { TrWhy } from "@/components/tr/TrWhy";
import { TrProcess } from "@/components/tr/TrProcess";
import { TrWorkingModel } from "@/components/tr/TrWorkingModel";
import { TrPilot } from "@/components/tr/TrPilot";
import { TrFaq } from "@/components/tr/TrFaq";
import { TrCta } from "@/components/tr/TrCta";
import { TrFloatingWhatsApp } from "@/components/tr/TrFloatingWhatsApp";

export const metadata: Metadata = {
  title: "CNR Solutions | İşletmeler İçin Yapay Zekâ Destekli İş Sistemleri",
  description:
    "CNR Solutions; KOBİ’ler, klinikler, güzellik merkezleri, diş klinikleri, emlak ofisleri ve hizmet işletmeleri için mini CRM, dashboard, randevu paneli, müşteri portalı ve yapay zekâ destekli operasyon sistemleri kurar.",
  openGraph: {
    title: "CNR Solutions — İşletmeleri Yapay Zekâ Çağına Taşıyan Sistemler",
    description:
      "Dağınık müşteri taleplerini, manuel süreçleri ve takip karmaşasını sade, ölçülebilir ve yapay zekâ destekli iş sistemlerine dönüştürüyoruz.",
  },
};

const navLinks = [
  { href: "#cozumler", label: "Çözümler" },
  { href: "#projects", label: "Projeler" },
  { href: "#case-studies", label: "Vaka Analizleri" },
  { href: "#surec", label: "Süreç" },
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
      <TrCuriosity />
      <TrProblem />
      <TrSolution />
      <TrWho />
      <TrProjects />
      <TrPilot />
      <TrWhy />
      <TrProcess />
      <TrWorkingModel />
      <TrFaq />
      <TrCta />
      <Footer locale="tr" />
      <TrFloatingWhatsApp />
    </main>
  );
}
