import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { NormLogoImage } from "@/components/shared/NormLogoImage";

const bullets = [
  "Müşteri ilişkiniz işletmenizde kalır.",
  "Her işletme kendi özel alanında çalışır.",
  "Gereksiz veri toplamayız.",
  "İsterseniz verilerinizi dışa aktarabilecek şekilde çalışırız.",
  "Norm'un amacı müşteri verisini sahiplenmek değil, müşteri akışını görünür hale getirmektir.",
];

export function TrTrust() {
  return (
    <SectionShell id="guven">
      <Reveal>
        <NormLogoImage className="mb-3 h-5 w-auto object-contain" loading="lazy" />
        <SectionHeading
          title="Kontrol işletmenizde kalır."
          description="Norm, hasta dosyası veya sağlık kaydı sistemi değildir. Gelen müşteri taleplerini, takipleri ve randevu akışını düzenlemek için kısa ve gerekli bilgilerle çalışır."
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
