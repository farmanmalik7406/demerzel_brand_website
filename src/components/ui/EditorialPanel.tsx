import { type ReactNode } from "react";

type EditorialPanelProps = {
  eyebrow: string;
  title: string;
  copy: string;
  cta?: { label: string; to: string };
  children?: ReactNode;
  light?: boolean;
};

export function EditorialPanel({ eyebrow, title, copy, cta, children, light }: EditorialPanelProps) {
  return (
    <section className={`relative overflow-hidden px-5 py-20 lg:px-8 ${light ? "bg-ink text-white" : "bg-stone text-ink"}`}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className={`mb-5 text-xs font-bold uppercase tracking-[0.24em] ${light ? "text-field" : "text-olive"}`}>{eyebrow}</p>
          <h2 className={`text-4xl font-black leading-tight md:text-6xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>
          <p className={`mt-6 max-w-2xl text-lg leading-8 ${light ? "text-white/75" : "text-charcoal/75"}`}>{copy}</p>
          {cta && (
            <div className="mt-8">
              <a className="inline-flex items-center gap-2 border-b border-current pb-1 text-sm font-semibold uppercase tracking-[0.22em] text-field transition hover:text-white" href={cta.to}>
                {cta.label}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          )}
        </div>
        {children && <div className="mt-16">{children}</div>}
      </div>
    </section>
  );
}
