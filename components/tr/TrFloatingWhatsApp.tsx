const whatsappUrl =
  "https://wa.me/905331970462?text=Merhaba%2C%20CNR%20Solutions%20sitesinden%20geliyorum.%20%C4%B0%C5%9Fletmem%20i%C3%A7in%20bir%20sistem%20konu%C5%9Fmak%20istiyorum.";

export function TrFloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-40 inline-flex max-w-[calc(100vw-2rem)] items-center gap-3 rounded-2xl border border-[rgba(125,211,252,0.28)] bg-[rgba(8,12,24,0.92)] px-4 py-3 text-left shadow-[0_18px_60px_rgba(2,6,23,0.55)] backdrop-blur-md transition-all hover:-translate-y-1 hover:border-[rgba(125,211,252,0.45)] hover:bg-[rgba(12,18,34,0.96)] sm:bottom-6 sm:right-6 sm:px-5"
      aria-label="WhatsApp'tan yaz"
    >
      <span
        aria-hidden="true"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)] text-sm font-bold text-slate-950 shadow-[0_10px_28px_rgba(56,189,248,0.25)]"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.4 18.2 4.5 20l.55-2.72A8.1 8.1 0 1 1 12 20.1a8 8 0 0 1-5.6-1.9Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.3 8.6c.18-.38.36-.44.66-.44h.5c.2 0 .36.08.45.3l.62 1.43c.08.2.05.4-.1.56l-.35.39c-.12.14-.14.32-.04.48.43.73 1.04 1.34 1.84 1.82.17.1.36.08.5-.05l.42-.38c.15-.14.34-.18.53-.1l1.47.64c.2.09.3.25.3.47v.45c0 .42-.18.7-.55.86-.47.2-.98.26-1.52.18-1.16-.16-2.42-.86-3.56-2-1.12-1.12-1.84-2.4-2-3.56-.08-.48-.02-.95.17-1.35Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-white sm:hidden">WhatsApp</span>
        <span className="hidden text-sm font-semibold text-white sm:block">
          WhatsApp’tan Yaz
        </span>
        <span className="hidden text-xs leading-5 text-slate-400 md:block">
          İşletmeniz için sistemi konuşalım
        </span>
      </span>
    </a>
  );
}
