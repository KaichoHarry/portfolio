"use client";

import Image from "next/image";
import type { MouseEvent } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { nav, footer } from "@/content/ja";
import { ThemeToggle } from "./ThemeToggle";

const SECTION_IDS = nav.map((item) => item.id);

export function Header() {
  const activeId = useScrollSpy(SECTION_IDS);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-4 border-b border-border bg-bg/80 px-5 py-4 backdrop-blur-md sm:px-8 md:px-12">
      <div className="flex shrink-0 items-center gap-3">
        <Image
          src="/images/logo/logo_NH_mark.png"
          alt="logo"
          width={36}
          height={36}
          className="h-8 w-8 object-contain sm:h-9 sm:w-9"
        />
        <span className="hidden font-mono text-[15px] font-semibold tracking-[3px] sm:inline">
          {footer.name}
        </span>
      </div>
      <nav className="flex items-center gap-4 overflow-x-auto sm:gap-6 md:gap-9">
        {nav.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={(event) => handleNavClick(event, item.id)}
            className="relative shrink-0 pb-1.5 font-mono text-[13px] transition-colors sm:text-[14.5px]"
            style={{ color: activeId === item.id ? "var(--accent)" : "var(--text)" }}
          >
            {item.label}
            {activeId === item.id && (
              <span className="absolute -bottom-1 left-1/2 h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-accent" />
            )}
          </a>
        ))}
      </nav>
      <ThemeToggle />
    </header>
  );
}
