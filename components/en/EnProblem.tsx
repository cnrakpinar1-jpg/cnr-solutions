import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const problems = [
  {
    title: "Lost leads",
    description:
      "Inquiries arrive via WhatsApp, DMs, phone and forms — then get buried. Revenue slips through before anyone responds.",
  },
  {
    title: "No customer visibility",
    description:
      "No single place to see who is a lead, who is a client, and what needs to happen next. Work happens in people's heads.",
  },
  {
    title: "Manual booking chaos",
    description:
      "Appointments tracked in notes, chats and spreadsheets. Cancellations get missed. Follow-ups don't happen.",
  },
  {
    title: "Scattered operations",
    description:
      "The owner can't see the full picture in one place. Decisions get delayed because data is spread across too many tools.",
  },
];

export function EnProblem() {
  return (
    <SectionShell>
      <Reveal>
        <SectionHeading
          eyebrow="Problems We Solve"
          title="The problem isn't getting customers. It's keeping them from slipping away."
          description="Most small businesses still run on memory, WhatsApp threads, and scattered notes. We turn that into a system."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {problems.map((item, index) => (
          <Reveal key={item.title} delay={index * 80}>
            <SurfaceCard className="h-full hover:-translate-y-1 hover:border-[rgba(125,211,252,0.28)]">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                0{index + 1}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-base leading-7">{item.description}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
