import type { ReactNode } from "react";

type SurfaceCardProps = {
  children: ReactNode;
  className?: string;
};

export function SurfaceCard({ children, className }: SurfaceCardProps) {
  return (
    <article
      className={`surface rounded-2xl p-6 sm:p-7 ${className ?? ""}`}
    >
      {children}
    </article>
  );
}
