"use client";

import { useState } from "react";
import Image from "next/image";
import { CodeWindow } from "@/components/ui/CodeWindow";
import type { HeroPersonalItem } from "@/lib/types";

const TONE_CLASS: Record<string, string> = {
  default: "text-text",
  muted: "text-text-muted",
  accent: "text-accent",
  success: "text-[#7ee787]",
};

type HeroPersonalWindowProps = {
  filename: string;
  hint: string;
  items: HeroPersonalItem[];
};

export function HeroPersonalWindow({ filename, hint, items }: HeroPersonalWindowProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? items[activeIndex] : null;

  const toggle = (i: number) => setActiveIndex((current) => (current === i ? null : i));

  return (
    <CodeWindow filename={filename} className="relative min-h-[400px] sm:min-h-[440px] md:min-h-[480px]">
      <div className="overflow-x-auto px-4 py-4 font-mono text-[13px] leading-[1.9] sm:px-5 sm:text-[13.5px]">
        {items.map((item, i) => (
          <div
            key={`${item.text}-${i}`}
            role="button"
            tabIndex={0}
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex((current) => (current === i ? null : current))}
            onFocus={() => setActiveIndex(i)}
            onBlur={() => setActiveIndex((current) => (current === i ? null : current))}
            onClick={() => toggle(i)}
            className="-mx-1 whitespace-pre rounded px-1 outline-none transition-colors hover:bg-accent/10 focus-visible:bg-accent/10"
          >
            <span className="inline-block w-5 text-text-muted">{i + 1}</span>
            <span className={TONE_CLASS[item.tone ?? "default"]}>{item.text}</span>
          </div>
        ))}
        <div className="mt-3 font-mono text-[11px] text-text-muted/70">{`// ${hint}`}</div>
      </div>

      <div
        aria-hidden={!active}
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-bg/85 backdrop-blur-sm transition-opacity duration-300 ease-out"
        style={{ opacity: active ? 1 : 0 }}
      >
        <div
          className="w-[78%] -rotate-2 overflow-hidden rounded-xl border-2 border-accent bg-bg shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out sm:w-[64%]"
          style={{ transform: active ? "translateY(0) scale(1) rotate(-2deg)" : "translateY(14px) scale(0.92) rotate(-2deg)" }}
        >
          {active && (
            <>
              <Image
                src={active.photo}
                alt={active.caption}
                width={480}
                height={480}
                className="h-56 w-full object-cover sm:h-64 md:h-72"
              />
              <div className="px-3 py-2 font-mono text-xs leading-tight text-text-muted">{active.caption}</div>
            </>
          )}
        </div>
      </div>
    </CodeWindow>
  );
}
