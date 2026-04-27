import Link from "next/link";
import { Logo } from "@/components/Logo";

type FooterProps = {
  locale: "tr" | "en";
};

export function Footer({ locale }: FooterProps) {
  const brandLine =
    locale === "tr"
      ? "İhracat yapan üreticiler için veri odası ve operasyon sistemi."
      : "Operational data systems for export-oriented manufacturers.";
  const navLinks =
    locale === "tr"
      ? [
          { href: "#cozum", label: "Çözüm" },
          { href: "#kullanim", label: "Kullanım Alanları" },
          { href: "#akis", label: "Nasıl Çalışır" },
          { href: "#guven", label: "Güven" },
          { href: "#proje-ornekleri", label: "Proje Örnekleri" },
          { href: "#contact", label: "İletişim" },
        ]
      : [
          { href: "#solution", label: "Solution" },
          { href: "#use-cases", label: "Use Cases" },
          { href: "#flow", label: "How It Works" },
          { href: "#trust", label: "Trust" },
          { href: "#past-projects", label: "Past Projects" },
          { href: "#contact", label: "Contact" },
        ];
  const navHeading = locale === "tr" ? "Navigasyon" : "Navigation";
  const contactHeading = locale === "tr" ? "İletişim" : "Contact";

  return (
    <footer className="border-t border-white/8 py-12">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.8fr_0.8fr] lg:items-start">
          <div className="max-w-sm">
            <Link href={`/${locale}`} className="inline-block">
              <Logo variant="light" size="sm" />
            </Link>
            <p className="mt-4 text-sm leading-6 text-[var(--color-text-muted)]">
              {brandLine}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              {navHeading}
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-400 sm:grid-cols-2 lg:grid-cols-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              {contactHeading}
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-slate-400">
              <a
                href="mailto:cnrakpinar1@gmail.com"
                className="transition-colors hover:text-white"
              >
                cnrakpinar1@gmail.com
              </a>
              <a
                href="https://wa.me/905331970462"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                +90 533 197 0462
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-white/6 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-600">
            © 2026 CNR Solutions · CNR Data Room
          </p>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-xs text-slate-600 transition-colors hover:text-slate-400"
            >
              {locale === "tr" ? "Dil değiştir" : "Language"}
            </Link>
            <div
              className="flex items-center rounded-full border border-white/10 bg-white/[0.03] p-0.5"
              aria-label="Language selector"
            >
              {locale === "tr" ? (
                <span className="rounded-full bg-[var(--color-accent)] px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-slate-950">
                  TR
                </span>
              ) : (
                <Link
                  href="/tr"
                  className="rounded-full px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-slate-500 transition-colors hover:text-white"
                >
                  TR
                </Link>
              )}
              {locale === "en" ? (
                <span className="rounded-full bg-[var(--color-accent)] px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-slate-950">
                  EN
                </span>
              ) : (
                <Link
                  href="/en"
                  className="rounded-full px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-slate-500 transition-colors hover:text-white"
                >
                  EN
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
