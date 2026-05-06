import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

export function TrOpportunityCard() {
  return (
    <SectionShell>
      <Reveal>
        <SectionHeading
          title="Her müşteri talebi bir Fırsat Kartı'na dönüşür."
          description="Müşteri size sadece mesaj atmaz; satın alma niyeti bırakır. Norm bu niyeti düzenli bir Fırsat Kartı'na çevirir."
        />
      </Reveal>

      <Reveal delay={80}>
        <div className="surface-strong mt-10 rounded-[24px] p-6 sm:p-8 max-w-xl mx-auto">
          <div className="flex items-center justify-between mb-5">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
              Fırsat Kartı
            </p>
            <span className="rounded-full border border-amber-300/24 bg-amber-300/10 px-2.5 py-0.5 text-[0.6rem] font-semibold text-amber-300">
              Örnek / Demo Veri
            </span>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.02] px-4 py-2.5">
              <span className="text-xs text-slate-400">Müşteri</span>
              <span className="text-sm font-semibold text-white">Ayşe Hanım</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.02] px-4 py-2.5">
              <span className="text-xs text-slate-400">Kanal</span>
              <span className="text-sm font-semibold text-white">Instagram DM</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.02] px-4 py-2.5">
              <span className="text-xs text-slate-400">Talep</span>
              <span className="text-sm font-semibold text-white">Fiyat / teklif talebi</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-emerald-300/12 bg-emerald-300/[0.05] px-4 py-2.5">
              <span className="text-xs text-slate-400">Sıcaklık</span>
              <span className="text-sm font-semibold text-emerald-300">Yüksek</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.02] px-4 py-2.5">
              <span className="text-xs text-slate-400">Durum</span>
              <span className="text-sm font-semibold text-white">Dönüş bekliyor</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-[rgba(125,211,252,0.12)] bg-[rgba(125,211,252,0.05)] px-4 py-2.5">
              <span className="text-xs text-slate-400">Sonraki Aksiyon</span>
              <span className="text-sm font-semibold text-[var(--color-accent)]">Teklif dönüşü yap</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-amber-300/12 bg-amber-300/[0.05] px-4 py-2.5">
              <span className="text-xs text-slate-400">Takip Zamanı</span>
              <span className="text-sm font-semibold text-amber-300">Bugün</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-rose-300/16 bg-rose-300/[0.05] px-4 py-2.5">
              <span className="text-xs text-slate-400">Risk</span>
              <span className="rounded-full border border-rose-300/24 bg-rose-300/10 px-2.5 py-0.5 text-[0.65rem] font-semibold text-rose-300">
                Soğuyabilir
              </span>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={140}>
        <p className="mt-8 text-sm leading-7 text-slate-400 text-center max-w-xl mx-auto">
          Ekip kime ne zaman döneceğini bilir. İşletme sahibi hangi fırsatın kaçmak üzere olduğunu görür.
        </p>
      </Reveal>
    </SectionShell>
  );
}
