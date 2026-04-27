import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

export function EnCta() {
  return (
    <SectionShell id="contact" className="pb-24">
      <Reveal>
        <div className="surface-strong relative mx-auto max-w-5xl overflow-hidden rounded-[36px] p-10 text-center shadow-[0_30px_100px_rgba(2,6,23,0.58),0_0_80px_rgba(56,189,248,0.14)] sm:p-16">
          <div aria-hidden="true" className="dashboard-grid absolute inset-0 opacity-25" />
          <div className="relative">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Stop losing data inside the operation.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Let&apos;s review your current data flow and show how a Data Room could structure it.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="https://wa.me/905331970462"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a 15-minute call
            </Button>
            <Button
              href="mailto:cnrakpinar1@gmail.com"
              variant="secondary"
            >
              Send an Email
            </Button>
            <Button href="#flow" variant="secondary">
              View system flow
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-500">
            <a
              href="mailto:cnrakpinar1@gmail.com"
              className="hover:text-slate-300 transition-colors"
            >
              cnrakpinar1@gmail.com
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://wa.me/905331970462"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              +90 533 197 0462
            </a>
          </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
