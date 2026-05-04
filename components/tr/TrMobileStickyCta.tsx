export function TrMobileStickyCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-white/8 bg-[rgba(6,8,22,0.92)] px-4 py-3 backdrop-blur-md md:hidden">
      <div className="flex items-center justify-between gap-3">
        <p className="min-w-0 truncate text-xs font-semibold text-slate-300">
          İlk 10 Kurucu İşletme Programı
        </p>
        <a
          href="#basvur"
          className="flex-shrink-0 inline-flex min-h-9 items-center justify-center rounded-full bg-[var(--color-accent)] px-4 text-sm font-semibold text-slate-950 shadow-[0_8px_24px_rgba(56,189,248,0.22)] transition-all hover:bg-[var(--color-accent-strong)]"
        >
          Başvur
        </a>
      </div>
    </div>
  );
}
