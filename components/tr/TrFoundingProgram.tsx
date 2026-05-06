import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { Tag } from "@/components/ui/Tag";
import { NormLogoImage } from "@/components/shared/NormLogoImage";

const bullets = [
  "Gelen talepler Fırsat Kartı'na dönüşür.",
  "Sıcak, bekleyen ve takip isteyen müşteriler görünür olur.",
  "Bugün kime dönüş yapılacağı netleşir.",
  "14. gün sonunda işletmeye özel Kaçan Fırsat Raporu çıkar.",
];

export function TrFoundingProgram() {
  return (
    <SectionShell id="kurucu-program">
      <Reveal>
        <div className="flex items-center gap-3 mb-4">
          <NormLogoImage className="h-6 w-auto object-contain" />
          <Tag>14 Günlük Akış Analizi</Tag>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.8rem]">
          İlk 10 Kurucu İşletme Programı
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
          14 gün boyunca işletmenizin müşteri akışını birlikte düzenliyoruz. Gelen talepler, geciken takipler, sıcak fırsatlar ve kaçan fırsat riskleri görünür hale gelir.
        </p>
      </Reveal>

      <Reveal delay={80}>
        <div className="surface-strong mt-8 rounded-[24px] p-8 sm:p-10">
          <p className="text-base leading-8 text-slate-300 max-w-2xl">
            Norm&apos;u ilk aşamada 10 seçili işletmeyle kontrollü şekilde kuruyoruz. Bu süreçte gelen talepleri, randevu takiplerini ve sıcak fırsatları görünür hale getiriyoruz.
          </p>

          <div className="mt-6 rounded-[16px] border border-amber-300/20 bg-amber-300/[0.04] px-5 py-4">
            <p className="text-sm font-semibold text-amber-200">
              Bu program genel kullanıma açık değildir. İlk aşamada yalnızca 10 işletme seçilecektir.
            </p>
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400">
            Bu sürecin amacı yeni bir yazılım denetmek değil; işletmenizde müşteri fırsatlarının nerede kaçtığını 14 gün içinde görünür hale getirmektir.
          </p>

          <ul className="mt-7 space-y-3">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 text-[var(--color-accent)] select-none font-semibold">✓</span>
                <span className="text-sm leading-6 text-slate-300">{bullet}</span>
              </li>
            ))}
          </ul>

          <p className="mt-5 text-sm leading-7 text-slate-400">
            Günde 5-10 dakika yeterli. Gelen talepleri Norm&apos;a bırakın; akışı birlikte netleştirelim.
          </p>

          <div className="mt-6 rounded-[16px] border border-white/10 bg-white/[0.025] px-5 py-5">
            <p className="text-sm font-semibold text-white">Kurucu işletmelere özel başlangıç</p>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              İlk 10 işletme için kurulum ve aylık destek modeliyle ilerliyoruz. Net teklif, kısa akış analizinden sonra işletmenin ihtiyacına göre belirlenir.
            </p>
            <div className="mt-3 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
              <div className="flex items-baseline justify-between rounded-lg border border-white/8 bg-white/[0.025] px-3 py-2">
                <span className="text-xs text-slate-500">Kurulum</span>
                <span className="font-semibold text-white">7.500 – 10.000 TL&rsquo;den başlar</span>
              </div>
              <div className="flex items-baseline justify-between rounded-lg border border-white/8 bg-white/[0.025] px-3 py-2">
                <span className="text-xs text-slate-500">Aylık destek</span>
                <span className="font-semibold text-white">1.500 – 2.500 TL&rsquo;den başlar</span>
              </div>
            </div>
            <p className="mt-3 text-xs leading-5 text-slate-500">
              Ücretsiz demo vardır. Tamamen ücretsiz pilot yoktur; süreç kurulum ve destek emeği içerir.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#basvuru" className="w-full sm:w-auto">
              Müşteri Akışımı Analiz Et
            </Button>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Öncelik: güzellik merkezleri, medikal estetik ve diş klinikleri.
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
