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
        W
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
