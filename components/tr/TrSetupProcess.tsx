import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

const steps = [
  {
    number: "01",
    title: "İş akışınızı dinleriz",
    description:
      "Müşteri nereden geliyor, ekip nasıl takip ediyor, veri nerede tutuluyor, hangi noktada karmaşa çıkıyor; bunu netleştiririz.",
  },
  {
    number: "02",
    title: "Kayıp noktalarını çıkarırız",
    description:
      "Kaçan müşteri, geciken teklif, görünmeyen operasyon, dağınık veri veya manuel yük nerede; bunu belirleriz.",
  },
  {
    number: "03",
    title: "Sistem tasarımını yaparız",
    description:
      "İhtiyaca göre CRM, dashboard, portal, otomasyon, veri odası veya ERP-yanı yapı planlarız.",
  },
  {
    number: "04",
    title: "Kurar ve teslim ederiz",
    description:
      "Ekibin gerçekten kullanabileceği sade, pratik ve ölçülebilir sistemi hazırlarız.",
  },
  {
    number: "05",
    title: "Kullanıma göre iyileştiririz",
    description:
      "Gerçek kullanım sonrası sistemi daha keskin hale getiririz. Amaç sistemi büyütmek değil, işe daha iyi hizmet etmesidir.",
  },
];

export function TrProcess() {
  return (
    <SectionShell id="surec">
      <Reveal>
        <SectionHeading
          eyebrow="Süreç"
          title="Önce işi anlarız. Sonra sistemi kurarız."
        />
      </Reveal>

      <div className="relative mt-12">
        <div
          aria-hidden="true"
          className="absolute left-[1.625rem] top-0 hidden h-full w-px bg-[linear-gradient(180deg,rgba(125,211,252,0.18)_0%,rgba(125,211,252,0.06)_80%,transparent_100%)] sm:block"
        />

        <div className="flex flex-col gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 70}>
              <div className="grid grid-cols-[auto_1fr] gap-5 sm:gap-7">
                <div className="relative flex flex-col items-center">
                  <div className="relative z-10 flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full border border-[rgba(125,211,252,0.26)] bg-[rgba(6,8,22,0.92)] shadow-[0_0_0_4px_rgba(125,211,252,0.06)]">
                    <span className="text-xs font-bold text-[var(--color-accent)]">{step.number}</span>
                  </div>
                </div>
                <div className="pb-2 pt-3">
                  <h3 className="text-base font-semibold text-white sm:text-lg">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-500">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
