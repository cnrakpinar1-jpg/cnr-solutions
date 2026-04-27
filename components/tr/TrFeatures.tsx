import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const features = [
  {
    title: "Hangi ürün ve müşteri hazır",
    description: "Gönderime hazır kayıtlar netleşir.",
    icon: "✓",
    iconClass: "border-emerald-300/20 bg-emerald-300/10 text-emerald-300",
  },
  {
    title: "Hangi veri eksik",
    description: "Eksik kayıt son anda değil, baştan görünür.",
    icon: "!",
    iconClass: "border-amber-300/20 bg-amber-300/10 text-amber-300",
  },
  {
    title: "Hangi müşteri bekliyor",
    description: "Bekleyen talep sistemde kaybolmaz.",
    icon: "→",
    iconClass: "border-sky-300/20 bg-sky-300/10 text-sky-300",
  },
  {
    title: "Hangi ekip aksiyon almalı",
    description: "Sorumluluk ekipler arasında kaybolmaz.",
    icon: "→",
    iconClass: "border-sky-300/20 bg-sky-300/10 text-sky-300",
  },
  {
    title: "Sürecin genel durumu",
    description: "Hazırlık tek ekrandan takip edilir.",
    icon: "✓",
    iconClass: "border-emerald-300/20 bg-emerald-300/10 text-emerald-300",
  },
];

export function TrFeatures() {
  return (
    <SectionShell id="ozellikler">
      <Reveal>
        <SectionHeading
          eyebrow="Çıktı"
          title="Sistem size ne sağlar?"
        />
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
        {features.map((item, index) => (
          <Reveal key={item.title} delay={index * 70}>
            <SurfaceCard className="h-full hover:-translate-y-1 hover:border-[rgba(125,211,252,0.28)]">
              <div className="flex items-center justify-between gap-4">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                  0{index + 1}
                </div>
                <div className={`flex h-10 w-10 items-center justify-center rounded-full border text-base font-bold ${item.iconClass}`}>
                  {item.icon}
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-400">{item.description}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
