import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

const whatsappUrl =
  "https://wa.me/905331970462?text=Merhaba%2C%20CNR%20Solutions%20sitesinden%20geliyorum.%20%C4%B0%C5%9Fletmem%20i%C3%A7in%20en%20uygun%20sistem%20modelini%20konu%C5%9Fmak%20istiyorum.";

const models = [
  {
    title: "Başlangıç Kurulumu",
    description:
      "Lead form, mini CRM veya basit takip paneliyle tek bir net problemi çözeriz.",
    forText: "İlk kez sistem kurmak isteyen küçük işletmeler.",
  },
  {
    title: "Growth System",
    description:
      "Lead toplama, CRM, randevu akışı, dashboard ve temel otomasyonu tek yapıda toplarız.",
    forText:
      "Düzenli müşteri talebi alan ve operasyonunu büyütmek isteyen işletmeler.",
  },
  {
    title: "Custom AI Business System",
    description:
      "Müşteri portalı, gelişmiş dashboard, AI destekli asistan, özel iş akışları ve entegrasyonlarla işletmeye özel sistem kurarız.",
    forText:
      "Daha profesyonel, ölçeklenebilir ve yapay zekâ destekli yapı isteyen işletmeler.",
  },
];

export function TrWorkingModel() {
  return (
    <SectionShell>
      <Reveal>
        <SectionHeading
          eyebrow="Çalışma Modeli"
          title="Çalışma modeli"
          description="Her işletme aynı noktadan başlamaz. Önce ihtiyacı netleştirir, sonra bütçeye ve operasyon seviyesine uygun sistemi öneririz."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {models.map((model, index) => (
          <Reveal key={model.title} delay={index * 80}>
            <article className="surface-strong flex h-full flex-col rounded-[28px] p-6 transition-all hover:-translate-y-1 hover:border-[rgba(125,211,252,0.32)] sm:p-7">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[rgba(125,211,252,0.2)] bg-[rgba(125,211,252,0.08)] text-sm font-bold text-[var(--color-accent)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-white">{model.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-300">{model.description}</p>
              <div className="mt-auto pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Kimler için?
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{model.forText}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={240}>
        <div className="mt-10 flex flex-col gap-5 rounded-[28px] border border-white/8 bg-white/[0.025] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <p className="max-w-2xl text-lg font-medium leading-7 text-white">
            İşletmeniz için en uygun modeli birlikte belirleyelim.
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
