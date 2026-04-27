import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const risks = [
  "Missed customer requests",
  "Incorrect or incomplete data sent out",
  "Wasted staff hours",
  "Inter-department friction",
  "Loss of client trust",
];

export function EnCost() {
  return (
    <SectionShell id="risk">
      <Reveal>
        <SectionHeading
          eyebrow="Risk"
          title="This is not just operational. It is commercial risk."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {risks.map((risk, index) => (
          <Reveal key={risk} delay={index * 60}>
            <SurfaceCard className="h-full border-rose-300/12 hover:-translate-y-1 hover:border-rose-300/28">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-rose-300">
                Risk 0{index + 1}
              </div>
              <p className="mt-3 text-base font-medium leading-6 text-white">{risk}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
