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
            Üretici verisini tek yerde toplayan ve işlenebilir hale getiren
            sistem.
          </p>
          <p className="mt-4 text-base leading-7 text-slate-400">
            Ürün, tesis, enerji ve müşteri verilerinizi yapılandırılmış bir
            ortama taşır. Eksik veriyi görünür kılar, müşteri taleplerine
            hazır paketler oluşturur ve ihracat sürecini izlenebilir hale
            getirir.
          </p>
          <div className="mt-8">
            <Button href={demoUrl} target="_blank" rel="noopener noreferrer">
              Örnek ekran isteyin
            </Button>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
