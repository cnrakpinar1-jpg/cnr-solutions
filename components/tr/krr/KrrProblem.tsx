import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const problems = [
  "Instagram DM’leri karışıyor",
  "WhatsApp talepleri unutuluyor",
  "Tarih soran müşteriye geç dönülüyor",
  "Ekip kiminle konuşulduğunu bilmiyor",
  "Patron kaç rezervasyon fırsatı kaçtı göremiyor",
];

export function KrrProblem() {
  return (
    <SectionShell id="sorun">
      <Reveal>
        <SectionHeading
          eyebrow="Gerçek Sorun"
          title="Sorun daha fazla reklam değil. Sorun gelen talebin takipte kaybolması."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {problems.map((problem, index) => (
          <Reveal key={problem} delay={index * 60}>
            <SurfaceCard className="h-full hover:-translate-y-1 hover:border-[rgba(125,211,252,0.28)]">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                0{index + 1}
              </div>
              <p className="mt-3 text-base font-medium leading-6 text-white">
                {problem}
              </p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
