import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";

export function EnSolution() {
  return (
    <SectionShell id="solution">
      <Reveal>
        <div className="max-w-2xl">
          <p className="eyebrow">Solution</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            CNR Data Room
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            An operations system that centralizes data, standardizes it, and helps
            teams work from the same source.
          </p>
          <p className="mt-4 text-base font-medium text-slate-200">
            Instead of searching for files, your team uses a system.
          </p>
          <p className="mt-4 rounded-2xl border border-[rgba(125,211,252,0.18)] bg-[rgba(56,189,248,0.06)] px-5 py-4 text-base font-semibold leading-7 text-white">
            We don&apos;t prepare reports. We build the system behind them.
          </p>
          <div className="mt-8">
            <Button href="#flow">Show me how it works</Button>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
