import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

const tags = ["WhatsApp", "Instagram", "Phone Calls", "Web Forms", "Ads"];

export function EnCustomerFlowStandard() {
  return (
    <SectionShell id="customer-flow-standard">
      <Reveal>
        <div className="surface-strong mx-auto max-w-4xl rounded-[28px] border-[rgba(125,211,252,0.26)] p-8 text-center shadow-[0_28px_90px_rgba(2,6,23,0.46),0_0_70px_rgba(56,189,248,0.12)] sm:p-12">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">Customer Flow</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Build your customer-flow standard with CNR Norm
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              CNR Norm helps your team collect customer inquiries from everyday
              channels into a clearer, more visible and trackable flow.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {tags.map((tag) => (
                <span key={tag} className="rounded-full border border-[rgba(125,211,252,0.18)] bg-[rgba(125,211,252,0.07)] px-4 py-2 text-xs font-semibold text-slate-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
