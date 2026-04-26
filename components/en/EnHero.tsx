import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { HeroMockup } from "@/components/visuals/HeroMockup";

export function EnHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.13),transparent_60%)]"
      />
      <div className="container-shell flex flex-col">
        <div className="grid flex-1 items-center gap-14 pb-20 pt-14 lg:grid-cols-[minmax(0,1fr)_minmax(28rem,0.95fr)] lg:gap-16 lg:pb-28">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">
              AI-assisted · Fast builds · Business-focused
            </span>
            <h1 className="text-balance mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05]">
              AI-assisted business systems for modern companies.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              We build mini CRMs, client portals, booking systems, dashboards and workflow tools
              that help businesses organize leads, customers, appointments and operations.
            </p>
            <p className="mt-4 text-base font-medium text-slate-200">
              From scattered messages and manual work to clear, usable systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#demo-systems">View Demo Systems</Button>
              <Button
                href="https://wa.me/905331970462"
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </Button>
              <Button
                href="mailto:cnrakpinar1@gmail.com"
                variant="secondary"
              >
                Get in Touch
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:justify-self-end">
            <HeroMockup />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
