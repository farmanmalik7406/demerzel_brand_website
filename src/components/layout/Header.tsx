import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navItems } from "../../data/navigation";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/90 text-white backdrop-blur-xl">
      <a className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-field focus:p-3 focus:text-ink" href="#main">
        Skip to content
      </a>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link aria-label="DEMERZEL home" className="group flex items-center gap-3" to="/">
          <span className="grid h-10 w-10 place-items-center rounded-sm border border-field/60 text-sm font-black text-field">D</span>
          <span className="text-base font-black tracking-[0.16em]">DEMERZEL</span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <NavLink className={({ isActive }) => `text-sm font-semibold text-white/70 transition hover:text-white ${isActive ? "text-field" : ""}`} key={item.label} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link className="rounded-md border border-white/25 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10" to="/contact">
            Contact
          </Link>
        </div>
        <button
          aria-controls="mobile-nav"
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="rounded-md border border-white/20 p-2 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-ink lg:hidden" id="mobile-nav">
          <nav aria-label="Mobile navigation" className="mx-auto grid max-w-7xl gap-1 px-5 py-5">
            {navItems.map((item) => (
              <Link className="rounded-md px-2 py-4 text-2xl font-bold text-white" key={item.label} onClick={() => setOpen(false)} to={item.to}>
                {item.label}
              </Link>
            ))}
            <Link className="mt-3 rounded-md bg-field px-4 py-4 text-center font-bold text-ink" onClick={() => setOpen(false)} to="/contact">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
