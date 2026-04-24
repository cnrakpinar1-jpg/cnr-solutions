import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { processSteps } from "@/lib/content";

export function ProcessSection() {
  return (
    <SectionShell id="process">
      <Reveal>
        <SectionHeading
          eyebrow="How it works"
          title="A straightforward process from messy workflow to working system."
          description="The goal is to ship something useful fast, then keep improving it where the business gets the most leverage."
          align="center"
        />
      </Reveal>

      <div className="relative mt-14">
        <div className="absolute left-8 right-8 top-10 hidden h-px bg-white/10 lg:block" />
        <div className="grid gap-5 lg:grid-cols-4">
          {processSteps.map((item, index) => (
            <Reveal key={item.step} delay={index * 80}>
              <article className="surface relative h-full rounded-2xl p-6 sm:p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(125,211,252,0.28)] bg-[rgba(125,211,252,0.12)] text-sm font-semibold text-[var(--color-accent)]">
                  {item.step}
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-base leading-7">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
