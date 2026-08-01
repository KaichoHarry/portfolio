"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distanceY?: number;
  distanceX?: number;
  scale?: number;
  immediate?: boolean;
};

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  distanceY = 46,
  distanceX = 0,
  scale = 0.92,
  immediate = false,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(immediate);

  useEffect(() => {
    if (immediate) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate]);

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translate(0, 0) scale(1)" : `translate(${distanceX}px, ${distanceY}px) scale(${scale})`,
    filter: visible ? "blur(0px)" : "blur(8px)",
    transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms, filter 0.9s ease ${delay}ms`,
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
