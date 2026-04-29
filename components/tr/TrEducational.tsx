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

const readinessLayers = [
  {
    step: "01",
    title: "Süreçler",
    description: "Müşteri, satış ve operasyon akışları görünür hale gelir.",
    accent: "from-sky-300/22 to-sky-300/[0.03]",
  },
  {
    step: "02",
    title: "Veri",
    description: "Bilgiler dağınık dosyalardan düzenli yapılara taşınır.",
    accent: "from-cyan-300/20 to-cyan-300/[0.03]",
  },
  {
    step: "03",
    title: "Sistem",
    description: "CRM, dashboard, portal ve otomasyon katmanı kurulur.",
    accent: "from-emerald-300/18 to-emerald-300/[0.03]",
  },
  {
    step: "04",
    title: "Yapay Zekâ",
    description: "Özetleme, sınıflandırma, görev çıkarma ve karar desteği hızlanır.",
    accent: "from-[rgba(125,211,252,0.26)] to-[rgba(125,211,252,0.04)]",
  },
];

function AIReadinessStack() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:mr-0">
      <div
        aria-hidden="true"
        className="absolute -inset-5 rounded-[34px] bg-[radial-gradient(circle_at_50%_14%,rgba(56,189,248,0.18),transparent_54%),radial-gradient(circle_at_82%_78%,rgba(134,239,172,0.1),transparent_42%)] blur-2xl"
      />

      <div className="surface-strong relative overflow-hidden rounded-[28px] p-4 shadow-[0_30px_100px_rgba(2,6,23,0.62),0_0_70px_rgba(56,189,248,0.14)] sm:p-5">
        <div aria-hidden="true" className="dashboard-grid absolute inset-0 opacity-25" />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(ellipse_at_50%_0%,rgba(125,211,252,0.2),transparent_68%)]"
        />

        <div className="relative flex flex-col gap-4">
          <div className="flex flex-col gap-3 border-b border-white/8 pb-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                AI readiness stack
              </p>
              <h3 className="mt-2 text-xl font-semibold leading-tight text-white sm:text-2xl">
                Yapay zekâdan önce işletme altyapısı gerekir.
              </h3>
            </div>
            <span className="w-fit shrink-0 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-[0.68rem] font-semibold leading-4 text-emerald-200">
              Sistem hazır olduğunda AI hızlandırır
            </span>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute bottom-7 left-5 top-7 w-px bg-[linear-gradient(180deg,rgba(125,211,252,0.08),rgba(125,211,252,0.34),rgba(134,239,172,0.18))]"
            />

            <div className="relative flex flex-col gap-2.5">
              {readinessLayers.map((layer, index) => (
                <div
                  key={layer.title}
                  className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r ${layer.accent} p-3.5 shadow-[0_16px_46px_rgba(2,6,23,0.24)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-[rgba(125,211,252,0.3)] hover:bg-white/[0.045] sm:p-4`}
                >
                  <div className="flex gap-3.5">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[rgba(125,211,252,0.24)] bg-[rgba(6,8,22,0.86)] text-[0.66rem] font-bold text-[var(--color-accent)] shadow-[0_0_0_4px_rgba(125,211,252,0.05)]">
                      {layer.step}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-semibold leading-6 text-white">{layer.title}</h4>
                        {index < readinessLayers.length - 1 ? (
                          <span className="h-px flex-1 bg-[linear-gradient(90deg,rgba(125,211,252,0.22),transparent)]" />
                        ) : null}
                      </div>
                      <p className="mt-1 text-sm leading-6 text-slate-300">{layer.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[rgba(125,211,252,0.18)] bg-[rgba(125,211,252,0.07)] px-4 py-3">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-1 bg-[var(--color-accent)] shadow-[0_0_28px_rgba(56,189,248,0.8)]"
            />
            <p className="text-sm font-semibold text-white">Önce düzen. Sonra hız.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TrEducational() {
  return (
    <SectionShell id="neden">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div>
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
        </div>

        <Reveal delay={140} className="lg:pt-2">
          <AIReadinessStack />
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {cards.map((card, i) => (
          <Reveal key={card.title} delay={180 + i * 60}>
            <SurfaceCard className="h-full border-white/10 hover:-translate-y-1 hover:border-[rgba(125,211,252,0.3)]">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[rgba(125,211,252,0.22)] bg-[rgba(125,211,252,0.08)]">
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
