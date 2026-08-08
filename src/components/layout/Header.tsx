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
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!showMega) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowMega(false);
      }
    };

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, [showMega]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const clearHoverTimeout = () => {
    if (hoverTimeout.current) {
      window.clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
  };

  const openMegaMenu = () => {
    clearHoverTimeout();
    setShowMega(true);
  };

  const closeMegaMenu = (delay = 150) => {
    clearHoverTimeout();

    hoverTimeout.current = window.setTimeout(() => {
      setShowMega(false);
    }, delay);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "bg-navy/95 border-b border-white/10 shadow-soft"
            : "bg-navy/10 border-b border-white/10"
        }`}
      >
        {/* Skip Navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>

        <div
          className={`mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 transition-all duration-300 lg:px-8 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex shrink-0 items-center gap-3"
            aria-label="Demerzel home"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand/50 bg-brand/10">
              <span className="text-lg font-black text-brand">D</span>
            </div>

            <div className="hidden sm:block">
              <div className="text-lg font-bold tracking-[0.18em] text-white">
                DEMERZEL
              </div>

              <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-brand">
                Field technology
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Main navigation"
          >
            {navItems.map((item) => {
              if (item.label === "Products") {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={openMegaMenu}
                    onMouseLeave={() => closeMegaMenu(150)}
                  >
                    <NavLink
                      to={item.to}
                      aria-expanded={showMega}
                      onFocus={openMegaMenu}
                      onBlur={() => closeMegaMenu(200)}
                      className={({ isActive }) =>
                        `text-sm font-semibold transition-colors duration-200 ${
                          isActive
                            ? "text-brand"
                            : "text-gray-400 hover:text-brand"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>

                    {showMega && (
                      <div
                        onMouseEnter={openMegaMenu}
                        onMouseLeave={() => closeMegaMenu(150)}
                      >
                        <ProductsMegaMenu />
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    `text-sm font-semibold transition-colors duration-200 ${
                      isActive
                        ? "text-brand"
                        : "text-gray-400 hover:text-brand"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Desktop Contact */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-white"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-controls="mobile-nav"
            aria-expanded={open}
            aria-label={open ? "Close navigation" : "Open navigation"}
            className="rounded-full border border-white/20 p-2 text-gray-400 transition-colors duration-200 hover:border-brand hover:text-brand lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <div
            id="mobile-nav"
            className="border-t border-white/10 bg-navy/98 px-5 pb-6 pt-4 lg:hidden"
          >
            <nav
              className="flex flex-col gap-3"
              aria-label="Mobile navigation"
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl bg-white/5 px-5 py-5 text-center text-2xl font-semibold text-gray-400 transition-colors duration-200 hover:bg-white/10 hover:text-brand"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 block rounded-full bg-brand py-4 text-center font-semibold text-ink transition-colors duration-200 hover:bg-white"
              >
                Contact
              </Link>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-2 py-2 text-sm text-gray-500 transition-colors duration-200 hover:text-brand"
              >
                Close
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}