import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  {
    step: "01",
    title: "Daha görünür operasyon",
    description: "Günlük iş akışı, bekleyen süreçler ve ekip görevleri daha net izlenir.",
  },
  {
    step: "02",
    title: "Daha net müşteri takibi",
    description: "Müşteri talepleri, görüşmeler, teklifler ve sonraki adımlar tek sistem mantığında toplanır.",
  },
  {
    step: "03",
    title: "Daha ölçülebilir büyüme",
    description: "Satış, operasyon ve müşteri süreçleri raporlanabilir ve geliştirilebilir hale gelir.",
  },
];

export function TrPositioning() {
  return (
    <section className="relative overflow-hidden border-y border-white/6 bg-[rgba(8,12,28,0.72)] py-14 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(56,189,248,0.09),transparent_60%)]"
      />
      <div className="container-shell relative z-10">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-balance text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-[2.25rem] lg:leading-[1.18]">
              Dağınık süreçleri, çalışan iş sistemlerine dönüştürüyoruz.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-400 sm:leading-8">
              İşletmenizin mevcut düzenini tamamen yıkmadan; satış, müşteri yönetimi, operasyon
              takibi ve veri akışları için daha görünür ve yönetilebilir bir sistem katmanı kuruyoruz.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative mt-10">
            <div
              aria-hidden="true"
              className="absolute left-8 right-8 top-1/2 hidden h-px bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.22),transparent)] lg:block"
            />
            <div className="relative grid gap-4 lg:grid-cols-3">
              {pillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.035] p-6 shadow-[0_18px_54px_rgba(2,6,23,0.26)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(125,211,252,0.32)] hover:bg-[rgba(56,189,248,0.055)]"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.5),transparent)] opacity-70"
                  />
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[rgba(125,211,252,0.22)] bg-[rgba(125,211,252,0.09)] text-[0.68rem] font-bold text-[var(--color-accent)] transition-colors group-hover:bg-[rgba(125,211,252,0.15)]">
                      {pillar.step}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold leading-6 text-white sm:text-lg">{pillar.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-400">{pillar.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
