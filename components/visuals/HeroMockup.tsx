export function HeroMockup() {
  return (
    <div className="surface-strong relative mx-auto w-full max-w-[38rem] overflow-hidden rounded-[28px] p-4 sm:p-5">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[rgba(125,211,252,0.18)] to-transparent" />
      <div className="relative grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[22px] border border-white/8 bg-[rgba(9,13,27,0.9)] p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-accent)]">
                Client Ops
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">Bookings overview</h3>
            </div>
            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
              Live
            </span>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              ["42", "Active requests"],
              ["18m", "Avg response"],
              ["94%", "Attendance"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/6 bg-white/4 p-3"
              >
                <div className="text-xl font-semibold text-white">{value}</div>
                <div className="mt-1 text-xs text-slate-400">{label}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 space-y-3">
            {[
              ["New inquiry captured", "Form -> routing -> owner assigned"],
              ["Approval waiting", "Portal access sent to client"],
              ["Invoice reconciled", "Status synced across dashboard"],
            ].map(([title, description]) => (
              <div
                key={title}
                className="flex items-start gap-3 rounded-2xl border border-white/6 bg-white/[0.03] px-3 py-3"
              >
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                <div>
                  <div className="text-sm font-medium text-white">{title}</div>
                  <div className="mt-1 text-xs leading-5 text-slate-400">{description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[22px] border border-white/8 bg-[rgba(9,13,27,0.84)] p-4">
            <div className="text-xs uppercase tracking-[0.14em] text-slate-400">
              Pipeline
            </div>
            <div className="mt-4 space-y-3">
              {[
                ["Qualified", "12"],
                ["Proposal sent", "7"],
                ["Awaiting approval", "4"],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>{label}</span>
                    <span className="font-medium text-white">{value}</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white/6">
                    <div
                      className="h-2 rounded-full bg-[var(--color-accent)]"
                      style={{
                        width:
                          label === "Qualified"
                            ? "84%"
                            : label === "Proposal sent"
                              ? "61%"
                              : "36%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[22px] border border-white/8 bg-[rgba(9,13,27,0.84)] p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.14em] text-slate-400">
                  This week
                </div>
                <div className="mt-2 text-lg font-semibold text-white">Team schedule</div>
              </div>
              <div className="text-sm font-medium text-[var(--color-accent)]">Synced</div>
            </div>
            <div className="mt-4 grid grid-cols-5 gap-2">
              {[72, 48, 88, 55, 80].map((height, index) => (
                <div
                  key={height}
                  className="flex h-28 items-end justify-center rounded-2xl bg-white/4 p-2"
                >
                  <div
                    className={`w-full rounded-xl ${
                      index === 2
                        ? "bg-[var(--color-accent)]"
                        : "bg-[rgba(125,211,252,0.32)]"
                    }`}
                    style={{ height: `${height}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
