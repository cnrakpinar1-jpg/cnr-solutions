import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { TrScoreCta } from "@/components/tr/TrScoreCta";

const setupModules = ["Norm Inbox", "Norm Pipeline", "Norm Tasks", "CNR Norm IQ"];

export function TrProofSimulation() {
  return (
    <SectionShell id="ornek">
      <Reveal>
        <SectionHeading
          eyebrow="Örnek Skor"
          title="Örnek Müşteri Akışı Skoru"
          description="Bu örnek skor, CNR Norm'un işletmelerde hangi kayıp noktalarını görünür hale getirdiğini göstermek için hazırlanmıştır."
        />
      </Reveal>

      <Reveal delay={100}>
        <div className="surface-strong mt-10 overflow-hidden rounded-[24px] shadow-[0_26px_86px_rgba(2,6,23,0.48)]">
          {/* Card header */}
          <div className="flex items-center justify-between border-b border-white/8 bg-white/[0.03] px-6 py-4 sm:px-8">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                CNR Norm
              </p>
              <h3 className="mt-0.5 text-base font-semibold text-white">Müşteri Akışı Skoru Raporu</h3>
            </div>
            <span className="rounded-full border border-amber-300/24 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-300">
              Örnek — Demo Veri
            </span>
          </div>

          <div className="grid gap-0 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/8">
            {/* Left: business info */}
            <div className="px-6 py-6 sm:px-8 space-y-4">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-slate-500 mb-1">Sektör</p>
                <p className="text-sm font-medium text-white">Güzellik merkezi</p>
              </div>
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-slate-500 mb-1">Kanallar</p>
                <p className="text-sm text-slate-300">Instagram + WhatsApp + Telefon</p>
              </div>
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-slate-500 mb-2">Müşteri Akışı Skoru</p>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-white leading-none">58</span>
                  <span className="mb-0.5 text-base font-semibold text-slate-500">/ 100</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-white/8">
                  <div
                    className="h-1.5 rounded-full bg-[var(--color-accent)]"
                    style={{ width: "58%" }}
                  />
                </div>
              </div>
            </div>

            {/* Right: risk + setup */}
            <div className="px-6 py-6 sm:px-8 space-y-4">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-slate-500 mb-2">Ana Risk</p>
                <div className="flex items-start gap-2.5 rounded-xl border border-rose-300/16 bg-rose-300/[0.05] px-4 py-3">
                  <span className="mt-0.5 text-rose-400 shrink-0 select-none">▲</span>
                  <p className="text-sm leading-6 text-slate-300">
                    Fiyat soran müşterilere sistemli takip yapılmıyor.
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-slate-500 mb-2">Önerilen Kurulum</p>
                <div className="flex flex-wrap gap-2">
                  {setupModules.map((mod) => (
                    <span
                      key={mod}
                      className="rounded-full border border-[rgba(125,211,252,0.2)] bg-[rgba(125,211,252,0.07)] px-3 py-1 text-xs font-semibold text-[var(--color-accent)]"
                    >
                      {mod}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm leading-6 text-slate-400">
            Bu yalnızca örnek bir skor. Aynı tanılamayı işletmeniz için de çıkarabiliriz.
          </p>
          <TrScoreCta label="İşletmem İçin Skor Çıkar" className="mt-4" />
        </div>
      </Reveal>
    </SectionShell>
  );
}
