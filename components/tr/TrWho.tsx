import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const targets = [
  {
    title: "Klinikler",
    description: "Hasta taleplerini, randevuları ve takip süreçlerini sisteme taşırız.",
  },
  {
    title: "Güzellik Merkezleri",
    description:
      "Randevu yönetimi, danışan takibi ve tekrar görüşme hatırlatmalarını sisteme bağlarız.",
  },
  {
    title: "Diş Klinikleri",
    description:
      "Hasta kabulünden tedavi takibine kadar tüm süreci tek panelde görünür hale getiririz.",
  },
  {
    title: "Emlak Ofisleri",
    description:
      "Öncelikli müşteri taleplerini, portföy ilgisini ve geri arama sürecini tek panelde takip edilebilir hale getiririz.",
  },
  {
    title: "Danışmanlık Firmaları",
    description: "Teklif, proje ve müşteri iletişimini düzenli bir sisteme taşırız.",
  },
  {
    title: "Hizmet İşletmeleri",
    description:
      "Gelen talepleri takip edilebilir hale getirir, kaçan fırsatları azaltır ve operasyonu düzenleriz.",
  },
];

export function TrWho() {
  return (
    <SectionShell>
      <Reveal>
        <SectionHeading
          eyebrow="Hedef Kitle"
          title="Bu sistemler kimler için?"
        />
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {targets.map((item, index) => (
          <Reveal key={item.title} delay={index * 70}>
            <SurfaceCard className="h-full hover:-translate-y-1 hover:border-[rgba(125,211,252,0.28)]">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
