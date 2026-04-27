import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

const rows = [
  {
    product: "ALU-320",
    status: "Ready",
    tone: "text-emerald-300",
    bg: "bg-emerald-300/10",
  },
  {
    product: "STEEL-18",
    status: "Energy data missing",
    tone: "text-amber-300",
    bg: "bg-amber-300/10",
  },
  {
    product: "FASTENER",
    status: "HS code check needed",
    tone: "text-sky-300",
    bg: "bg-sky-300/10",
  },
];

export function EnProofSimulation() {
  return (
    <SectionShell id="proof">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Example"
            title="The team can see what is ready"
            description="Without this visibility, teams work blind."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="surface-strong overflow-hidden rounded-[24px] shadow-[0_26px_86px_rgba(2,6,23,0.48)]">
            <div className="grid grid-cols-[1fr_1.4fr] border-b border-white/8 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              <span>Product</span>
              <span>Status</span>
            </div>
            <div className="divide-y divide-white/8">
              {rows.map((row) => (
                <div
                  key={row.product}
                  className="grid grid-cols-[1fr_1.4fr] items-center gap-4 px-5 py-5 transition-colors hover:bg-white/[0.035]"
                >
                  <span className="font-semibold text-white">{row.product}</span>
                  <span
                    className={`inline-flex w-fit rounded-full px-3 py-1 text-sm font-semibold ${row.bg} ${row.tone}`}
                  >
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
