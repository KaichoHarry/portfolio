import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SkillDetailCard } from "@/components/ui/SkillDetailCard";
import { skills } from "@/content/ja";

export default function SkillsPage() {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <main className="relative mx-auto max-w-[1440px] px-5 pb-24 pt-14 sm:px-8 md:px-12 md:pb-32 md:pt-20">
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
        <SectionEyebrow label="Skills" />
        <h1 className="mb-4 text-3xl font-extrabold sm:text-[38px]">{skills.title}</h1>
        <p className="mb-3 max-w-xl text-base text-text-muted">{skills.subtitle}</p>
        <p className="mb-11 max-w-xl font-mono text-xs text-accent">{`// ${skills.detailHint}`}</p>

        <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.items.map((skill) => (
            <SkillDetailCard key={skill.name} skill={skill} />
          ))}
        </div>

        <div className="my-11 flex items-center gap-3.5 sm:my-14">
          <span className="whitespace-nowrap font-mono text-sm text-accent">&gt; {skills.aiToolsTitle}</span>
          <span
            className="h-px flex-1"
            style={{
              backgroundImage: "repeating-linear-gradient(to right, var(--border) 0 6px, transparent 6px 12px)",
            }}
          />
        </div>
        <p className="mb-8 max-w-xl text-base text-text-muted">{skills.aiToolsSubtitle}</p>
        <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.aiTools.map((tool) => (
            <SkillDetailCard key={tool.name} skill={tool} />
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
      </main>
      <Footer />
    </div>
  );
}
