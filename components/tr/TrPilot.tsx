import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

type SectorCase = {
  label: string;
  title: string;
  problem: string;
  systemPoints: string[];
  outcome: string;
  cta: string;
  ctaMessage: string;
};

function whatsappLink(message: string) {
  return `https://wa.me/905331970462?text=${encodeURIComponent(message)}`;
}

const sectorCases: SectorCase[] = [
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
      "Daha düzenli hasta takibi, daha hızlı dönüş ve daha profesyonel danışma süreci.",
    cta: "Benzer sistemi konuşalım",
    ctaMessage:
      "Merhaba, diş kliniği için hasta talebi ve ön görüşme sistemi hakkında konuşmak istiyorum.",
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
      "Dashboard ile günlük / haftalık takip görünümü",
    ],
    outcome:
      "Daha düzenli randevu yönetimi, daha iyi takip ve daha az unutulan danışan.",
    cta: "Güzellik merkezi için demo iste",
    ctaMessage:
      "Merhaba, güzellik merkezi için danışan, paket ve randevu akışı demosu hakkında konuşmak istiyorum.",
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
      "Daha görünür hasta akışı, daha net takip ve daha kontrollü operasyon.",
    cta: "Klinik sistemini planlayalım",
    ctaMessage:
      "Merhaba, klinik için hasta başvuru ve takip paneli planlamak istiyorum.",
  },
  {
    label: "Sektör Değerlendirmesi",
    title: "Emlak ofisleri için ilan lead’i ve müşteri takip sistemi",
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
      "Daha az kaçan lead, daha düzenli müşteri takibi ve daha profesyonel portföy yönetimi.",
    cta: "Emlak ofisi için sistem konuşalım",
    ctaMessage:
      "Merhaba, emlak ofisi için ilan lead’i ve müşteri takip sistemi hakkında konuşmak istiyorum.",
  },
];

export function TrPilot() {
  return (
    <SectionShell id="case-studies">
      <Reveal>
        <SectionHeading
          eyebrow="YAPTIKLARIMIZ"
          title="Yaptıklarımız ve örnek sektör değerlendirmeleri"
          description="Gerçek işletme problemlerini anlamak için farklı sektörlerde demo sistemler, çözüm prototipleri ve örnek vaka analizleri geliştiriyoruz. Aşağıdaki çalışmalar, pilot ve demo mantığında hazırlanmış sektör odaklı sistem taslaklarıdır."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {sectorCases.map((item, index) => (
          <Reveal key={item.title} delay={index * 80}>
            <article className="surface-strong group relative flex h-full min-h-[34rem] flex-col overflow-hidden rounded-[28px] p-6 transition-all hover:-translate-y-1 hover:border-[rgba(125,211,252,0.34)] hover:shadow-[0_28px_90px_rgba(2,6,23,0.55)] sm:p-8">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(125,211,252,0.55)] to-transparent opacity-70"
              />
              <div
                aria-hidden="true"
                className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-2xl border border-white/8 bg-white/[0.03] text-xs font-semibold text-slate-500"
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="flex flex-wrap items-center gap-3 pr-14">
                <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(125,211,252,0.22)] bg-[rgba(125,211,252,0.08)] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"
                  />
                  {item.label}
                </span>
              </div>

              <h3 className="mt-5 max-w-xl text-xl font-semibold leading-snug text-white sm:text-2xl">
                {item.title}
              </h3>

              <div className="mt-7 grid gap-5">
                <section className="rounded-2xl border border-white/8 bg-white/[0.025] p-4">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Problem
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.problem}
                  </p>
                </section>

                <section className="rounded-2xl border border-white/8 bg-white/[0.025] p-4">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Önerilen sistem
                  </h4>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {item.systemPoints.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm leading-6 text-slate-300"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-accent)] opacity-80"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-2xl border border-[rgba(125,211,252,0.16)] bg-[rgba(125,211,252,0.055)] p-4">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                    Beklenen etki
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-200">
                    {item.outcome}
                  </p>
                </section>
              </div>

              <div className="mt-auto pt-7">
                <Button
                  href={whatsappLink(item.ctaMessage)}
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
        <div className="mt-10 overflow-hidden rounded-[28px] border border-[rgba(125,211,252,0.2)] bg-[linear-gradient(135deg,rgba(125,211,252,0.12),rgba(12,18,34,0.78)_42%,rgba(7,10,22,0.92))] p-6 shadow-[0_24px_80px_rgba(2,6,23,0.42)] sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                Türkiye’deki KOBİ’leri ve işletmeleri yapay zekâ çağına taşıyoruz.
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                İşletmenize özel benzer bir değerlendirme hazırlayalım.
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-300">
                Sektörünüzü, müşteri akışınızı ve takip sürecinizi analiz edip size uygun
                sistem taslağını çıkarabiliriz.
              </p>
            </div>

            <Button
              href={whatsappLink(
                "Merhaba, işletmem için sektör odaklı bir sistem taslağı hazırlatmak istiyorum.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full shrink-0 sm:w-auto"
            >
              WhatsApp’tan Yaz
            </Button>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
