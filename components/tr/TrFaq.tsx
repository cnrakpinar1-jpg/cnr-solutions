import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

const whatsappUrl =
  "https://wa.me/905331970462?text=Merhaba%2C%20CNR%20Solutions%20sitesinden%20geliyorum.%20%C4%B0%C5%9Fletmem%20i%C3%A7in%20bir%20sistem%20konu%C5%9Fmak%20istiyorum.";

const faqs = [
  {
    question: "Bu sistem hazır paket mi, işletmeye özel mi kuruluyor?",
    answer:
      "Önce işletmenin müşteri ve operasyon akışını anlarız. Sonra hazır modülleri işletmenin ihtiyacına göre uyarlayarak sade, kullanılabilir ve satış odaklı bir sistem kurarız.",
  },
  {
    question: "Küçük işletmeler için uygun mu?",
    answer:
      "Evet. Özellikle WhatsApp, Instagram DM, telefon ve formlar üzerinden müşteri talebi alan küçük ve orta ölçekli işletmeler için uygundur.",
  },
  {
    question: "İlk görüşmede ne konuşuyoruz?",
    answer:
      "Müşterilerinizin nereden geldiğini, nerede kaybolduğunu, hangi sürecin manuel ilerlediğini ve hangi sistemin en hızlı fayda sağlayacağını konuşuruz.",
  },
  {
    question: "Yapay zekâ burada tam olarak ne işe yarıyor?",
    answer:
      "Yapay zekâyı vitrin süsü olarak değil; talep özetleme, sınıflandırma, cevap önerisi, takip akışını hızlandırma ve operasyonu daha görünür hale getirme gibi pratik işlerde kullanırız.",
  },
  {
    question: "Bu bir web sitesi hizmeti mi?",
    answer:
      "Hayır. Web sitesi yapılabilir ama ana odak bu değildir. CNR Solutions; müşteri takibi, randevu akışı, mini CRM, dashboard, müşteri portalı ve otomasyon gibi işletmenin günlük işleyişinde kullanılan sistemler kurar.",
  },
  {
    question: "Sistemi kullanmak zor olur mu?",
    answer:
      "Amaç karmaşık yazılım yapmak değil. İşletme sahibinin ve ekibin gerçekten kullanabileceği sade, anlaşılır ve hızlı bir yapı kurarız.",
  },
  {
    question: "Hangi sektörler için uygun?",
    answer:
      "Klinikler, güzellik merkezleri, diş klinikleri, emlak ofisleri, danışmanlık firmaları, hizmet işletmeleri ve müşteri talebi alan KOBİ’ler için uygundur.",
  },
  {
    question: "Başlamak için ne yapmam gerekiyor?",
    answer:
      "WhatsApp’tan yazmanız yeterli. Önce işletmenizin mevcut müşteri ve operasyon akışını kısaca anlarız, sonra size uygun sistem fikrini birlikte netleştiririz.",
  },
];

export function TrFaq() {
  return (
    <SectionShell>
      <Reveal>
        <SectionHeading
          eyebrow="FAQ"
          title="Sık sorulan sorular"
          description="İlk kez yapay zekâ destekli iş sistemi kuracak işletmeler için net cevaplar."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {faqs.map((item, index) => (
          <Reveal key={item.question} delay={index * 45}>
            <article className="h-full rounded-[22px] border border-white/8 bg-white/[0.025] p-5 transition-all hover:-translate-y-0.5 hover:border-[rgba(125,211,252,0.26)] sm:p-6">
              <h3 className="text-base font-semibold leading-6 text-white">
                {item.question}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.answer}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={260}>
        <div className="mt-10 flex flex-col gap-5 rounded-[28px] border border-white/8 bg-white/[0.025] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <p className="max-w-2xl text-lg font-medium leading-7 text-white">
            Aklınızdaki sistemi birlikte netleştirelim.
          </p>
          <Button
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full shrink-0 sm:w-auto"
          >
            WhatsApp’tan Yaz
          </Button>
        </div>
      </Reveal>
    </SectionShell>
  );
}
