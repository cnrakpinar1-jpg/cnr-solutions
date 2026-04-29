import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const segments = [
  {
    title: "Private clinics and dental clinics",
    description: "For standardizing customer inquiries, appointments and patient candidate follow-up.",
  },
  {
    title: "Beauty centers and medical aesthetics businesses",
    description: "For connecting Instagram, WhatsApp and phone conversations to the appointment flow.",
  },
  {
    title: "Auto service, inspection and detailing businesses",
    description: "For tracking service requests coming from phone and WhatsApp.",
  },
  {
    title: "Courses and education centers",
    description: "For turning parent/student conversations into a clear inquiry, meeting and follow-up process.",
  },
  {
    title: "Furniture, kitchen, bathroom, curtain and decoration businesses",
    description: "For organizing price requests, quotes and follow-up.",
  },
  {
    title: "Consulting and service businesses",
    description: "For connecting incoming conversations to proposals, meetings and sales.",
  },
  {
    title: "SMEs with high customer conversation volume",
    description: "For businesses receiving customers from multiple channels but still tracking the process manually.",
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
