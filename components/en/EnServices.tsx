import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { Tag } from "@/components/ui/Tag";

const services = [
  {
    title: "Customer Flow Analysis",
    body: "We identify where customer conversations start, where they get scattered and where follow-up gaps appear.",
  },
  {
    title: "Pipeline and Operations Screens",
    body: "We turn appointment, quote, sales and follow-up processes into simple screens your team can use.",
  },
  {
    title: "WhatsApp / Instagram / Form Flows",
    body: "We connect conversations from different channels to the CNR Norm structure.",
  },
  {
    title: "Follow-Up and Reminder Systems",
    body: "We create task, notification and reminder flows so the team does not miss important follow-ups.",
  },
  {
    title: "Dashboards and Reporting",
    body: "We build reports that help the owner see incoming conversations, followed-up opportunities and sales progress.",
  },
  {
    title: "Integrations",
    body: "We connect existing calendars, forms, spreadsheets, CRM tools, ad tools and operational systems into the customer flow.",
  },
  {
    title: "Sector Adaptations",
    body: "We adapt CNR Norm for clinics, beauty centers, auto services, education providers, consultants and quote-based businesses.",
  },
  {
    title: "Custom Business Systems",
    body: "For larger operational, data room, reporting or workflow needs beyond CNR Norm, we build custom systems.",
  },
];

export function EnServices() {
  return (
    <SectionShell id="supporting-services">
      <Reveal>
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Tag>Supporting Services</Tag>
        </div>
        <div className="mt-4">
          <SectionHeading title="Services that strengthen CNR Norm" />
        </div>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
          CNR Norm is our flagship product. Our supporting services exist to help your business implement, measure, expand and sustain a stronger customer-flow standard.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((svc, i) => (
          <Reveal key={svc.title} delay={i * 35}>
            <div className="h-full rounded-xl border border-white/6 bg-white/[0.025] px-4 py-3.5 transition-colors hover:border-[rgba(125,211,252,0.18)]">
              <p className="text-sm font-semibold text-white">{svc.title}</p>
              <p className="mt-1.5 text-xs leading-5 text-slate-500">{svc.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={180}>
        <p className="mt-8 text-sm text-slate-400 text-center">
          The purpose of these services is not to sell separate software pieces. Their purpose is to turn CNR Norm into a real customer-flow standard inside your business.
        </p>
        <div className="mt-6 flex justify-center">
          <Button href="#contact" variant="secondary">
            Analyze My Customer Flow First
          </Button>
        </div>
      </Reveal>
    </SectionShell>
  );
}
