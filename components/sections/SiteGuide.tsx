import Link from "next/link";
import { guide } from "@/content/ja";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function SiteGuide() {
  return (
    <section className="relative mx-auto max-w-[1440px] px-5 pb-10 pt-2 sm:px-8 md:px-12 md:pb-14">
      <RevealOnScroll distanceY={18} scale={1}>
        <SectionEyebrow label={guide.eyebrowLabel} />
      </RevealOnScroll>
      <RevealOnScroll delay={60} distanceY={24}>
        <h2 className="mb-2 text-xl font-bold sm:text-2xl">{guide.title}</h2>
      </RevealOnScroll>
      <RevealOnScroll delay={100} distanceY={20}>
        <p className="mb-7 max-w-xl text-sm text-text-muted">{guide.subtitle}</p>
      </RevealOnScroll>
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
        {guide.items.map((item, i) => (
          <RevealOnScroll key={item.label} delay={140 + i * 70} distanceY={24} scale={0.97}>
            <Link
              href={item.href}
              className="group flex h-full flex-col justify-between gap-3 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-semibold text-accent">{item.label}</span>
                <span className="text-text-muted transition-transform group-hover:translate-x-1">
                  &#8594;
                </span>
              </div>
              <p className="text-[13px] leading-relaxed text-text-muted">{item.description}</p>
            </Link>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
