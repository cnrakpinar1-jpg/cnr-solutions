import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

const comparisons = [
  {
    label: "Klasik ajanslar",
    contrast: "Klasik ajanslar genelde görünürlük üretir.",
    body: "Biz görünürlüğün ardından gelen müşteri, satış ve operasyon akışını sistemleştiririz. Amaç sadece daha fazla görünmek değil; gelen talebi daha iyi yönetmek, takip etmek ve sonuca çevirmektir.",
    accentClass: "border-l-violet-300/50 bg-violet-300/[0.03] border-violet-300/14",
    labelClass: "text-violet-300",
  },
  {
    label: "Hazır CRM'ler",
    contrast: "Hazır CRM'ler çoğu zaman işletmeye uyum bekler.",
    body: "Sistemi işletmenin gerçek iş akışına göre tasarlarız. Ekip nasıl çalışıyor, müşteri nereden geliyor, süreç nerede kopuyor; önce bunu anlar, sonra sistemi buna göre kurarız.",
    accentClass: "border-l-sky-300/50 bg-sky-300/[0.03] border-sky-300/14",
    labelClass: "text-sky-300",
  },
  {
    label: "ERP değişimi",
    contrast: "ERP değişimi ağır ve pahalı olabilir.",
    body: "Mevcut düzeni tamamen yıkmadan, ERP'nin etrafına görünürlük, takip ve operasyon katmanı kurarız. Amaç sistemi büyütmek değil; işi daha net yönetilebilir hale getirmektir.",
    accentClass: "border-l-emerald-300/50 bg-emerald-300/[0.03] border-emerald-300/14",
    labelClass: "text-emerald-300",
  },
];

export function TrComparison() {
  return (
    <SectionShell>
      <Reveal>
        <SectionHeading
          eyebrow="Neden biz?"
          title="Neden klasik ajans, hazır CRM veya ERP değişimi değil?"
          description="Çünkü çoğu işletmenin ihtiyacı yeni bir karmaşa değil; mevcut işleyişin üzerine kurulan, gerçekten kullanılan bir sistem katmanıdır."
        />
      </Reveal>

      <div className="mt-10 flex flex-col gap-4">
        {comparisons.map((c, i) => (
          <Reveal key={c.label} delay={i * 80}>
            <div
              className={`rounded-[20px] border border-l-4 px-7 py-6 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(2,6,23,0.32)] ${c.accentClass}`}
            >
              <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] sm:gap-8 sm:items-start">
                <div>
                  <p className={`text-[0.65rem] font-semibold uppercase tracking-[0.14em] ${c.labelClass}`}>
                    {c.label}
                  </p>
                  <p className="mt-2 text-base font-semibold leading-6 text-white">{c.contrast}</p>
                </div>
                <p className="text-sm leading-7 text-slate-400">{c.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={240}>
        <div className="mt-10 rounded-[24px] border border-white/8 bg-white/[0.025] px-7 py-5 text-center">
          <p className="text-base font-semibold text-slate-300 sm:text-lg">
            Biz yeni bir karmaşa değil,{" "}
            <span className="text-white">mevcut işleyişin üzerine çalışan bir sistem katmanı kurarız.</span>
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
