import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type ButtonProps = {
  to?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
  type?: "button" | "submit";
};

export function Button({ to, children, variant = "primary", type = "button" }: ButtonProps) {
  const className = [
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-md border px-5 py-3 text-sm font-semibold transition duration-300",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4",
    "group",
    variant === "primary" && "border-transparent bg-brand text-ink shadow-sm shadow-brand/20 hover:bg-brand/90 focus-visible:outline-brand",
    variant === "secondary" && "border border-white/30 bg-white/5 text-white hover:border-brand hover:bg-white/10",
    variant === "dark" && "border-transparent bg-ink text-white hover:bg-forest"
  ]
    .filter(Boolean)
    .join(" ");

  if (to) {
    return (
      <Link className={className} to={to}>
        {children}
        <ArrowRight aria-hidden="true" size={17} />
      </Link>
    );
  }

  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
}
