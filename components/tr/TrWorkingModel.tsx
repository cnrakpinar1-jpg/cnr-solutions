import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const models = [
  {
    title: "Başlangıç Kurulumu",
    description:
      "Tek bir net problemi çözen, hızlı hayata geçirilen ilk sistem. Lead takibi, randevu paneli veya müşteri akışı gibi odaklı bir çözüm.",
    tag: "Hızlı Başlangıç",
  },
  {
    title: "Growth System",
    description:
      "İlk sistemin üzerine inşa edilen genişletilmiş altyapı. CRM + booking + dashboard entegrasyonu ile operasyonun tüm katmanlarını kapsayan yapı.",
    tag: "Tam Operasyon",
  },
  {
    title: "Custom AI Business System",
    description:
      "Yapay zekâ destekli özel iş sistemi. Otomasyon, akıllı sınıflandırma, cevap önerileri ve iş akışı entegrasyonlarıyla özel olarak tasarlanmış sistem.",
    tag: "AI Entegrasyon",
  },
];

export function TrWorkingModel() {
  return (
    <SectionShell>
      <Reveal>
        <SectionHeading
          eyebrow="Çalışma Modeli"
          title="Çalışma modeli"
          description="Her işletmenin ihtiyacı farklıdır. Bu yüzden önce problemi anlar, sonra en sade ve uygulanabilir sistemi öneririz."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {models.map((model, index) => (
          <Reveal key={model.title} delay={index * 80}>
            <SurfaceCard className="h-full hover:-translate-y-1 hover:border-[rgba(125,211,252,0.28)]">
              <span className="inline-flex items-center rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-accent)]">
                {model.tag}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-white">{model.title}</h3>
              <p className="mt-3 text-base leading-7">{model.description}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
