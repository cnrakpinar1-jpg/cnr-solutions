import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

type CaseStudy = {
  label: string;
  title: string;
  problem: string;
  systemPoints: string[];
  outcome: string;
  cta: string;
  ctaWhatsAppMessage: string;
};

const cases: CaseStudy[] = [
  {
    label: "Demo Vaka Analizi",
    title: "Diş kliniği için hasta talebi ve ön görüşme sistemi",
    problem:
      "Diş kliniklerinde implant, estetik diş hekimliği, ortodonti veya muayene talepleri çoğu zaman WhatsApp, Instagram DM ve telefon arasında dağılır. Hasta bilgisi eksik alınır, kimle ne konuşulduğu unutulur ve dönüş süresi uzar.",
    systemPoints: [
      "Tedavi talep formu",
      "Hasta ön bilgi toplama akışı",
      "Mini CRM ile hasta durum takibi",
      "Randevu / görüşme paneli",
      "Takip notları",
      "AI destekli talep özeti ve cevap önerisi",
    ],
    outcome:
      "Daha düzenli hasta takibi, daha hızlı dönüş, daha profesyonel danışma süreci.",
    cta: "Benzer sistemi konuşalım",
    ctaWhatsAppMessage:
      "Merhaba, diş kliniği için hasta takip sistemi hakkında konuşmak istiyorum.",
  },
  {
    label: "Demo Sistem Taslağı",
    title: "Güzellik merkezi için danışan, paket ve randevu akışı",
    problem:
      "Güzellik merkezlerinde danışan talepleri, paket görüşmeleri, seanslar ve tekrar randevular manuel takip edildiğinde satış fırsatları ve tekrar müşteri ihtimali kaybolur.",
    systemPoints: [
      "Danışan talep formu",
      "Paket / hizmet ilgisi seçimi",
      "Randevu takip paneli",
      "Tekrar görüşme hatırlatmaları",
      "Danışan durum kartları",
      "Dashboard ile günlük/haftalık takip görünümü",
    ],
    outcome:
      "Daha düzenli randevu yönetimi, daha iyi takip, daha az unutulan danışan.",
    cta: "Güzellik merkezi için demo iste",
    ctaWhatsAppMessage:
      "Merhaba, güzellik merkezi için randevu ve paket takip sistemi demosu istiyorum.",
  },
  {
    label: "Pilot Çalışma Senaryosu",
    title: "Klinikler için hasta başvuru ve takip paneli",
    problem:
      "Kliniklerde hasta talepleri farklı kanallardan gelir. Sekreterya veya işletme sahibi yoğun olduğunda bazı talepler geç cevaplanır veya tamamen kaybolur.",
    systemPoints: [
      "Hasta talep toplama ekranı",
      "Talep kategorilendirme",
      "Durum takibi: yeni, arandı, randevu verildi, bekliyor, tamamlandı",
      "İç notlar",
      "Randevu akışı",
      "AI ile talep özeti",
    ],
    outcome:
      "Daha görünür hasta akışı, daha net takip, daha kontrollü operasyon.",
    cta: "Klinik sistemini planlayalım",
    ctaWhatsAppMessage:
      "Merhaba, klinik için hasta başvuru ve takip paneli hakkında konuşmak istiyorum.",
  },
  {
    label: "Sektör Değerlendirmesi",
    title: "Emlak ofisleri için ilan lead'i ve müşteri takip sistemi",
    problem:
      "Emlak ofislerinde Sahibinden, Instagram, WhatsApp ve telefon üzerinden gelen potansiyel alıcı/kiracı talepleri dağınık kalır. Hangi müşteri hangi portföyle ilgilendi, kim geri aranacak, kim sıcak lead belli olmaz.",
    systemPoints: [
      "İlan lead takip ekranı",
      "Müşteri ilgi alanı kaydı",
      "Portföy eşleştirme notları",
      "Takip durumu: yeni, arandı, gezdirildi, teklif verdi, kaybedildi",
      "Hatırlatma / follow-up listesi",
      "Dashboard ile sıcak lead görünümü",
    ],
    outcome:
      "Daha az kaçan lead, daha düzenli müşteri takibi, daha profesyonel portföy yönetimi.",
    cta: "Emlak ofisi için sistem konuşalım",
    ctaWhatsAppMessage:
      "Merhaba, emlak ofisi için lead takip sistemi hakkında konuşmak istiyorum.",
  },
];

function whatsappLink(message: string) {
  return `https://wa.me/905331970462?text=${encodeURIComponent(message)}`;
}

export function TrCaseStudies() {
  return (
    <SectionShell id="vaka-analizleri">
      <Reveal>
        <SectionHeading
          eyebrow="Yaptıklarımız"
          title="Yaptıklarımız ve örnek sektör değerlendirmeleri"
          description="Gerçek işletme problemlerini anlamak için farklı sektörlerde demo sistemler, çözüm prototipleri ve örnek vaka analizleri geliştiriyoruz. Aşağıdaki çalışmalar, pilot ve demo mantığında hazırlanmış sektör odaklı sistem taslaklarıdır."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {cases.map((item, index) => (
          <Reveal key={item.title} delay={index * 80}>
            <article className="surface-strong group flex h-full flex-col rounded-[28px] p-7 transition-all hover:-translate-y-1 hover:border-[rgba(125,211,252,0.32)] sm:p-8">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-[var(--color-accent)]"
                />
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  {item.label}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-semibold leading-snug text-white sm:text-[1.4rem]">
                {item.title}
              </h3>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Problem
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.problem}
                  </p>
                </div>

                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Önerilen Sistem
                  </p>
                  <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                    {item.systemPoints.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm leading-6 text-slate-300"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--color-accent)]"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-3">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Beklenen Sonuç
                  </p>
                  <p className="mt-1.5 text-sm leading-6 text-slate-200">
                    {item.outcome}
                  </p>
                </div>
              </div>

              <div className="mt-7 pt-2">
                <Button
                  href={whatsappLink(item.ctaWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  {item.cta}
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="mt-10 flex flex-col items-start gap-5 rounded-3xl border border-white/8 bg-[rgba(12,18,34,0.5)] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <p className="text-base font-medium text-white sm:text-lg">
            İşletmenize özel benzer bir değerlendirme hazırlayalım.
          </p>
          <Button
            href={whatsappLink(
              "Merhaba, işletmem için özel sektör değerlendirmesi konuşmak istiyorum.",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp&apos;tan Yaz
          </Button>
        </div>
      </Reveal>
    </SectionShell>
  );
}
