import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

const scenarios = [
  {
    title: "Randevu talebi alan işletmeler",
    detail:
      "Müşteri uygun saat sorar, bilgi alır, sonra takip edilmezse başka yere gider.",
    example: "Örnek: oto ekspertiz, bakım hizmetleri, kurs, kuaför.",
  },
  {
    title: "Teklif / fiyat talebi alan işletmeler",
    detail:
      "Fiyat isteyen müşteri dönüş bekler; takip gecikirse aynı işi rakip alır.",
    example: "Örnek: mobilya, dekorasyon, cam balkon, tabela.",
  },
  {
    title: "Bilgi talebi toplayan işletmeler",
    detail:
      "‘Detay alabilir miyim?’ diyen kişiler konuşma kutusunda kalır; kim sıcak, kim bekliyor görünmez.",
    example: "Örnek: eğitim merkezi, danışmanlık, emlak, hizmet ofisleri.",
  },
  {
    title: "Telefonla yoğun talep alan işletmeler",
    detail:
      "Aramalar notlara veya hafızaya kalır; dönüş zamanı ve sorumlusu netleşmez.",
    example: "Örnek: teknik servis, oto servis, yerel hizmet işletmeleri.",
  },
];

export function TrSectorScenarios() {
  return (
    <SectionShell id="sektorler">
      <Reveal>
        <SectionHeading title="Sektör değişse de problem aynı: gelen talep takip edilmezse kaybolur." />
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {scenarios.map((s, i) => (
          <Reveal key={s.title} delay={i * 80}>
            <div className="flex h-full flex-col overflow-hidden rounded-[20px] border border-white/8 bg-white/[0.02]">
              <div className="border-b border-white/8 px-5 py-3">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                  Akış örneği
                </p>
              </div>
              <div className="flex-1 border-b border-white/6 px-5 py-4">
                <h3 className="text-base font-semibold leading-6 text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{s.detail}</p>
              </div>
              <div className="bg-[rgba(125,211,252,0.03)] px-5 py-4">
                <p className="text-xs leading-5 text-slate-500">{s.example}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
