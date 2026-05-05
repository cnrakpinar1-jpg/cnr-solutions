import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

const scenarios = [
  {
    sector: "Güzellik Merkezi",
    before:
      "Instagram'dan lazer epilasyon fiyatı soran kişi cevap aldıktan sonra DM kutusunda unutulur.",
    after:
      "Norm'da sıcak fırsat olarak görünür. Takip günü belirlenir. Bugün kime dönülecek listesine düşer.",
  },
  {
    sector: "Diş Kliniği",
    before:
      "Protez veya implant için bilgi alan kişi not defterinde kalır, takip edilmez.",
    after:
      "Talep kartı oluşur. Randevuya dönmemiş talepler görünür olur. Asistan ne zaman dönüş yapacağını bilir.",
  },
  {
    sector: "Emlak Ofisi",
    before:
      "Web formundan gelen 3+1 daire talebi kimse fark etmeden kaybolur.",
    after:
      "Talep fırsat kartına dönüşür. Satın alma niyeti ve takip zamanı görünür olur.",
  },
];

export function TrSectorScenarios() {
  return (
    <SectionShell id="sektorler">
      <Reveal>
        <SectionHeading title="İşletmenizde nasıl görünür?" />
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {scenarios.map((s, i) => (
          <Reveal key={s.sector} delay={i * 80}>
            <div className="flex h-full flex-col overflow-hidden rounded-[20px] border border-white/8 bg-white/[0.02]">
              <div className="border-b border-white/8 px-5 py-3">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                  {s.sector}
                </p>
              </div>
              <div className="flex-1 border-b border-white/6 px-5 py-4">
                <p className="mb-2 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-slate-600">
                  Şimdi
                </p>
                <p className="text-sm leading-6 text-slate-500">{s.before}</p>
              </div>
              <div className="flex-1 bg-[rgba(125,211,252,0.03)] px-5 py-4">
                <p className="mb-2 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
                  Norm ile
                </p>
                <p className="text-sm leading-6 text-slate-300">{s.after}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
