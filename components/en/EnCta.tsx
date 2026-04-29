import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

const whatsappUrl =
  "https://wa.me/905331970462?text=Hello%2C%20I%27d%20like%20to%20get%20a%20free%20customer%20flow%20analysis.";

export function EnCta() {
  return (
    <SectionShell id="contact" className="pb-24">
      <Reveal>
        <div className="text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.8rem]">
            Does your business have a customer-flow norm?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400">
            With a free Customer Flow Analysis, we review how customer conversations from WhatsApp, Instagram, phone, website forms and ad channels currently move through your business.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
            We are not trying to sell you more ads or complicated software. First, we identify where your customer flow gets scattered, which conversations fall out of follow-up and how the process can be standardized.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[3.25rem] w-full items-center justify-center rounded-full bg-[var(--color-accent)] px-7 text-base font-semibold text-slate-950 shadow-[0_18px_54px_rgba(56,189,248,0.34)] transition-all hover:-translate-y-1 hover:bg-[var(--color-accent-strong)] sm:w-auto"
            >
              Get a Free Customer Flow Analysis
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            After the analysis, you receive a simple CNR Norm setup plan tailored to your business.
          </p>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="surface-strong mt-14 rounded-[32px] p-8 shadow-[0_30px_100px_rgba(2,6,23,0.48)] sm:p-12">
          <h3 className="mb-2 text-xl font-semibold text-white">Free Customer Flow Analysis</h3>
          <p className="mb-6 text-sm leading-6 text-slate-500">
            Reach out via WhatsApp or email and we will schedule a 15–30 minute free analysis. No commitment required.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-[var(--color-accent)] px-7 text-base font-semibold text-slate-950 shadow-[0_18px_54px_rgba(56,189,248,0.34)] transition-all hover:-translate-y-1 hover:bg-[var(--color-accent-strong)]"
            >
              WhatsApp
            </a>
            <a
              href="tel:+905331970462"
              className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.045] px-7 text-base font-semibold text-white transition-all hover:-translate-y-1 hover:border-[rgba(125,211,252,0.38)] hover:bg-white/[0.08]"
            >
              +90 533 197 0462
            </a>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
