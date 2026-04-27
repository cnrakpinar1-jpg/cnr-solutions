import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const useCases = [
  {
    icon: "CR",
    title: "Customer data requests",
    description: "When a client asks, your team does not search for files.",
  },
  {
    icon: "EX",
    title: "Export operations management",
    description: "Product, customer and team status stay in one flow.",
  },
  {
    icon: "EN",
    title: "Production and energy tracking",
    description: "Production and energy data are organized together.",
  },
  {
    icon: "QD",
    title: "Quality and documentation management",
    description: "Documents are structured so teams can find and use them.",
  },
  {
    icon: "RG",
    title: "Regulation and reporting readiness",
    description: "CBAM is one example, not the product itself.",
  },
  {
    icon: "CB",
    title: "CBAM-like data requirements",
    description: "Regulatory requests are handled from the same data room.",
  },
];

export function EnProjects() {
  return (
    <SectionShell id="use-cases">
      <Reveal>
        <SectionHeading
          eyebrow="Use cases"
          title="Where it is used"
        />
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {useCases.map((item, index) => (
          <Reveal key={item.title} delay={index * 70}>
            <SurfaceCard className="group flex h-full flex-col rounded-[24px] hover:-translate-y-1 hover:border-[rgba(125,211,252,0.32)]">
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(125,211,252,0.18)] bg-[rgba(125,211,252,0.08)] text-[0.68rem] font-bold text-[var(--color-accent)]">
                  {item.icon}
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Data Room use case
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-base leading-7">{item.description}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
