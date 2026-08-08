import { useEffect, useState } from "react";

type CapabilityNavItem = {
  id: string;
  label: string;
};

type CapabilityNavProps = {
  items: CapabilityNavItem[];
};

export function CapabilityNav({ items }: CapabilityNavProps) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const targets = items
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-36% 0px -55% 0px", threshold: [0.1, 0.35, 0.6] }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="sticky top-20 z-20 overflow-hidden rounded-full border border-ink/10 bg-white/95 px-4 py-3 shadow-soft backdrop-blur-xl backdrop-saturate-150 dark:bg-black/80 dark:text-white lg:px-6">
      <div className="flex gap-3 overflow-x-auto px-1 text-sm font-semibold uppercase tracking-[0.26em] text-ink scrollbar-none sm:justify-center">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`whitespace-nowrap rounded-full px-4 py-2 transition ${active === item.id ? "bg-ink text-white" : "text-ink/70 hover:bg-ink/5"}`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
