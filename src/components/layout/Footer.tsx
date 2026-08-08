import { Link } from "react-router-dom";
import { footerExplore } from "../../data/navigation";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Link className="text-xl font-black tracking-[0.16em]" to="/">DEMERZEL</Link>
          <p className="mt-4 max-w-sm text-lg text-white/70">Technology for the field.</p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-field">Explore</h2>
          <div className="mt-5 grid gap-3">
            {footerExplore.map((item) => <Link className="text-white/70 hover:text-white" key={item.label} to={item.to}>{item.label}</Link>)}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-field">Company</h2>
          <div className="mt-5 grid gap-3">
            <Link className="text-white/70 hover:text-white" to="/about">About</Link>
            <Link className="text-white/70 hover:text-white" to="/coming-soon">Projects</Link>
            <Link className="text-white/70 hover:text-white" to="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-field">Future</h2>
          <div className="mt-5 grid gap-3 text-white/70">
            <Link className="hover:text-white" to="/coming-soon">DEMERZEL FIELD</Link>
            <span>Coming Soon</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>Copyright {new Date().getFullYear()} DEMERZEL Enterprises.</p>
          <div className="flex gap-5">
            <Link to="/coming-soon">Privacy</Link>
            <Link to="/coming-soon">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
