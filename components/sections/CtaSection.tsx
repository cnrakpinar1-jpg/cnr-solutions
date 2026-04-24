import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

export function CtaSection() {
  return (
    <SectionShell>
      <Reveal>
        <div className="surface-strong rounded-[28px] px-6 py-10 text-center sm:px-10 sm:py-14">
          <p className="mx-auto max-w-4xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[3rem]">
            Your workflow doesn’t need more tools. It needs a system.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="#contact">Let’s fix it</Button>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
