import type { Metadata } from "next";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { EnHero } from "@/components/en/EnHero";
import { EnCategory } from "@/components/en/EnCategory";
import { EnProblem } from "@/components/en/EnProblem";
import { EnNormProduct } from "@/components/en/EnSolution";
import { EnProcess } from "@/components/en/EnProcess";
import { EnServices } from "@/components/en/EnServices";
import { EnWhoWeServe } from "@/components/en/EnProjects";
import { EnWhy } from "@/components/en/EnWhy";
import { EnTrust } from "@/components/en/EnCost";
import { EnCta } from "@/components/en/EnCta";

export const metadata: Metadata = {
  title: "CNR Norm | Customer Flow Standard — CNR Solutions",
  description:
    "CNR Norm standardizes customer conversations from WhatsApp, Instagram, phone, website forms and ad leads into one visible flow for follow-up, appointments, quotes, sales and reporting.",
  openGraph: {
    title: "CNR Norm | Customer Flow Standard — CNR Solutions",
    description:
      "Turn scattered customer conversations into a standardized, visible and trackable customer flow. CNR Norm — the new norm for how your business handles incoming customers.",
  },
};

const navLinks = [
  { href: "#cnr-norm", label: "CNR Norm" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#supporting-services", label: "Supporting Services" },
  { href: "#who-its-for", label: "Who It's For" },
  { href: "#contact", label: "Free Analysis" },
];

export default function EnPage() {
  return (
    <main className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[linear-gradient(180deg,rgba(56,189,248,0.08),rgba(6,8,22,0))] blur-3xl"
      />
      <Header locale="en" navLinks={navLinks} />
      <EnHero />
      <EnCategory />
      <EnProblem />
      <EnNormProduct />
      <EnProcess />
      <EnServices />
      <EnWhoWeServe />
      <EnWhy />
      <EnTrust />
      <EnCta />
      <Footer locale="en" />
    </main>
  );
}
