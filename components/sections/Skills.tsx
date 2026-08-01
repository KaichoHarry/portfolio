import Image from "next/image";
import { skills } from "@/content/ja";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SkillBadge } from "@/components/ui/SkillBadge";

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
      <div className="relative grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {skills.items.map((skill, i) => (
          <RevealOnScroll
            key={skill.name}
            delay={150 + i * 55}
            distanceY={34}
            scale={0.9}
            className="h-full"
          >
            <SkillBadge skill={skill} />
          </RevealOnScroll>
        ))}
      </div>
      <div className="my-11 flex items-center gap-3.5 sm:my-14">
        <span className="whitespace-nowrap font-mono text-sm text-accent">&gt; {skills.otherLabel}</span>
        <span
          className="h-px flex-1"
          style={{
            backgroundImage: "repeating-linear-gradient(to right, var(--border) 0 6px, transparent 6px 12px)",
          }}
        />
      </div>
      <div className="flex flex-wrap gap-2.5">
        {skills.otherTools.map((tool) => (
          <span
            key={tool}
            className="rounded-md border border-border px-3.5 py-1.5 font-mono text-[13px] text-text-muted"
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}
