import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

const leads = [
  {
    name: "Ayşe K.",
    message: "Temmuz için 400 kişilik salon müsait mi?",
    score: 94,
    action: "Hemen ara",
  },
  {
    name: "Mert D.",
    message: "Kına + düğün paketi fiyat alabilir miyim?",
    score: 88,
    action: "WhatsApp dönüşü",
  },
  {
    name: "Elif & Can",
    message: "Eylül cumartesi günleri boş tarih var mı?",
    score: 91,
    action: "Tarih öner",
  },
  {
    name: "Derya A.",
    message: "Daha önce yazmıştım, dönüş olmadı.",
    score: 82,
    action: "Kurtarma mesajı",
  },
];

export function KrrLeads() {
  return (
    <SectionShell id="kurtarilabilir">
      <Reveal>
        <SectionHeading
          eyebrow="Bugünün Kurtarma Listesi"
          title="Bugün kurtarılabilecek talepler"
          description="Skor; tarih, fiyat ve müsaitlik soran müşterilerin rezervasyon niyetine göre hesaplanır."
        />
      </Reveal>

      <Reveal delay={120}>
        <div className="surface mt-10 overflow-hidden rounded-[28px]">
          <div className="hidden grid-cols-[1.6fr_0.6fr_0.8fr] items-center gap-4 border-b border-white/6 bg-white/[0.02] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 sm:grid">
            <span>Talep</span>
            <span>Skor</span>
            <span>Aksiyon</span>
          </div>

          <ul>
            {leads.map((lead, index) => (
              <li
                key={lead.name}
                className={`flex flex-col gap-4 px-6 py-5 sm:grid sm:grid-cols-[1.6fr_0.6fr_0.8fr] sm:items-center ${
                  index > 0 ? "border-t border-white/6" : ""
                }`}
              >
                <div>
                  <div className="text-base font-semibold text-white">
                    {lead.name}
                  </div>
                  <div className="mt-1 text-sm leading-6 text-slate-300">
                    “{lead.message}”
                  </div>
                </div>
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(125,211,252,0.22)] bg-[rgba(56,189,248,0.1)] px-3 py-1 text-sm font-semibold text-[var(--color-accent)]">
                    {lead.score}
                  </span>
                </div>
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-white">
                    {lead.action}
                    <span aria-hidden="true" className="text-[var(--color-accent)]">
                      →
                    </span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div className="mt-8 rounded-2xl border border-white/8 bg-white/[0.025] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
            Önerilen takip mesajı — Ayşe K. için
          </p>
          <blockquote className="mt-3 border-l-2 border-[var(--color-accent)] bg-[var(--color-accent-soft)] px-4 py-3 text-base leading-7 text-white">
            Merhaba Ayşe Hanım, Temmuz ayı için salon müsaitliği hakkında size
            hızlıca yardımcı olabiliriz. Uygun tarihleri paylaşmamı ister
            misiniz?
          </blockquote>
        </div>
      </Reveal>
    </SectionShell>
  );
}
