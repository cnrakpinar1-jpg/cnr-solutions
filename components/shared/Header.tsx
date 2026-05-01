import Link from "next/link";
import { Logo } from "@/components/Logo";
import { MobileNav } from "@/components/shared/MobileNav";

type NavLink = { href: string; label: string };

type HeaderProps = {
  locale: "tr" | "en";
  navLinks: NavLink[];
};

export function Header({ locale, navLinks }: HeaderProps) {
  const ctaHref = locale === "tr" ? "#musteri-akisi-skoru" : "#contact";
  const ctaText = locale === "tr" ? "Ücretsiz Skor Al" : "Free Score";

  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-[rgba(6,8,22,0.65)] backdrop-blur-md">
      <div className="container-shell flex h-16 items-center justify-between gap-3 sm:h-18">
        <Link href={`/${locale}`} className="flex-shrink-0">
          <Logo variant="light" size="md" />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-5 lg:gap-6">
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

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language selector — desktop */}
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

          {/* Desktop CTA */}
          <a
            href={ctaHref}
            className="hidden sm:inline-flex min-h-9 items-center justify-center rounded-full bg-[var(--color-accent)] px-4 text-sm font-semibold text-slate-950 shadow-[0_8px_24px_rgba(56,189,248,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-accent-strong)]"
          >
            {ctaText}
          </a>

          {/* Mobile hamburger */}
          <MobileNav navLinks={navLinks} ctaHref={ctaHref} ctaText={ctaText} />
        </div>
      </div>
    </header>
  );
}
