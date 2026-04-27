import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const useCases = [
  {
    title: "Customer data requests",
    description: "When a client asks, your team does not search for files.",
  },
  {
    title: "Export operations management",
    description: "Product, customer and team status stay in one flow.",
  },
  {
    title: "Production and energy tracking",
    description: "Production and energy data are organized together.",
  },
  {
    title: "Internal documentation",
    description: "Documents are structured so teams can find and use them.",
  },
  {
    title: "Compliance and reporting workflows",
    description: "CBAM is one example, not the product itself.",
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
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                0{index + 1}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-base leading-7">{item.description}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
