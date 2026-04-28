import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

const audiences = [
  {
    label: "Üretici profili",
    title: "AB'ye ihracat yapan üreticiler",
    description:
      "Alüminyum, çelik, kablo, makine ve endüstriyel parça üreticileri. CBAM kapsamında AB müşterilerine düzenli veri sağlamak zorunda olan firmalar.",
  },
  {
    label: "Ürün kapsamı",
    title: "CBAM kapsamındaki ürün gruplarıyla çalışan firmalar",
    description:
      "Ürün bazlı karbon verisi toplaması gereken, sera gazı emisyon bilgisini belgelemek durumunda olan işletmeler.",
  },
  {
    label: "ERP kullananlar",
    title: "Veri hazırlama süreci hâlâ Excel'de kalan ekipler",
    description:
      "ERP sistemleri mevcut olmasına rağmen CBAM ve AB müşteri raporlaması için ayrı bir akış gereken firmalar. ERP'nin üretemediği çıktılar için ek sistem arayanlar.",
  },
  {
    label: "Organizasyon yapısı",
    title: "Ekipler arası veri kopukluğu yaşayan işletmeler",
    description:
      "İhracat, kalite ve sürdürülebilirlik ekiplerinin farklı dosyalarda çalıştığı, aynı veriyi birden fazla kez toplamak durumunda kalan organizasyonlar.",
  },
];

export function TrUseCases() {
  return (
    <SectionShell id="kimler">
      <Reveal>
        <SectionHeading
          eyebrow="Hedef kitle"
          title="Kimler için?"
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {audiences.map((item, index) => (
          <Reveal key={item.title} delay={index * 70}>
            <div className="group h-full rounded-[22px] border border-white/10 bg-white/[0.03] p-7 shadow-[0_18px_54px_rgba(2,6,23,0.22)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(125,211,252,0.24)] hover:bg-[rgba(56,189,248,0.04)]">
              <span className="inline-block rounded-full border border-[rgba(125,211,252,0.2)] bg-[rgba(125,211,252,0.07)] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
                {item.label}
              </span>
              <h3 className="mt-4 text-lg font-semibold leading-7 text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
