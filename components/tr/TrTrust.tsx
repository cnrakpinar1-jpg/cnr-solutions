import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

const bullets = [
  "Norm, müşteriyle işletme arasındaki ilişkiye sahip olmaz.",
  "Norm, hasta dosyası değil; talep ve takip akışı düzenler.",
  "Kısa ve gerekli bilgi yeterlidir.",
  "İletişim işletmenizin kendi kanalları üzerinden devam eder.",
  "Gelen talepler düzenlenir. Takipler görünür olur. Kontrol sizde kalır.",
];

export function TrTrust() {
  return (
    <SectionShell id="guven">
      <Reveal>
        <SectionHeading
          title="Kontrol işletmenizde kalır."
          description="Norm, müşteri akışınızı görünür hale getirir. Hangi bilgilerin girildiğine ve nasıl kullanılacağına siz karar verirsiniz."
        />
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {bullets.map((bullet, i) => (
          <Reveal key={bullet} delay={i * 45}>
            <div className="flex items-start gap-3 rounded-xl border border-white/6 bg-white/[0.025] px-4 py-3">
              <span className="mt-0.5 flex-shrink-0 select-none text-sm text-[var(--color-accent)]">✓</span>
              <span className="text-sm text-slate-300">{bullet}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
