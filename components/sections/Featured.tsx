import { featured } from "@/content/ja";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { MediaKind } from "@/lib/types";

export const MEDIA_KIND_LABEL: Record<MediaKind, string> = {
  award: "Award",
  interview: "Interview",
  article: "Article",
  blog: "Blog",
};

export function Featured() {
  return (
    <section className="relative mx-auto max-w-[1440px] px-5 pb-12 pt-2 sm:px-8 md:px-12 md:pb-16">
      <RevealOnScroll distanceY={18} scale={1}>
        <SectionEyebrow label={featured.eyebrowLabel} />
      </RevealOnScroll>
      <RevealOnScroll delay={60} distanceY={24}>
        <h2 className="mb-2 text-xl font-bold sm:text-2xl">{featured.title}</h2>
      </RevealOnScroll>
      <RevealOnScroll delay={100} distanceY={20}>
        <p className="mb-7 max-w-xl text-sm text-text-muted">{featured.subtitle}</p>
      </RevealOnScroll>
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
        {featured.items.map((item, i) => (
          <RevealOnScroll key={item.href} delay={140 + i * 70} distanceY={24} scale={0.97}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col gap-3 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`rounded-md border px-2 py-0.5 font-mono text-[11px] ${
                    item.kind === "award"
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border text-text-muted"
                  }`}
                >
                  {MEDIA_KIND_LABEL[item.kind]}
                </span>
                <span className="text-text-muted transition-transform group-hover:translate-x-1">
                  &#8599;
                </span>
              </div>
              <div>
                <p className="mb-1 font-mono text-[11px] text-text-muted">{item.period}</p>
                <h3 className="text-[15px] font-bold leading-snug">{item.title}</h3>
              </div>
              <p className="flex-1 text-[13px] leading-relaxed text-accent">{item.highlight}</p>
              <p className="font-mono text-[11px] text-text-muted">
                {item.source}
                {item.note && <> · {item.note}</>}
              </p>
            </a>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
