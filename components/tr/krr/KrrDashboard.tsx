import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

type Stat = {
  label: string;
  value: string;
  tone: "neutral" | "accent" | "warn" | "lost" | "win";
};

const stats: Stat[] = [
  { label: "Bu ay gelen talep", value: "184", tone: "neutral" },
  { label: "Sıcak rezervasyon talebi", value: "41", tone: "accent" },
  { label: "Geç dönülen talep", value: "29", tone: "warn" },
  { label: "Cevapsız kalan talep", value: "13", tone: "lost" },
  { label: "Bugün kurtarılabilir lead", value: "9", tone: "win" },
];

const toneClass: Record<Stat["tone"], string> = {
  neutral: "text-white",
  accent: "text-[var(--color-accent)]",
  warn: "text-amber-200",
  lost: "text-rose-200",
  win: "text-emerald-200",
};

export function KrrDashboard() {
  return (
    <SectionShell id="panel">
      <Reveal>
        <SectionHeading
          eyebrow="İşletme Sahibinin Ekranı"
          title="İşletme sahibinin görmek istediği ekran"
          align="center"
        />
      </Reveal>

      <Reveal delay={120}>
        <div className="surface-strong relative mt-12 overflow-hidden rounded-[32px] p-6 sm:p-10">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[rgba(125,211,252,0.16)] to-transparent" />

          <div className="relative">
            <div className="rounded-[28px] border border-[rgba(125,211,252,0.22)] bg-[rgba(56,189,248,0.08)] p-6 sm:p-10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  Tahmini kaçan ciro
                </p>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300">
                  Bu ay
                </span>
              </div>
              <p className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                126.000 TL
              </p>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
                Geç dönülen, unutulan ve cevapsız kalan taleplerin tahmini
                gelir etkisi.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-2">
                <div className="h-2 rounded-full bg-[var(--color-accent)]" />
                <div className="h-2 rounded-full bg-[rgba(125,211,252,0.55)]" />
                <div className="h-2 rounded-full bg-[rgba(125,211,252,0.25)]" />
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/6 bg-white/4 p-4"
                >
                  <div
                    className={`text-3xl font-semibold ${toneClass[stat.tone]}`}
                  >
                    {stat.value}
                  </div>
                  <div className="mt-2 text-xs leading-5 text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-2xl text-base leading-7 text-slate-300">
              Bu ekran, hangi taleplerin paraya en yakın olduğunu ve
              hangilerinin hâlâ kurtarılabileceğini gösterir.
            </p>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
