import Image from "next/image";
import type { SkillItem } from "@/lib/types";

const LEVEL_MAX = 5;

export function SkillDetailCard({ skill }: { skill: SkillItem }) {
  const level = skill.level ?? 0;

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-[9px] w-[9px] rounded-full bg-[#ff5f56]" />
          <span className="h-[9px] w-[9px] rounded-full bg-[#ffbd2e]" />
          <span className="h-[9px] w-[9px] rounded-full bg-[#27c93f]" />
        </div>
        {skill.years && <span className="font-mono text-[11px] text-text-muted">{skill.years}</span>}
      </div>
      <div className="flex flex-1 flex-col gap-3.5 p-5">
        <div className="flex items-center gap-3.5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] border border-border">
            {skill.icon ? (
              <Image src={skill.icon} alt={skill.name} width={26} height={26} className="h-[26px] w-[26px] object-contain" />
            ) : (
              <span className="font-mono text-xs font-semibold text-accent">
                {skill.name.slice(0, 2).toUpperCase()}
              </span>
            )}
          </div>
          <div>
            <div className="font-mono text-[15px] font-semibold">{skill.name}</div>
            {skill.level !== undefined && (
              <div className="mt-1 flex gap-1" aria-label={`level ${level} / ${LEVEL_MAX}`}>
                {Array.from({ length: LEVEL_MAX }).map((_, i) => (
                  <span
                    key={i}
                    className="h-1.5 w-4 rounded-full"
                    style={{ backgroundColor: i < level ? "var(--accent)" : "var(--border)" }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        {skill.description && (
          <p className="text-[13.5px] leading-relaxed text-text-muted">{skill.description}</p>
        )}
        {skill.tools && skill.tools.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
            {skill.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-md border border-border px-2 py-1 font-mono text-[11px] text-text-muted"
              >
                {tool}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
