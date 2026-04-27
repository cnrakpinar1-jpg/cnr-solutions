import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const useCases = [
  {
    title: "Müşteri veri talepleri",
    description: "Talep geldiğinde dosya aramak yerine sistemden ilerleyin.",
  },
  {
    title: "İhracat operasyon yönetimi",
    description: "Ürün, müşteri ve ekip takibini tek akışta yönetin.",
  },
  {
    title: "Üretim ve enerji takibi",
    description: "Üretim ve enerji verisini aynı yapıda toplayın.",
  },
  {
    title: "İç dokümantasyon yönetimi",
    description: "Belgeler ekiplerin ulaşabileceği düzende dursun.",
  },
  {
    title: "Uyum ve raporlama süreçleri",
    description: "CBAM bu süreçlerden sadece biridir.",
  },
];

export function TrUseCases() {
  return (
    <SectionShell id="kullanim">
      <Reveal>
        <SectionHeading
          eyebrow="Kullanım alanları"
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
