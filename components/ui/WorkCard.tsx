import type { Project } from "@/lib/types";

const LINK_LABEL: Record<string, string> = {
  github: "GitHub",
  demo: "Demo",
  docs: "Docs",
};

export function WorkCard({ project }: { project: Project }) {
  const linkEntries = Object.entries(project.links).filter((entry): entry is [string, string] => Boolean(entry[1]));

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex items-center justify-between border-b border-border px-3.5 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-[9px] w-[9px] rounded-full bg-[#ff5f56]" />
          <span className="h-[9px] w-[9px] rounded-full bg-[#ffbd2e]" />
          <span className="h-[9px] w-[9px] rounded-full bg-[#27c93f]" />
        </div>
        <span className="font-mono text-[11px] text-text-muted">{project.filename}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="text-xl font-bold">{project.title}</h3>
          {project.status === "coming-soon" && (
            <span className="whitespace-nowrap rounded-md border border-accent px-2 py-0.5 font-mono text-[11px] text-accent">
              coming soon
            </span>
          )}
        </div>
        {project.meta && <p className="mb-2 font-mono text-xs text-accent">{project.meta}</p>}
        <p className="mb-4 flex-1 text-[14.5px] leading-relaxed text-text-muted">{project.summary}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-accent px-2.5 py-1 font-mono text-xs text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
        {linkEntries.length > 0 && (
          <div className="flex flex-wrap gap-4 border-t border-border pt-3">
            {linkEntries.map(([key, href]) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-text hover:text-accent"
              >
                &gt; {LINK_LABEL[key] ?? key}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
