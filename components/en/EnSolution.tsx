import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const features = [
  {
    badge: "Norm Inbox",
    subtitle: "All customer conversations in one standard flow",
    body: "WhatsApp, Instagram, phone notes, website forms and ad-driven conversations are tracked in one place.",
  },
  {
    badge: "Norm Pipeline",
    subtitle: "A standard process from conversation to sale",
    body: "Every customer conversation can move through clear stages such as new, contacted, appointment booked, quote sent, won or lost.",
  },
  {
    badge: "Norm Tasks",
    subtitle: "Follow-up is no longer left to memory",
    body: "The team knows who needs to contact whom, when and why. Follow-up becomes systematic instead of random.",
  },
  {
    badge: "Norm Reports",
    subtitle: "The owner sees the full picture",
    body: "Incoming conversations, followed-up opportunities, appointments, quotes, sales and drop-off points become visible.",
  },
  {
    badge: "Norm Automations",
    subtitle: "Repeating follow-up work becomes simpler",
    body: "Forms, reminders, notifications and follow-up flows are structured around the way the business actually works.",
  },
  {
    badge: "Sector Norm",
    subtitle: "Adapted to each business type",
    body: "The flow can be customized for clinics, beauty centers, auto services, education providers, consultants, furniture/decor businesses and other service-heavy businesses.",
  },
];

export function EnNormProduct() {
  return (
    <SectionShell id="cnr-norm">
      <Reveal>
        <SectionHeading
          eyebrow="Flagship Product"
          title="Our flagship product: CNR Norm"
        />
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
          CNR Norm is a practical business system that brings customer conversations into one standard flow, clarifies team follow-up and makes the process from conversation to sale visible.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feat, i) => (
          <Reveal key={feat.badge} delay={i * 55}>
            <SurfaceCard className="surface-strong h-full flex flex-col hover:-translate-y-1">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                {feat.badge}
              </p>
              <h3 className="mt-2 text-base font-semibold leading-6 text-white">{feat.subtitle}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">{feat.body}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
