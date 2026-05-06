import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

export function TrFounderNote() {
  return (
    <SectionShell id="kurucudan">
      <Reveal>
        <div className="mx-auto max-w-2xl">
          <span className="eyebrow">Kurucudan kısa not</span>
          <p className="mt-6 text-base leading-8 text-slate-400">
            Ben Çınar. Bu problemi farklı işletmelerde aynı şekilde gördük: müşteri geliyor,
            cevap alıyor ama takip edilmediği için fırsat kayboluyor. Norm&apos;u, küçük ve orta
            ölçekli hizmet işletmelerinin gelen talebi daha düzenli takip edebilmesi için
            geliştiriyorum. İlk kurucu işletmelerle beraber ürünü gerçek kullanımda iyileştiriyoruz.
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
