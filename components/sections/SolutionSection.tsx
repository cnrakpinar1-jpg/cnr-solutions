import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { solutions } from "@/lib/content";

export function SolutionSection() {
  return (
    <SectionShell id="services">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="What I build"
            title="Custom internal systems that make the business easier to run."
            description="Each build is designed to remove friction, tighten operations, and give the team one cleaner way to work."
          />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2">
          {solutions.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <SurfaceCard className="h-full hover:-translate-y-1 hover:border-[rgba(125,211,252,0.28)]">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-base leading-7">{item.description}</p>
              </SurfaceCard>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
