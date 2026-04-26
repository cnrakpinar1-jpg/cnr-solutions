import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

const bullets = [
  "Gelen talepleri tek yerde toplarız.",
  "Müşterileri durumlarına göre takip edilebilir hale getiririz.",
  "Randevu, teklif, görüşme ve takip süreçlerini panelleştiririz.",
  "Gerekirse yapay zekâ ile özetleme, sınıflandırma ve cevap önerileri ekleriz.",
  "İşletme sahibinin operasyonu tek ekrandan görmesini sağlarız.",
];

export function TrCuriosity() {
  return (
    <SectionShell>
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Ne Yapıyoruz?"
            title="Peki biz tam olarak ne yapıyoruz?"
          />
          <p className="mt-2 text-base leading-7 text-slate-300">
            İşletmenizde müşteri talepleri WhatsApp, Instagram DM, telefon, Excel ve notlar
            arasında dağılıyorsa; biz bu dağınıklığı tek bir akışa çeviriyoruz.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ul className="space-y-4">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-xs font-bold text-[var(--color-accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base leading-7 text-slate-300">{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button
              href="https://wa.me/905331970462"
              target="_blank"
              rel="noopener noreferrer"
            >
              İşletmem için nasıl çalışır?
            </Button>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
