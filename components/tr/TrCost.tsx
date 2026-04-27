import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const risks = [
  {
    icon: "RQ",
    title: "Müşteriye geç cevap",
    text: "Talep açık kalır, ekip dosya arar.",
  },
  {
    icon: "!",
    title: "Yanlış/eksik veri gönderimi",
    text: "Yanlış sürüm müşteriye gidebilir.",
  },
  {
    icon: "HR",
    title: "Kaybedilen saatler",
    text: "Arama, düzeltme ve takip tekrar eder.",
  },
  {
    icon: "TM",
    title: "Ekip karmaşası",
    text: "Sorumluluk ekipler arasında kaybolur.",
  },
  {
    icon: "TR",
    title: "Güven kaybı",
    text: "Müşteri aynı veriyi tekrar ister.",
  },
  {
    icon: "RG",
    title: "Regülasyona hazırlıksız",
    text: "Veri son anda toparlanmaya çalışılır.",
  },
];

export function TrCost() {
  return (
    <SectionShell id="risk">
      <Reveal>
        <SectionHeading
          eyebrow="Risk"
          title="Bu sadece operasyonel değil, ticari risktir"
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {risks.map((risk, index) => (
          <Reveal key={risk.title} delay={index * 60}>
            <SurfaceCard className="h-full border-rose-300/12 hover:-translate-y-1 hover:border-rose-300/28">
              <div className="flex items-center justify-between gap-4">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-rose-300">
                  Risk 0{index + 1}
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-rose-300/16 bg-rose-300/[0.08] text-[0.68rem] font-bold text-rose-300">
                  {risk.icon}
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{risk.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{risk.text}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={180}>
        <div className="mt-6 rounded-[24px] border border-amber-300/16 bg-amber-300/[0.055] p-6 shadow-[0_20px_60px_rgba(2,6,23,0.34)] backdrop-blur-md">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-300">
            Hidden cost
          </p>
          <p className="mt-2 text-xl font-semibold leading-8 text-white">
            Dosya arama ve düzeltmelerde kaybolan saatler.
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
