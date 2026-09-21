"use client";

import Image from "next/image";
import type { KeyboardEvent } from "react";
import type { Project } from "@/lib/types";

const LINK_LABEL: Record<string, string> = {
  github: "GitHub",
  demo: "Demo",
  docs: "Docs",
};

export function WorkCard({ project }: { project: Project }) {
  const linkEntries = Object.entries(project.links).filter((entry): entry is [string, string] => Boolean(entry[1]));
  const primaryHref = project.links.demo ?? project.links.github ?? project.links.docs;

  const openPrimary = () => {
    if (primaryHref) window.open(primaryHref, "_blank", "noreferrer");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!primaryHref) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openPrimary();
    }
  };

  return (
    <div
      role={primaryHref ? "link" : undefined}
      tabIndex={primaryHref ? 0 : undefined}
      onClick={primaryHref ? openPrimary : undefined}
      onKeyDown={primaryHref ? handleKeyDown : undefined}
      className={`group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors ${
        primaryHref ? "cursor-pointer hover:border-accent" : ""
      }`}
    >
      <div className="flex items-center justify-between border-b border-border px-3.5 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-[9px] w-[9px] rounded-full bg-[#ff5f56]" />
          <span className="h-[9px] w-[9px] rounded-full bg-[#ffbd2e]" />
          <span className="h-[9px] w-[9px] rounded-full bg-[#27c93f]" />
        </div>
        <span className="font-mono text-[11px] text-text-muted">{project.filename}</span>
      </div>
      {project.thumbnail && (
        <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-bg-alt">
          <Image
            src={project.thumbnail}
            alt={`${project.title}のスクリーンショット`}
            fill
            sizes="(min-width: 768px) 380px, 300px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          {primaryHref && (
            <div className="pointer-events-none absolute inset-0 flex items-end justify-end bg-black/0 p-3 opacity-0 transition-all duration-300 group-hover:bg-black/25 group-hover:opacity-100">
              <span className="rounded-md border border-white/40 bg-black/60 px-2.5 py-1 font-mono text-[11px] text-white backdrop-blur-sm">
                &gt; open ↗
              </span>
            </div>
          )}
        </div>
      )}
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
        {project.techNote && (
          <p className="mb-4 rounded-lg border border-border bg-bg-alt/60 px-3 py-2.5 font-mono text-[12px] leading-relaxed text-text-muted">
            <span className="text-accent">$ why —</span> {project.techNote}
          </p>
        )}
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
                onClick={(event) => event.stopPropagation()}
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
