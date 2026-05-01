import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const cards = [
  {
    icon: "◈",
    title: "Lead Temperature",
    body: "Separate hot, warm, and cold customer inquiries. Your team knows who to follow up with first and no hot opportunity gets buried in shared inboxes.",
  },
  {
    icon: "◎",
    title: "Intent Detection",
    body: "Identify whether the customer wants an appointment, asks for pricing, waits for a quote, is undecided, or needs follow-up. Every conversation has a clear next stage.",
  },
  {
    icon: "◇",
    title: "Follow-up Suggestions",
    body: "Recommend the next best action for each customer conversation. The team follows up systematically, not by memory or guesswork.",
  },
  {
    icon: "▣",
    title: "Daily Business Summary",
    body: "See how many inquiries came in, how many were hot, and how many were left unanswered. The business owner starts each day knowing what needs immediate attention.",
  },
];

export function EnNormIQ() {
  return (
    <SectionShell id="cnr-norm-iq">
      <Reveal>
        <SectionHeading
          eyebrow="CNR Norm IQ"
          title="CNR Norm IQ: The intelligence layer for your customer flow"
          description="CNR Norm IQ does more than record customer conversations. It helps identify each inquiry's intent, urgency, lead temperature, and next best action. Your team knows who to follow up with first, while the business owner sees which opportunities are at risk."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 60}>
            <SurfaceCard className="h-full">
              <div className="mb-3 flex items-center gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[rgba(125,211,252,0.18)] bg-[rgba(125,211,252,0.07)] text-sm text-[var(--color-accent)]"
                  aria-hidden="true"
                >
                  {card.icon}
                </span>
                <h3 className="text-base font-semibold text-white">{card.title}</h3>
              </div>
              <p className="text-sm leading-6 text-slate-500">{card.body}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={280}>
        <div className="mt-8 rounded-[24px] border border-[rgba(125,211,252,0.12)] bg-[rgba(125,211,252,0.04)] px-8 py-6 text-center">
          <p className="text-base font-semibold text-slate-300 sm:text-lg">
            CNR Norm IQ is not a chatbot feature.{" "}
            <span className="text-[var(--color-accent)]">
              It is a business intelligence layer for your customer flow.
            </span>
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
