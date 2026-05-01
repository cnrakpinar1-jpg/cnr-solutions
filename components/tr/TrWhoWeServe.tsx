import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const segments = [
  {
    title: "Özel klinikler ve diş klinikleri",
    description: "Hasta adayı görüşmeleri ekip hafızasına değil, takip sistemine bağlansın.",
  },
  {
    title: "Güzellik merkezleri ve medikal estetik işletmeleri",
    description: "Instagram'dan fiyat soran danışanlar randevuya dönmeden kaybolmasın.",
  },
  {
    title: "Oto servis, ekspertiz ve detailing işletmeleri",
    description: "WhatsApp'tan gelen servis talepleri teklif ve randevuya bağlansın.",
  },
  {
    title: "Kurslar ve eğitim merkezleri",
    description: "Veli ve öğrenci görüşmeleri kayıt, takip ve ödeme sürecine düzenli ilerlesin.",
  },
  {
    title: "Mobilya, mutfak, banyo, perde ve dekorasyon firmaları",
    description: "Fiyat soruları ve teklifler sistemli takip edilsin; fırsat penceresi kapanmasın.",
  },
  {
    title: "Danışmanlık ve hizmet işletmeleri",
    description: "Gelen görüşmeler kaybolmadan teklif ve satış sürecine bağlansın.",
  },
  {
    title: "Yoğun müşteri görüşmesi alan KOBİ'ler",
    description: "Birden fazla kanaldan müşteri al, ama süreci rastgele değil standart takip et.",
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
