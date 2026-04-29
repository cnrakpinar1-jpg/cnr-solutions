import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { TrContactForm } from "@/components/tr/TrContactForm";

const whatsappUrl =
  "https://wa.me/905331970462?text=Merhaba%2C%20bilgi%20almak%20istiyorum.";

export function TrCta() {
  return (
    <SectionShell id="iletisim" className="pb-24">
      <Reveal>
        <div className="text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.8rem]">
            İşletmenizde müşteri akışının normu var mı?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400">
            Ücretsiz Müşteri Akışı Analizi ile WhatsApp, Instagram, telefon, web formu ve reklam kanallarınızdan gelen müşteri görüşmelerinin nasıl ilerlediğini birlikte inceliyoruz.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
            Size daha fazla reklam ya da karmaşık yazılım satmaya çalışmıyoruz. Önce işletmenize gelen müşteri akışının nerede dağıldığını, hangi görüşmelerin takip dışı kaldığını ve sürecin nasıl standartlaştırılabileceğini çıkarıyoruz.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#form"
              className="inline-flex min-h-[3.25rem] w-full items-center justify-center rounded-full bg-[var(--color-accent)] px-7 text-base font-semibold text-slate-950 shadow-[0_18px_54px_rgba(56,189,248,0.34)] transition-all hover:-translate-y-1 hover:bg-[var(--color-accent-strong)] sm:w-auto"
            >
              Ücretsiz Müşteri Akışı Analizi Al
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[3.25rem] w-full items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.045] px-7 text-base font-semibold text-white transition-all hover:-translate-y-1 hover:border-[rgba(125,211,252,0.38)] hover:bg-white/[0.08] sm:w-auto"
            >
              WhatsApp&rsquo;tan Yaz
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            Analiz sonrası işletmenize özel sade bir CNR Norm kurulum planı sunulur.
          </p>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div id="form" className="surface-strong mt-14 rounded-[32px] p-8 shadow-[0_30px_100px_rgba(2,6,23,0.48)] sm:p-12">
          <h3 className="mb-2 text-xl font-semibold text-white">Ücretsiz Müşteri Akışı Analizi</h3>
          <p className="mb-8 text-sm leading-6 text-slate-500">
            Formu doldurun, müşteri akışınızı inceleyip size en kısa sürede dönüş yapalım. Hızlı yanıt için WhatsApp&rsquo;tan da ulaşabilirsiniz.
          </p>
          <TrContactForm />
        </div>
      </Reveal>
    </SectionShell>
  );
}
