import type { Metadata } from "next";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { EnHero } from "@/components/en/EnHero";
import { EnProblem } from "@/components/en/EnProblem";
import { EnSolution } from "@/components/en/EnSolution";
import { EnProjects } from "@/components/en/EnProjects";
import { EnWhy } from "@/components/en/EnWhy";
import { EnCta } from "@/components/en/EnCta";

export const metadata: Metadata = {
  title: "CNR Solutions | AI-Assisted Business Systems",
  description:
    "CNR Solutions builds AI-assisted business systems — mini CRMs, client portals, booking systems, dashboards and workflow automation for modern companies.",
};

const navLinks = [
  { href: "#systems", label: "Systems" },
  { href: "#demo-systems", label: "Demo" },
  { href: "#contact", label: "Contact" },
];

export default function EnPage() {
  return (
    <main className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[linear-gradient(180deg,rgba(125,211,252,0.1),rgba(6,8,22,0))] blur-3xl"
      />
      <Header locale="en" navLinks={navLinks} />
      <EnHero />
      <EnProblem />
      <EnSolution />
      <EnProjects />
      <EnWhy />
      <EnCta />
      <Footer locale="en" />
    </main>
  );
}
