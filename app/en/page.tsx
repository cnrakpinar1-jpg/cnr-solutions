import type { Metadata } from "next";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { EnHero } from "@/components/en/EnHero";
import { EnProblem } from "@/components/en/EnProblem";
import { EnCost } from "@/components/en/EnCost";
import { EnSolution } from "@/components/en/EnSolution";
import { EnFlow } from "@/components/en/EnFlow";
import { EnOutput } from "@/components/en/EnOutput";
import { EnProjects } from "@/components/en/EnProjects";
import { EnCbam } from "@/components/en/EnCbam";
import { EnWhy } from "@/components/en/EnWhy";
import { EnProofSimulation } from "@/components/en/EnProofSimulation";
import { EnProcess } from "@/components/en/EnProcess";
import { EnCta } from "@/components/en/EnCta";

export const metadata: Metadata = {
  title: "CNR Data Room | Operational Data System",
  description:
    "CNR Data Room organizes product, production, energy and customer data for export-oriented manufacturers.",
};

const navLinks = [
  { href: "#risk", label: "Risk" },
  { href: "#solution", label: "Solution" },
  { href: "#flow", label: "Flow" },
  { href: "#proof", label: "Example" },
  { href: "#process", label: "Process" },
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
      <EnCost />
      <EnSolution />
      <EnFlow />
      <EnOutput />
      <EnProjects />
      <EnCbam />
      <EnWhy />
      <EnProofSimulation />
      <EnProcess />
      <EnCta />
      <Footer locale="en" />
    </main>
  );
}
