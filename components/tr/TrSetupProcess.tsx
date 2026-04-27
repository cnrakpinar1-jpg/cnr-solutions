import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

const steps = [
  "Ürün ve müşteri haritası çıkarılır",
  "Veri kaynakları bağlanır",
  "Eksik veri tespit edilir",
  "Sistem kurulur",
  "Süreç takip edilir",
];

export function TrSetupProcess() {
  return (
    <SectionShell id="surec">
      <Reveal>
        <SectionHeading eyebrow="Süreç" title="Nasıl çalışır?" />
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-5">
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
    </SectionShell>
  );
}
