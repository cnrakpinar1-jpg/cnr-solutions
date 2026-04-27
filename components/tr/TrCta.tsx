import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

const contactUrl =
  "https://wa.me/905331970462?text=Merhaba%2C%20CNR%20Data%20Room%20hakk%C4%B1nda%20birlikte%20bakmak%20istiyorum.";

export function TrCta() {
  return (
    <SectionShell id="contact" className="pb-24">
      <Reveal>
        <div className="surface-strong relative mx-auto max-w-5xl overflow-hidden rounded-[36px] p-10 text-center shadow-[0_30px_100px_rgba(2,6,23,0.58),0_0_80px_rgba(56,189,248,0.14)] sm:p-16">
          <div aria-hidden="true" className="dashboard-grid absolute inset-0 opacity-25" />
          <div className="relative">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Operasyon içinde veri kaybetmeyi bırakın.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Mevcut veri akışınızı birlikte gözden geçirip Data Room’un bunu nasıl yapılandıracağını gösterelim.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href={contactUrl} target="_blank" rel="noopener noreferrer">
              15 dakikalık görüşme planla
            </Button>
            <Button href="mailto:cnrakpinar1@gmail.com" variant="secondary">
              E-posta gönder
            </Button>
          </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
