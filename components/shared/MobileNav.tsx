'use client'

import { useState, useEffect } from "react";

type NavLink = { href: string; label: string };

type MobileNavProps = {
  navLinks: NavLink[];
  ctaHref: string;
  ctaText: string;
};

export function MobileNav({ navLinks, ctaHref, ctaText }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Hamburger button — mobile only */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-colors hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
        aria-label="Menüyü aç"
        aria-expanded={open}
      >
        <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H3Z"
          />
        </svg>
      </button>

      {/* Drawer overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigasyon menüsü"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[rgba(6,8,22,0.82)] backdrop-blur-md"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <div className="absolute right-0 top-0 flex h-full w-[min(22rem,100vw)] flex-col border-l border-white/8 bg-[rgba(9,13,27,0.98)] shadow-[0_0_80px_rgba(2,6,23,0.72)]">
            {/* Header row */}
            <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
                Menü
              </p>
              <button
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-colors hover:border-white/20 hover:text-white"
                aria-label="Menüyü kapat"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414Z"
                  />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto px-4 py-6">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center rounded-2xl px-4 py-3.5 text-base font-medium text-slate-300 transition-colors hover:bg-white/[0.05] hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA */}
            <div className="border-t border-white/8 px-5 py-5">
              <a
                href={ctaHref}
                {...(ctaHref.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                onClick={() => setOpen(false)}
                className="flex min-h-[3rem] w-full items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-semibold text-slate-950 shadow-[0_8px_24px_rgba(56,189,248,0.3)] transition-all hover:bg-[var(--color-accent-strong)]"
              >
                {ctaText}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
