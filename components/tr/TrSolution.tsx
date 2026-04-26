import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const solutions = [
  {
    title: "Lead Toplama Sistemi",
    description:
      "WhatsApp, Instagram DM, form ve telefon gibi farklı kanallardan gelen talepleri tek bir akışa toplarız. Kaçan lead’leri azaltır, takip sürecini görünür hale getiririz.",
  },
  {
    title: "Mini CRM",
    description:
      "Müşterileri durumlarına göre takip edin. Kim nerede, hangi aşamada, ne zaman takip edilmesi gerekiyor — hepsi bir panelde.",
  },
  {
    title: "Randevu / Admin Panel",
    description:
      "Randevu taleplerini, onayları ve iptal süreçlerini yönetin. Manuel koordinasyon yerine sistemin yönettiği bir akış.",
  },
  {
    title: "Müşteri Portalı",
    description:
      "Müşterilerinize teklif, dosya, güncelleme ve iletişim için tek bir temiz panel. E-posta karmaşasından kurtulun.",
  },
  {
    title: "Yönetim Dashboard’u",
    description:
      "İşletmenizin tüm operasyonunu tek ekrandan görün. Lead’ler, randevular, satışlar ve ekip durumu net bir yönetim ekranında toplansın.",
  },
  {
    title: "AI Destekli Asistan ve Otomasyon",
    description:
      "Gelen talepleri özetleyin, sınıflandırın ve cevap önerileri alın. Yapay zekâyı vitrin süsü değil, iş akışı aracı olarak kullanın.",
  },
];

export function TrSolution() {
  return (
    <SectionShell id="cozumler">
      <Reveal>
        <SectionHeading
          eyebrow="Çözümlerimiz"
          title="İşletmeniz için kullanılabilir sistemler kuruyoruz."
          description="Amaç karmaşık yazılım yapmak değil. Amaç işletmenin gerçekten kullanacağı sade, hızlı ve satış odaklı bir altyapı kurmak."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {solutions.map((item, index) => (
          <Reveal key={item.title} delay={index * 70}>
            <SurfaceCard className="h-full hover:-translate-y-1 hover:border-[rgba(125,211,252,0.28)]">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-base leading-7">{item.description}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
