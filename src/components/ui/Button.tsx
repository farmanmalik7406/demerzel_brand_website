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
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition duration-300",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4",
    variant === "primary" && "bg-field text-ink hover:bg-[#c3b174]",
    variant === "secondary" && "border border-white/30 text-white hover:border-white hover:bg-white/10",
    variant === "dark" && "bg-ink text-white hover:bg-forest"
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
