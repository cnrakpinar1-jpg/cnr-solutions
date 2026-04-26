import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { Tag } from "@/components/ui/Tag";
import { portfolioItems } from "@/lib/content";

export function TrProjects() {
  return (
    <SectionShell id="projeler">
      <Reveal>
        <SectionHeading
          eyebrow="Demo Sistemler"
          title="Geliştirdiğimiz sistem örnekleri"
          description="Aşağıdaki sistemler, gerçek işletme problemlerini çözmek için geliştirdiğimiz demo sistemler ve çözüm prototipleridir."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {portfolioItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 70}>
            <SurfaceCard className="group flex h-full flex-col rounded-[24px] hover:-translate-y-1 hover:border-[rgba(125,211,252,0.32)]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                {item.repo}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
              <div className="mt-4">
                <Tag>{item.category}</Tag>
              </div>
              <p className="mt-4 text-base leading-7">{item.description}</p>
              <div className="mt-auto pt-6">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    href={item.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1"
                  >
                    Demoyu İncele
                  </Button>
                  <Button
                    href={item.githubUrl}
                    variant="secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1"
                  >
                    GitHub&apos;da Gör
                  </Button>
                </div>
              </div>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
