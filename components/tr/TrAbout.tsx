import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

export function TrAbout() {
  return (
    <SectionShell id="hakkimizda">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Hakkımızda"
            title="CNR Solutions hakkında"
          />
          <div className="mt-8 space-y-5 text-base leading-8 text-slate-400">
            <p>
              CNR Solutions, Türkiye&rsquo;deki işletmeleri ve KOBİ&rsquo;leri yapay zekâ çağına pratik iş
              sistemleriyle hazırlamak için kuruldu.
            </p>
            <p>
              Biz yapay zekâyı süslü bir teknoloji vitrini olarak değil, işletmelerin gerçek
              problemlerini çözen bir araç olarak görüyoruz.
            </p>
            <p>
              Bir işletmede müşteri talebi kayboluyorsa, takip kişilerin hafızasına kalıyorsa,
              teklifler gecikiyorsa, ekipler Excel ve WhatsApp arasında sıkışıyorsa, yönetim işi
              net göremiyorsa; orada daha iyi bir sistem kurulması gerekir.
            </p>
            <p>
              Biz bu sistemi kurarız.
            </p>
          </div>

          <div className="mt-8 inline-flex rounded-2xl border border-[rgba(125,211,252,0.16)] bg-[rgba(125,211,252,0.05)] px-6 py-4">
            <p className="text-base font-semibold leading-7 text-white">
              Bugünün dağınık iş akışlarını,{" "}
              <span className="text-[var(--color-accent)]">yarının akıllı işletme altyapısına çeviriyoruz.</span>
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Odak", value: "Türkiye'deki KOBİ'ler ve büyüyen işletmeler" },
              { label: "Yaklaşım", value: "Önce iş akışını anla, sonra sistemi kur" },
              { label: "Teknoloji", value: "Yapay zekâ destekli, ama kullanılabilir" },
              { label: "Hedef", value: "Görünür, düzenli, ölçülebilir işletme" },
            ].map((item) => (
              <div
                key={item.label}
                className="surface rounded-2xl p-5"
              >
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-medium leading-6 text-slate-300">{item.value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
