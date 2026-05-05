import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

export function TrFounderNote() {
  return (
    <SectionShell id="kurucudan">
      <Reveal>
        <div className="mx-auto max-w-2xl">
          <span className="eyebrow">Kurucudan kısa not</span>
          <p className="mt-6 text-base leading-8 text-slate-400">
            Ben Çınar. Sahada işletmelerin müşteri taleplerini WhatsApp, Instagram, telefon ve notlar
            arasında kaybettiğini gördüm. Norm&apos;u, özellikle küçük ve orta ölçekli işletmelerin
            gelen talebi daha düzenli takip edebilmesi için geliştiriyorum. İlk kurucu işletmelerle
            beraber ürünü gerçek kullanımda iyileştiriyoruz.
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
