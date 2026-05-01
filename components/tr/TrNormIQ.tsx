import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const cards = [
  {
    icon: "◈",
    title: "Talep Sıcaklığı",
    body: "Sıcak, ılık ve soğuk müşteri ayrımı. Ekip kime önce döneceğini bilir; sıcak fırsatlar ekip hafızasında kaybolmaz.",
  },
  {
    icon: "◎",
    title: "Niyet Analizi",
    body: "Randevu istiyor, fiyat soruyor, teklif bekliyor, kararsız veya takip edilmeli. Her görüşmenin ne aşamada olduğu görünür.",
  },
  {
    icon: "◇",
    title: "Takip Önerisi",
    body: "Her müşteri için sonraki doğru aksiyon. Ekip kimi ne zaman arayacağını rastgele değil, sistemli olarak bilir.",
  },
  {
    icon: "▣",
    title: "Günlük İşletme Özeti",
    body: "Bugün kaç talep geldi, kaçı sıcak, kaçı cevapsız kaldı. İşletme sahibi sabah ekrana bakarak gün içinde neyin öncelikli olduğunu görür.",
  },
];

export function TrNormIQ() {
  return (
    <SectionShell id="cnr-norm-iq">
      <Reveal>
        <SectionHeading
          eyebrow="CNR Norm IQ"
          title="CNR Norm IQ: Müşteri akışınızın zeka katmanı"
          description="CNR Norm IQ, gelen müşteri görüşmelerini yalnızca kaydetmez; talebin sıcaklığını, niyetini, aciliyetini ve sonraki aksiyonunu görünür hale getirir. Böylece ekip kime önce döneceğini bilir, işletme sahibi ise hangi fırsatların kaçmak üzere olduğunu görür."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 60}>
            <SurfaceCard className="h-full">
              <div className="mb-3 flex items-center gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[rgba(125,211,252,0.18)] bg-[rgba(125,211,252,0.07)] text-sm text-[var(--color-accent)]"
                  aria-hidden="true"
                >
                  {card.icon}
                </span>
                <h3 className="text-base font-semibold text-white">{card.title}</h3>
              </div>
              <p className="text-sm leading-6 text-slate-500">{card.body}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={280}>
        <div className="mt-8 rounded-[24px] border border-[rgba(125,211,252,0.12)] bg-[rgba(125,211,252,0.04)] px-8 py-6 text-center">
          <p className="text-base font-semibold text-slate-300 sm:text-lg">
            CNR Norm IQ bir chatbot değil;{" "}
            <span className="text-[var(--color-accent)]">
              müşteri akışınızın görünürlük ve önceliklendirme katmanıdır.
            </span>
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
