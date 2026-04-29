import { Fragment } from "react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const flowStages = ["İlk Temas", "Takip", "Randevu", "Teklif", "Satış", "Rapor"];

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
            <p className="eyebrow">Yeni Müşteri Akışı Standardı</p>

            <h1 className="text-balance mt-4 text-[2.4rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.6rem] lg:leading-[1.04]">
              CNR Norm ile müşteri akışınızı standart hale getirin.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
              WhatsApp, Instagram, telefon, web formu ve reklam kanallarından gelen müşteri görüşmelerini tek düzene alıyor; takip, randevu, teklif ve satış sürecinizi görünür hale getiriyoruz.
            </p>

            <div className="mt-6 rounded-2xl border border-[rgba(125,211,252,0.14)] bg-[rgba(125,211,252,0.05)] px-5 py-3.5 sm:inline-flex">
              <p className="text-sm font-semibold text-slate-300 sm:text-base">
                Daha fazla reklamdan önce,{" "}
                <span className="text-[var(--color-accent)]">müşteri akışınızın normunu kurun.</span>
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="#iletisim" className="w-full sm:w-auto">
                Ücretsiz Müşteri Akışı Analizi Al
              </Button>
              <Button href="#nasil-calisir" variant="secondary" className="w-full sm:w-auto">
                CNR Norm Nasıl Çalışır?
              </Button>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              15–30 dakikalık ücretsiz analizle işletmenizde müşteri akışının nerede dağıldığını birlikte çıkaralım.
            </p>
          </Reveal>

          <Reveal delay={120} className="w-full min-w-0">
            <div className="surface-strong rounded-[24px] p-6 sm:p-8 w-full">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                Müşteri Akışı
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {flowStages.map((stage, i) => (
                  <Fragment key={stage}>
                    <span className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-slate-300">
                      {stage}
                    </span>
                    {i < flowStages.length - 1 && (
                      <span aria-hidden="true" className="flow-arrow inline-block text-xs text-[var(--color-accent)]">
                        →
                      </span>
                    )}
                  </Fragment>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  { label: "Norm Inbox", desc: "Tüm kanallar tek düzende" },
                  { label: "Norm Pipeline", desc: "Görüşmeden satışa süreç" },
                  { label: "Norm Tasks", desc: "Takip sistematik ilerler" },
                  { label: "Norm Reports", desc: "İşletme sahibi görür" },
                  { label: "Norm Automations", desc: "Tekrar işler sadeleşir" },
                  { label: "Sector Norm", desc: "Sektöre göre uyarlanır" },
                ].map((mod) => (
                  <div
                    key={mod.label}
                    className="rounded-xl border border-white/8 bg-white/[0.04] px-3 py-2.5"
                  >
                    <p className="text-[0.65rem] font-semibold text-[var(--color-accent)]">{mod.label}</p>
                    <p className="mt-0.5 text-[0.6rem] leading-4 text-slate-500">{mod.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
