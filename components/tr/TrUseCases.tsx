import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const useCases = [
  {
    title: "CBAM / Karbon Veri Hazırlığı",
    description:
      "AB ihracatında CBAM kapsamındaki ürünler için enerji, üretim ve emisyon verilerini düzenli yapıya alın.",
  },
  {
    title: "AB Müşteri Veri Talepleri",
    description:
      "Müşteri bazında veri paketleri hazırlayın. Talep geldiğinde dosya aramak yerine sisteminizden gönderin.",
  },
  {
    title: "Üretim & Enerji Takibi",
    description:
      "Tesis ve hat bazında üretim miktarı, enerji tüketimi ve kaynak verilerini kayıt altına alın.",
  },
  {
    title: "Kalite & Doküman Süreçleri",
    description:
      "Ürün belgeleri, sertifikalar ve teknik dosyaları ürün bazında tek yapıya toplayın.",
  },
  {
    title: "İhracat Operasyon Yönetimi",
    description:
      "Ekipler arası veri sorumluluğunu netleştirin. Eksik veriyi erken görün, son dakika kaosunu önleyin.",
  },
];

export function TrUseCases() {
  return (
    <SectionShell id="kullanim">
      <Reveal>
        <SectionHeading
          eyebrow="Kullanım Alanları"
          title="Nerede kullanılır?"
        />
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {useCases.map((item, index) => (
          <Reveal key={item.title} delay={index * 70}>
            <SurfaceCard className="h-full hover:-translate-y-1 hover:border-[rgba(125,211,252,0.28)]">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-400">{item.description}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
