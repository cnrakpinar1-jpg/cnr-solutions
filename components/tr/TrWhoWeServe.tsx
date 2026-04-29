import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const segments = [
  {
    title: "KOBİ'ler",
    description:
      "Büyüyen ama henüz kurumsal yazılımlara geçmemiş işletmeler. Satış takibi, müşteri yönetimi ve operasyon görünürlüğü için pratik sisteme ihtiyaç duyar.",
  },
  {
    title: "Büyüyen Yerel İşletmeler",
    description:
      "Ekip genişledikçe bilgi dağılmaya başlayan işletmeler. Herkesin aynı veriye aynı anda ulaşabileceği bir yapıya ihtiyaç duyar.",
  },
  {
    title: "Klinikler",
    description:
      "Hasta takibi, randevu, belge ve hizmet sürecini daha görünür ve düzenli yönetmek isteyen sağlık işletmeleri.",
  },
  {
    title: "Üretici Firmalar",
    description:
      "Sipariş, üretim takibi, kalite ve müşteri verisi farklı sistemlerde dağılan; operasyon görünürlüğü isteyen firmalar.",
  },
  {
    title: "İhracatçı Firmalar",
    description:
      "AB müşteri talepleri, CBAM/uyumluluk verisi ve ihracat süreci için düzenli veri akışına ihtiyaç duyan işletmeler.",
  },
  {
    title: "Profesyonel Hizmet Firmaları",
    description:
      "Danışmanlık, hukuk, muhasebe veya ajans gibi proje ve müşteri takibinin kritik olduğu hizmet odaklı işletmeler.",
  },
];

export function TrWhoWeServe() {
  return (
    <SectionShell id="kimler">
      <Reveal>
        <SectionHeading
          eyebrow="Kimler için?"
          title="Kimler için çalışıyoruz?"
          description="Ağır, pahalı ve karmaşık kurumsal yazılımlara boğulmadan; daha düzenli, daha görünür ve daha akıllı çalışmak isteyen işletmeler için."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {segments.map((seg, i) => (
          <Reveal key={seg.title} delay={i * 55}>
            <SurfaceCard className="h-full hover:-translate-y-1">
              <h3 className="text-base font-semibold text-white">{seg.title}</h3>
              <p className="mt-2.5 text-sm leading-6 text-slate-500">{seg.description}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
