import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { TrContactForm } from "@/components/tr/TrContactForm";

const whatsappUrl =
  "https://wa.me/905331970462?text=Merhaba%2C%20m%C3%BC%C5%9Fteri%20ak%C4%B1%C5%9F%C4%B1%20skorum%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

export function TrCta() {
  return (
    <SectionShell id="iletisim" className="pb-24">
      <Reveal>
        <div className="text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.8rem]">
            Müşteri akışınızda para nerede kaçıyor, birlikte çıkaralım.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400">
            2 dakikalık kısa formu doldurun. WhatsApp, Instagram, telefon, web formu ve reklam kanallarınızdan gelen taleplerin nerede dağıldığını, hangi takiplerin geciktiğini ve CNR Norm’un işletmenizde nerede değer yaratabileceğini birlikte çıkaralım.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#musteri-akisi-skoru"
              className="inline-flex min-h-[3.25rem] w-full items-center justify-center rounded-full bg-[var(--color-accent)] px-7 text-base font-semibold text-slate-950 shadow-[0_18px_54px_rgba(56,189,248,0.34)] transition-all hover:-translate-y-1 hover:bg-[var(--color-accent-strong)] sm:w-auto"
            >
              Ücretsiz Skorumu Al
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
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div
          id="musteri-akisi-skoru"
          className="surface-strong mt-14 rounded-[32px] p-8 shadow-[0_30px_100px_rgba(2,6,23,0.48)] sm:p-12"
        >
          <h3 className="mb-2 text-xl font-semibold text-white">Ücretsiz Müşteri Akışı Skoru</h3>
          <p className="mb-3 text-sm leading-6 text-slate-500">
            Bu form, işletmenizde müşteri taleplerinin nerede dağıldığını anlamamız için kısa bir ön teşhistir. Bilgileri doldurun; size müşteri akışı skorunuzu, ana takip riskinizi ve önerilen CNR Norm kurulum planını çıkaralım.
          </p>
          <p className="mb-8 text-xs leading-5 text-slate-500">
            Önce işletmenizin mevcut müşteri akışını sade şekilde çıkarıyoruz. Uygun görürseniz sonraki adımda CNR Norm’un bu akışı nasıl toparlayabileceğini birlikte değerlendiriyoruz.
          </p>
          <TrContactForm />
          <div className="mt-10 border-t border-white/8 pt-7">
            <h4 className="text-sm font-semibold text-white">Formdan sonra ne oluyor?</h4>
            <div className="mt-5 grid gap-5 sm:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">1. Akışınızı inceliyoruz</p>
                <p className="mt-2 text-xs leading-5 text-slate-500">Kanallarınızı, takip yönteminizi ve en büyük kayıp noktalarınızı değerlendiriyoruz.</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">2. Skorunuzu çıkarıyoruz</p>
                <p className="mt-2 text-xs leading-5 text-slate-500">Size müşteri akışı skorunuzu, ana riskinizi ve ilk iyileştirme alanınızı netleştiriyoruz.</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">3. Kurulum planını konuşuyoruz</p>
                <p className="mt-2 text-xs leading-5 text-slate-500">Uygunsa CNR Norm’un işletmenizde nasıl kurulabileceğini 15–30 dakikalık görüşmede gösteriyoruz.</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
