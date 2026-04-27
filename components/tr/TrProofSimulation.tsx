import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

const rows = [
  {
    product: "ALU-320",
    customer: "EU Customer A",
    status: "Hazır",
    missing: "—",
    owner: "İhracat",
    action: "Paketi gönder",
    badge: "border-emerald-300/20 bg-emerald-300/10 text-emerald-300",
  },
  {
    product: "STEEL-18",
    customer: "EU Customer B",
    status: "Riskli",
    missing: "Enerji verisi",
    owner: "Üretim",
    action: "Enerji dosyasını yükle",
    badge: "border-orange-300/20 bg-orange-300/10 text-orange-300",
  },
  {
    product: "FASTENER-M8",
    customer: "EU Customer C",
    status: "Kontrol gerekli",
    missing: "GTİP/CN kodu",
    owner: "İhracat",
    action: "Kodu doğrula",
    badge: "border-amber-300/20 bg-amber-300/10 text-amber-300",
  },
  {
    product: "CAST-ALU-22",
    customer: "EU Customer D",
    status: "Bekliyor",
    missing: "Üretim miktarı",
    owner: "Operasyon",
    action: "Miktarı gir",
    badge: "border-slate-300/20 bg-slate-300/10 text-slate-300",
  },
  {
    product: "SHEET-METAL-09",
    customer: "EU Customer E",
    status: "Hazırlanıyor",
    missing: "Kalite dokümanı",
    owner: "Kalite",
    action: "Sertifikayı yükle",
    badge: "border-violet-300/20 bg-violet-300/10 text-violet-300",
  },
];

export function TrProofSimulation() {
  return (
    <SectionShell id="ornek">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Örnek durum"
            title="Örnek görünürlük"
            description="Bu görünürlük olmadan ekipler kör çalışır."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="surface-strong overflow-hidden rounded-[24px] shadow-[0_26px_86px_rgba(2,6,23,0.48)]">
            <div className="overflow-x-auto">
              <div className="grid min-w-[58rem] grid-cols-[1fr_1fr_0.9fr_1fr_0.9fr_1.1fr] border-b border-white/8 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                <span>Ürün</span>
                <span>Müşteri</span>
                <span>Durum</span>
                <span>Eksik veri</span>
                <span>Sorumlu</span>
                <span>Sonraki adım</span>
              </div>
              <div className="divide-y divide-white/8">
                {rows.map((row) => (
                  <div
                    key={row.product}
                    className="grid min-w-[58rem] grid-cols-[1fr_1fr_0.9fr_1fr_0.9fr_1.1fr] items-center gap-4 px-5 py-5 transition-colors hover:bg-white/[0.035]"
                  >
                    <span className="font-semibold text-white">{row.product}</span>
                    <span className="text-sm text-slate-400">{row.customer}</span>
                    <span
                      className={`inline-flex w-fit rounded-full border px-3 py-1 text-xs font-semibold ${row.badge}`}
                    >
                      {row.status}
                    </span>
                    <span className="text-sm text-slate-300">{row.missing}</span>
                    <span className="text-sm text-slate-400">{row.owner}</span>
                    <span className="text-sm font-medium text-white">{row.action}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
