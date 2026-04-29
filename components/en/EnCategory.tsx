import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

export function EnCategory() {
  return (
    <SectionShell>
      <Reveal>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-balance text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
            CNR Norm is not another tool. It is a customer-flow standard.
          </h2>

          <div className="mt-8 space-y-5 text-base leading-8 text-slate-400">
            <p>
              Customers do not reach a business through only one channel. They message on WhatsApp, ask questions on Instagram, call by phone, fill out website forms, respond to ads and sometimes speak directly with the team.
            </p>
            <p>
              The problem is not always lack of demand. The real problem is that customer conversations stay scattered without a shared operating standard.
            </p>
            <p>
              CNR Norm turns that scattered activity into a clear customer-flow norm. The team knows what to follow up, the owner sees the process, and customer conversations move more clearly toward appointments, quotes and sales.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-[rgba(125,211,252,0.14)] bg-[rgba(125,211,252,0.05)] px-6 py-5">
            <p className="text-base font-semibold leading-7 text-slate-300">
              We are not adding another piece of software.{" "}
              <span className="text-[var(--color-accent)]">We are helping businesses build a standard for customer flow.</span>
            </p>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
