import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

const steps = [
  {
    step: "01",
    title: "Problemi anlıyoruz",
    description:
      "İş akışını, sürtüşme noktalarını ve sistemin gerçekte yapması gereken işi haritalandırıyoruz.",
  },
  {
    step: "02",
    title: "Sistemi tasarlıyoruz",
    description:
      "Dağınık orta kısmı temiz bir iç araça dönüştürüyoruz: doğru görünümler, mantık ve izinlerle.",
  },
  {
    step: "03",
    title: "İlk versiyonu kuruyoruz",
    description:
      "Sistem kullanılabilir bir formda hızla hayata geçirilir. Ekibin mevcut çalışma şekline uyan bir yapıyla.",
  },
  {
    step: "04",
    title: "Test edip iyileştiriyoruz",
    description:
      "Canlıya geçtikten sonra iş akışını rafine ediyoruz, pürüzleri gideriyoruz ve kaldıraç yarattığı yerleri genişletiyoruz.",
  },
  {
    step: "05",
    title: "Destek ve geliştirme",
    description:
      "İşletmeniz büyüdükçe sistem de büyür. Süregelen destek ve yeni ihtiyaçlara göre geliştirme sağlıyoruz.",
  },
];

export function TrProcess() {
  return (
    <SectionShell id="surec">
      <Reveal>
        <SectionHeading
          eyebrow="Süreç"
          title="Nasıl çalışıyoruz?"
        />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, index) => (
          <Reveal key={step.step} delay={index * 80}>
            <div className="flex flex-col gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-5 lg:col-span-1">
              <div className="text-2xl font-bold tracking-tight text-[var(--color-accent)]">
                {step.step}
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{step.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
