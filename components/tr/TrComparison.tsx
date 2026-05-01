import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

const genericItems = [
  "Özellik anlatır",
  "Teknik kurulumla başlar",
  "İşletmeyi araca uydurmaya çalışır",
  "Kullanım disiplini işletmeye bırakılır",
  "Müşteri akışını bütün olarak sahiplenmez",
];

const normItems = [
  "İş sonucundan başlar",
  "Mevcut müşteri akışını analiz eder",
  "Sistemi işletmenin çalışma düzenine göre kurar",
  "Takip, randevu, teklif ve satış sürecini birlikte ele alır",
  "İşletme sahibine operasyonel görünürlük sağlar",
  "Dağınık müşteri görüşmelerini yeni bir işletme standardına dönüştürür",
];

export function TrComparison() {
  return (
    <SectionShell>
      <Reveal>
        <SectionHeading title="CRM karmaşası değil, müşteri akışı standardı." />
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
          Birçok araç size yeni ekranlar verir. CNR Norm ise önce işletmenizde müşterinin nereden geldiğini, nerede beklediğini, kim tarafından takip edildiğini ve nerede kaybolduğunu çıkarır. Sonra sistemi buna göre kurar.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Reveal delay={60}>
          <div className="h-full rounded-[20px] border border-white/8 bg-white/[0.03] px-6 py-5">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-slate-500">
              Genel araçlar
            </p>
            <ul className="mt-5 space-y-3">
              {genericItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex-shrink-0 text-slate-600 select-none">×</span>
                  <span className="text-sm text-slate-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="h-full rounded-[20px] border border-[rgba(125,211,252,0.18)] bg-[rgba(125,211,252,0.05)] px-6 py-5">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
              CNR Norm
            </p>
            <ul className="mt-5 space-y-3">
              {normItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex-shrink-0 text-[var(--color-accent)] select-none">✓</span>
                  <span className="text-sm text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delay={200}>
        <div className="mt-10 rounded-[24px] border border-[rgba(125,211,252,0.12)] bg-[rgba(125,211,252,0.04)] px-8 py-6 text-center">
          <p className="text-base font-semibold text-slate-300 sm:text-lg">
            Bizim odağımız daha fazla ekran değil;{" "}
            <span className="text-[var(--color-accent)]">daha net, daha standart ve daha yönetilebilir müşteri akışı.</span>
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
