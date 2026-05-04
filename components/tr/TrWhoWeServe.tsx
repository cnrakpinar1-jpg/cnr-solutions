import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const segments = [
  {
    title: "Güzellik merkezleri ve medikal estetik işletmeleri",
    description: "Instagram'dan fiyat soran danışanlar, WhatsApp'tan randevu isteyenler ve telefonla bilgi alan kişiler tek takip akışında kaybolmadan ilerlesin.",
  },
  {
    title: "Diş klinikleri",
    description: "Hasta adayı görüşmeleri ekip hafızasına değil, takip sistemine bağlansın.",
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
    title: "Mobilya, mutfak, banyo ve dekorasyon firmaları",
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
        <SectionHeading title="Norm kimler için uygun?" />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {segments.map((seg, i) => (
          <Reveal key={seg.title} delay={i * 55}>
            <SurfaceCard className={`h-full hover:-translate-y-1 ${i === 0 ? "border-[rgba(125,211,252,0.22)] bg-[rgba(125,211,252,0.04)]" : ""}`}>
              {i === 0 && (
                <span className="mb-3 inline-block text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                  Öncelikli Sektör
                </span>
              )}
              <h3 className="text-base font-semibold text-white">{seg.title}</h3>
              <p className="mt-2.5 text-sm leading-6 text-slate-500">{seg.description}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <p className="mt-8 text-sm leading-7 text-slate-400 text-center">
          Norm, müşteriyle yoğun temas kuran ancak bu temasları standart bir iş akışına bağlamakta zorlanan işletmeler için tasarlanmıştır.
        </p>
      </Reveal>
    </SectionShell>
  );
}
