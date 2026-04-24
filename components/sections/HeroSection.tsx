import { navigationLinks } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { HeroMockup } from "@/components/visuals/HeroMockup";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-10 bottom-0 h-28 rounded-full bg-[linear-gradient(180deg,transparent,rgba(125,211,252,0.08),transparent)] blur-3xl"
      />
      <div className="container-shell flex min-h-[92svh] flex-col">
        <header className="flex items-center justify-between gap-4 py-6 sm:py-8">
          <a href="#top" className="text-lg font-semibold tracking-[0.06em] text-white">
            CNR Solutions
          </a>
          <nav aria-label="Primary navigation" className="hidden md:block">
            <ul className="flex items-center gap-6">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-slate-300 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <div
          id="top"
          className="grid flex-1 items-center gap-14 pb-18 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(28rem,0.95fr)] lg:gap-16 lg:pb-24"
        >
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Solo builder. AI-assisted. Business-focused.</span>
            <h1 className="text-balance max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-[4.5rem] lg:leading-[1.02]">
              Turn messy workflows into simple systems.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              I build fast, clean internal tools for small businesses — portals,
              dashboards, booking systems, and automation flows.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact">Get a quick system plan</Button>
              <Button href="#work" variant="secondary">
                View work
              </Button>
            </div>
            <dl className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                ["Fast builds", "Tight scope, useful first release"],
                ["Clean systems", "Less friction, clearer ownership"],
                ["Small business fit", "Built around real team workflows"],
              ].map(([title, copy]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] p-4"
                >
                  <dt className="text-sm font-semibold text-white">{title}</dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-400">{copy}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120} className="lg:justify-self-end">
            <HeroMockup />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
