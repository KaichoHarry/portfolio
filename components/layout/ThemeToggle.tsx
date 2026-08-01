"use client";

import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      onClick={toggleTheme}
      aria-label="toggle theme"
      className="relative h-7 w-[52px] shrink-0 rounded-full border border-border bg-surface"
    >
      <span
        className="absolute top-0.5 h-[22px] w-[22px] rounded-full bg-accent transition-[left] duration-300"
        style={{ left: isLight ? "26px" : "2px" }}
        suppressHydrationWarning
      />
    </button>
  );
}
