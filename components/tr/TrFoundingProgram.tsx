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
            Norm’u ilk aşamada 10 farklı hizmet işletmesiyle ücretsiz ve kontrollü şekilde uyguluyoruz. Bu süreçte randevu, teklif ve bilgi taleplerinin nerede beklediğini ve hangi fırsatların takipte kaybolduğunu görünür hale getiriyoruz.
          </p>

          <div className="mt-6 rounded-[16px] border border-amber-300/20 bg-amber-300/[0.04] px-5 py-4">
            <p className="text-sm font-semibold text-amber-200">
              Bu program genel kullanıma açık değildir. İlk aşamada yalnızca 10 işletme seçilecektir.
            </p>
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400">
            Bu sürecin amacı yeni bir yazılım denetmek değil; işletmenize gelen müşteri taleplerinin nerede kaybolduğunu 14 gün içinde görünür hale getirmektir.
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
            <p className="text-sm font-semibold text-white">İlk 10 işletme için ücretsiz saha uygulaması</p>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              Norm’u ilk aşamada 10 seçili hizmet işletmesiyle ücretsiz olarak uyguluyoruz.
              14 gün boyunca gelen talepleri, geciken takipleri ve kaçan fırsat risklerini birlikte görünür hale getiriyoruz.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Program sonunda işletmenize özel kısa bir Müşteri Akışı Raporu sunulur.
              Bu süreçte ücret alınmaz; karşılığında gerçek kullanım geri bildirimi ve anonimleştirilmiş sonuçları öğrenme izni isteriz.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#basvuru" className="w-full sm:w-auto">
              Ücretsiz Akış Analizine Başvur
            </Button>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Randevu, teklif veya bilgi talebi alan hizmet işletmeleri için.
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
