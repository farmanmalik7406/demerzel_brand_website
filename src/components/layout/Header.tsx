import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navItems } from "../../data/navigation";
import ProductsMegaMenu from "../navigation/ProductsMegaMenu";

export function Header() {
  const [open, setOpen] = useState(false);
  const [showMega, setShowMega] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/95 text-white shadow-soft backdrop-blur-xl">
      <a className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-field focus:p-3 focus:text-ink" href="#main">
        Skip to content
      </a>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <Link aria-label="DEMERZEL home" className="group flex items-center gap-3" to="/">
          <span className="grid h-11 w-11 place-items-center rounded-2xl border border-field/50 bg-white/5 text-sm font-black text-field shadow-sm shadow-field/10">D</span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">DEMERZEL</p>
            <p className="text-sm font-black tracking-[0.18em] text-white">Field technology</p>
          </div>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            if (item.label === "Products") {
              return (
                <div key={item.label} className="relative" onMouseEnter={() => setShowMega(true)} onMouseLeave={() => setShowMega(false)}>
                  <NavLink className={({ isActive }) => `text-sm font-semibold text-white/75 transition hover:text-white ${isActive ? "text-brand" : ""}`} to={item.to}>
                    {item.label}
                  </NavLink>
                  {showMega && <ProductsMegaMenu />}
                </div>
              );
            }
            return (
              <NavLink className={({ isActive }) => `text-sm font-semibold text-white/75 transition hover:text-white ${isActive ? "text-brand" : ""}`} key={item.label} to={item.to}>
                {item.label}
              </NavLink>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-brand hover:bg-brand/10 hover:text-brand" to="/contact">
            Contact
          </Link>
        </div>
        <button
          aria-controls="mobile-nav"
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="rounded-full border border-white/20 p-2 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-ink/95 lg:hidden" id="mobile-nav">
          <nav aria-label="Mobile navigation" className="mx-auto grid max-w-7xl gap-1 px-5 py-5">
            {navItems.map((item) => (
              <Link className="rounded-3xl bg-white/5 px-4 py-4 text-lg font-semibold text-white transition hover:bg-white/10" key={item.label} onClick={() => setOpen(false)} to={item.to}>
                {item.label}
              </Link>
            ))}
            <Link className="mt-3 rounded-full bg-brand px-4 py-4 text-center font-semibold text-ink" onClick={() => setOpen(false)} to="/contact">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
