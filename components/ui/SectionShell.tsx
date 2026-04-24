import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function SectionShell({ id, className, children }: SectionShellProps) {
  return (
    <section id={id} className={`section-spacing relative ${className ?? ""}`}>
      <div aria-hidden="true" className="section-veil pointer-events-none absolute inset-x-0 inset-y-6" />
      <div
        aria-hidden="true"
        className="section-fade-top pointer-events-none absolute inset-x-8 -top-10 h-28 rounded-full"
      />
      <div
        aria-hidden="true"
        className="section-fade-bottom pointer-events-none absolute inset-x-8 -bottom-10 h-28 rounded-full"
      />
      <div className="container-shell relative z-10">{children}</div>
    </section>
  );
}
