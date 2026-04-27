import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

const steps = [
  {
    number: "01",
    label: "Veri gelir",
    detail: "Excel, mail, üretim kayıtları",
  },
  {
    number: "02",
    label: "Tek yerde toplanır",
    detail: "Ürün ve müşteri bazında yapılandırılır",
  },
  {
    number: "03",
    label: "Eksikler görünür",
    detail: "Hangi kayıt için ne eksik, net olur",
  },
  {
    number: "04",
    label: "Müşteri paketi oluşur",
    detail: "Gönderilebilir, düzenli veri seti hazır",
  },
];

export function TrFlow() {
  return (
    <SectionShell id="akis">
      <Reveal>
        <p className="eyebrow">Akış</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Sistem nasıl çalışır?
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <Reveal key={step.number} delay={index * 80}>
            <div className="relative flex h-full flex-col gap-4 rounded-[20px] border border-white/8 bg-white/[0.025] p-6 transition-all hover:-translate-y-1 hover:border-[rgba(125,211,252,0.22)]">
              {/* Connector arrow on desktop */}
              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-slate-600 lg:block"
                >
                  →
                </span>
              )}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(125,211,252,0.2)] bg-[rgba(125,211,252,0.08)] text-sm font-bold text-[var(--color-accent)]">
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
