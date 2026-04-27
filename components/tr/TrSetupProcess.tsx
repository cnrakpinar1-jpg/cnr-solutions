import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

const steps = [
  "Ürün ve müşteri haritası çıkarılır",
  "Mevcut veri kaynakları incelenir",
  "Eksik alanlar tespit edilir",
  "İlk data room kurulur",
  "Ekip iş akışı oluşturulur",
];

export function TrSetupProcess() {
  return (
    <SectionShell id="surec">
      <Reveal>
        <SectionHeading eyebrow="Süreç" title="Nasıl başlarız?" />
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_18rem]">
        <div className="grid gap-4 md:grid-cols-5">
          {steps.map((step, index) => (
            <Reveal key={step} delay={index * 70}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-[0_16px_48px_rgba(2,6,23,0.24)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(125,211,252,0.3)] hover:bg-white/[0.055]">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                  0{index + 1}
                </div>
                <p className="mt-4 text-base font-medium leading-6 text-white">{step}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <div className="h-full rounded-[24px] border border-[rgba(125,211,252,0.2)] bg-[rgba(56,189,248,0.06)] p-6 shadow-[0_18px_58px_rgba(2,6,23,0.28)]">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
              İlk adım
            </p>
            <p className="mt-3 text-2xl font-bold leading-8 text-white">
              15 dakikalık süreç incelemesi
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Mevcut veri akışınız birlikte çıkarılır.
            </p>
            <a
              href="https://wa.me/905331970462?text=Merhaba%2C%20ilk%20veri%20haritas%C4%B1%20i%C3%A7in%20g%C3%B6r%C3%BC%C5%9Fmek%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-[var(--color-accent-strong)]"
            >
              İlk veri haritası için görüşelim
            </a>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
