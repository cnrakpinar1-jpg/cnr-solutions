import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { DataRoomDashboard } from "@/components/visuals/DataRoomDashboard";
import { OperationsStrip } from "@/components/visuals/OperationsStrip";

export function EnHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="dashboard-grid pointer-events-none absolute inset-0 opacity-70" />
      <div aria-hidden="true" className="data-flow-lines pointer-events-none absolute inset-0 opacity-70" />
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

            <span className="eyebrow">Operational data room for export manufacturers</span>
            <h1 className="text-balance mt-2 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-[4.6rem] lg:leading-[0.98]">
              Your export data shouldn&apos;t be scattered.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
              CNR Data Room centralizes product, production, energy, quality and
              customer data into one system your team can actually use.
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
            <DataRoomDashboard locale="en" />
          </Reveal>
        </div>
      </div>
      <OperationsStrip locale="en" />
    </section>
  );
}
