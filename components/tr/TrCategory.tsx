import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

export function TrCategory() {
  return (
    <SectionShell>
      <Reveal>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-balance text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
            CNR Norm bir araç değil, müşteri akışı standardıdır.
          </h2>

          <div className="mt-8 space-y-5 text-base leading-8 text-slate-400">
            <p>
              Bir işletmeye müşteri sadece web sitesinden gelmez. WhatsApp&rsquo;tan yazar, Instagram&rsquo;dan sorar, telefonla arar, reklam formu doldurur, bazen de doğrudan ekiple konuşur.
            </p>
            <p>
              Sorun çoğu zaman müşteri gelmemesi değildir. Sorun, gelen müşteri görüşmelerinin ortak bir düzene bağlanmadan dağınık kalmasıdır.
            </p>
            <p>
              CNR Norm, bu dağınıklığı işletmenin yeni müşteri akışı normuna dönüştürür. Ekip neyi takip edeceğini bilir, işletme sahibi süreci görür, müşteri görüşmeleri randevuya, teklife ve satışa daha düzenli ilerler.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-[rgba(125,211,252,0.14)] bg-[rgba(125,211,252,0.05)] px-6 py-5">
            <p className="text-base font-semibold leading-7 text-slate-300">
              Amacımız işletmeye bir yazılım daha eklemek değil;{" "}
              <span className="text-[var(--color-accent)]">müşteri akışının standardını kurmak.</span>
            </p>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
