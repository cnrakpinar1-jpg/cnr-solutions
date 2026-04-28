import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

const demoUrl =
  "https://wa.me/905331970462?text=Merhaba%2C%20CBAM%20Data%20Room%27un%20nas%C4%B1l%20%C3%A7al%C4%B1%C5%9Ft%C4%B1%C4%9F%C4%B1n%C4%B1%20g%C3%B6rmek%20istiyorum.";

const capabilities = [
  { title: "Ürün bazlı veri toplama", text: "Her ürün grubu için ayrı veri yapısı. CBAM kapsamındaki ürünlere özel alan düzeni." },
  { title: "Enerji ve üretim girdileri", text: "Elektrik, doğalgaz, hammadde ve üretim verilerini aynı yapıda toplama." },
  { title: "Eksik alan kontrolü", text: "Hangi ürün için hangi verinin eksik olduğunu otomatik olarak işaretler." },
  { title: "Müşteriye gönderilebilir PDF / Excel çıktı", text: "AB müşterilerinin talep ettiği formatta hazır rapor çıktısı." },
  { title: "Yönetim görünürlüğü", text: "İhracat, kalite ve sürdürülebilirlik ekiplerinin aynı anda görebildiği tablo." },
  { title: "Tekrarlayan rapor akışı", text: "Her dönem aynı veriyi yeniden toplamak yerine standart bir hazırlık süreci." },
];

const sources = ["ERP", "Excel", "Üretim", "Enerji", "Kalite"];
const outputs = ["PDF / Excel rapor", "Eksik alan listesi", "Müşteri paketi", "İhracat özeti"];

export function TrSolution() {
  return (
    <SectionShell id="cozum">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <div>
            <p className="eyebrow">Çözüm</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              ERP&rsquo;nin yerine değil,{" "}
              <span className="text-[var(--color-accent)]">ERP&rsquo;nin yanında</span>{" "}
              çalışan veri odası.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-400">
              Mevcut ERP veya üretim sistemlerinize dokunmadan çalışır. Veri hazırlama ve rapor akışı sürecini ayrı bir katmanda düzenler.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="rounded-2xl border border-white/8 bg-white/[0.035] p-4 transition-all hover:border-[rgba(125,211,252,0.2)] hover:bg-white/[0.05]"
                >
                  <h3 className="text-sm font-semibold text-white">{cap.title}</h3>
                  <p className="mt-1.5 text-xs leading-5 text-slate-500">{cap.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button href={demoUrl} target="_blank" rel="noopener noreferrer">
                Sistemi Görün
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="surface-strong rounded-[28px] p-6">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Veri akışı
            </p>
            <div className="grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Veri kaynakları
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2.5">
                  {sources.map((source) => (
                    <div
                      key={source}
                      className="rounded-xl border border-white/8 bg-white/[0.04] px-3 py-2.5 text-sm font-medium text-slate-300"
                    >
                      {source}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center">
                <span className="text-xl text-slate-600">→</span>
              </div>

              <div>
                <div className="rounded-[20px] border border-[rgba(125,211,252,0.24)] bg-[rgba(56,189,248,0.07)] p-5 text-center">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                    Çekirdek
                  </p>
                  <h3 className="mt-1.5 text-lg font-bold text-white">CBAM Data Room</h3>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2.5">
                  {outputs.map((output) => (
                    <div
                      key={output}
                      className="rounded-xl border border-emerald-300/12 bg-emerald-300/[0.04] px-3 py-2.5 text-xs font-medium text-slate-300"
                    >
                      {output}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
