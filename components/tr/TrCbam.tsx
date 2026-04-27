import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

const cbamUrl =
  "https://wa.me/905331970462?text=Merhaba%2C%20CBAM%20veri%20haz%C4%B1rl%C4%B1%C4%9F%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

const requirements = [
  "Ürün ve GTİP bazında kapsam kontrolü",
  "Tesis ve hat bazında enerji tüketimi kaydı",
  "Üretim miktarı ve kaynak verisi",
  "Müşteriye gönderilebilir veri paketi",
];

export function TrCbam() {
  return (
    <SectionShell id="cbam">
      <Reveal>
        <div className="surface-strong relative overflow-hidden rounded-[32px] p-8 sm:p-12">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[rgba(125,211,252,0.12)] to-transparent" />
          <div className="relative">
            <p className="eyebrow">CBAM</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              CBAM için hazır olun
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              2026 sonrası AB talepleri için veri yapınızı bugünden kurun.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {requirements.map((req) => (
                <li key={req} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[rgba(125,211,252,0.28)] bg-[rgba(56,189,248,0.12)] text-xs text-[var(--color-accent)]"
                  >
                    ✓
                  </span>
                  <span className="text-base leading-7 text-slate-200">{req}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button href={cbamUrl} target="_blank" rel="noopener noreferrer">
                CBAM veri hazırlığı hakkında konuşalım
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
