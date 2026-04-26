import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const systems = [
  {
    title: "Lead Collection System",
    description:
      "Pull incoming requests from WhatsApp, DMs, forms and phone into one trackable flow. Nothing falls through the cracks.",
  },
  {
    title: "Mini CRM",
    description:
      "Track every contact by status. Who is a lead, who is a client, who needs follow-up — visible in one panel.",
  },
  {
    title: "Booking & Admin Panel",
    description:
      "Manage appointment requests, confirmations and cancellations without manual back-and-forth.",
  },
  {
    title: "Client Portal",
    description:
      "Give clients one clean place for proposals, files, updates and communication. End the email thread chaos.",
  },
  {
    title: "Admin Dashboard",
    description:
      "See the full business in one view. Leads, bookings, revenue and operations — clear and fast.",
  },
  {
    title: "AI Assistant & Automation",
    description:
      "Summarize, classify and get reply suggestions on incoming messages. AI as a work tool, not a showpiece.",
  },
];

export function EnSolution() {
  return (
    <SectionShell id="systems">
      <Reveal>
        <SectionHeading
          eyebrow="Systems We Build"
          title="Usable business systems built around real workflows."
          description="The goal isn't complex software. It's a simple, fast, sales-focused infrastructure your business will actually use."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {systems.map((item, index) => (
          <Reveal key={item.title} delay={index * 70}>
            <SurfaceCard className="h-full hover:-translate-y-1 hover:border-[rgba(125,211,252,0.28)]">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-base leading-7">{item.description}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
