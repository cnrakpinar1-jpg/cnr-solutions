import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const problems = [
  "Data lives in different spreadsheets",
  "Teams work separately",
  "The same data exists in multiple places",
  "Files are searched when clients ask",
  "Missing data appears at the last minute",
];

export function EnProblem() {
  return (
    <SectionShell id="problem">
      <Reveal>
        <SectionHeading
          eyebrow="Problem"
          title={<>Most manufacturers don&apos;t have a data problem. They have a system problem.</>}
          description="Data exists. The operating system around it does not."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
        {problems.map((item, index) => (
          <Reveal key={item} delay={index * 80}>
            <SurfaceCard className="h-full hover:-translate-y-1 hover:border-[rgba(125,211,252,0.28)]">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                0{index + 1}
              </div>
              <p className="mt-4 text-base font-medium leading-7 text-white">{item}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
