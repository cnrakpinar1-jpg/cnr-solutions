import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

const whatsappUrl =
  "https://wa.me/905331970462?text=Merhaba%2C%20CNR%20Solutions%20sitesinden%20geliyorum.%20%C4%B0%C5%9Fletmemdeki%20m%C3%BC%C5%9Fteri%20ak%C4%B1%C5%9F%C4%B1n%C4%B1%20sisteme%20%C3%A7evirmek%20istiyorum.";

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
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              İşletmem İçin Sistem Planla
            </Button>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
