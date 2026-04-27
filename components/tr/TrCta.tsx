import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

const contactUrl =
  "https://wa.me/905331970462?text=Merhaba%2C%20CNR%20Data%20Room%20hakk%C4%B1nda%20birlikte%20bakmak%20istiyorum.";

export function TrCta() {
  return (
    <SectionShell id="contact" className="pb-24">
      <Reveal>
        <div className="surface-strong mx-auto max-w-3xl rounded-[32px] p-10 text-center sm:p-14">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Verinizi kaybetmeyin. Operasyonu kontrol altına alın.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300">
            15 dakikalık kısa bir örnek üzerinden nasıl çalıştığını gösterebiliriz.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href={contactUrl} target="_blank" rel="noopener noreferrer">
              Birlikte bakalım
            </Button>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
