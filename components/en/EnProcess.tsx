import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

const steps = [
  {
    number: "01",
    title: "Customer Flow Analysis",
    description:
      "We review your current WhatsApp, Instagram, phone, website form and ad lead processes to identify where customer conversations get scattered.",
  },
  {
    number: "02",
    title: "Norm Design",
    description:
      "We turn your conversation, follow-up, appointment, quote and sales stages into a simple customer-flow standard.",
  },
  {
    number: "03",
    title: "System Setup",
    description:
      "We configure Norm Inbox, Norm Pipeline, Norm Tasks, reporting views and the required forms around your business workflow.",
  },
  {
    number: "04",
    title: "Team Usage",
    description:
      "We create a simple usage flow your team can actually follow. Not complex training — daily operational clarity.",
  },
  {
    number: "05",
    title: "Measurement and Improvement",
    description:
      "We make it visible where customers come from, how many are followed up, where opportunities drop and what can be improved.",
  },
];

export function EnProcess() {
  return (
    <SectionShell id="how-it-works">
      <Reveal>
        <SectionHeading title="How CNR Norm is implemented" />
      </Reveal>

      <div className="relative mt-12">
        <div
          aria-hidden="true"
          className="absolute left-[1.625rem] top-0 hidden h-full w-px bg-[linear-gradient(180deg,rgba(125,211,252,0.18)_0%,rgba(125,211,252,0.06)_80%,transparent_100%)] sm:block"
        />

        <div className="flex flex-col gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 70}>
              <div className="grid grid-cols-[auto_1fr] gap-5 sm:gap-7">
                <div className="relative flex flex-col items-center">
                  <div className="relative z-10 flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full border border-[rgba(125,211,252,0.26)] bg-[rgba(6,8,22,0.92)] shadow-[0_0_0_4px_rgba(125,211,252,0.06)]">
                    <span className="text-xs font-bold text-[var(--color-accent)]">{step.number}</span>
                  </div>
                </div>
                <div className="pb-2 pt-3">
                  <h3 className="text-base font-semibold text-white sm:text-lg">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-500">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
