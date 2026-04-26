import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const problems = [
  "WhatsApp mesajlarında unutulan müşteriler",
  "Instagram DM ve telefon taleplerinin dağılması",
  "Kiminle ne konuşulduğunun bilinmemesi",
  "Randevuların manuel takip edilmesi",
  "Satış fırsatlarının sessizce kaçması",
  "İşletme sahibinin operasyonu tek ekrandan görememesi",
];

export function TrProblem() {
  return (
    <SectionShell>
      <Reveal>
        <SectionHeading
          eyebrow="Gerçek Sorun"
          title="Sorun müşteri gelmemesi değil. Gelen müşterinin kaybolması."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {problems.map((problem, index) => (
          <Reveal key={index} delay={index * 60}>
            <SurfaceCard className="h-full hover:-translate-y-1 hover:border-[rgba(125,211,252,0.28)]">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                0{index + 1}
              </div>
              <p className="mt-3 text-base font-medium leading-6 text-white">{problem}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="mt-10 rounded-2xl border border-white/8 bg-white/[0.025] p-6">
          <p className="text-base leading-7 text-slate-300">
            Bugün birçok işletme hâlâ müşteri sürecini hafızayla, WhatsApp&apos;la ve dağınık notlarla
            yönetiyor. Biz bunu sisteme çeviriyoruz.
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
