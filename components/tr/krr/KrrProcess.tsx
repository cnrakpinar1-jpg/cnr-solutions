import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const steps = [
  {
    title: "Talepleri toplarız",
    description:
      "Instagram, WhatsApp, form ve manuel notlardan gelen talepler tek yapıya alınır.",
  },
  {
    title: "Sıcak talepleri ayırırız",
    description:
      "Rezervasyon niyeti yüksek kişiler öne çıkarılır.",
  },
  {
    title: "Takip listesini çıkarırız",
    description:
      "Bugün aranacak, mesaj atılacak ve kurtarılacak kişiler netleşir.",
  },
  {
    title: "Kaçan ciroyu gösteririz",
    description:
      "Geç dönüşler ve unutulan taleplerin işletmeye etkisi görünür olur.",
  },
];

export function KrrProcess() {
  return (
    <SectionShell id="nasil-calisir">
      <Reveal>
        <SectionHeading eyebrow="Süreç" title="Nasıl çalışır?" />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <Reveal key={step.title} delay={index * 80}>
            <SurfaceCard className="h-full hover:-translate-y-1 hover:border-[rgba(125,211,252,0.28)]">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                0{index + 1}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-7">{step.description}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
