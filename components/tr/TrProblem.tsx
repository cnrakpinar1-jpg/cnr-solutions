import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const problems = [
  {
    title: "Müşteri talepleri farklı kanallarda kalır",
    detail: "WhatsApp, telefon, Instagram, e-posta ve web formu arasında dağılan talepler takip edilemez, kaybolur.",
  },
  {
    title: "Takipler kişilerin hafızasına bağlıdır",
    detail: "Kim hangi müşteriyle görüştü, ne söylendi, sonraki adım ne; bunların tamamı çalışanın aklında.",
  },
  {
    title: "Satış süreci ölçülemez",
    detail: "Kaç teklif gönderildi, kaçı kapandı, nerede kayıp oldu; bu sorulara cevap bulmak saatler alır.",
  },
  {
    title: "Operasyon görünmez hale gelir",
    detail: "Yönetim işin anlık durumunu göremez; ekip aynı bilgiye aynı anda ulaşamaz.",
  },
  {
    title: "Yönetim kararları eksik veriye dayanır",
    detail: "Raporlar manuel hazırlanır, veriler güncel değildir ve kararlar tahmine dayanır.",
  },
  {
    title: "Ekipler aynı işi tekrar tekrar yapar",
    detail: "Aynı bilginin farklı yerlerde girilmesi, aynı hatırlatmaların tekrar yapılması ekibi yorar.",
  },
];

export function TrProblem() {
  return (
    <SectionShell id="sorun">
      <Reveal>
        <SectionHeading
          eyebrow="Asıl kayıp nerede?"
          title="Birçok işletme büyümeyi dışarıda arıyor. Asıl kayıp içeride olabilir."
          description="Daha fazla reklam, daha fazla müşteri veya daha fazla çalışan her zaman çözüm değildir. Eğer gelen talep içeride düzgün takip edilmiyorsa, teklifler gecikiyorsa, ekip aynı bilgiyle çalışmıyorsa ve yönetim gerçek tabloyu geç görüyorsa; işletme büyürken aynı anda para da kaybeder."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem, i) => (
          <Reveal key={problem.title} delay={i * 55}>
            <SurfaceCard className="h-full relative overflow-hidden border-amber-300/10 hover:-translate-y-1 hover:border-amber-300/24">
              <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(251,191,36,0.06),transparent_40%)]" />
              <div className="relative flex items-center justify-between gap-4">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-300/70">
                  0{i + 1}
                </div>
              </div>
              <p className="relative mt-3 text-sm font-semibold leading-6 text-white">{problem.title}</p>
              <p className="relative mt-2 text-sm leading-6 text-slate-500">{problem.detail}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="mt-10 rounded-[24px] border border-amber-300/14 bg-amber-300/[0.04] px-7 py-6">
          <p className="text-base font-semibold leading-7 text-white sm:text-lg">
            Süreç görünür değilse,{" "}
            <span className="text-amber-200">büyüme şansa kalır.</span>
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
