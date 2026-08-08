import React from "react";
import { Link } from "react-router-dom";

export type Crumb = { label: string; to?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="text-sm text-charcoal/60" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-2">
        {items.map((it, i) => (
          <li key={i} className="inline-flex items-center">
            {it.to ? (
              <Link to={it.to} className="hover:underline text-sm text-charcoal/60">{it.label}</Link>
            ) : (
              <span className="text-sm text-charcoal/60">{it.label}</span>
            )}
            {i < items.length - 1 && <span className="mx-2">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
