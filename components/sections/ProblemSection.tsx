import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { painPoints } from "@/lib/content";

export function ProblemSection() {
  return (
    <SectionShell>
      <Reveal>
        <SectionHeading
          eyebrow="The friction"
          title="Most small business workflows break in the gaps between tools."
          description="When process lives across inboxes, spreadsheets, and chat, the work gets slower, messier, and harder to manage."
        />
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {painPoints.map((item, index) => (
          <Reveal key={item.title} delay={index * 80}>
            <SurfaceCard className="group h-full hover:-translate-y-1 hover:border-[rgba(125,211,252,0.28)]">
              <div className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                0{index + 1}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-base leading-7">{item.description}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
