"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import type { KeyboardEvent } from "react";
import type { Internship } from "@/lib/types";

export function InternshipCard({ internship }: { internship: Internship }) {
  const router = useRouter();
  const isLinkable = internship.status !== "coming-soon";

  const openDetail = () => {
    if (isLinkable) router.push(`/internships/${internship.slug}`);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!isLinkable) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openDetail();
    }
  };

  return (
    <div
      role={isLinkable ? "link" : undefined}
      tabIndex={isLinkable ? 0 : undefined}
      onClick={isLinkable ? openDetail : undefined}
      onKeyDown={isLinkable ? handleKeyDown : undefined}
      className={`group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors ${
        isLinkable ? "cursor-pointer hover:border-accent" : ""
      }`}
    >
      <div className="flex items-center justify-between border-b border-border px-3.5 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-[9px] w-[9px] rounded-full bg-[#ff5f56]" />
          <span className="h-[9px] w-[9px] rounded-full bg-[#ffbd2e]" />
          <span className="h-[9px] w-[9px] rounded-full bg-[#27c93f]" />
        </div>
        <span className="font-mono text-[11px] text-text-muted">{internship.filename}</span>
      </div>
      {internship.thumbnail && (
        <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-bg-alt">
          <Image
            src={internship.thumbnail}
            alt={`${internship.title}のスクリーンショット`}
            fill
            sizes="(min-width: 768px) 380px, 300px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="text-xl font-bold">{internship.title}</h3>
          {internship.status === "coming-soon" && (
            <span className="whitespace-nowrap rounded-md border border-accent px-2 py-0.5 font-mono text-[11px] text-accent">
              coming soon
            </span>
          )}
        </div>
        {(internship.meta || internship.period) && (
          <p className="mb-2 font-mono text-xs text-accent">
            {[internship.period, internship.meta].filter(Boolean).join(" / ")}
          </p>
        )}
        <p className="mb-4 flex-1 text-[14.5px] leading-relaxed text-text-muted">{internship.summary}</p>
        {internship.tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {internship.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-accent px-2.5 py-1 font-mono text-xs text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {isLinkable && (
          <div className="flex flex-wrap gap-4 border-t border-border pt-3">
            <span className="font-mono text-xs text-text group-hover:text-accent">&gt; 詳細を見る</span>
          </div>
        )}
      </div>
    </div>
  );
}
