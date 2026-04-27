const items = {
  tr: [
    ["PR", "Ürün verisi"],
    ["PD", "Üretim verisi"],
    ["EN", "Enerji verisi"],
    ["CR", "Müşteri talepleri"],
    ["DC", "Dokümantasyon"],
    ["RF", "Raporlama akışları"],
  ],
  en: [
    ["PR", "Product data"],
    ["PD", "Production data"],
    ["EN", "Energy data"],
    ["CR", "Customer requests"],
    ["DC", "Documentation"],
    ["RF", "Reporting workflows"],
  ],
};

type OperationsStripProps = {
  locale: "tr" | "en";
};

export function OperationsStrip({ locale }: OperationsStripProps) {
  return (
    <div className="relative z-10 border-y border-white/8 bg-white/[0.025] backdrop-blur-md">
      <div className="container-shell py-4">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {items[locale].map(([icon, label]) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-3 shadow-[0_10px_30px_rgba(2,6,23,0.18)] transition-all hover:-translate-y-0.5 hover:border-[rgba(125,211,252,0.28)] hover:bg-white/[0.055]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-[rgba(125,211,252,0.18)] bg-[rgba(125,211,252,0.08)] text-[0.68rem] font-bold text-[var(--color-accent)]">
                {icon}
              </span>
              <span className="text-sm font-semibold text-slate-200">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
