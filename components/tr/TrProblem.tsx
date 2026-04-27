import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const problems = [
  "Veri farklı Excel'lerde tutulur",
  "Ekipler ayrı çalışır",
  "Aynı verinin farklı veya hatalı versiyonları dolaşır",
  "Müşteri talebi geldiğinde dosya aranır",
  "Eksik veri son anda fark edilir",
];

export function TrProblem() {
  return (
    <SectionShell id="problem">
      <Reveal>
        <SectionHeading
          eyebrow="Gerçek durum"
          title="Bugün içeride olan gerçek durum"
          description="Çoğu üreticide veri vardır ama sistem yoktur."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {problems.map((problem, index) => (
          <Reveal key={index} delay={index * 60}>
            <SurfaceCard className="h-full hover:-translate-y-1 hover:border-[rgba(125,211,252,0.28)]">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                0{index + 1}
              </div>
              <p className="mt-3 text-base font-medium leading-6 text-white">{problem}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
