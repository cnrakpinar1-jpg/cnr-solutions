import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

const steps = [
  {
    number: "01",
    label: "Veri gelir",
    detail: "Excel, mail, üretim sistemleri",
  },
  {
    number: "02",
    label: "Merkezileştirilir ve temizlenir",
    detail: "Tek standart yapıya alınır",
  },
  {
    number: "03",
    label: "Eksik ve hatalı veriler görünür",
    detail: "Ne eksik, nerede hata var",
  },
  {
    number: "04",
    label: "Aksiyon alınabilir veri paketleri oluşur",
    detail: "Müşteri ve regülasyon talepleri için",
  },
];

export function TrFlow() {
  return (
    <SectionShell id="akis">
      <Reveal>
        <p className="eyebrow">Sistem akışı</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Sistem nasıl çalışır?
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <Reveal key={step.number} delay={index * 80}>
            <div className="group relative flex h-full flex-col gap-4 rounded-[22px] border border-white/10 bg-white/[0.035] p-6 shadow-[0_18px_54px_rgba(2,6,23,0.26)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(125,211,252,0.34)] hover:bg-[rgba(56,189,248,0.055)] hover:shadow-[0_24px_74px_rgba(2,6,23,0.42)]">
              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="flow-arrow absolute -right-3 top-1/2 hidden text-slate-500 lg:block"
                >
                  →
                </span>
              )}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(125,211,252,0.22)] bg-[rgba(125,211,252,0.09)] text-sm font-bold text-[var(--color-accent)] transition-all group-hover:border-[rgba(125,211,252,0.42)] group-hover:bg-[rgba(125,211,252,0.16)]">
                {step.number}
              </div>
              <div>
                <p className="text-base font-semibold text-white">{step.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-500">{step.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
