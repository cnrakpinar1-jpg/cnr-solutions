import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

const doNot = [
  "Sertifikalı karbon doğrulaması yapmıyoruz",
  "Resmi beyan sistemi değiliz",
];

const doItems = [
  "Veriyi toplarız",
  "Düzenleriz",
  "Takip edilebilir hale getiririz",
  "Müşteri taleplerine hazırlarız",
];

export function TrTrust() {
  return (
    <SectionShell>
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-[24px] border border-white/8 bg-white/[0.025] p-7 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-rose-300">
              Ne yapmıyoruz
            </p>
            <ul className="mt-5 space-y-3">
              {doNot.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-rose-300/20 bg-rose-300/8 text-xs text-rose-300"
                  >
                    ×
                  </span>
                  <span className="text-base leading-7 text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="h-full rounded-[24px] border border-[rgba(125,211,252,0.16)] bg-[rgba(56,189,248,0.04)] p-7 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
              Ne yapıyoruz
            </p>
            <ul className="mt-5 space-y-3">
              {doItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[rgba(125,211,252,0.28)] bg-[rgba(56,189,248,0.12)] text-xs text-[var(--color-accent)]"
                  >
                    ✓
                  </span>
                  <span className="text-base font-medium leading-7 text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
