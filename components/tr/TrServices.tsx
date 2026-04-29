import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { Tag } from "@/components/ui/Tag";

const services = [
  {
    title: "Müşteri Akışı Analizi",
    body: "İşletmenizde müşteri görüşmelerinin nerede başladığını, nerede dağıldığını ve hangi aşamalarda takip boşluğu oluştuğunu çıkarırız.",
  },
  {
    title: "Pipeline ve Operasyon Ekranları",
    body: "Randevu, teklif, satış ve takip süreçlerini ekibin kullanabileceği sade ekranlara dönüştürürüz.",
  },
  {
    title: "WhatsApp / Instagram / Form Akışları",
    body: "Farklı kanallardan gelen müşteri görüşmelerini CNR Norm düzenine bağlarız.",
  },
  {
    title: "Takip ve Hatırlatma Sistemleri",
    body: "Ekibin geri dönüşleri kaçırmaması için görev, bildirim ve hatırlatma akışları kurarız.",
  },
  {
    title: "Dashboard ve Raporlama",
    body: "İşletme sahibinin gelen görüşmeleri, takip edilen fırsatları ve satışa dönen süreçleri görebileceği raporlar hazırlarız.",
  },
  {
    title: "Entegrasyonlar",
    body: "Mevcut takvim, form, tablo, CRM, reklam ve operasyon araçlarını müşteri akışıyla uyumlu hale getiririz.",
  },
  {
    title: "Sektörel Uyarlamalar",
    body: "Klinik, güzellik merkezi, oto servis, kurs, danışmanlık ve teklifli iş yapan firmalar için CNR Norm'u sektöre göre yapılandırırız.",
  },
  {
    title: "Özel İş Sistemleri",
    body: "CNR Norm'un dışında kalan daha büyük operasyon, veri odası, raporlama ve iş akışı ihtiyaçları için özel sistemler geliştiririz.",
  },
];

export function TrServices() {
  return (
    <SectionShell id="hizmetler">
      <Reveal>
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Tag>Destekleyici Hizmetler</Tag>
        </div>
        <div className="mt-4">
          <SectionHeading title="CNR Norm'u güçlendiren hizmetlerimiz" />
        </div>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
          CNR Norm ana ürünümüzdür. Diğer hizmetlerimiz, işletmenizde müşteri akışını daha doğru kurmak, ölçmek, genişletmek ve sürdürülebilir hale getirmek için CNR Norm etrafında konumlanır.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((svc, i) => (
          <Reveal key={svc.title} delay={i * 35}>
            <div className="h-full rounded-xl border border-white/6 bg-white/[0.025] px-4 py-3.5 transition-colors hover:border-[rgba(125,211,252,0.18)]">
              <p className="text-sm font-semibold text-white">{svc.title}</p>
              <p className="mt-1.5 text-xs leading-5 text-slate-500">{svc.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={180}>
        <p className="mt-8 text-sm text-slate-400 text-center">
          Bu hizmetlerin amacı ayrı ayrı yazılım satmak değil; CNR Norm&rsquo;un işletmenizde gerçek bir müşteri akışı standardına dönüşmesini sağlamaktır.
        </p>
        <div className="mt-6 flex justify-center">
          <Button href="#iletisim" variant="secondary">
            CNR Norm’un İşletmenize Nasıl Kurulacağını Çıkaralım
          </Button>
        </div>
      </Reveal>
    </SectionShell>
  );
}
