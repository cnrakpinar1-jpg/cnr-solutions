import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const segments = [
  {
    title: "Private clinics and dental clinics",
    description: "Keep patient inquiries inside a trackable process instead of scattered team memory.",
  },
  {
    title: "Beauty centers and medical aesthetics businesses",
    description: "Do not let price-request leads from Instagram disappear before they become appointments.",
  },
  {
    title: "Auto service, inspection and detailing businesses",
    description: "Turn WhatsApp service inquiries into clear quotes and booked appointments.",
  },
  {
    title: "Courses and education centers",
    description: "Move student and parent inquiries into a clear follow-up and enrollment flow.",
  },
  {
    title: "Furniture, kitchen, bathroom, curtain and decoration businesses",
    description: "Track price requests and quotes systematically so opportunities do not close before follow-up.",
  },
  {
    title: "Consulting and service businesses",
    description: "Make sure incoming conversations reach a proposal and sales stage, not get lost in scattered threads.",
  },
  {
    title: "SMEs with high customer conversation volume",
    description: "Handle customers from multiple channels without relying on manual memory or scattered note-taking.",
  },
];

export function EnWhoWeServe() {
  return (
    <SectionShell id="who-its-for">
      <Reveal>
        <SectionHeading title="Who is CNR Norm for?" />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {segments.map((seg, i) => (
          <Reveal key={seg.title} delay={i * 55}>
            <SurfaceCard className="h-full hover:-translate-y-1">
              <h3 className="text-base font-semibold text-white">{seg.title}</h3>
              <p className="mt-2.5 text-sm leading-6 text-slate-500">{seg.description}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <p className="mt-8 text-sm leading-7 text-slate-400 text-center">
          CNR Norm is designed for businesses that speak with customers every day but struggle to turn those conversations into a standardized business flow.
        </p>
      </Reveal>
    </SectionShell>
  );
}
