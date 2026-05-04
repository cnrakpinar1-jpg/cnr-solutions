import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { Tag } from "@/components/ui/Tag";

const bullets = [
  "14 gün müşteri akışı takibi",
  "Fırsat Kartları",
  "Bugün dönülecekler listesi",
  "Sıcak müşteri görünürlüğü",
  "Takip boşluklarının tespiti",
  "Pilot sonunda Kaçan Fırsat Raporu",
];

export function TrFoundingProgram() {
  return (
    <SectionShell id="kurucu-program">
      <Reveal>
        <div className="flex items-center gap-3 mb-4">
          <Tag>14 Günlük Pilot</Tag>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.8rem]">
          İlk 10 Kurucu İşletme Programı
        </h2>
      </Reveal>

      <Reveal delay={80}>
        <div className="surface-strong mt-8 rounded-[24px] p-8 sm:p-10">
          <p className="text-base leading-8 text-slate-300 max-w-2xl">
            Norm&apos;u piyasaya çıkmadan önce 10 seçili işletmeyle sahada test ediyoruz. Bu süreçte işletmenize gelen müşteri taleplerini birlikte takip ediyor, sıcak fırsatları ve kaçan takipleri görünür hale getiriyoruz.
          </p>

          <div className="mt-6 rounded-[16px] border border-amber-300/20 bg-amber-300/[0.04] px-5 py-4">
            <p className="text-sm font-semibold text-amber-200">
              Bu program genel kullanıma açık bir deneme değildir. İlk aşamada yalnızca 10 işletme seçilecektir.
            </p>
          </div>

          <ul className="mt-7 space-y-3">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 text-[var(--color-accent)] select-none font-semibold">✓</span>
                <span className="text-sm leading-6 text-slate-300">{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#basvur" className="w-full sm:w-auto">
              Kurucu İşletme Olmak İstiyorum
            </Button>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Öncelik: güzellik merkezleri ve medikal estetik işletmeleri.
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
