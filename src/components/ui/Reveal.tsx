import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  rootMargin?: string;
  threshold?: number;
};

export function Reveal({
  as: Component = "div",
  className = "",
  children,
  rootMargin = "0px 0px -140px 0px",
  threshold = 0.15
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible, rootMargin, threshold]);

  return (
    <Component
      ref={ref as any}
      className={`${className} transition-opacity duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {children}
    </Component>
  );
}
