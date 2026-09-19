import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import type { Internship } from "@/lib/types";

const LINK_LABEL: Record<string, string> = {
  github: "GitHub",
  demo: "Demo",
  docs: "Docs",
};

export function InternshipDetail({ internship }: { internship: Internship }) {
  const linkEntries = Object.entries(internship.links ?? {}).filter(
    (entry): entry is [string, string] => Boolean(entry[1]),
  );

  return (
    <section className="relative mx-auto max-w-[860px] px-5 py-20 sm:px-8 md:px-12 md:py-24">
      <RevealOnScroll distanceY={20} scale={1}>
        <Link
          href="/internships"
          className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-text-muted transition-colors hover:text-accent"
        >
          <span>&#8592;</span> back to internships
        </Link>
      </RevealOnScroll>
      <RevealOnScroll delay={60} distanceY={20} scale={1}>
        <SectionEyebrow label="Internship" />
      </RevealOnScroll>
      <RevealOnScroll delay={110} distanceY={34}>
        <h1 className="mb-3 text-3xl font-extrabold sm:text-[38px]">{internship.title}</h1>
      </RevealOnScroll>
      {(internship.period || internship.meta) && (
        <RevealOnScroll delay={150} distanceY={24}>
          <p className="mb-8 font-mono text-sm text-accent">
            {[internship.period, internship.meta].filter(Boolean).join(" / ")}
          </p>
        </RevealOnScroll>
      )}
      {internship.thumbnail && (
        <RevealOnScroll delay={190} distanceY={40}>
          <div className="relative mb-10 aspect-[16/10] w-full overflow-hidden rounded-xl border border-border bg-bg-alt">
            <Image
              src={internship.thumbnail}
              alt={`${internship.title}のスクリーンショット`}
              fill
              sizes="860px"
              className="object-cover object-top"
            />
          </div>
        </RevealOnScroll>
      )}
      {internship.tags.length > 0 && (
        <RevealOnScroll delay={230} distanceY={24}>
          <div className="mb-10 flex flex-wrap gap-2">
            {internship.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-accent px-2.5 py-1 font-mono text-xs text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        </RevealOnScroll>
      )}
      <div className="space-y-6">
        {(internship.body ?? [internship.summary]).map((paragraph, i) => (
          <RevealOnScroll key={i} delay={260 + i * 90} distanceY={30}>
            <p className="text-base leading-relaxed text-text-muted">{paragraph}</p>
          </RevealOnScroll>
        ))}
      </div>
      {linkEntries.length > 0 && (
        <RevealOnScroll delay={260 + (internship.body?.length ?? 1) * 90} distanceY={24}>
          <div className="mt-10 flex flex-wrap gap-6 border-t border-border pt-6">
            {linkEntries.map(([key, href]) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm text-text hover:text-accent"
              >
                &gt; {LINK_LABEL[key] ?? key}
              </a>
            ))}
          </div>
        </RevealOnScroll>
      )}
    </section>
  );
}
