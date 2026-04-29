import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { BusinessDashboard } from "@/components/visuals/BusinessDashboard";

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
            <p className="eyebrow">
              Türkiye&rsquo;deki işletmeler için modern iş sistemleri
            </p>

            <h1 className="text-balance mt-4 text-[2.4rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.6rem] lg:leading-[1.04]">
              Türkiye&rsquo;deki işletmeleri yapay zekâ çağına hazırlıyoruz.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
              CNR Solutions, KOBİ&rsquo;lerin ve büyüyen işletmelerin satış, müşteri yönetimi,
              operasyon ve veri süreçlerini modern iş sistemleriyle daha görünür, düzenli ve
              ölçeklenebilir hale getirir.
            </p>

            <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-slate-400 sm:text-base sm:leading-8">
              Modern işletme altyapısı; müşteri, satış, operasyon ve verinin aynı sistem
              mantığıyla çalışmasıdır.
            </p>

            <div className="mt-6 rounded-2xl border border-[rgba(125,211,252,0.14)] bg-[rgba(125,211,252,0.05)] px-5 py-3.5 sm:inline-flex">
              <p className="text-sm font-semibold text-slate-300 sm:text-base">
                Bugünün dağınık iş akışlarını,{" "}
                <span className="text-[var(--color-accent)]">yarının akıllı işletme altyapısına çeviriyoruz.</span>
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="#iletisim" className="w-full sm:w-auto">
                İşletmemi Hazırla
              </Button>
              <Button href="#surec" variant="secondary" className="w-full sm:w-auto">
                Nasıl Çalıştığını Gör
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="w-full min-w-0">
            <BusinessDashboard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
