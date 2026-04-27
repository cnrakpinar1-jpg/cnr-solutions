import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

export function EnCta() {
  return (
    <SectionShell id="contact" className="pb-24">
      <Reveal>
        <div className="surface-strong mx-auto max-w-3xl rounded-[32px] p-10 text-center sm:p-14">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Do not lose your data. Bring the operation under control.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300">
            We can show how it works through a short 15-minute example.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="https://wa.me/905331970462"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let&apos;s look together
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
      </Reveal>
    </SectionShell>
  );
}
