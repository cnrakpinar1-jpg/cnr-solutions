import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { HeroMockup } from "@/components/visuals/HeroMockup";

const planSystemUrl =
  "https://wa.me/905331970462?text=Merhaba%2C%20CNR%20Solutions%20sitesinden%20geliyorum.%20%C4%B0%C5%9Fletmem%20i%C3%A7in%20yapay%20zeka%20destekli%20bir%20sistem%20hakk%C4%B1nda%20konu%C5%9Fmak%20istiyorum.";

const whatsappUrl =
  "https://wa.me/905331970462?text=Merhaba%2C%20CNR%20Solutions%20sitesinden%20geliyorum.%20%C4%B0%C5%9Fletmem%20i%C3%A7in%20bir%20sistem%20konu%C5%9Fmak%20istiyorum.";

export function TrHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.13),transparent_60%)]"
      />
      <div className="container-shell flex flex-col">
        <div className="grid flex-1 items-center gap-14 pb-20 pt-14 lg:grid-cols-[minmax(0,1fr)_minmax(28rem,0.95fr)] lg:gap-16 lg:pb-28">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">
              Yapay zekâ destekli iş sistemleri · KOBİ · Klinik · Hizmet işletmesi
            </p>
            <h1 className="text-balance mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05]">
              Türkiye’deki işletmeleri yapay zekâ çağına taşıyan sistemler kuruyoruz.
            </h1>
            <p className="mt-4 text-lg font-medium text-[var(--color-accent)]">
              Web sitesi değil; müşteri, satış ve operasyon akışınızı yöneten iş sistemleri.
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              CNR Solutions; KOBİ’ler, klinikler, güzellik merkezleri, diş klinikleri, emlak
              ofisleri ve hizmet işletmeleri için müşteri takibi, randevu yönetimi, kontrol
              paneli, müşteri portalı ve yapay zekâ destekli takip sistemleri kurar.
            </p>
            <p className="mt-5 text-base font-medium text-slate-200">
              Dağınık mesajları, kaçan müşteri taleplerini ve manuel süreçleri tek bir işletme
              sistemine dönüştürüyoruz.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href={planSystemUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                İşletmem İçin Sistem Planla
              </Button>
              <Button
                href={whatsappUrl}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp’tan Yaz
              </Button>
              <Button href="#projects" variant="secondary">
                Projeleri Gör
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:justify-self-end">
            <HeroMockup locale="tr" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
