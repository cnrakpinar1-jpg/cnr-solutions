import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { HeroMockup } from "@/components/visuals/HeroMockup";

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
              AI-assisted development · hızlı prototipleme · satış ve operasyon odaklı sistem tasarımı
            </p>
            <h1 className="text-balance mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05]">
              İşletmeleri yapay zekâ çağına taşıyan sistemler kuruyoruz.
            </h1>
            <p className="mt-4 text-lg font-medium text-[var(--color-accent)]">
              Web sitesi değil; müşteri, satış ve operasyon akışınızı yöneten iş sistemleri.
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              CNR Solutions; klinikler, güzellik merkezleri, diş klinikleri, emlak ofisleri ve
              hizmet işletmeleri için müşteri takibi, mini CRM, randevu akışı, client portal,
              dashboard ve yapay zekâ destekli otomasyon sistemleri geliştirir.
            </p>
            <p className="mt-5 text-base font-medium text-slate-200">
              Dağınık mesajları, kaçan lead&apos;leri ve manuel süreçleri tek bir sisteme dönüştürüyoruz.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#projeler">Projeleri Gör</Button>
              <Button
                href="https://wa.me/905331970462"
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp&apos;tan Yaz
              </Button>
              <Button
                href="mailto:cnrakpinar1@gmail.com?subject=Demo%20Talebi"
                variant="secondary"
              >
                Demo Talep Et
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:justify-self-end">
            <HeroMockup />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
