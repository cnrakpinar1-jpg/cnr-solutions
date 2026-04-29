import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

const bullets = [
  "Founder-led, close working model",
  "Simple and understandable setup process",
  "Business outcome over technical jargon",
  "Customer-flow design tailored to the business",
  "Sales, appointment and follow-up handled together",
  "Improve existing customer flow before spending more on ads",
  "Practical systems for small and medium-sized businesses",
  "Clear product focus around CNR Norm",
];

export function EnTrust() {
  return (
    <SectionShell id="approach">
      <Reveal>
        <SectionHeading title="The CNR Solutions approach" />
        <div className="mt-6 max-w-2xl space-y-4 text-base leading-8 text-slate-400">
          <p>
            CNR Solutions helps businesses enter the AI age through practical, understandable and usable business systems.
          </p>
          <p>
            We do not start with complicated software language. We focus on the daily problems businesses actually experience: customer conversations, follow-up discipline, appointments, quotes, sales opportunities and operational visibility.
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {bullets.map((bullet, i) => (
          <Reveal key={bullet} delay={i * 45}>
            <div className="flex items-start gap-3 rounded-xl border border-white/6 bg-white/[0.025] px-4 py-3">
              <span className="mt-0.5 flex-shrink-0 text-sm text-[var(--color-accent)] select-none">✓</span>
              <span className="text-sm text-slate-300">{bullet}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
