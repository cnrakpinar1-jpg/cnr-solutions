import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const problems = [
  {
    title: "WhatsApp konuşmaları ekip içinde kayboluyor.",
    detail: "Müşteri yazıyor, cevap veriliyor ama sonrasında kim takip edecek belirsiz kalıyor.",
  },
  {
    title: "Instagram DM'leri satış sürecine bağlanmıyor.",
    detail: "İlgi gösteren kişiler sıcak fırsata dönüşmeden konuşma kutusunda unutuluyor.",
  },
  {
    title: "Telefon görüşmeleri kayıt altına alınmıyor.",
    detail: "Arayan kişinin ne istediği, kime döneceği ve hangi aşamada olduğu net görünmüyor.",
  },
  {
    title: "Reklam leadleri ayrı yerlerde kalıyor.",
    detail: "Form dolduran kişiler hızlı takip edilmediğinde reklam bütçesi sessizce boşa akıyor.",
  },
  {
    title: "Randevu, teklif ve satış birbirinden kopuk ilerliyor.",
    detail: "Görüşme yapılıyor ama randevu, teklif, geri dönüş ve sonuç aynı akışta izlenmiyor.",
  },
  {
    title: "İşletme sahibi gerçek tabloyu göremiyor.",
    detail: "Kaç kişi geldi, kaçı takip edildi, kaçı satışa döndü, nerede kayıp var soruları cevapsız kalıyor.",
  },
];

export function TrProblem() {
  return (
    <SectionShell id="sorun">
      <Reveal>
        <SectionHeading title="Müşteri geliyor. Ama akışın bir normu var mı?" />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem, i) => (
          <Reveal key={problem.title} delay={i * 55}>
            <SurfaceCard className="h-full relative overflow-hidden border-amber-300/10 hover:-translate-y-1 hover:border-amber-300/24">
              <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(251,191,36,0.06),transparent_40%)]" />
              <div className="relative">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-300/70">
                  0{i + 1}
                </div>
                <p className="mt-3 text-sm font-semibold leading-6 text-white">{problem.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">{problem.detail}</p>
              </div>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="mt-10 rounded-[24px] border border-amber-300/14 bg-amber-300/[0.04] px-7 py-6">
          <p className="text-base font-semibold leading-7 text-white sm:text-lg">
            CNR Norm, dağınık müşteri görüşmelerini{" "}
            <span className="text-amber-200">standart, görünür ve takip edilebilir bir müşteri akışına dönüştürür.</span>
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
