import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const rows = [
  {
    product: "ALU-320",
    status: "Ready",
    className: "border-emerald-300/20 bg-emerald-300/10 text-emerald-300",
  },
  {
    product: "STEEL-18",
    status: "Missing energy data",
    className: "border-amber-300/20 bg-amber-300/10 text-amber-300",
  },
  {
    product: "FASTENER",
    status: "Needs GTIP check",
    className: "border-sky-300/20 bg-sky-300/10 text-sky-300",
  },
];

export function EnHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="dashboard-grid pointer-events-none absolute inset-0 opacity-70" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] bg-[radial-gradient(ellipse_at_20%_10%,rgba(56,189,248,0.18),transparent_52%),linear-gradient(180deg,rgba(6,8,22,0.18),rgba(6,8,22,0.92))]"
      />
      <div className="container-shell flex flex-col">
        <div className="grid flex-1 items-center gap-14 pb-24 pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(26rem,0.86fr)] lg:pb-36 lg:pt-24">
          <Reveal className="max-w-3xl">
            <div className="mb-9 inline-block rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 shadow-[0_18px_48px_rgba(2,6,23,0.3)] backdrop-blur-md">
              <p className="text-lg font-semibold leading-snug text-white sm:text-xl">
                When your client asks for data,<br className="hidden sm:block" /> is your team searching for files?
              </p>
              <p className="mt-1 text-sm font-medium text-slate-400">
                This is not just inefficiency. It&apos;s operational risk.
              </p>
            </div>

            <span className="eyebrow">For export-oriented manufacturers</span>
            <h1 className="text-balance mt-2 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-[4.6rem] lg:leading-[0.98]">
              Your export data shouldn&apos;t be scattered.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
              We centralize product, production, energy and customer data into a
              system your team can actually use.
            </p>
            <p className="mt-4 text-base font-medium text-slate-200">
              No more Excel chaos. No more file searching.
            </p>
            <p className="mt-3 text-sm text-slate-500">
              Every team works from the same data.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="#flow">Show me how it works</Button>
              <Button
                href="https://wa.me/905331970462"
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </Button>
              <Button href="#proof" variant="secondary">
                See example flow
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="surface-strong overflow-hidden rounded-[28px] shadow-[0_28px_90px_rgba(2,6,23,0.58),0_0_60px_rgba(56,189,248,0.12)]">
              <div className="border-b border-white/8 px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                  CNR Data Room
                </p>
                <h2 className="mt-2 text-xl font-semibold text-white">
                  Operational data status
                </h2>
              </div>
              <div className="grid grid-cols-[0.8fr_1.2fr] border-b border-white/8 bg-white/[0.04] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                <span>Product</span>
                <span>Status</span>
              </div>
              <div className="divide-y divide-white/8">
                {rows.map((row) => (
                  <div key={row.product} className="grid grid-cols-[0.8fr_1.2fr] items-center gap-4 px-6 py-5 transition-colors hover:bg-white/[0.035]">
                    <span className="font-semibold text-white">{row.product}</span>
                    <span className={`inline-flex w-fit rounded-full border px-3 py-1 text-sm font-semibold ${row.className}`}>
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
