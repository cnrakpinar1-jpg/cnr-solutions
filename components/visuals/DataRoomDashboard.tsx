type DashboardCopy = {
  subtitle: string;
  live: string;
  tableCustomer: string;
  tableProduct: string;
  tableStatus: string;
  floating: string[];
  metrics: Array<{ label: string; value: string; tone: string }>;
  rows: Array<{ product: string; customer: string; status: string; className: string }>;
};

const dashboardCopy: Record<"tr" | "en", DashboardCopy> = {
  tr: {
    subtitle: "İhracat veri komuta merkezi",
    live: "Canlı",
    tableProduct: "Ürün",
    tableCustomer: "Müşteri",
    tableStatus: "Durum",
    floating: [
      "Enerji dosyası yüklendi",
      "Eksik alan tespit edildi",
      "Müşteri paketi hazır",
    ],
    metrics: [
      { label: "Hazır paket", value: "12", tone: "text-emerald-300" },
      { label: "Eksik veri", value: "7", tone: "text-amber-300" },
      { label: "Bekleyen aksiyon", value: "18", tone: "text-sky-300" },
      { label: "Müşteri talebi", value: "5", tone: "text-violet-300" },
    ],
    rows: [
      {
        product: "ALU-320",
        customer: "EU Customer A",
        status: "Hazır",
        className: "border-emerald-300/20 bg-emerald-300/10 text-emerald-300",
      },
      {
        product: "STEEL-18",
        customer: "EU Customer B",
        status: "Enerji verisi eksik",
        className: "border-amber-300/20 bg-amber-300/10 text-amber-300",
      },
      {
        product: "FASTENER-M8",
        customer: "EU Customer C",
        status: "GTIP kontrolü",
        className: "border-sky-300/20 bg-sky-300/10 text-sky-300",
      },
      {
        product: "CAST-ALU-22",
        customer: "EU Customer D",
        status: "Üretim verisi bekliyor",
        className: "border-slate-300/20 bg-slate-300/10 text-slate-300",
      },
    ],
  },
  en: {
    subtitle: "Export data command center",
    live: "Live",
    tableProduct: "Product",
    tableCustomer: "Customer",
    tableStatus: "Status",
    floating: [
      "Energy file uploaded",
      "Missing field detected",
      "Customer package ready",
    ],
    metrics: [
      { label: "Ready Packages", value: "12", tone: "text-emerald-300" },
      { label: "Missing Data", value: "7", tone: "text-amber-300" },
      { label: "Pending Actions", value: "18", tone: "text-sky-300" },
      { label: "Customer Requests", value: "5", tone: "text-violet-300" },
    ],
    rows: [
      {
        product: "ALU-320",
        customer: "EU Customer A",
        status: "Ready",
        className: "border-emerald-300/20 bg-emerald-300/10 text-emerald-300",
      },
      {
        product: "STEEL-18",
        customer: "EU Customer B",
        status: "Missing energy data",
        className: "border-amber-300/20 bg-amber-300/10 text-amber-300",
      },
      {
        product: "FASTENER-M8",
        customer: "EU Customer C",
        status: "GTIP/CN check",
        className: "border-sky-300/20 bg-sky-300/10 text-sky-300",
      },
      {
        product: "CAST-ALU-22",
        customer: "EU Customer D",
        status: "Production data pending",
        className: "border-slate-300/20 bg-slate-300/10 text-slate-300",
      },
    ],
  },
};

type DataRoomDashboardProps = {
  locale: "tr" | "en";
};

export function DataRoomDashboard({ locale }: DataRoomDashboardProps) {
  const copy = dashboardCopy[locale];

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-[36px] bg-[radial-gradient(circle_at_50%_30%,rgba(56,189,248,0.18),transparent_58%)] blur-2xl"
      />

      <div className="absolute -left-7 top-12 hidden rounded-2xl border border-emerald-300/18 bg-emerald-300/[0.08] px-4 py-3 text-xs font-semibold text-emerald-200 shadow-[0_18px_54px_rgba(2,6,23,0.38)] backdrop-blur-md xl:block">
        {copy.floating[0]}
      </div>
      <div className="absolute -right-7 top-28 hidden rounded-2xl border border-amber-300/18 bg-amber-300/[0.08] px-4 py-3 text-xs font-semibold text-amber-200 shadow-[0_18px_54px_rgba(2,6,23,0.38)] backdrop-blur-md xl:block">
        {copy.floating[1]}
      </div>
      <div className="absolute -bottom-7 left-10 hidden rounded-2xl border border-sky-300/18 bg-sky-300/[0.08] px-4 py-3 text-xs font-semibold text-sky-200 shadow-[0_18px_54px_rgba(2,6,23,0.38)] backdrop-blur-md xl:block">
        {copy.floating[2]}
      </div>

      <div className="surface-strong relative overflow-hidden rounded-[30px] shadow-[0_30px_100px_rgba(2,6,23,0.62),0_0_70px_rgba(56,189,248,0.16)]">
        <div aria-hidden="true" className="dashboard-grid absolute inset-0 opacity-30" />
        <div className="relative border-b border-white/8 px-6 py-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                Operational Data Room
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                {copy.subtitle}
              </h2>
            </div>
            <span className="rounded-full border border-emerald-300/18 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-300">
              {copy.live}
            </span>
          </div>
        </div>

        <div className="relative grid grid-cols-2 gap-3 border-b border-white/8 p-5 sm:grid-cols-4">
          {copy.metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-white/8 bg-white/[0.04] p-3">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
                {metric.label}
              </p>
              <p className={`mt-2 text-2xl font-bold ${metric.tone}`}>{metric.value}</p>
            </div>
          ))}
        </div>

        <div className="relative overflow-x-auto">
          <div className="min-w-[34rem]">
            <div className="grid grid-cols-[0.85fr_1fr_1.15fr] border-b border-white/8 bg-white/[0.04] px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
              <span>{copy.tableProduct}</span>
              <span>{copy.tableCustomer}</span>
              <span>{copy.tableStatus}</span>
            </div>
            <div className="divide-y divide-white/8">
              {copy.rows.map((row) => (
                <div
                  key={row.product}
                  className="grid grid-cols-[0.85fr_1fr_1.15fr] items-center gap-4 px-5 py-4 transition-colors hover:bg-white/[0.035]"
                >
                  <span className="font-semibold text-white">{row.product}</span>
                  <span className="text-sm text-slate-400">{row.customer}</span>
                  <span className={`inline-flex w-fit rounded-full border px-3 py-1 text-xs font-semibold ${row.className}`}>
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
