import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { Tag } from "@/components/ui/Tag";

const projectItems = [
  {
    title: "Müşteri Talebi Mini CRM",
    category: "Müşteri Talebi / Satış Takibi",
    description:
      "Gelen müşteri taleplerini yakalamak, sınıflandırmak ve takip sürecine almak için sade bir müşteri talebi takip sistemi. Özellikle WhatsApp, form ve sosyal medya üzerinden talep alan küçük işletmeler için uygundur.",
    bestFor: "Emlak ofisleri, hizmet işletmeleri, küçük satış ekipleri.",
    githubUrl: "https://github.com/cnrakpinar1-jpg/lead-tracker-mini-crm",
    demoUrl: "https://cnrakpinar1-jpg.github.io/lead-tracker-mini-crm/",
  },
  {
    title: "Müşteri Giriş Sistemi",
    category: "Müşteri Giriş Akışı",
    description:
      "Yeni müşteri taleplerini düzenli şekilde almak, ilk bilgileri toplamak ve süreci standart hale getirmek için geliştirilmiş giriş sistemi. Dağınık mesaj trafiğini daha kontrollü bir akışa çevirir.",
    bestFor: "Klinikler, danışmanlık firmaları, hizmet işletmeleri.",
    githubUrl: "https://github.com/cnrakpinar1-jpg/client-intake-system",
    demoUrl: "https://cnrakpinar1-jpg.github.io/client-intake-system/",
  },
  {
    title: "CNR Mini Müşteri Takip Sistemi",
    category: "Müşteri Takip Sistemi",
    description:
      "Potansiyel müşterileri, görüşme notlarını, durumları ve takip aşamalarını tek panelde yönetmek için hazırlanmış müşteri takip sistemi. İşletme sahibine müşteri süreci üzerinde net görünürlük sağlar.",
    bestFor: "KOBİ’ler, satış ekipleri, operasyon yöneten işletmeler.",
    githubUrl: "https://github.com/cnrakpinar1-jpg/cnr-mini-crm",
    demoUrl: "https://cnrakpinar1-jpg.github.io/cnr-mini-crm/",
  },
  {
    title: "CNR Randevu Sistemi",
    category: "Randevu Yönetim Paneli",
    description:
      "Randevulu çalışan işletmeler için müşteri randevularını, durumları ve takip sürecini yönetmeye yarayan panel. Manuel randevu karmaşasını daha düzenli bir yapıya taşır.",
    bestFor: "Klinikler, güzellik merkezleri, danışmanlık firmaları.",
    githubUrl: "https://github.com/cnrakpinar1-jpg/cnr-booking-system",
    demoUrl: "https://cnrakpinar1-jpg.github.io/cnr-booking-system/",
  },
  {
    title: "CNR Yönetim Paneli",
    category: "Yönetim Paneli",
    description:
      "İşletmenin temel göstergelerini, müşteri durumlarını ve operasyon performansını tek panelde izlemeye yarayan yönetim ekranı. Karar almayı kolaylaştıran sade ve okunabilir bir görünüm sunar.",
    bestFor: "Operasyonunu ölçmek isteyen işletmeler.",
    githubUrl: "https://github.com/cnrakpinar1-jpg/cnr-analytics-dashboard",
    demoUrl: "https://cnrakpinar1-jpg.github.io/cnr-analytics-dashboard/",
  },
  {
    title: "CNR Müşteri Portalı",
    category: "Müşteri Portalı / Müşteri Deneyimi",
    description:
      "Müşterinin kendi proje, talep, doküman veya süreç durumunu takip edebildiği profesyonel müşteri portalı. Hizmet sağlayıcılar için daha güven veren ve düzenli bir müşteri deneyimi oluşturur.",
    bestFor: "Ajanslar, danışmanlık firmaları, hizmet sağlayıcılar.",
    githubUrl: "https://github.com/cnrakpinar1-jpg/cnr-client-portal",
    demoUrl: "https://cnrakpinar1-jpg.github.io/cnr-client-portal/",
  },
];

export function TrProjects() {
  return (
    <SectionShell id="projects">
      <Reveal>
        <SectionHeading
          eyebrow="Demo Sistemler"
          title="Geliştirdiğimiz sistem örnekleri"
          description="Aşağıdaki çalışmalar; müşteri takibi, randevu, operasyon görünürlüğü ve müşteri deneyimi gibi gerçek işletme problemleri için hazırlanmış demo sistemler ve çözüm prototipleridir."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projectItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 70}>
            <article className="surface group flex h-full flex-col rounded-[28px] p-6 transition-all hover:-translate-y-1 hover:border-[rgba(125,211,252,0.32)] hover:shadow-[0_28px_90px_rgba(2,6,23,0.5)] sm:p-7">
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                {item.title}
              </h3>
              <div className="mt-4">
                <Tag>{item.category}</Tag>
              </div>
              <p className="mt-5 text-base leading-7 text-slate-300">{item.description}</p>

              <div className="mt-6 rounded-2xl border border-white/8 bg-white/[0.025] px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Kimler için uygun?
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.bestFor}</p>
              </div>

              <div className="mt-auto pt-6">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    href={item.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1"
                  >
                    Demoyu İncele
                  </Button>
                  <Button
                    href={item.githubUrl}
                    variant="secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1"
                  >
                    GitHub&apos;da Gör
                  </Button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
