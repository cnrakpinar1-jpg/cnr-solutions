import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

const callouts = [
  {
    title: "Veri talebi üretimden sonra geliyor",
    body: "Sipariş tamamlandıktan sonra AB müşterisi ek belgeler ve karbon verisi istiyor. Bu talep önceden karşılanmaya hazır olmalı.",
  },
  {
    title: "CBAM kapsamı genişliyor",
    body: "2026 ve sonrası için daha fazla ürün grubu CBAM'e dahil ediliyor. Hazırlıksız yakalanmak hem operasyonel hem de ticari risk taşıyor.",
  },
  {
    title: "Hazırlık zaman alıyor",
    body: "Veri sistemi kurulmadan hızlı yanıt mümkün değil. Talep geldiğinde başlamak için genellikle çok geç olur.",
  },
];

export function TrCbam() {
  return (
    <SectionShell id="simdi">
      <Reveal>
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow">Neden şimdi?</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Şimdi hazırlanmak neden kritik?
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            AB müşterileri artık sadece ürün değil, ürünün arkasındaki{" "}
            <span className="font-medium text-white">veri disiplinini</span> de görmek istiyor.
            Hazırlıksız yakalanan firmalarda sorun satıştan sonra değil, veri talebi geldiği anda başlıyor.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {callouts.map((item, index) => (
          <Reveal key={item.title} delay={index * 80}>
            <div className="h-full rounded-[22px] border border-[rgba(125,211,252,0.14)] bg-[rgba(56,189,248,0.05)] p-7 transition-all hover:-translate-y-1 hover:border-[rgba(125,211,252,0.28)]">
              <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(125,211,252,0.24)] bg-[rgba(125,211,252,0.08)] text-xs font-bold text-[var(--color-accent)]">
                {index + 1}
              </div>
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
