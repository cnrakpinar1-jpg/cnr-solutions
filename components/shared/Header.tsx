import Link from "next/link";
import { Logo } from "@/components/Logo";

type NavLink = { href: string; label: string };

type HeaderProps = {
  locale: "tr" | "en";
  navLinks: NavLink[];
};

export function Header({ locale, navLinks }: HeaderProps) {
  const ctaHref =
    locale === "tr"
      ? "https://wa.me/905331970462?text=Merhaba%2C%20CNR%20Solutions%20sitesinden%20geliyorum.%20%C4%B0%C5%9Fletmem%20i%C3%A7in%20bir%20sistem%20konu%C5%9Fmak%20istiyorum."
      : "https://wa.me/905331970462?text=Hello%2C%20I%20want%20to%20see%20how%20CNR%20Data%20Room%20works.";
  const ctaLabel = locale === "tr" ? "Birlikte bakalım" : "Talk to us";

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
          <div
            className="hidden items-center rounded-full border border-white/10 bg-white/[0.03] p-0.5 sm:flex"
            aria-label="Language selector"
          >
            {locale === "tr" ? (
              <span
                aria-current="true"
                className="rounded-full bg-[var(--color-accent)] px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-slate-950"
              >
                TR
              </span>
            ) : (
              <Link
                href="/tr"
                className="rounded-full px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-slate-400 transition-colors hover:text-white"
              >
                TR
              </Link>
            )}
            {locale === "en" ? (
              <span
                aria-current="true"
                className="rounded-full bg-[var(--color-accent)] px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-slate-950"
              >
                EN
              </span>
            ) : (
              <Link
                href="/en"
                className="rounded-full px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-slate-400 transition-colors hover:text-white"
              >
                EN
              </Link>
            )}
          </div>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-9 items-center justify-center rounded-full bg-[var(--color-accent)] px-4 text-sm font-semibold text-slate-950 shadow-[0_8px_24px_rgba(56,189,248,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-accent-strong)]"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
