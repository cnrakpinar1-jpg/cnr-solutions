import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

const before = [
  "Dağınık DM kutusu",
  "Unutulan WhatsApp mesajları",
  "Not alınmayan telefon talepleri",
  "Takipsiz kalan fiyat soruları",
  "Kaçan rezervasyonun görünmemesi",
];

const after = [
  "Tüm talepler tek ekranda",
  "Sıcak müşteriler öncelikli",
  "Günlük takip listesi net",
  "Ekip kiminle konuşacağını biliyor",
  "Kaçan fırsat TL olarak görünür",
];

export function KrrBeforeAfter() {
  return (
    <SectionShell id="once-sonra">
      <Reveal>
        <SectionHeading
          eyebrow="Önce — Sonra"
          title="Sistem öncesi ve sonrası"
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="surface h-full rounded-[28px] p-7 sm:p-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-300/20 bg-rose-300/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-rose-200">
              Önce
            </span>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              Şu anki durum
            </h3>
            <ul className="mt-6 space-y-3">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-rose-200"
                  >
                    ×
                  </span>
                  <span className="text-base leading-7 text-slate-200">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="surface-strong h-full rounded-[28px] p-7 sm:p-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(125,211,252,0.22)] bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
              Sonra
            </span>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              Sistem kurulduktan sonra
            </h3>
            <ul className="mt-6 space-y-3">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[rgba(125,211,252,0.28)] bg-[rgba(56,189,248,0.16)] text-[var(--color-accent)]"
                  >
                    ✓
                  </span>
                  <span className="text-base font-medium leading-7 text-white">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
