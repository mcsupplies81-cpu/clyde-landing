"use client";

import { ReactNode, useEffect, useRef } from "react";

export function ScrollFade({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("fadeInVisible");
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="fadeInEl" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
