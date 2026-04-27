import type { ReactNode } from "react";

type SurfaceCardProps = {
  children: ReactNode;
  className?: string;
};

export function SurfaceCard({ children, className }: SurfaceCardProps) {
  return (
    <article
      className={`surface rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_22px_70px_rgba(2,6,23,0.44)] sm:p-7 ${className ?? ""}`}
    >
      {children}
    </article>
  );
}
