import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { KRR_WHATSAPP_URL } from "./constants";

export function KrrCta() {
  return (
    <SectionShell id="contact" className="pb-24">
      <Reveal>
        <div className="surface-strong mx-auto max-w-3xl rounded-[32px] p-10 text-center sm:p-14">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Bu hafta kaç rezervasyon fırsatı kaçtı?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300">
            Düğün sezonu başlamadan önce gelen talepleri kaçırmayan bir takip
            sistemi kurabiliriz.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              href={KRR_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              10 dakikalık analiz isteyin
            </Button>
            <Button href="#panel" variant="secondary">
              Demo ekranına dön
            </Button>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
