import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const solutions = [
  {
    title: "Müşteri Talebi Toplama Sistemi",
    description:
      "WhatsApp, web formu, sosyal medya ve telefon üzerinden gelen müşteri taleplerini tek yerde toplarız. Kaçan talepleri azaltır, takip sürecini görünür hale getiririz.",
  },
  {
    title: "Mini CRM / Müşteri Takip Sistemi",
    description:
      "Müşterileri durumlarına göre takip edilebilir hale getiririz. Kim nerede, hangi aşamada, ne zaman takip edilmeli; hepsi tek panelde görünür olur.",
  },
  {
    title: "Randevu Yönetim Paneli",
    description:
      "Randevu taleplerini, onayları ve iptal süreçlerini düzenli bir akışa taşırız. Manuel koordinasyon yerine sistemli bir takip yapısı kurarız.",
  },
  {
    title: "Müşteri Portalı",
    description:
      "Müşterilerinize teklif, dosya, güncelleme ve iletişim için tek bir temiz panel sunarız. E-posta ve mesaj karmaşasını azaltırız.",
  },
  {
    title: "Yönetim Paneli",
    description:
      "İşletmenizin tüm operasyonunu tek ekrandan görünür hale getiririz. Müşteri talepleri, randevular, satışlar ve ekip durumu net bir yönetim ekranında toplanır.",
  },
  {
    title: "Yapay Zekâ Destekli Takip Akışları",
    description:
      "Gelen talepleri özetleyen, sınıflandıran ve cevap önerileri üreten yapay zekâ destekli akışlar kurarız. Yapay zekâyı vitrin süsü değil, iş akışı aracı olarak kullanırız.",
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
