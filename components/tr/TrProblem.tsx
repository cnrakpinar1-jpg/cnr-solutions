import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const problems = [
  {
    icon: "XL",
    text: "Veri farklı Excel dosyalarında kalıyor",
    detail: "Ürün, enerji ve üretim verisi birden fazla dosyaya dağılmış; tek yerden ulaşmak mümkün değil.",
  },
  {
    icon: "TM",
    text: "Üretim, kalite, ihracat ve enerji ekipleri ayrı çalışıyor",
    detail: "Her ekip kendi kaydını tutuyor. Talep geldiğinde veriyi bir araya getirmek saatler alıyor.",
  },
  {
    icon: "!",
    text: "Eksik alanlar son aşamada fark ediliyor",
    detail: "Müşteriye göndermeden önce eksik olduğu fark edilen veriler süreci yeniden başlatıyor.",
  },
  {
    icon: "ERP",
    text: "ERP her şeyi çözmüyor; raporlama akışı yine manuel kalıyor",
    detail: "ERP üretim takibi için güçlü; CBAM ve AB müşteri raporlaması için yeterli değil.",
  },
];

export function TrProblem() {
  return (
    <SectionShell id="sorun">
      <Reveal>
        <SectionHeading
          eyebrow="Neden kilitleniyor?"
          title="AB müşterisi veri istediğinde süreç neden kilitleniyor?"
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {problems.map((problem, index) => (
          <Reveal key={problem.text} delay={index * 60}>
            <SurfaceCard className="h-full relative overflow-hidden border-amber-300/10 hover:-translate-y-1 hover:border-amber-300/26">
              <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(251,191,36,0.08),transparent_34%)]" />
              <div className="relative flex items-center justify-between gap-4">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-300">
                  0{index + 1}
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-300/16 bg-amber-300/8 text-[0.6rem] font-bold text-amber-300">
                  {problem.icon}
                </div>
              </div>
              <p className="relative mt-3 text-base font-semibold leading-6 text-white">{problem.text}</p>
              <p className="relative mt-2 text-sm leading-6 text-slate-500">{problem.detail}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={180}>
        <div className="mt-10 rounded-[24px] border border-amber-300/14 bg-amber-300/[0.04] px-7 py-6">
          <p className="text-base leading-8 text-slate-300">
            <span className="font-semibold text-white">CBAM sürecindeki asıl problem</span> çoğu zaman
            regülasyonu bilmemek değil; doğru veriyi doğru anda bulup müşteriye{" "}
            <span className="font-medium text-amber-200">güvenilir formatta sunamamaktır.</span>
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
