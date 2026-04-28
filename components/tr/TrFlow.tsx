import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

const steps = [
  {
    number: "01",
    icon: "ÜR",
    label: "Ürün seçilir",
    detail: "İhracat ürünü seçilerek o ürüne ait veri odası açılır.",
    badge: "Başlangıç",
  },
  {
    number: "02",
    icon: "VR",
    label: "Üretim ve enerji verisi girilir",
    detail: "Mevcut kaynaklardan veri aktarılır veya sisteme girilir.",
    badge: "Giriş",
  },
  {
    number: "03",
    icon: "!",
    label: "Eksik alanlar kontrol edilir",
    detail: "Sistem hangi verinin eksik, hatalı veya beklemede olduğunu gösterir.",
    badge: "Kontrol",
  },
  {
    number: "04",
    icon: "CB",
    label: "CBAM veri çıktısı oluşturulur",
    detail: "Standart formatta veri seti derlenir; PDF veya Excel olarak hazırlanır.",
    badge: "Hazır",
  },
  {
    number: "05",
    icon: "AB",
    label: "AB müşterisine dosya gönderilir",
    detail: "Müşteri talebi karşılanır. Aynı akış bir sonraki dönem için tekrar kullanılır.",
    badge: "Teslim",
  },
];

export function TrFlow() {
  return (
    <SectionShell id="akis">
      <Reveal>
        <p className="eyebrow">Demo akışı</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Basit akış. Daha az panik. Daha hızlı müşteri yanıtı.
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-400">
          Her müşteri talebinde sıfırdan başlamak yerine standart bir hazırlık sürecini izleyin.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, index) => (
          <Reveal key={step.number} delay={index * 80}>
            <div className="group relative flex h-full flex-col gap-4 rounded-[22px] border border-white/10 bg-white/[0.035] p-6 shadow-[0_18px_54px_rgba(2,6,23,0.26)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(125,211,252,0.34)] hover:bg-[rgba(56,189,248,0.055)] hover:shadow-[0_24px_74px_rgba(2,6,23,0.42)]">
              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="flow-arrow absolute -right-3 top-1/2 hidden text-slate-600 lg:block"
                >
                  →
                </span>
              )}
              <div className="flex items-center justify-between gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(125,211,252,0.22)] bg-[rgba(125,211,252,0.09)] text-[0.6rem] font-bold text-[var(--color-accent)] transition-all group-hover:border-[rgba(125,211,252,0.42)] group-hover:bg-[rgba(125,211,252,0.16)]">
                  {step.icon}
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-slate-400">
                  {step.badge}
                </span>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                  {step.number}
                </p>
                <p className="mt-2 text-sm font-semibold text-white">{step.label}</p>
                <p className="mt-1.5 text-xs leading-5 text-slate-500">{step.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
