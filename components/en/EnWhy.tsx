import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

const genericItems = [
  "Talk about features",
  "Start with technical setup",
  "Force the business to adapt to the tool",
  "Leave usage discipline to the team",
  "Do not own the full customer flow",
];

const normItems = [
  "Start from the business outcome",
  "Analyze the existing customer flow",
  "Fit the system around the way the business works",
  "Handle follow-up, appointment, quote and sales together",
  "Give the owner operational visibility",
  "Turn scattered conversations into a new business standard",
];

export function EnWhy() {
  return (
    <SectionShell>
      <Reveal>
        <SectionHeading title="Why CNR Norm?" />
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
          There are CRMs, messaging tools, chatbots and automation products in the market. CNR Norm is different because it does not start from technical features. It starts from the real customer flow of the business.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Reveal delay={60}>
          <div className="h-full rounded-[20px] border border-white/8 bg-white/[0.03] px-6 py-5">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-slate-500">
              Generic tools
            </p>
            <ul className="mt-5 space-y-3">
              {genericItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex-shrink-0 text-slate-600 select-none">×</span>
                  <span className="text-sm text-slate-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="h-full rounded-[20px] border border-[rgba(125,211,252,0.18)] bg-[rgba(125,211,252,0.05)] px-6 py-5">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
              CNR Norm
            </p>
            <ul className="mt-5 space-y-3">
              {normItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex-shrink-0 text-[var(--color-accent)] select-none">✓</span>
                  <span className="text-sm text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delay={200}>
        <div className="mt-10 rounded-[24px] border border-[rgba(125,211,252,0.12)] bg-[rgba(125,211,252,0.04)] px-8 py-6 text-center">
          <p className="text-base font-semibold text-slate-300 sm:text-lg">
            Our focus is not more screens.{" "}
            <span className="text-[var(--color-accent)]">Our focus is a clearer, more standardized and more manageable customer flow.</span>
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
