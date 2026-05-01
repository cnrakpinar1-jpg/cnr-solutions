import Link from "next/link";
import { Logo } from "@/components/Logo";

type FooterProps = {
  locale: "tr" | "en";
};

export function Footer({ locale }: FooterProps) {
  const brandLine =
    locale === "tr"
      ? "CNR Solutions, işletmeler için müşteri akışı standardı CNR Norm’u kurar. WhatsApp, Instagram, telefon, web formu ve reklam kanallarından gelen müşteri görüşmelerini daha düzenli, görünür ve takip edilebilir hale getirir."
      : "CNR Solutions builds CNR Norm, a customer-flow standard for businesses. We help organize customer inquiries from WhatsApp, Instagram, phone calls, web forms, and ads into a clearer, more visible and trackable flow.";
  const navLinks =
    locale === "tr"
      ? [
          { href: "#cnr-norm", label: "CNR Norm" },
          { href: "#cnr-norm-iq", label: "CNR Norm IQ" },
          { href: "#nasil-calisir", label: "Nasıl Çalışır?" },
          { href: "#hizmetler", label: "Destekleyici Hizmetler" },
          { href: "#kimler", label: "Kimler İçin?" },
          { href: "#iletisim", label: "Müşteri Akışı Skoru" },
        ]
      : [
          { href: "#cnr-norm", label: "CNR Norm" },
          { href: "#cnr-norm-iq", label: "CNR Norm IQ" },
          { href: "#how-it-works", label: "How It Works" },
          { href: "#supporting-services", label: "Supporting Services" },
          { href: "#who-its-for", label: "Who It's For" },
          { href: "#contact", label: "Free Score" },
        ];
  const navHeading = locale === "tr" ? "Navigasyon" : "Navigation";
  const contact =
    locale === "tr"
      ? {
          heading: "İLETİŞİM",
          text: "Müşteri akışınızın nerede dağıldığını birlikte netleştirelim.",
          note: "Ücretsiz Müşteri Akışı Skoru talepleri form üzerinden alınır.",
          cta: "Skor Talebi Gönder",
          href: "#iletisim",
        }
      : {
          heading: "CONTACT",
          text: "Let's find where your customer flow is getting scattered.",
          note: "Free Customer Flow Score requests are collected through the form.",
          cta: "Get My Free Score",
          href: "#contact",
        };

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
              {contact.heading}
            </p>
            <div className="mt-4 flex max-w-xs flex-col items-start gap-3 text-sm text-slate-400">
              <p className="leading-6">{contact.text}</p>
              <p className="text-xs leading-5 text-slate-500">{contact.note}</p>
              <a
                href={contact.href}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-semibold text-slate-200 transition-colors hover:border-[rgba(125,211,252,0.36)] hover:bg-white/[0.08] hover:text-white"
              >
                {contact.cta}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-white/6 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-600">
            © 2026 CNR Solutions
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
