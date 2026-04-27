import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { portfolioItems } from "@/lib/content";

type PastProjectsProps = {
  locale: "tr" | "en";
};

const copy = {
  tr: {
    id: "proje-ornekleri",
    eyebrow: "Eski demolar",
    title: "Proje örnekleri",
    description:
      "Bunlar önceki sistem demolarıdır. Ana ürün CNR Data Room’dur.",
    demo: "Demo",
    repo: "GitHub",
  },
  en: {
    id: "past-projects",
    eyebrow: "Previous demos",
    title: "Past projects",
    description:
      "These are previous system demos. The main product is CNR Data Room.",
    demo: "Demo",
    repo: "GitHub",
  },
};

export function PastProjects({ locale }: PastProjectsProps) {
  const content = copy[locale];

  return (
    <SectionShell id={content.id} className="py-20 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
      </Reveal>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {portfolioItems.slice(0, 6).map((item, index) => (
          <Reveal key={item.repo} delay={index * 50}>
            <div className="h-full rounded-2xl border border-white/8 bg-white/[0.025] p-5 opacity-85 transition-all hover:-translate-y-1 hover:border-white/16 hover:opacity-100">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                {item.category}
              </p>
              <h3 className="mt-3 text-base font-semibold text-white">{item.title}</h3>
              <div className="mt-5 flex gap-3 text-sm">
                <a
                  href={item.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-strong)]"
                >
                  {content.demo}
                </a>
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-slate-500 hover:text-slate-300"
                >
                  {content.repo}
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
