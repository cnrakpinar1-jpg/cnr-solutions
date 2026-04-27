import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const problems = [
  { icon: "XL", text: "Veri farklı Excel'lerde tutulur" },
  { icon: "TM", text: "Ekipler ayrı çalışır" },
  { icon: "V2", text: "Aynı verinin farklı veya hatalı versiyonları dolaşır" },
  { icon: "RQ", text: "Müşteri talebi geldiğinde dosya aranır" },
  { icon: "!", text: "Eksik veri son anda fark edilir" },
];

const disconnectedItems = ["Excel files", "Emails", "Folders", "Production notes"];

export function TrProblem() {
  return (
    <SectionShell id="problem">
      <Reveal>
        <SectionHeading
          eyebrow="Gerçek durum"
          title="Bugün içeride olan gerçek durum"
          description="Çoğu üreticide veri vardır ama sistem yoktur."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {problems.map((problem, index) => (
          <Reveal key={problem.text} delay={index * 60}>
            <SurfaceCard className="h-full relative overflow-hidden border-amber-300/10 hover:-translate-y-1 hover:border-amber-300/26">
              <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(251,191,36,0.08),transparent_34%)]" />
              <div className="relative flex items-center justify-between gap-4">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-300">
                  0{index + 1}
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-300/16 bg-amber-300/8 text-[0.68rem] font-bold text-amber-300">
                  {problem.icon}
                </div>
              </div>
              <p className="relative mt-3 text-base font-medium leading-6 text-white">{problem.text}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={160}>
        <div className="mt-12 grid gap-6 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_22px_70px_rgba(2,6,23,0.36)] backdrop-blur-md lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-300">
              Before
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {disconnectedItems.map((item) => (
                <div key={item} className="rounded-2xl border border-amber-300/12 bg-amber-300/[0.045] px-4 py-3 text-sm font-semibold text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <span className="text-2xl text-slate-500">→</span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
              Disconnected data
            </span>
          </div>

          <div className="rounded-[24px] border border-[rgba(125,211,252,0.22)] bg-[rgba(56,189,248,0.06)] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
              After
            </p>
            <h3 className="mt-3 text-2xl font-bold text-white">CNR Data Room</h3>
            <p className="mt-3 text-base font-semibold text-slate-200">
              Structured, visible, actionable
            </p>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
