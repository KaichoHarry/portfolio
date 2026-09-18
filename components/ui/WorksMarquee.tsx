"use client";

import { useMarquee } from "@/hooks/useMarquee";
import { WorkCard } from "@/components/ui/WorkCard";
import type { Project } from "@/lib/types";

export function WorksMarquee({ projects }: { projects: Project[] }) {
  const { containerRef, handlers } = useMarquee<HTMLDivElement>();
  const loopItems = [...projects, ...projects];

  return (
    <div
      ref={containerRef}
      className="scrollbar-hide flex cursor-grab gap-7 overflow-x-auto select-none [mask-image:linear-gradient(to_right,transparent,black_24px,black_calc(100%-24px),transparent)] active:cursor-grabbing"
      {...handlers}
    >
      {loopItems.map((project, i) => (
        <div key={`${project.slug}-${i}`} className="w-[300px] shrink-0 sm:w-[340px] md:w-[380px]">
          <WorkCard project={project} />
        </div>
      ))}
    </div>
  );
}
