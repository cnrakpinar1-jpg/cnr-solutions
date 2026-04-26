import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

const reasons = [
  "We design systems businesses actually use — not just pages that look good.",
  "We understand the business problem first, then solve it with technology.",
  "We ship fast prototypes and iterate based on real use cases.",
  "We focus on sales, customer tracking and operational clarity.",
  "We build simple, workable systems for small businesses — not enterprise complexity.",
  "We use AI as a workflow tool, not as a marketing tagline.",
];

export function EnWhy() {
  return (
    <SectionShell>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Why Us"
            title="Why CNR Solutions?"
          />

          <blockquote className="mt-8 rounded-2xl border-l-4 border-[var(--color-accent)] bg-[var(--color-accent-soft)] px-6 py-5">
            <p className="text-base font-medium italic leading-7 text-white">
              &ldquo;We don&apos;t do tech demos. We build systems your business will actually use.&rdquo;
            </p>
          </blockquote>
        </Reveal>

        <Reveal delay={100}>
          <ul className="space-y-4">
            {reasons.map((reason, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--color-accent)]"
                />
                <span className="text-base leading-7 text-slate-300">{reason}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </SectionShell>
  );
}
