import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const principles = [
  {
    number: "01",
    title: "Ekibin gerçekten kullanabileceği kadar sade",
    description:
      "Fazla özellik, fazla ekran, fazla karmaşıklık sistemi kullanılmaz hale getirir. Her yapı, ekibin günlük iş akışına uyum sağlayacak şekilde kurulur.",
  },
  {
    number: "02",
    title: "Yönetimin gerçekten görebileceği kadar net",
    description:
      "Kritik bilgi çok sayıda raporun arkasına gizlenmez. Günlük durum, bekleyen süreçler ve temel göstergeler tek bakışta anlaşılır olur.",
  },
  {
    number: "03",
    title: "İşletmeye gerçekten değer katacak kadar pratik",
    description:
      "Sistem kurulur ama kullanılmazsa değer sıfırdır. Her yapıyı, gerçek iş süreciyle eşleşecek ve ekibin benimseyeceği şekilde tasarlarız.",
  },
];

export function TrTrust() {
  return (
    <SectionShell>
      <Reveal>
        <SectionHeading
          eyebrow="Yaklaşımımız"
          title="Karmaşık teknoloji değil, kullanılabilir sistem."
          description="CNR Solutions'ın yaklaşımı basittir: İşletmenin gerçek ihtiyacını anlamadan sistem kurulmaz. Gereksiz teknoloji, fazla ekran ve kullanılmayan yazılım işletmeye yük getirir."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {principles.map((p, i) => (
          <Reveal key={p.number} delay={i * 70}>
            <SurfaceCard className="h-full hover:-translate-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                {p.number}
              </p>
              <h3 className="mt-3 text-base font-semibold leading-6 text-white">{p.title}</h3>
              <p className="mt-2.5 text-sm leading-6 text-slate-500">{p.description}</p>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="mt-10 rounded-[24px] border border-[rgba(125,211,252,0.12)] bg-[rgba(125,211,252,0.04)] px-8 py-6 text-center">
          <p className="text-lg font-semibold text-white sm:text-xl">
            Amaç daha fazla ekran değil;{" "}
            <span className="text-[var(--color-accent)]">daha net işleyiş.</span>
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
