import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

export function TrDemoBridge() {
  return (
    <SectionShell id="demo">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Norm&apos;u canlı görün
          </h2>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="mx-auto mt-6 max-w-2xl text-center">
          <p className="text-base leading-8 text-slate-400">
            Demo ekranında örnek bir işletmenin müşteri akışını görebilirsiniz.
            Bu gerçek müşteri verisi değildir; Norm&apos;un gelen talepleri nasıl
            Fırsat Kartı&apos;na dönüştürdüğünü göstermek için hazırlanmış örnek akıştır.
          </p>
          <div className="mt-7 flex justify-center">
            <Button
              href="https://norm.cnr-solutions.com/?demo=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo Ekranını Aç
            </Button>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
