import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const segments = [
  {
    title: "Randevu talebi alan hizmet işletmeleri",
    description: "WhatsApp, Instagram, telefon veya formdan gelen randevu talepleri takipten düşmeden ilerlesin.",
  },
  {
    title: "Teklif / fiyat talebi alan firmalar",
    description: "Fiyat soran müşterilerin kimde beklediği, kime dönüş yapılacağı ve hangi fırsatın sıcak olduğu görünür olsun.",
  },
  {
    title: "Bilgi talebi toplayan işletmeler",
    description: "Detay isteyen müşteriler konuşma kutusunda kalmasın; takip zamanı ve sonraki adım netleşsin.",
  },
  {
    title: "Telefonla yoğun talep alan işletmeler",
    description: "Arayan müşterilerin ne istediği, kime dönüş yapılacağı ve hangi aşamada kaldığı takip edilsin.",
  },
  {
    title: "Ekipli takip yapan KOBİ’ler",
    description: "Müşteri dönüşleri ekip hafızasına kalmasın; günlük takip listesi herkes için görünür olsun.",
  },
  {
    title: "Çok kanallı müşteri akışı olan işletmeler",
    description: "Instagram, WhatsApp, telefon ve form talepleri tek düzende toplansın; kaçan fırsat riski azalsın.",
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
                  Uygun Profil
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
