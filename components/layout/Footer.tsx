"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { footer } from "@/content/ja";

export function Footer() {
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return;
    event.preventDefault();
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-border px-5 py-9 sm:px-8 md:px-12">
      <div className="flex items-center gap-3">
        <Image
          src="/images/logo/logo_NH_mark_footer.png"
          alt="logo"
          width={30}
          height={30}
          className="h-[30px] w-[30px] object-contain"
        />
        <span className="font-mono text-sm font-semibold tracking-[3px]">{footer.name}</span>
      </div>
      <span className="font-mono text-[13px] text-text-muted">
        &copy; {footer.year} {footer.copyName}. All rights reserved.
      </span>
      <Link href="/" onClick={handleClick} className="font-mono text-[13px] hover:text-accent">
        &gt; back to top
      </Link>
    </footer>
  );
}
