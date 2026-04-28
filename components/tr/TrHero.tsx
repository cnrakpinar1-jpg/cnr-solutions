import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { DataRoomDashboard } from "@/components/visuals/DataRoomDashboard";
import { OperationsStrip } from "@/components/visuals/OperationsStrip";

const demoUrl =
  "https://wa.me/905331970462?text=Merhaba%2C%202%20Dakikal%C4%B1k%20CBAM%20Data%20Room%20demosunu%20g%C3%B6rmek%20istiyorum.";

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
        <div className="grid flex-1 items-center gap-10 pb-16 pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-14 lg:pb-32 lg:pt-20">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">
              Türkiye&rsquo;deki ihracatçı üreticiler için CBAM veri odası
            </p>
            <h1 className="text-balance mt-3 text-[2.4rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[4rem] lg:leading-[0.98]">
              CBAM verisini Excel kaosundan çıkarıp tek bir ihracat veri odasında topluyoruz.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
              ERP&rsquo;ye dokunmadan çalışan sistemlerle üretim, enerji ve ürün
              verilerinizi düzenliyor; AB müşterilerine gönderilebilir rapor
              akışını hızlandırıyoruz.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={demoUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                2 Dakikalık Demo İsteyin
              </Button>
              <Button href="#akis" variant="secondary" className="w-full sm:w-auto">
                CBAM Veri Akışını Görün
              </Button>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              Alüminyum, çelik, kablo ve endüstriyel üreticiler için.
            </p>
          </Reveal>

          <Reveal delay={120} className="w-full min-w-0">
            <DataRoomDashboard locale="tr" />
          </Reveal>
        </div>
      </div>
      <OperationsStrip locale="tr" />
    </section>
  );
}
