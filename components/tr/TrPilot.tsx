import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

export function TrPilot() {
  return (
    <SectionShell>
      <Reveal>
        <SectionHeading
          eyebrow="Pilot Çalışmalar"
          title="Pilot çalışmalar ve vaka analizleri"
        />
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-8 rounded-3xl border border-white/8 bg-white/[0.025] p-8 sm:p-10">
          <p className="max-w-2xl text-base leading-7 text-slate-300">
            Şu anda farklı sektörler için demo sistemler ve pilot çalışma modelleri
            geliştiriyoruz. Gerçek işletme kullanımlarından elde edilen sonuçlar bu alanda
            vaka analizi olarak paylaşılacaktır.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Klinik Pilot", "Emlak Pilot", "Hizmet İşletmesi Pilot"].map((label) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3"
              >
                <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] opacity-60" />
                <span className="text-sm text-slate-400">{label} · Geliştiriliyor</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
