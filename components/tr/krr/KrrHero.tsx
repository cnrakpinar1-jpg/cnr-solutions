import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { KRR_WHATSAPP_URL } from "./constants";

export function KrrHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.13),transparent_60%)]"
      />
      <div className="container-shell flex flex-col">
        <div className="grid flex-1 items-center gap-14 pb-20 pt-14 lg:grid-cols-[minmax(0,1fr)_minmax(26rem,0.95fr)] lg:gap-16 lg:pb-28">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">
              Düğün salonları · Kır bahçeleri · Organizasyon firmaları
            </p>
            <h1 className="text-balance mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
              Düğün salonunuza gelen rezervasyon talepleri kaçıyor olabilir.
            </h1>
            <p className="mt-4 text-lg font-medium text-[var(--color-accent)]">
              Kaçan Rezervasyon Radarı
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              WhatsApp, Instagram DM ve formlardan gelen düğün, nişan ve kına
              taleplerini tek ekranda görün. Sıcak müşterileri ayırın, bugün
              dönülmesi gereken kişileri takip edin ve kaçan ciroyu ölçün.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href={KRR_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                10 dakikalık kaçan rezervasyon analizi isteyin
              </Button>
              <Button href="#panel" variant="secondary">
                Demo ekranını gör
              </Button>
            </div>

            <p className="mt-6 max-w-md text-sm leading-6 text-slate-400">
              Web sitesi veya reklam değil. Gelen talebi rezervasyona çeviren
              takip sistemi.
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:justify-self-end">
            <KrrHeroPreview />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function KrrHeroPreview() {
  return (
    <div className="surface-strong relative mx-auto w-full max-w-[34rem] overflow-hidden rounded-[28px] p-5 sm:p-6">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[rgba(125,211,252,0.18)] to-transparent" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-accent)]">
              Bu ay
            </p>
            <h3 className="mt-2 text-lg font-semibold text-white">
              Kaçan rezervasyon özeti
            </h3>
          </div>
          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
            Demo
          </span>
        </div>

        <div className="mt-5 rounded-2xl border border-[rgba(125,211,252,0.22)] bg-[rgba(56,189,248,0.08)] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
            Tahmini kaçan ciro
          </p>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            126.000 TL
          </p>
          <div className="mt-4 grid grid-cols-3 gap-1.5">
            <div className="h-1.5 rounded-full bg-[var(--color-accent)]" />
            <div className="h-1.5 rounded-full bg-[rgba(125,211,252,0.55)]" />
            <div className="h-1.5 rounded-full bg-[rgba(125,211,252,0.25)]" />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="rounded-2xl border border-white/6 bg-white/4 p-3">
            <div className="text-xl font-semibold text-white">184</div>
            <div className="mt-1 text-xs text-slate-400">Gelen talep</div>
          </div>
          <div className="rounded-2xl border border-white/6 bg-white/4 p-3">
            <div className="text-xl font-semibold text-[var(--color-accent)]">
              41
            </div>
            <div className="mt-1 text-xs text-slate-400">Sıcak talep</div>
          </div>
          <div className="rounded-2xl border border-white/6 bg-white/4 p-3">
            <div className="text-xl font-semibold text-emerald-200">9</div>
            <div className="mt-1 text-xs text-slate-400">Kurtarılabilir</div>
          </div>
        </div>
      </div>
    </div>
  );
}
