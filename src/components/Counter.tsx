"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  to: number;
  duration?: number;
  format?: (n: number) => string;
}

export function Counter({ to, duration = 1800, format }: CounterProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId = 0;
    let cancelled = false;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting || started.current) return;
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            if (cancelled) return;
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(Math.round(to * eased));
            if (t < 1) rafId = requestAnimationFrame(tick);
          };
          rafId = requestAnimationFrame(tick);
        });
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      obs.disconnect();
      started.current = false;
    };
  }, [to, duration]);

  return <span ref={ref}>{format ? format(value) : value.toLocaleString("en-US")}</span>;
}
