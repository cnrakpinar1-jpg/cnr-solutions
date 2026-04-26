import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

export function TrCta() {
  return (
    <SectionShell id="iletisim" className="pb-24">
      <Reveal>
        <div className="surface-strong mx-auto max-w-3xl rounded-[32px] p-10 text-center sm:p-14">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            İşletmenizin müşteri ve operasyon sürecini sisteme dönüştürelim.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300">
            WhatsApp, Instagram DM, telefon ve formlar arasında kaybolan talepleri tek bir
            düzene almak istiyorsanız, size uygun sistemi birlikte tasarlayabiliriz.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="https://wa.me/905331970462"
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
            <Button href="#projeler" variant="secondary">
              Projeleri İncele
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-500">
            <a
              href="mailto:cnrakpinar1@gmail.com"
              className="hover:text-slate-300 transition-colors"
            >
              cnrakpinar1@gmail.com
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://wa.me/905331970462"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              +90 533 197 0462
            </a>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
