import Image from "next/image";
import type { SkillItem } from "@/lib/types";

export function SkillBadge({ skill }: { skill: SkillItem }) {
  return (
    <div className="overflow-hidden rounded-[10px] border border-border bg-surface">
      <div className="flex gap-1.5 border-b border-border px-3 py-2.5">
        <span className="h-2 w-2 rounded-full bg-[#ff5f56]" />
        <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
        <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
      </div>
      <div className="flex flex-col items-center gap-3.5 px-3 py-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-border">
          <Image
            src={skill.icon}
            alt={skill.name}
            width={30}
            height={30}
            className="h-[30px] w-[30px] object-contain"
          />
        </div>
        <span className="font-mono text-[13.5px]">{skill.name}</span>
      </div>
    </div>
  );
}
