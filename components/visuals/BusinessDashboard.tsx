const tabs = [
  "Talep Merkezi",
  "Müşteri Yönetimi",
  "Satış Süreci",
  "Operasyon",
  "Raporlama",
  "Otomasyon",
];

const metrics = [
  { label: "Yeni Talep", value: "8", tone: "text-sky-300" },
  { label: "Aktif Müşteri", value: "34", tone: "text-emerald-300" },
  { label: "Bekleyen Teklif", value: "12", tone: "text-amber-300" },
  { label: "Tamamlanan", value: "47", tone: "text-violet-300" },
];

type PipelineCard = { label: string; tag: string; tagClass: string };

const pipeline: Array<{ stage: string; count: number; cards: PipelineCard[] }> = [
  {
    stage: "Yeni Talep",
    count: 4,
    cards: [
      { label: "Müşteri A — Web Formu", tag: "Yeni", tagClass: "bg-sky-300/10 text-sky-300 border-sky-300/20" },
      { label: "Müşteri B — WhatsApp", tag: "Yeni", tagClass: "bg-sky-300/10 text-sky-300 border-sky-300/20" },
    ],
  },
  {
    stage: "Görüşüldü",
    count: 3,
    cards: [
      { label: "Müşteri C — Klinik", tag: "Görüşme", tagClass: "bg-violet-300/10 text-violet-300 border-violet-300/20" },
    ],
  },
  {
    stage: "Teklif Hazırlandı",
    count: 5,
    cards: [
      { label: "Müşteri D — Üretim", tag: "Teklif", tagClass: "bg-amber-300/10 text-amber-300 border-amber-300/20" },
      { label: "Müşteri E — Hizmet", tag: "Teklif", tagClass: "bg-amber-300/10 text-amber-300 border-amber-300/20" },
    ],
  },
  {
    stage: "Kazanıldı",
    count: 8,
    cards: [
      { label: "Müşteri F — KOBİ", tag: "Kazanıldı", tagClass: "bg-emerald-300/10 text-emerald-300 border-emerald-300/20" },
    ],
  },
];

const floatingCards = [
  { text: "Yeni müşteri talebi", cls: "border-sky-300/20 bg-sky-300/[0.07] text-sky-200", pos: "absolute -left-6 top-16 hidden xl:block" },
  { text: "Takip görevi oluşturuldu", cls: "border-emerald-300/20 bg-emerald-300/[0.07] text-emerald-200", pos: "absolute -right-6 top-32 hidden xl:block" },
  { text: "Teklif süreci güncellendi", cls: "border-amber-300/20 bg-amber-300/[0.07] text-amber-200", pos: "absolute -bottom-5 left-16 hidden xl:block" },
];

export function BusinessDashboard() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-[36px] bg-[radial-gradient(circle_at_50%_30%,rgba(56,189,248,0.16),transparent_60%)] blur-2xl"
      />

      {floatingCards.map((fc) => (
        <div
          key={fc.text}
          aria-hidden="true"
          className={`${fc.pos} rounded-2xl border px-4 py-2.5 text-xs font-semibold shadow-[0_14px_40px_rgba(2,6,23,0.36)] backdrop-blur-md ${fc.cls}`}
        >
          {fc.text}
        </div>
      ))}

      <div className="surface-strong relative overflow-hidden rounded-[28px] shadow-[0_30px_100px_rgba(2,6,23,0.62),0_0_70px_rgba(56,189,248,0.14)]">
        <div aria-hidden="true" className="dashboard-grid absolute inset-0 opacity-25" />

        {/* Header */}
        <div className="relative flex items-center justify-between border-b border-white/8 px-5 py-4">
          <div>
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              CNR İş Yönetim Sistemi
            </p>
            <p className="mt-0.5 text-sm font-semibold text-white">İş Yönetim Paneli</p>
          </div>
          <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-[0.65rem] font-semibold text-emerald-300">
            Canlı
          </span>
        </div>

        {/* Tabs */}
        <div className="relative flex gap-0.5 overflow-x-auto border-b border-white/6 bg-white/[0.02] px-4 py-2 scrollbar-none">
          {tabs.map((tab, i) => (
            <span
              key={tab}
              className={`shrink-0 rounded-md px-2.5 py-1.5 text-[0.65rem] font-semibold transition-colors ${
                i === 0
                  ? "bg-[var(--color-accent-soft)] text-[var(--color-accent)]"
                  : "text-slate-500 hover:text-slate-300"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>

        {/* Metrics */}
        <div className="relative grid grid-cols-4 gap-2 border-b border-white/6 p-4">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-xl border border-white/6 bg-white/[0.03] p-2.5">
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.1em] text-slate-500">{m.label}</p>
              <p className={`mt-1.5 text-xl font-bold ${m.tone}`}>{m.value}</p>
            </div>
          ))}
        </div>

        {/* Pipeline */}
        <div className="relative overflow-x-auto p-4">
          <div className="flex min-w-[32rem] gap-3">
            {pipeline.map((col) => (
              <div key={col.stage} className="flex min-w-[7.5rem] flex-1 flex-col gap-2">
                <div className="flex items-center justify-between px-0.5">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    {col.stage}
                  </p>
                  <span className="rounded-full bg-white/[0.06] px-1.5 py-0.5 text-[0.58rem] font-semibold text-slate-400">
                    {col.count}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  {col.cards.map((card) => (
                    <div
                      key={card.label}
                      className="rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2.5 transition-colors hover:bg-white/[0.06]"
                    >
                      <p className="text-[0.65rem] font-medium leading-4 text-slate-300">{card.label}</p>
                      <span className={`mt-1.5 inline-flex rounded-full border px-1.5 py-0.5 text-[0.55rem] font-semibold ${card.tagClass}`}>
                        {card.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
