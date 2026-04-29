import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const problems = [
  {
    title: "WhatsApp conversations get lost inside the team.",
    detail: "A customer sends a message, someone replies, but no one clearly owns the next follow-up.",
  },
  {
    title: "Instagram DMs do not connect to the sales process.",
    detail: "Interested customers stay inside the inbox instead of becoming visible opportunities.",
  },
  {
    title: "Phone calls are not properly recorded.",
    detail: "The team may know someone called, but the reason, next step and stage are not clearly tracked.",
  },
  {
    title: "Ad leads stay disconnected.",
    detail: "When form submissions are not followed up quickly, ad budget quietly turns into missed opportunity.",
  },
  {
    title: "Appointments, quotes and sales move separately.",
    detail: "A conversation happens, but the next appointment, quote, follow-up and outcome are not tracked in one flow.",
  },
  {
    title: "The business owner cannot see the real picture.",
    detail: "How many customers came in, who followed up, what converted and where the process broke down remain unclear.",
  },
];

export function EnProblem() {
  return (
    <SectionShell id="problem">
      <Reveal>
        <SectionHeading title="Customers are coming in. But does your flow have a standard?" />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem, i) => (
          <Reveal key={problem.title} delay={i * 55}>
            <SurfaceCard className="h-full relative overflow-hidden border-amber-300/10 hover:-translate-y-1 hover:border-amber-300/24">
              <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(251,191,36,0.06),transparent_40%)]" />
              <div className="relative">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-300/70">
                  0{i + 1}
                </div>
                <p className="mt-3 text-sm font-semibold leading-6 text-white">{problem.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">{problem.detail}</p>
              </div>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="mt-10 rounded-[24px] border border-amber-300/14 bg-amber-300/[0.04] px-7 py-6">
          <p className="text-base font-semibold leading-7 text-white sm:text-lg">
            CNR Norm turns scattered customer conversations into{" "}
            <span className="text-amber-200">a visible, trackable and standardized customer flow.</span>
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
