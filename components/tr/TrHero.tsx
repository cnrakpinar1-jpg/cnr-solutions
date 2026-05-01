import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function TrHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="dashboard-grid pointer-events-none absolute inset-0 opacity-60" />
      <div aria-hidden="true" className="data-flow-lines pointer-events-none absolute inset-0 opacity-60" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[44rem] bg-[radial-gradient(ellipse_at_22%_8%,rgba(56,189,248,0.16),transparent_54%),linear-gradient(180deg,rgba(6,8,22,0.12),rgba(6,8,22,0.94))]"
      />

      <div className="container-shell">
        <div className="grid items-center gap-10 pb-16 pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14 lg:pb-32 lg:pt-20">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Müşteri Akışı Standardı</p>

            <h1 className="text-balance mt-4 text-[2.4rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.6rem] lg:leading-[1.04]">
              Gelen müşteri talebi kaybolmasın. CNR Norm hepsini tek akışa bağlar.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
              WhatsApp, Instagram, telefon, web formu ve reklamlardan gelen müşteri görüşmelerini tek düzene alırız. Kimin sıcak müşteri olduğunu, kime dönülmediğini, hangi randevu veya teklifin kaçmak üzere olduğunu görünür hale getiririz.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="#musteri-akisi-skoru" className="w-full sm:w-auto">
                Ücretsiz Müşteri Akışı Skoru Al
              </Button>
              <Button href="#nasil-calisir" variant="secondary" className="w-full sm:w-auto">
                CNR Norm Nasıl Çalışır?
              </Button>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              15-30 dakikalık ücretsiz Müşteri Akışı Skoru görüşmesinde işletmenizde müşteri akışının nerede dağıldığını birlikte çıkaralım.
            </p>
          </Reveal>

          <Reveal delay={120} className="w-full min-w-0">
            <div className="surface-strong rounded-[24px] p-6 sm:p-8 w-full">
              <div className="flex items-center justify-between mb-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                  Müşteri Akışı Skoru
                </p>
                <span className="rounded-full border border-amber-300/24 bg-amber-300/10 px-2.5 py-0.5 text-[0.6rem] font-semibold text-amber-300">
                  Örnek skor
                </span>
              </div>

              {/* Score */}
              <div className="mb-5">
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-bold text-white leading-none">61</span>
                  <span className="mb-1 text-lg font-semibold text-slate-500">/ 100</span>
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-white/8">
                  <div
                    className="h-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_12px_rgba(56,189,248,0.5)]"
                    style={{ width: "61%" }}
                  />
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between rounded-xl border border-emerald-300/12 bg-emerald-300/[0.05] px-4 py-2.5">
                  <span className="text-xs text-slate-400">Sıcak Talepler</span>
                  <span className="text-sm font-semibold text-emerald-300">8</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-amber-300/12 bg-amber-300/[0.05] px-4 py-2.5">
                  <span className="text-xs text-slate-400">Geciken Takipler</span>
                  <span className="text-sm font-semibold text-amber-300">3</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-amber-300/12 bg-amber-300/[0.05] px-4 py-2.5">
                  <span className="text-xs text-slate-400">Cevapsız Fiyat Soruları</span>
                  <span className="text-sm font-semibold text-amber-300">5</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-rose-300/16 bg-rose-300/[0.05] px-4 py-2.5">
                  <span className="text-xs text-slate-400">Kaçan Fırsat Riski</span>
                  <span className="rounded-full border border-rose-300/24 bg-rose-300/10 px-2.5 py-0.5 text-[0.65rem] font-semibold text-rose-300">
                    Yüksek
                  </span>
                </div>
              </div>

              {/* Recommended Action */}
              <div className="mt-4 rounded-xl border border-[rgba(125,211,252,0.14)] bg-[rgba(125,211,252,0.05)] px-4 py-3">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)] mb-1">
                  Önerilen Aksiyon
                </p>
                <p className="text-xs leading-5 text-slate-300">
                  Bugün fiyat soran müşterilere dönüş yapılmalı.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
