import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const steps = [
  {
    eyebrow: "1. Akışı çıkarıyoruz",
    body: "WhatsApp, Instagram, telefon ve formdan gelen taleplerin nasıl takip edildiğini birlikte netleştiriyoruz.",
  },
  {
    eyebrow: "2. Norm’u kuruyoruz",
    body: "Gelen taleplerin Fırsat Kartı’na dönüşeceği, takiplerin görünür olacağı sade bir alan oluşturuyoruz.",
  },
  {
    eyebrow: "3. Raporluyoruz",
    body: "14 günlük süreç sonunda hangi fırsatların takipte kaybolduğunu ve nerede iyileştirme yapılması gerektiğini raporlarız.",
  },
];

export function TrProcess() {
  return (
    <SectionShell id="nasil-calisir">
      <Reveal>
        <SectionHeading
          title="Norm nasıl çalışır?"
          description="Yakala. Takip et. Kaçağı göster."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {steps.map((step, i) => (
          <Reveal key={step.eyebrow} delay={i * 80}>
            <SurfaceCard className="h-full">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                {step.eyebrow}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-400">{step.body}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
