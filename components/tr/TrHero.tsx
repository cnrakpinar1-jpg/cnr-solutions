import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const contactUrl =
  "https://wa.me/905331970462?text=Merhaba%2C%20CNR%20Data%20Room%20nas%C4%B1l%20%C3%A7al%C4%B1%C5%9Ft%C4%B1%C4%9F%C4%B1n%C4%B1%20g%C3%B6rmek%20istiyorum.";

export function TrHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.13),transparent_60%)]"
      />
      <div className="container-shell flex flex-col">
        <div className="flex-1 pb-20 pt-14 lg:pb-28 lg:pt-20">
          <Reveal className="max-w-3xl">

            {/* Conversion hook */}
            <div className="mb-8 inline-block rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4">
              <p className="text-lg font-semibold leading-snug text-white sm:text-xl">
                AB müşteriniz veri istediğinde,<br className="hidden sm:block" /> ekibiniz dosya mı arıyor?
              </p>
              <p className="mt-1 text-sm font-medium text-slate-400">
                Veri var. Sistem yok. Problem bu.
              </p>
            </div>

            <p className="eyebrow">
              İhracat üreticileri için · Veri yönetim sistemi
            </p>
            <h1 className="text-balance mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05]">
              İhracat veriniz dağınık kalmasın.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Ürün, üretim, enerji ve müşteri verilerinizi tek yerde toplayıp
              CBAM ve müşteri taleplerine hazır hale getiren sistem.
            </p>
            <p className="mt-3 text-sm text-slate-500">
              Excel, e-posta ve klasör kaosunu tek yapıya alır.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={contactUrl} target="_blank" rel="noopener noreferrer">
                Nasıl çalıştığını göster
              </Button>
              <Button href="#akis" variant="secondary">
                Örnek veri akışını gör
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
