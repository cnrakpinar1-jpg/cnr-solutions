import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  { label: "Daha görünür operasyon" },
  { label: "Daha net müşteri takibi" },
  { label: "Daha ölçülebilir büyüme" },
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
          <p className="mx-auto max-w-3xl text-center text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-[2.1rem] lg:leading-[1.22]">
            Dağınık süreçleri görünür, takip edilebilir ve ölçülebilir{" "}
            <span className="text-[var(--color-accent)]">iş sistemlerine dönüştürüyoruz.</span>
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-7 text-slate-400 sm:leading-8">
            CNR Solutions, işletmenizin mevcut düzenini tamamen yıkmadan; satış, müşteri yönetimi,
            operasyon takibi ve veri akışları için daha akıllı bir sistem katmanı kurar.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-0">
            {pillars.map((pillar, i) => (
              <div key={pillar.label} className="flex items-center gap-4">
                <div className="rounded-full border border-[rgba(125,211,252,0.22)] bg-[rgba(125,211,252,0.06)] px-5 py-2.5 text-sm font-semibold text-[var(--color-accent)]">
                  {pillar.label}
                </div>
                {i < pillars.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden h-px w-8 bg-[rgba(125,211,252,0.18)] sm:block"
                  />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
