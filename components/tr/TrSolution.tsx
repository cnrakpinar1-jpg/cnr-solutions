import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

const demoUrl =
  "https://wa.me/905331970462?text=Merhaba%2C%20CNR%20Data%20Room%20hakk%C4%B1nda%20%C3%B6rnek%20ekran%20g%C3%B6rmek%20istiyorum.";

export function TrSolution() {
  return (
    <SectionShell id="cozum">
      <Reveal>
        <div className="max-w-2xl">
          <p className="eyebrow">Çözüm</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            CNR Data Room
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Veriyi tek merkezde toplayan, standart hale getiren ve ekiplerin
            birlikte çalışmasını sağlayan operasyon sistemi.
          </p>
          <p className="mt-4 text-base font-medium text-slate-200">
            Dosya arama yerine sistem kullanılır.
          </p>
          <p className="mt-4 rounded-2xl border border-[rgba(125,211,252,0.18)] bg-[rgba(56,189,248,0.06)] px-5 py-4 text-base font-semibold leading-7 text-white">
            We don&apos;t prepare reports. We build the system behind them.
          </p>
          <div className="mt-8">
            <Button href={demoUrl} target="_blank" rel="noopener noreferrer">
              Nasıl çalıştığını göster
            </Button>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
