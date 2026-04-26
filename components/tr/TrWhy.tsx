import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

const reasons = [
  "Sadece güzel görünen sayfalar değil, işletmede gerçekten kullanılacak sistemler tasarlarız.",
  "Problemi önce iş tarafında anlarız, sonra teknolojiyle çözeriz.",
  "Hızlı prototip çıkarır, gerçek kullanım senaryosuna göre geliştiririz.",
  "Satış, müşteri takibi ve operasyon düzeni odaklı çalışırız.",
  "Küçük işletmeler için karmaşık değil, sade ve uygulanabilir sistemler kurarız.",
  "Yapay zekâyı vitrin süsü olarak değil, iş akışını hızlandıran araç olarak kullanırız.",
];

export function TrWhy() {
  return (
    <SectionShell>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Neden Biz?"
            title="Neden CNR Solutions?"
          />

          <blockquote className="mt-8 rounded-2xl border-l-4 border-[var(--color-accent)] bg-[var(--color-accent-soft)] px-6 py-5">
            <p className="text-base font-medium italic leading-7 text-white">
              &ldquo;Teknoloji gösterisi yapmıyoruz. İşletmenin gerçekten kullanacağı sistemleri
              kuruyoruz.&rdquo;
            </p>
          </blockquote>
        </Reveal>

        <Reveal delay={100}>
          <ul className="space-y-4">
            {reasons.map((reason, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--color-accent)]"
                />
                <span className="text-base leading-7 text-slate-300">{reason}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </SectionShell>
  );
}
