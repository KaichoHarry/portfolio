import Image from "next/image";
import Link from "next/link";
import { skills } from "@/content/ja";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 md:px-12 md:py-24"
    >
      <Image
        src="/images/decorations/deco_orbit_rings.png"
        alt=""
        width={170}
        height={170}
        className="deco-image pointer-events-none absolute right-5 top-2 hidden w-[140px] opacity-30 lg:block"
      />
      <Image
        src="/images/decorations/deco_dot_grid_patch.png"
        alt=""
        width={200}
        height={200}
        className="deco-image pointer-events-none absolute bottom-5 left-0 hidden w-[160px] opacity-30 lg:block"
      />
      <RevealOnScroll distanceY={20} scale={1}>
        <SectionEyebrow label="Skills" />
      </RevealOnScroll>
      <RevealOnScroll delay={70} distanceY={34}>
        <h2 className="mb-4 text-3xl font-extrabold sm:text-[38px]">{skills.title}</h2>
      </RevealOnScroll>
      <RevealOnScroll delay={130} distanceY={30}>
        <p className="mb-11 max-w-xl text-base text-text-muted">{skills.subtitle}</p>
      </RevealOnScroll>
      <div className="relative flex flex-wrap gap-2.5">
        {skills.items.map((skill, i) => (
          <RevealOnScroll key={skill.name} delay={150 + i * 55} distanceY={24} scale={0.95}>
            <span className="rounded-md border border-border px-3.5 py-1.5 font-mono text-[13px] text-text">
              {skill.name}
            </span>
          </RevealOnScroll>
        ))}
      </div>
      <RevealOnScroll delay={150 + skills.items.length * 55} distanceY={24} scale={0.97}>
        <Link
          href="/skills"
          className="mt-11 inline-flex items-center gap-2.5 rounded-lg border border-accent px-6 py-3.5 font-mono text-[15px] text-accent transition-colors hover:bg-accent/10"
        >
          &gt; view all skills <span>&#8594;</span>
        </Link>
      </RevealOnScroll>
    </section>
  );
}
