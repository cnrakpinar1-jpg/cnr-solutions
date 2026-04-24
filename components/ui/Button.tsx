import Link from "next/link";
import type { ReactNode } from "react";

type SharedProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  target?: string;
  rel?: string;
};

type LinkButtonProps = SharedProps & {
  href: string;
};

type NativeButtonProps = SharedProps & {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

function buttonClasses(variant: "primary" | "secondary", className?: string) {
  const base =
    "inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-semibold sm:px-6 sm:text-base";
  const variants = {
    primary:
      "bg-[var(--color-accent)] text-slate-950 shadow-[0_16px_40px_rgba(56,189,248,0.22)] hover:-translate-y-0.5 hover:bg-[var(--color-accent-strong)]",
    secondary:
      "border border-white/12 bg-white/4 text-white hover:-translate-y-0.5 hover:border-[rgba(125,211,252,0.34)] hover:bg-white/8",
  };

  return `${base} ${variants[variant]} ${className ?? ""}`.trim();
}

export function Button({
  children,
  href,
  variant = "primary",
  className,
  target,
  rel,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={buttonClasses(variant, className)}
    >
      {children}
    </Link>
  );
}

export function ActionButton({
  children,
  type = "button",
  disabled,
  onClick,
  variant = "primary",
  className,
}: NativeButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={buttonClasses(
        variant,
        `${disabled ? "cursor-not-allowed opacity-60" : ""} ${className ?? ""}`,
      )}
    >
      {children}
    </button>
  );
}
