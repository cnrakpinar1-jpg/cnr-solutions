import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const features = [
  {
    tag: "Öncelik",
    title: "Sıcak Rezervasyon Tespiti",
    description:
      "Tarih, fiyat ve müsaitlik soran müşterileri otomatik olarak önceliklendirir.",
  },
  {
    tag: "Bugün",
    title: "Kurtarılabilir Lead Listesi",
    description:
      "Bugün dönüş yapılırsa hâlâ rezervasyona dönebilecek kişileri listeler.",
  },
  {
    tag: "Ciro",
    title: "Kaçan Ciro Tahmini",
    description:
      "Geç dönülen veya unutulan taleplerin yaklaşık gelir etkisini TL olarak gösterir.",
  },
  {
    tag: "Ekip",
    title: "Günlük Takip Görevleri",
    description:
      "Ekibe bugün kim aranmalı, kime mesaj atılmalı, hangi müşteri bekliyor net gösterir.",
  },
];

export function KrrFeatures() {
  return (
    <SectionShell id="ozellikler">
      <Reveal>
        <SectionHeading
          eyebrow="Sistem Yetenekleri"
          title="Rezervasyon fırsatlarını kaçmadan yakalayın"
        />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {features.map((feature, index) => (
          <Reveal key={feature.title} delay={index * 80}>
            <SurfaceCard className="h-full hover:-translate-y-1 hover:border-[rgba(125,211,252,0.28)]">
              <span className="eyebrow">{feature.tag}</span>
              <h3 className="mt-2 text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-base leading-7">{feature.description}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
