import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { DataRoomDashboard } from "@/components/visuals/DataRoomDashboard";
import { OperationsStrip } from "@/components/visuals/OperationsStrip";

const contactUrl =
  "https://wa.me/905331970462?text=Merhaba%2C%20CNR%20Data%20Room%20nas%C4%B1l%20%C3%A7al%C4%B1%C5%9Ft%C4%B1%C4%9F%C4%B1n%C4%B1%20g%C3%B6rmek%20istiyorum.";

export function TrHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="dashboard-grid pointer-events-none absolute inset-0 opacity-70" />
      <div aria-hidden="true" className="data-flow-lines pointer-events-none absolute inset-0 opacity-70" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] bg-[radial-gradient(ellipse_at_20%_10%,rgba(56,189,248,0.18),transparent_52%),linear-gradient(180deg,rgba(6,8,22,0.18),rgba(6,8,22,0.92))]"
      />
      <div className="container-shell flex flex-col">
        <div className="grid flex-1 items-center gap-14 pb-24 pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(26rem,0.86fr)] lg:pb-36 lg:pt-24">
          <Reveal className="max-w-3xl">
            <div className="mb-9 inline-block rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 shadow-[0_18px_48px_rgba(2,6,23,0.3)] backdrop-blur-md">
              <p className="text-lg font-semibold leading-snug text-white sm:text-xl">
                AB müşteriniz veri istediğinde,<br className="hidden sm:block" /> ekibiniz dosya mı arıyor?
              </p>
              <p className="mt-1 text-sm font-medium text-slate-400">
                Bu sadece zaman kaybı değil. Operasyon riski.
              </p>
            </div>

            <p className="eyebrow">
              İhracatçı üreticiler için operasyonel veri odası
            </p>
            <h1 className="text-balance mt-2 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-[4.6rem] lg:leading-[0.98]">
              İhracat veriniz dağınık kalmasın.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-300">
              CNR Data Room; ürün, üretim, enerji, kalite ve müşteri verilerini
              tek yerde toplar. Ekipler arası dağınıklığı ortadan kaldırır.
            </p>
            <p className="mt-4 text-base font-medium text-slate-200">
              Her ekip aynı veriyi görür. Herkes ne yapacağını bilir.
            </p>
            <p className="mt-3 text-sm text-slate-500">
              Excel, e-posta ve klasör kaosu ortadan kalkar.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={contactUrl} target="_blank" rel="noopener noreferrer">
                Nasıl çalıştığını göster
              </Button>
              <Button href="#akis" variant="secondary">
                Örnek veri akışını gör
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <DataRoomDashboard locale="tr" />
          </Reveal>
        </div>
      </div>
      <OperationsStrip locale="tr" />
    </section>
  );
}
