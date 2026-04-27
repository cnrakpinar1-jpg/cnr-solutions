import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

const demoUrl =
  "https://wa.me/905331970462?text=Merhaba%2C%20CNR%20Data%20Room%20hakk%C4%B1nda%20%C3%B6rnek%20ekran%20g%C3%B6rmek%20istiyorum.";

const sources = ["Excel", "Email", "ERP", "Production", "Energy", "Quality Docs"];
const outputs = ["Customer package", "Missing data list", "Action owner", "Readiness status"];

export function TrSolution() {
  return (
    <SectionShell id="cozum">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <Reveal>
          <div className="max-w-2xl">
          <p className="eyebrow">Çözüm</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            CNR Data Room
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Veriyi tek merkezde toplayan, standart hale getiren ve ekiplerin
            birlikte çalışmasını sağlayan operasyon sistemi.
          </p>
          <p className="mt-4 text-base font-medium text-slate-200">
            Dosya arama yerine sistem kullanılır.
          </p>
          <p className="mt-4 rounded-2xl border border-[rgba(125,211,252,0.18)] bg-[rgba(56,189,248,0.06)] px-5 py-4 text-base font-semibold leading-7 text-white">
            We don&apos;t prepare reports; we build the system behind them.
          </p>
          <div className="mt-8">
            <Button href={demoUrl} target="_blank" rel="noopener noreferrer">
              Nasıl çalıştığını göster
            </Button>
          </div>
        </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="surface-strong rounded-[28px] p-6">
            <div className="grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Data Sources
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {sources.map((source) => (
                    <div key={source} className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-200">
                      {source}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center text-2xl text-slate-500">→</div>

              <div>
                <div className="rounded-[24px] border border-[rgba(125,211,252,0.24)] bg-[rgba(56,189,248,0.07)] p-5 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                    Core
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-white">CNR Data Room</h3>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {outputs.map((output) => (
                    <div key={output} className="rounded-2xl border border-emerald-300/12 bg-emerald-300/[0.04] px-4 py-3 text-sm font-semibold text-slate-200">
                      {output}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
