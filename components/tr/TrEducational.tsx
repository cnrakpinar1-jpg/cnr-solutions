import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const cards = [
  {
    title: "Görünür Süreçler",
    description: "İşletmedeki her adımın, her talebin ve her görevin nerede durduğu netleşir.",
  },
  {
    title: "Düzenli Veri",
    description: "Müşteri bilgisi, satış geçmişi ve operasyon verisi tek yerde, erişilebilir şekilde tutulur.",
  },
  {
    title: "Ölçülebilir İş Akışı",
    description: "Hangi sürecin ne kadar sürdüğü, nerede tıkandığı ve nasıl geliştiği görünür hale gelir.",
  },
];

export function TrEducational() {
  return (
    <SectionShell id="neden">
      <Reveal>
        <SectionHeading
          eyebrow="Neden şimdi?"
          title="Yapay zekâ çağına hazır olmak, sadece yapay zekâ kullanmak değildir."
          description="Bir işletmenin yapay zekâdan gerçek fayda alabilmesi için önce iş süreçlerinin görünür, düzenli ve takip edilebilir olması gerekir. Müşteri bilgisi dağınıksa, satış süreci ölçülemiyorsa, ekip görevleri manuel ilerliyorsa ve veri farklı dosyalarda duruyorsa; yapay zekâ tek başına mucize yaratmaz."
        />
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-7 inline-flex rounded-2xl border border-[rgba(125,211,252,0.18)] bg-[rgba(125,211,252,0.06)] px-6 py-4">
          <p className="text-base font-semibold text-white sm:text-lg">
            Önce sistem kurulur.{" "}
            <span className="text-[var(--color-accent)]">Sonra yapay zekâ o sistemi hızlandırır.</span>
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {cards.map((card, i) => (
          <Reveal key={card.title} delay={100 + i * 60}>
            <SurfaceCard className="h-full hover:-translate-y-1">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[rgba(125,211,252,0.2)] bg-[rgba(125,211,252,0.08)]">
                <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 text-[var(--color-accent)]" aria-hidden="true">
                  <path d="M3 8h10M8 3v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{card.description}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
