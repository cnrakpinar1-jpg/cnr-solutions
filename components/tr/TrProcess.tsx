import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

const steps = [
  {
    step: "01",
    title: "Problemi anlıyoruz",
    description:
      "Müşteri nereden geliyor, nerede kayboluyor, hangi süreç manuel ilerliyor analiz ederiz.",
  },
  {
    step: "02",
    title: "Sistemi tasarlıyoruz",
    description:
      "İşletmeye uygun müşteri talebi, müşteri takip sistemi, randevu, müşteri portalı veya yönetim paneli yapısını planlarız.",
  },
  {
    step: "03",
    title: "İlk versiyonu kuruyoruz",
    description: "Hızlı, sade ve kullanılabilir ilk versiyonu geliştiririz.",
  },
  {
    step: "04",
    title: "Test edip iyileştiriyoruz",
    description:
      "Gerçek kullanımda eksikleri görür, akışı daha verimli hale getiririz.",
  },
  {
    step: "05",
    title: "Destek ve geliştirme",
    description:
      "İhtiyaca göre aylık destek, yeni özellik ve optimizasyon sunarız.",
  },
];

export function TrProcess() {
  return (
    <SectionShell id="surec">
      <Reveal>
        <SectionHeading
          eyebrow="Süreç"
          title="Nasıl çalışıyoruz?"
          description="Önce işi ve müşteri akışını netleştiririz. Sonra işletmenin gerçekten kullanacağı sade bir sistemi adım adım kurarız."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, index) => (
          <Reveal key={step.step} delay={index * 80}>
            <div className="surface group flex h-full flex-col gap-5 rounded-[24px] p-5 transition-all hover:-translate-y-1 hover:border-[rgba(125,211,252,0.28)] lg:col-span-1">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(125,211,252,0.2)] bg-[rgba(125,211,252,0.08)] text-lg font-bold tracking-tight text-[var(--color-accent)]">
                {step.step}
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{step.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
