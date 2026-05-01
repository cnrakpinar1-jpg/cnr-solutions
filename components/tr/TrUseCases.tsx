import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { TrScoreCta } from "@/components/tr/TrScoreCta";

const features = [
  {
    badge: "Norm Inbox",
    subtitle: "Tüm müşteri görüşmeleri tek düzende",
    body: "WhatsApp, Instagram, telefon notları, web formları ve reklam kaynaklı görüşmeler tek merkezde izlenir.",
  },
  {
    badge: "Norm Pipeline",
    subtitle: "Görüşmeden satışa standart süreç",
    body: "Her müşteri görüşmesi yeni, görüşüldü, randevu verildi, teklif gönderildi, satışa döndü veya kaybedildi gibi aşamalarda takip edilir.",
  },
  {
    badge: "Norm Tasks",
    subtitle: "Takip kişisel hafızaya bırakılmaz",
    body: "Kimin, kimi, ne zaman ve hangi nedenle arayacağı netleşir. Ekip takibi rastgele değil, sistemli ilerler.",
  },
  {
    badge: "Norm Reports",
    subtitle: "İşletme sahibi tabloyu görür",
    body: "Gelen görüşmeler, takip edilen fırsatlar, randevular, teklifler, satışa dönenler ve kayıp noktaları görünür hale gelir.",
  },
  {
    badge: "Norm Automations",
    subtitle: "Tekrarlayan takip işleri sadeleşir",
    body: "Formlar, hatırlatmalar, bildirimler ve takip akışları işletmenin çalışma düzenine göre yapılandırılır.",
  },
  {
    badge: "Sector Norm",
    subtitle: "Sektöre göre norm kurulur",
    body: "Klinik, güzellik merkezi, oto servis, kurs, danışmanlık, mobilya/dekorasyon ve benzeri işletmeler için müşteri akışı özelleştirilir.",
  },
];

export function TrNormProduct() {
  return (
    <SectionShell id="cnr-norm">
      <Reveal>
        <SectionHeading
          eyebrow="Ana Ürün"
          title="CNR Norm: İşletmenizin müşteri akışı standardı"
        />
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
          CNR Norm, işletmenize gelen müşteri görüşmelerini tek düzene alan, ekibin takip disiplinini netleştiren ve görüşmeden satışa kadar olan süreci görünür hale getiren pratik bir iş sistemidir.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feat, i) => (
          <Reveal key={feat.badge} delay={i * 55}>
            <SurfaceCard className="surface-strong h-full flex flex-col hover:-translate-y-1">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                {feat.badge}
              </p>
              <h3 className="mt-2 text-base font-semibold leading-6 text-white">{feat.subtitle}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">{feat.body}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={360}>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-slate-400">
          Bu temel modüller CNR Norm’un müşteri akışı standardını kurar. CNR Norm IQ ise bu standardın üzerine eklenen zekâ katmanı olarak, gelen taleplerin sıcaklığını, niyetini ve takip önceliğini daha görünür hale getirir.
        </p>
        <TrScoreCta />
      </Reveal>
    </SectionShell>
  );
}
