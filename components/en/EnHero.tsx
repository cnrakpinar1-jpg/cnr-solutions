import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function EnHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="dashboard-grid pointer-events-none absolute inset-0 opacity-60" />
      <div aria-hidden="true" className="data-flow-lines pointer-events-none absolute inset-0 opacity-60" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[44rem] bg-[radial-gradient(ellipse_at_22%_8%,rgba(56,189,248,0.16),transparent_54%),linear-gradient(180deg,rgba(6,8,22,0.12),rgba(6,8,22,0.94))]"
      />

      <div className="container-shell">
        <div className="grid items-center gap-10 pb-16 pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14 lg:pb-32 lg:pt-20">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Customer Flow Standard</p>

            <h1 className="text-balance mt-4 text-[2.4rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.6rem] lg:leading-[1.04]">
              Stop losing customer inquiries. CNR Norm connects every lead into one clear flow.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
              We bring customer conversations from WhatsApp, Instagram, phone calls, web forms, and ads into one organized system. See which leads are hot, who has not been followed up with, and which appointments or quotes are at risk of being lost.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="#customer-flow-score" className="w-full sm:w-auto">
                Get Your Free Customer Flow Score
              </Button>
              <Button href="#how-it-works" variant="secondary" className="w-full sm:w-auto">
                See How CNR Norm Works
              </Button>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              In a free 15-30 minute Customer Flow Score review, we identify where your customer flow gets scattered and what can be improved.
            </p>
          </Reveal>

          <Reveal delay={120} className="w-full min-w-0">
            <div className="surface-strong rounded-[24px] p-6 sm:p-8 w-full">
              <div className="flex items-center justify-between mb-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                  Customer Flow Score
                </p>
                <span className="rounded-full border border-amber-300/24 bg-amber-300/10 px-2.5 py-0.5 text-[0.6rem] font-semibold text-amber-300">
                  Sample score
                </span>
              </div>

              {/* Score */}
              <div className="mb-5">
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-bold text-white leading-none">61</span>
                  <span className="mb-1 text-lg font-semibold text-slate-500">/ 100</span>
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-white/8">
                  <div
                    className="h-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_12px_rgba(56,189,248,0.5)]"
                    style={{ width: "61%" }}
                  />
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between rounded-xl border border-emerald-300/12 bg-emerald-300/[0.05] px-4 py-2.5">
                  <span className="text-xs text-slate-400">Hot Leads</span>
                  <span className="text-sm font-semibold text-emerald-300">8</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-amber-300/12 bg-amber-300/[0.05] px-4 py-2.5">
                  <span className="text-xs text-slate-400">Delayed Follow-ups</span>
                  <span className="text-sm font-semibold text-amber-300">3</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-amber-300/12 bg-amber-300/[0.05] px-4 py-2.5">
                  <span className="text-xs text-slate-400">Unanswered Price Requests</span>
                  <span className="text-sm font-semibold text-amber-300">5</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-rose-300/16 bg-rose-300/[0.05] px-4 py-2.5">
                  <span className="text-xs text-slate-400">Lost Opportunity Risk</span>
                  <span className="rounded-full border border-rose-300/24 bg-rose-300/10 px-2.5 py-0.5 text-[0.65rem] font-semibold text-rose-300">
                    High
                  </span>
                </div>
              </div>

              {/* Recommended Action */}
              <div className="mt-4 rounded-xl border border-[rgba(125,211,252,0.14)] bg-[rgba(125,211,252,0.05)] px-4 py-3">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)] mb-1">
                  Recommended Action
                </p>
                <p className="text-xs leading-5 text-slate-300">
                  Follow up with price-request leads today.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
