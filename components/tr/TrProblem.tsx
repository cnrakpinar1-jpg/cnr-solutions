import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const problems = [
  "Excel dosyaları dağınık, ekipler ayrı çalışıyor",
  "Müşteri veri talebi gelince ekip dosya arıyor",
  "Ürün bazında hangi verinin eksik olduğu bilinmiyor",
  "Son dakika kaos: veri hazır değil, müşteri bekliyor",
  "Ekipler arası sorumluluk net değil",
  "Süreç takip edilemiyor, hata geç fark ediliyor",
];

export function TrProblem() {
  return (
    <SectionShell id="problem">
      <Reveal>
        <SectionHeading
          eyebrow="Sorun"
          title="Veri var, sistem yok."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
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
