import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const problems = [
  {
    title: "Instagram DM'leri satışa bağlanmıyor.",
    detail: "Fiyat soran kişiler konuşma kutusunda unutuluyor.",
  },
  {
    title: "WhatsApp takip listesine dönüşmüyor.",
    detail: "Cevap veriliyor ama sonraki adım belirsiz kalıyor.",
  },
  {
    title: "Telefon görüşmeleri kayıt altına alınmıyor.",
    detail: "Arayan kişinin ne istediği ve kime dönüleceği görünmüyor.",
  },
  {
    title: "Patron gerçek tabloyu göremiyor.",
    detail: "Kaç kişi geldi, kaçı takip edildi, kaçı randevuya döndü bilinmiyor.",
  },
];

export function TrProblem() {
  return (
    <SectionShell id="sorun">
      <Reveal>
        <SectionHeading title="Müşteri az değil. Akış dağınık." />
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
          Birçok işletme daha fazla reklam, daha fazla paylaşım ve daha fazla görünürlük ister. Ama çoğu zaman asıl sorun yeni müşteri gelmemesi değildir. Sorun, gelen müşteri taleplerinin WhatsApp, Instagram, telefon ve notlar arasında dağılmasıdır.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
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
            Norm, bu dağınıklığı{" "}
            <span className="text-amber-200">günlük müşteri takip disiplinine dönüştürür.</span>
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
