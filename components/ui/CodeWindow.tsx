import type { ReactNode } from "react";

type CodeWindowProps = {
  filename: string;
  children: ReactNode;
  className?: string;
  dotSize?: "sm" | "md";
};

export function CodeWindow({ filename, children, className, dotSize = "md" }: CodeWindowProps) {
  const dot = dotSize === "sm" ? "h-[9px] w-[9px]" : "h-[11px] w-[11px]";
  const barPad = dotSize === "sm" ? "px-3.5 py-2.5" : "px-4 py-3";

  return (
    <div
      className={`overflow-hidden rounded-xl border border-border bg-surface shadow-[0_24px_60px_rgba(0,0,0,0.3)] ${className ?? ""}`}
    >
      <div className={`flex items-center justify-between border-b border-border ${barPad}`}>
        <div className="flex gap-1.5 sm:gap-2">
          <span className={`${dot} rounded-full bg-[#ff5f56]`} />
          <span className={`${dot} rounded-full bg-[#ffbd2e]`} />
          <span className={`${dot} rounded-full bg-[#27c93f]`} />
        </div>
        <span className="font-mono text-[11px] text-text-muted sm:text-xs">{filename}</span>
      </div>
      {children}
    </div>
  );
}
