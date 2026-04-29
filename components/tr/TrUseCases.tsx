import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const systems = [
  {
    title: "Müşteri Talep Merkezi",
    description: "Farklı kanallardan gelen müşteri taleplerini tek yerde toplar.",
    sonuc: "Kim yazdı, ne istedi, kim ilgilenecek ve sonraki adım ne; görünür hale gelir.",
  },
  {
    title: "Mini CRM",
    description:
      "Müşteri bilgileri, görüşmeler, notlar, durumlar ve takip görevleri için sade bir müşteri yönetim sistemi kurar.",
    sonuc: "Müşteri ilişkileri kişilerin hafızasında değil, düzenli ve erişilebilir bir sistemde tutulur.",
  },
  {
    title: "Satış Pipeline Sistemi",
    description:
      "Yeni talep → görüşüldü → teklif gönderildi → takip bekliyor → kazanıldı / kaybedildi aşamalarını görünür hale getirir.",
    sonuc:
      "Hangi fırsatın nerede olduğu, kimin takip beklediği ve hangi teklifin kapanmaya yakın olduğu netleşir.",
  },
  {
    title: "Operasyon Dashboard'u",
    description:
      "Yönetimin günlük işi, bekleyen süreçleri, ekip durumunu ve performans göstergelerini tek panelden görmesini sağlar.",
    sonuc: "Yönetim işi sonradan değil, anlık olarak görebilir.",
  },
  {
    title: "AI Destekli Otomasyonlar",
    description:
      "Tekrarlayan işleri özetleme, sınıflandırma, görev çıkarma, hatırlatma ve veri düzenleme gibi akışlarla destekler.",
    sonuc: "Ekip daha az manuel tekrar yapar, daha çok gerçek işe odaklanır.",
  },
  {
    title: "Müşteri Portalı",
    description:
      "Müşterilerin proje, belge, süreç veya hizmet durumunu takip edebileceği sade bir alan oluşturur.",
    sonuc: "Müşteri daha az soru sorar, ekip daha az manuel bilgilendirme yapmak zorunda kalır.",
  },
  {
    title: "ERP Yanı Sistem Katmanı",
    description:
      "ERP'nin yerine geçmeden; ERP, Excel, e-posta ve manuel takip arasında eksik kalan görünürlük katmanını tamamlar.",
    sonuc: "ERP'de duran veri iş akışına bağlanır; ekip ve yönetim süreci daha net takip eder.",
  },
  {
    title: "Sektörel Veri Odaları",
    description:
      "Üretim, ihracat, CBAM/AB raporlama veya özel operasyon süreçleri için düzenli veri alanları kurar.",
    sonuc: "Dağınık sektörel veriler daha hazır, erişilebilir ve raporlanabilir hale gelir.",
  },
];

export function TrSystems() {
  return (
    <SectionShell id="sistemler">
      <Reveal>
        <SectionHeading
          eyebrow="Sistem kategorileri"
          title="İşletmenizin ihtiyaç duyabileceği sistemler"
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {systems.map((sys, i) => (
          <Reveal key={sys.title} delay={i * 45}>
            <SurfaceCard className="h-full flex flex-col hover:-translate-y-1">
              <h3 className="text-sm font-semibold leading-6 text-white">{sys.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">{sys.description}</p>
              <div className="mt-4 border-t border-white/6 pt-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
                  Sonuç
                </p>
                <p className="mt-1.5 text-xs leading-5 text-slate-400">{sys.sonuc}</p>
              </div>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
