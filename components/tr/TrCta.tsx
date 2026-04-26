import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

const systemPlanUrl =
  "https://wa.me/905331970462?text=Merhaba%2C%20CNR%20Solutions%20sitesinden%20geliyorum.%20%C4%B0%C5%9Fletmem%20i%C3%A7in%20bir%20sistem%20konu%C5%9Fmak%20istiyorum.";

const demoRequestUrl =
  "https://wa.me/905331970462?text=Merhaba%2C%20CNR%20Solutions%20demo%20sistemleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

export function TrCta() {
  return (
    <SectionShell id="contact" className="pb-24">
      <Reveal>
        <div className="surface-strong mx-auto max-w-3xl rounded-[32px] p-10 text-center sm:p-14">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            İşletmenizin müşteri, satış ve operasyon sürecini sisteme dönüştürelim.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300">
            WhatsApp, Instagram DM, telefon ve formlar arasında kaybolan talepleri tek bir
            düzene almak istiyorsanız, size uygun sistemi birlikte planlayabiliriz.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              href={systemPlanUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              İşletmem İçin Sistem Planla
            </Button>
            <Button
              href={demoRequestUrl}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo Talep Et
            </Button>
            <Button href="#projects" variant="secondary">
              Projeleri İncele
            </Button>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
