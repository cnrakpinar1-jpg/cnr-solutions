import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { NormLogoImage } from "@/components/shared/NormLogoImage";

export function TrHero() {
  return (
    <section id="norm" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="dashboard-grid pointer-events-none absolute inset-0 opacity-60" />
      <div aria-hidden="true" className="data-flow-lines pointer-events-none absolute inset-0 opacity-60" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[44rem] bg-[radial-gradient(ellipse_at_22%_8%,rgba(56,189,248,0.16),transparent_54%),linear-gradient(180deg,rgba(6,8,22,0.12),rgba(6,8,22,0.94))]"
      />

      <div className="container-shell">
        <div className="grid items-center gap-10 pb-16 pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14 lg:pb-32 lg:pt-20">
          <Reveal className="max-w-3xl">
            <NormLogoImage className="mb-3 h-6 w-auto object-contain sm:h-8" loading="eager" />
            <p className="eyebrow">Müşteri Akışı Standardı</p>

            <h1 className="text-balance mt-4 text-[2.1rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.6rem] lg:leading-[1.04]">
              Cevap verdiniz. Peki takip ettiniz mi?
            </h1>

            <p className="mt-5 max-w-[20rem] text-base leading-8 text-slate-300 sm:max-w-2xl sm:text-lg sm:leading-9">
              WhatsApp&rsquo;tan, Instagram&rsquo;dan, telefondan müşteri geliyor. Cevap da veriliyor. Ama cevap vermek yetmez — talebi takip etmek gerekir. Norm, gelen her talebi görünür bir fırsata dönüştürür ve işletmenizin sistematik takip yapmasını sağlar.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="#kurucu-program" className="w-full sm:w-auto">
                Kurucu İşletme Olmak İstiyorum
              </Button>
              <Button
                href="https://norm.cnr-solutions.com/?demo=1"
                variant="secondary"
                className="w-full sm:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo Ekranını Gör
              </Button>
            </div>

            <div className="mt-5 max-w-xl rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3">
              <p className="text-xs font-semibold text-slate-300">
                Kurucu işletme kontenjanı: 10 işletme
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Öncelik: güzellik ve medikal estetik işletmeleri.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="w-full min-w-0">
            <div className="surface-strong rounded-[24px] p-6 sm:p-8 w-full">
              <div className="flex items-center justify-between mb-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                  14 Günlük Pilot Önizlemesi
                </p>
                <span className="rounded-full border border-amber-300/24 bg-amber-300/10 px-2.5 py-0.5 text-[0.6rem] font-semibold text-amber-300">
                  Örnek / Demo Veri
                </span>
              </div>

              {/* Metrics */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between rounded-xl border border-[rgba(125,211,252,0.12)] bg-[rgba(125,211,252,0.05)] px-4 py-2.5">
                  <span className="text-xs text-slate-400">Gelen Talep</span>
                  <span className="text-sm font-semibold text-[var(--color-accent)]">74</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-emerald-300/12 bg-emerald-300/[0.05] px-4 py-2.5">
                  <span className="text-xs text-slate-400">Sıcak Fırsat</span>
                  <span className="text-sm font-semibold text-emerald-300">23</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-amber-300/12 bg-amber-300/[0.05] px-4 py-2.5">
                  <span className="text-xs text-slate-400">Bugün Dönülecek</span>
                  <span className="text-sm font-semibold text-amber-300">11</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-amber-300/12 bg-amber-300/[0.05] px-4 py-2.5">
                  <span className="text-xs text-slate-400">Geciken Takip</span>
                  <span className="text-sm font-semibold text-amber-300">8</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-rose-300/16 bg-rose-300/[0.05] px-4 py-2.5">
                  <span className="text-xs text-slate-400">Kaçan Fırsat Riski</span>
                  <span className="rounded-full border border-rose-300/24 bg-rose-300/10 px-2.5 py-0.5 text-[0.65rem] font-semibold text-rose-300">
                    Yüksek
                  </span>
                </div>
              </div>

              {/* Score */}
              <div className="mt-4 rounded-xl border border-[rgba(125,211,252,0.14)] bg-[rgba(125,211,252,0.05)] px-4 py-3">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)] mb-2">
                  Müşteri Akışı Skoru
                </p>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-3xl font-bold text-white leading-none">58</span>
                  <span className="mb-0.5 text-base font-semibold text-slate-500">/ 100</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-white/8">
                  <div
                    className="h-1.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_10px_rgba(56,189,248,0.4)]"
                    style={{ width: "58%" }}
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
