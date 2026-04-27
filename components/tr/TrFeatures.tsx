import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const features = [
  {
    title: "Veri Odası",
    description:
      "Ürün, müşteri ve belge verilerini tek yapılandırılmış ortamda toplayın. Dağınık Excel ve klasörler yerine tek kaynak.",
  },
  {
    title: "Eksik Veri Alarmı",
    description:
      "Hangi ürün veya kayıt için hangi veri eksik net görünür. Son dakikaya bırakmadan önceden haberdar olun.",
  },
  {
    title: "Müşteri Paketleri",
    description:
      "Müşteri bazında gönderilebilir, düzenli veri setleri hazırlayın. Talep geldiğinde hazır olun.",
  },
  {
    title: "Belge Toplama",
    description:
      "Fatura, enerji belgesi ve üretim kayıtlarını tek akışa alın. Belge takibini sistematik hale getirin.",
  },
  {
    title: "Dashboard",
    description:
      "Hazırlık durumunu, eksik kayıtları ve tamamlanan paketleri tek ekranda görün. Süreç kontrolü kaybetmezsiniz.",
  },
];

export function TrFeatures() {
  return (
    <SectionShell id="ozellikler">
      <Reveal>
        <SectionHeading
          eyebrow="Özellikler"
          title="Sistemin sunduğu yapı"
        />
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {features.map((item, index) => (
          <Reveal key={item.title} delay={index * 70}>
            <SurfaceCard className="h-full hover:-translate-y-1 hover:border-[rgba(125,211,252,0.28)]">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                0{index + 1}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-400">{item.description}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
