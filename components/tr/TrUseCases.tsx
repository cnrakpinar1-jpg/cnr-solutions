import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const useCases = [
  {
    icon: "CR",
    title: "Müşteri veri talepleri",
    description: "Talep geldiğinde dosya aramak yerine sistemden ilerleyin.",
  },
  {
    icon: "EX",
    title: "İhracat operasyon yönetimi",
    description: "Ürün, müşteri ve ekip takibini tek akışta yönetin.",
  },
  {
    icon: "EN",
    title: "Üretim ve enerji takibi",
    description: "Üretim ve enerji verisini aynı yapıda toplayın.",
  },
  {
    icon: "QD",
    title: "Kalite dokümantasyonu",
    description: "Belgeler ekiplerin ulaşabileceği düzende dursun.",
  },
  {
    icon: "RG",
    title: "Uyum ve raporlama süreçleri",
    description: "CBAM bu süreçlerden sadece biridir.",
  },
  {
    icon: "CB",
    title: "CBAM benzeri veri gereklilikleri",
    description: "Regülasyon talepleri aynı veri odasından yönetilir.",
  },
];

export function TrUseCases() {
  return (
    <SectionShell id="kullanim">
      <Reveal>
        <SectionHeading
          eyebrow="Kullanım alanları"
          title="Nerede kullanılır?"
        />
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {useCases.map((item, index) => (
          <Reveal key={item.title} delay={index * 70}>
            <SurfaceCard className="h-full hover:-translate-y-1 hover:border-[rgba(125,211,252,0.28)]">
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(125,211,252,0.18)] bg-[rgba(125,211,252,0.08)] text-[0.68rem] font-bold text-[var(--color-accent)]">
                  {item.icon}
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Data Room use case
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-400">{item.description}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
