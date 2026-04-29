import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

export function TrSolution() {
  return (
    <SectionShell>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Ne yapıyoruz?"
            title="İşletmenizin çalışma şeklini sistemleştiriyoruz."
            description="Web sitesi, CRM, otomasyon, dashboard veya portal tek başına amaç değildir. Asıl amaç; işletmenin daha net çalışması, daha iyi takip yapması ve daha görünür yönetilmesidir."
          />
          <p className="mt-5 max-w-lg text-base leading-8 text-slate-400">
            İşletmenizin mevcut iş akışını analiz eder, operasyonel karmaşanın en büyük
            noktalarını belirler ve bunların etrafına pratik, kullanılabilir, yapay zekâ destekli
            iş sistemleri kurarız.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="flex flex-col gap-5">
            <div className="rounded-[20px] border border-[rgba(125,211,252,0.18)] bg-[rgba(125,211,252,0.05)] px-6 py-5">
              <p className="text-lg font-bold text-white sm:text-xl">
                Araç değil, çalışan sistem kuruyoruz.
              </p>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-white/[0.035] px-6 py-5 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-rose-300/70">
                Ne yapmıyoruz
              </p>
              <p className="mt-2 text-base font-medium text-white">Web sitesi yapmıyoruz.</p>
            </div>

            <div className="rounded-[20px] border border-emerald-300/18 bg-emerald-300/[0.04] px-6 py-5">
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-emerald-300/80">
                Ne yapıyoruz
              </p>
              <p className="mt-2 text-base font-medium leading-7 text-white">
                İşletmenizin satış, müşteri ve operasyon akışını taşıyan iş sistemleri kuruyoruz.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
