import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navItems } from "../../data/navigation";
import ProductsMegaMenu from "../navigation/ProductsMegaMenu";

export function Header() {
  const [open, setOpen] = useState(false);
  const [showMega, setShowMega] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const hoverTimeout = useRef<number | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!showMega) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowMega(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showMega]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 backdrop-blur-xl ${
        scrolled ? "h-16 bg-navy border-b border-white/10 shadow-soft" : "h-24 bg-transparent"
      } text-white`}
    >
      <a className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-field focus:p-3 focus:text-ink" href="#main">
        Skip to content
      </a>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <Link aria-label="DEMERZEL home" className="group flex items-center gap-3" to="/">
          <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/5 bg-white/5 text-sm font-black text-field shadow-sm">D</span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">DEMERZEL</p>
            <p className="text-sm font-black tracking-[0.18em] text-white">Field technology</p>
          </div>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            if (item.label === "Products") {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    if (hoverTimeout.current) window.clearTimeout(hoverTimeout.current);
                    hoverTimeout.current = window.setTimeout(() => setShowMega(true), 80);
                  }}
                  onMouseLeave={() => {
                    if (hoverTimeout.current) window.clearTimeout(hoverTimeout.current);
                    hoverTimeout.current = window.setTimeout(() => setShowMega(false), 150);
                  }}
                >
                  <NavLink
                    aria-expanded={showMega}
                    onFocus={() => setShowMega(true)}
                    onBlur={() => {
                      // small delay to allow focus to move into megamenu
                      if (hoverTimeout.current) window.clearTimeout(hoverTimeout.current);
                      hoverTimeout.current = window.setTimeout(() => setShowMega(false), 200);
                    }}
                    className={({ isActive }) => `text-sm font-semibold text-white/75 transition hover:text-white ${isActive ? "text-brand" : ""}`}
                    to={item.to}
                  >
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
          <Link className="rounded-full border border-white/10 bg-brand px-4 py-2 text-sm font-semibold text-ink transition hover:bg-brand/90" to="/contact">
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
        <div className="fixed inset-0 z-60 flex flex-col bg-navy/98 lg:hidden" id="mobile-nav">
          <div className="mx-auto mt-20 w-full max-w-lg px-6">
            <nav aria-label="Mobile navigation" className="grid gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  onClick={() => setOpen(false)}
                  to={item.to}
                  className="block rounded-2xl bg-white/5 py-5 px-5 text-2xl font-semibold text-white/95 text-center transition"
                >
                  {item.label}
                </Link>
              ))}
              <Link onClick={() => setOpen(false)} to="/contact" className="mt-4 block rounded-full bg-brand py-4 text-center font-semibold text-ink">
                Contact
              </Link>
            </nav>
          </div>
          <div className="mt-auto px-6 pb-12 text-center">
            <button onClick={() => setOpen(false)} className="text-sm text-white/60">Close</button>
          </div>
        </div>
      )}
    </header>
  );
}
