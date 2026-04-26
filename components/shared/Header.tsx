import Link from "next/link";
import { Logo } from "@/components/Logo";

type NavLink = { href: string; label: string };

type HeaderProps = {
  locale: "tr" | "en";
  navLinks: NavLink[];
};

export function Header({ locale, navLinks }: HeaderProps) {
  const otherLocale = locale === "tr" ? "en" : "tr";
  const otherLabel = locale === "tr" ? "EN" : "TR";
  const ctaHref =
    locale === "tr"
      ? "https://wa.me/905331970462"
      : `mailto:cnrakpinar1@gmail.com`;
  const ctaLabel = locale === "tr" ? "WhatsApp'tan Yaz" : "Get in Touch";

  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-[rgba(6,8,22,0.65)] backdrop-blur-md">
      <div className="container-shell flex h-16 items-center justify-between gap-4 sm:h-18">
        <Link href={`/${locale}`} className="flex-shrink-0">
          <Logo variant="light" size="md" />
        </Link>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={`/${otherLocale}`}
            className="hidden items-center justify-center rounded-md border border-white/10 px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate-400 transition-colors hover:border-white/20 hover:text-white sm:inline-flex"
            aria-label={locale === "tr" ? "Switch to English" : "Türkçe sayfaya geç"}
          >
            {otherLabel}
          </Link>
          <a
            href={ctaHref}
            target={locale === "tr" ? "_blank" : undefined}
            rel={locale === "tr" ? "noopener noreferrer" : undefined}
            className="inline-flex min-h-9 items-center justify-center rounded-full bg-[var(--color-accent)] px-4 text-sm font-semibold text-slate-950 shadow-[0_8px_24px_rgba(56,189,248,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-accent-strong)]"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
