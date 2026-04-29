import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

const checkItems = [
  "Müşteri talepleri WhatsApp, telefon, Instagram ve e-posta arasında dağılıyor",
  "Takipler çalışanların hafızasına kalıyor",
  "Teklifler, randevular veya geri dönüşler gecikiyor",
  "Yönetim güncel tabloyu net göremiyor",
  "Excel dosyaları çoğaldıkça kontrol zorlaşıyor",
  "ERP var ama operasyonun tamamını görünür kılmıyor",
  "Ekip aynı bilgiye aynı anda ulaşamıyor",
  "İş büyüdükçe karmaşa da büyüyor",
];

export function TrFit() {
  return (
    <SectionShell>
      <Reveal>
        <SectionHeading
          eyebrow="Sizin için uygun mu?"
          title="Bu sistemler işletmeniz için uygun mu?"
          description="Aşağıdaki durumlardan birkaçını yaşıyorsanız, işletmenizin daha iyi bir sistem katmanına ihtiyacı olabilir."
        />
      </Reveal>

      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        {checkItems.map((item, i) => (
          <Reveal key={item} delay={i * 45}>
            <div className="flex items-start gap-3.5 rounded-2xl border border-white/8 bg-white/[0.03] px-5 py-4 backdrop-blur-sm transition-colors hover:border-[rgba(125,211,252,0.2)] hover:bg-[rgba(125,211,252,0.04)]">
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[rgba(125,211,252,0.28)] bg-[rgba(125,211,252,0.1)] text-[0.65rem] font-semibold text-[var(--color-accent)]"
              >
                ✓
              </span>
              <p className="text-sm leading-6 text-slate-300">{item}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={160}>
        <div className="mt-10 flex flex-col items-start gap-4 rounded-[24px] border border-[rgba(125,211,252,0.14)] bg-[rgba(125,211,252,0.04)] px-7 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base font-semibold text-white">
            Bu sorunları birlikte inceleyelim.
          </p>
          <Button href="#iletisim" className="shrink-0 text-sm">
            Ücretsiz Analiz İste
          </Button>
        </div>
      </Reveal>
    </SectionShell>
  );
}
