import Image from "next/image";
import Link from "next/link";
import { works } from "@/content/ja";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { WorkCard } from "@/components/ui/WorkCard";

const TEASER_COUNT = 3;

export function WorksTeaser() {
  const featured = works.items.slice(0, TEASER_COUNT);

  return (
    <section
      id="works"
      className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 md:px-12 md:py-24"
    >
      <Image
        src="/images/decorations/deco_plus_scatter.png"
        alt=""
        width={280}
        height={280}
        className="deco-image pointer-events-none absolute right-0 top-5 hidden w-[220px] opacity-35 lg:block"
      />
      <RevealOnScroll distanceY={20} scale={1}>
        <SectionEyebrow label="Works" />
      </RevealOnScroll>
      <RevealOnScroll delay={70} distanceY={34}>
        <h2 className="mb-4 text-3xl font-extrabold sm:text-[38px]">{works.title}</h2>
      </RevealOnScroll>
      <RevealOnScroll delay={130} distanceY={30}>
        <p className="mb-12 max-w-xl text-base text-text-muted sm:mb-14">{works.subtitle}</p>
      </RevealOnScroll>
      <div className="relative grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-3">
        {featured.map((project, i) => (
          <RevealOnScroll key={project.slug} delay={180 + i * 130} distanceY={50} className="h-full">
            <WorkCard project={project} />
          </RevealOnScroll>
        ))}
      </div>
      <RevealOnScroll delay={180 + featured.length * 130} distanceY={24} scale={0.97}>
        <Link
          href="/works"
          className="mt-12 inline-flex items-center gap-2.5 rounded-lg border border-accent px-6 py-3.5 font-mono text-[15px] text-accent transition-colors hover:bg-accent/10 sm:mt-14"
        >
          &gt; view all works <span>&#8594;</span>
        </Link>
      </RevealOnScroll>
    </section>
  );
}
