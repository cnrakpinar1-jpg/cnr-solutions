import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { TrContactForm } from "@/components/tr/TrContactForm";

const whatsappUrl =
  "https://wa.me/905331970462?text=Merhaba%2C%20CBAM%20Data%20Room%20hakk%C4%B1nda%20demo%20almak%20istiyorum.";

export function TrCta() {
  return (
    <SectionShell id="iletisim" className="pb-24">
      <Reveal>
        <div className="text-center">
          <p className="eyebrow">İletişim</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Excel&rsquo;de dağınık kalan ihracat verisini sistem haline getirelim.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400">
            Formu doldurun ya da doğrudan WhatsApp üzerinden ulaşın. Mevcut veri
            akışınıza bakarak ne kadar sürede başlayabileceğimizi gösterelim.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              Demo İsteyin
            </Button>
            <Button href="mailto:cnrakpinar1@gmail.com" variant="secondary" className="w-full sm:w-auto">
              E-posta gönder
            </Button>
          </div>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="surface-strong mt-14 rounded-[32px] p-8 shadow-[0_30px_100px_rgba(2,6,23,0.48)] sm:p-12">
          <h3 className="mb-8 text-xl font-semibold text-white">Demo talebi formu</h3>
          <TrContactForm />
        </div>
      </Reveal>

      <Reveal delay={160}>
        <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-6 text-slate-600">
          Bu sistem hukuki danışmanlık veya resmi doğrulama hizmeti değildir. Amaç, CBAM ve AB müşteri veri talepleri için operasyonel veri hazırlama sürecini düzenlemektir.
        </p>
      </Reveal>
    </SectionShell>
  );
}
