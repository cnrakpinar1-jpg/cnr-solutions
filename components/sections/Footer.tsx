import { navigationLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-8">
      <div className="container-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-base font-semibold text-white">CNR Solutions</div>
          <p className="mt-1 text-sm">
            Internal tools and workflow systems for small businesses.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-slate-300 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#top" className="text-sm text-slate-300 hover:text-white">
                Back to top
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
