import Image from "next/image";
import Link from "next/link";

type FooterProps = {
  locale: "tr" | "en";
};

export function Footer({ locale }: FooterProps) {
  const brandLine =
    locale === "tr"
      ? "İşletmeleri yapay zekâ çağına taşıyan sistemler."
      : "AI-assisted business systems for modern companies.";

  return (
    <footer className="border-t border-white/8 py-12">
      <div className="container-shell">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link href={`/${locale}`}>
              <Image
                src="/cnr-solutions-logo.png"
                alt="CNR Solutions"
                width={100}
                height={28}
                className="object-contain opacity-80 transition-opacity hover:opacity-100"
              />
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-6 text-[var(--color-text-muted)]">
              {brandLine}
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-slate-400">
            <a
              href="mailto:cnrakpinar1@gmail.com"
              className="hover:text-white transition-colors"
            >
              cnrakpinar1@gmail.com
            </a>
            <a
              href="https://wa.me/905331970462"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              +90 533 197 0462
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/6 pt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} CNR Solutions. All rights reserved.
          </p>
          <Link
            href="/"
            className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
          >
            {locale === "tr" ? "Dil Seçimi" : "Language Selector"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
