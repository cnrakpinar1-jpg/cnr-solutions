import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

const doNot = [
  "We do not provide certification",
  "We are not an official declaration system",
  "We do not sell generic consulting reports",
];

const doItems = [
  "We collect data",
  "We standardize it",
  "We make it trackable",
  "We build systems your teams actually use",
  "We prepare customer-ready data packages",
];

export function EnWhy() {
  return (
    <SectionShell>
      <Reveal>
        <h2 className="mb-10 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Clear boundary
        </h2>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-[24px] border border-rose-300/20 bg-rose-300/[0.035] p-7 shadow-[0_18px_60px_rgba(2,6,23,0.28)] backdrop-blur-md sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-rose-300">
              What we do not do
            </p>
            <ul className="mt-5 space-y-3">
              {doNot.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-rose-300/20 bg-rose-300/[0.08] text-xs text-rose-300"
                  >
                    ×
                  </span>
                  <span className="text-base leading-7 text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="h-full rounded-[24px] border border-emerald-300/20 bg-emerald-300/[0.045] p-7 shadow-[0_18px_60px_rgba(2,6,23,0.28)] backdrop-blur-md sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
              What we do
            </p>
            <ul className="mt-5 space-y-3">
              {doItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-300/[0.28] bg-emerald-300/[0.12] text-xs text-emerald-300"
                  >
                    ✓
                  </span>
                  <span className="text-base font-medium leading-7 text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
