import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

const bullets = [
  "Founder-led, yakın çalışma modeli",
  "Sade ve anlaşılır kurulum süreci",
  "Teknik jargondan çok iş sonucuna odaklanma",
  "İşletmeye özel müşteri akışı tasarımı",
  "Satış, randevu ve takip disiplinini birlikte ele alma",
  "Reklamdan önce mevcut müşteri akışını iyileştirme yaklaşımı",
  "Küçük ve orta ölçekli işletmeler için pratik sistem mantığı",
  "CNR Norm merkezli net ürün yaklaşımı",
];

export function TrTrust() {
  return (
    <SectionShell id="hakkimizda">
      <Reveal>
        <SectionHeading title="CNR Solutions yaklaşımı" />
        <div className="mt-6 max-w-2xl space-y-4 text-base leading-8 text-slate-400">
          <p>
            CNR Solutions, Türkiye&rsquo;deki işletmeleri yapay zekâ çağına pratik, anlaşılır ve kullanılabilir iş sistemleriyle taşımak için çalışır.
          </p>
          <p>
            Biz karmaşık yazılım diliyle değil, işletmenin her gün yaşadığı gerçek problemlerle ilgileniriz: müşteri görüşmeleri, takip düzeni, randevular, teklifler, satış fırsatları ve operasyonel görünürlük.
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {bullets.map((bullet, i) => (
          <Reveal key={bullet} delay={i * 45}>
            <div className="flex items-start gap-3 rounded-xl border border-white/6 bg-white/[0.025] px-4 py-3">
              <span className="mt-0.5 flex-shrink-0 text-sm text-[var(--color-accent)] select-none">✓</span>
              <span className="text-sm text-slate-300">{bullet}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
