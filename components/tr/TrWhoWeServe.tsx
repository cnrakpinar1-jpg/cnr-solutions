import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const segments = [
  {
    title: "Özel klinikler ve diş klinikleri",
    description: "Müşteri görüşmesi, randevu ve hasta aday takibini standart hale getirmek için.",
  },
  {
    title: "Güzellik merkezleri ve medikal estetik işletmeleri",
    description: "Instagram, WhatsApp ve telefon görüşmelerini randevu akışına bağlamak için.",
  },
  {
    title: "Oto servis, ekspertiz ve detailing işletmeleri",
    description: "Telefon ve WhatsApp üzerinden gelen servis taleplerini takip etmek için.",
  },
  {
    title: "Kurslar ve eğitim merkezleri",
    description: "Veli/öğrenci görüşmelerini kayıt, görüşme ve takip sürecine çevirmek için.",
  },
  {
    title: "Mobilya, mutfak, banyo, perde ve dekorasyon firmaları",
    description: "Fiyat alma, teklif ve geri dönüş süreçlerini düzene almak için.",
  },
  {
    title: "Danışmanlık ve hizmet işletmeleri",
    description: "Gelen görüşmeleri teklif, toplantı ve satış sürecine bağlamak için.",
  },
  {
    title: "Yoğun müşteri görüşmesi alan KOBİ'ler",
    description: "Birden fazla kanaldan müşteri alan ama süreci manuel takip eden işletmeler için.",
  },
];

export function TrWhoWeServe() {
  return (
    <SectionShell id="kimler">
      <Reveal>
        <SectionHeading title="CNR Norm kimler için uygun?" />
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

      <Reveal delay={200}>
        <p className="mt-8 text-sm leading-7 text-slate-400 text-center">
          CNR Norm, müşteriyle yoğun temas kuran ancak bu temasları standart bir iş akışına bağlamakta zorlanan işletmeler için tasarlanmıştır.
        </p>
      </Reveal>
    </SectionShell>
  );
}
