import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

const deliverables = [
  "Mevcut veri akışının incelenmesi",
  "Örnek ürün grubu için veri odası kurulumu",
  "Dashboard + rapor akışı",
  "PDF / Excel çıktı şablonu",
  "7 gün içinde pilot demo",
];

export function TrSetupProcess() {
  return (
    <SectionShell id="pilot">
      <Reveal>
        <SectionHeading
          eyebrow="Teklif"
          title="Pilot CBAM Data Room kurulumu"
          description="Mevcut veri durumunuzu değerlendirir, örnek bir ürün grubu üzerinden sistemi kurarak 7 gün içinde size çalışan bir pilot sunarız."
        />
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_22rem]">
        <Reveal>
          <div className="h-full rounded-[24px] border border-white/10 bg-white/[0.03] p-7 shadow-[0_22px_70px_rgba(2,6,23,0.28)]">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Pakete dahil
            </p>
            <ul className="mt-6 grid gap-3">
              {deliverables.map((item, index) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[rgba(125,211,252,0.24)] bg-[rgba(125,211,252,0.08)] text-[0.6rem] font-bold text-[var(--color-accent)]">
                    {index + 1}
                  </span>
                  <span className="text-base font-medium text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="h-full rounded-[24px] border border-[rgba(125,211,252,0.2)] bg-[rgba(56,189,248,0.06)] p-7 shadow-[0_18px_58px_rgba(2,6,23,0.28)]">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
              Başlamak için
            </p>
            <h3 className="mt-3 text-2xl font-bold leading-8 text-white">
              Pilot Kurulum İçin Görüşelim
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Mevcut veri akışınızı birlikte değerlendirip ne kadar sürede ve nasıl bir sistemle başlayabileceğinizi gösterelim.
            </p>
            <a
              href="https://wa.me/905331970462?text=Merhaba%2C%20Pilot%20CBAM%20Data%20Room%20kurulumu%20hakk%C4%B1nda%20g%C3%B6r%C3%BC%C5%9Fmek%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-[2.75rem] items-center rounded-full bg-[var(--color-accent)] px-5 text-sm font-semibold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-[var(--color-accent-strong)]"
            >
              WhatsApp ile görüşelim
            </a>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
