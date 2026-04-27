import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

const outputs = [
  {
    title: "Ready products",
    description: "12 records",
    icon: "✓",
    iconClass: "border-emerald-300/20 bg-emerald-300/10 text-emerald-300",
  },
  {
    title: "Missing fields",
    description: "7 fields",
    icon: "!",
    iconClass: "border-amber-300/20 bg-amber-300/10 text-amber-300",
  },
  {
    title: "Waiting customers",
    description: "5 requests",
    icon: "→",
    iconClass: "border-sky-300/20 bg-sky-300/10 text-sky-300",
  },
  {
    title: "Action owners",
    description: "18 tasks",
    icon: "→",
    iconClass: "border-sky-300/20 bg-sky-300/10 text-sky-300",
  },
  {
    title: "Risk status",
    description: "3 records at risk",
    icon: "!",
    iconClass: "border-rose-300/20 bg-rose-300/10 text-rose-300",
  },
  {
    title: "Completed files",
    description: "24 files",
    icon: "FL",
    iconClass: "border-violet-300/20 bg-violet-300/10 text-violet-300",
  },
];

export function EnOutput() {
  return (
    <SectionShell id="output">
      <Reveal>
        <SectionHeading eyebrow="Output" title="What the system gives you" />
      </Reveal>

      <Reveal delay={100}>
        <div className="surface-strong mt-10 rounded-[28px] p-5 sm:p-6">
          <div className="flex flex-col gap-2 border-b border-white/8 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                What your team sees
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">Output panel</h3>
            </div>
            <span className="w-fit rounded-full border border-emerald-300/18 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-300">
              Live status
            </span>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {outputs.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/8 bg-white/[0.04] p-5 transition-all hover:-translate-y-1 hover:border-[rgba(125,211,252,0.26)] hover:bg-white/[0.06]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    0{index + 1}
                  </div>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-bold ${item.iconClass}`}>
                    {item.icon}
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm font-semibold leading-6 text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
