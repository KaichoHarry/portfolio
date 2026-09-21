import Image from "next/image";
import { about } from "@/content/ja";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function About() {
  const { profile } = about;

  return (
    <section
      id="about"
      className="relative mx-auto max-w-[1440px] overflow-hidden px-5 py-20 sm:px-8 md:px-12 md:py-24"
    >
      <Image
        src="/images/decorations/deco_mesh_nodes.png"
        alt=""
        width={160}
        height={130}
        className="deco-image pointer-events-none absolute left-0 top-4 hidden w-[130px] opacity-30 lg:block"
      />
      <Image
        src="/images/decorations/deco_cube_wireframe_about.png"
        alt=""
        width={130}
        height={130}
        className="deco-image pointer-events-none absolute right-4 top-16 hidden w-[110px] opacity-55 lg:block"
      />
      <Image
        src="/images/decorations/deco_dot_grid_patch.png"
        alt=""
        width={150}
        height={150}
        className="deco-image pointer-events-none absolute right-0 top-[520px] hidden w-[130px] opacity-25 xl:block"
      />
      <Image
        src="/images/decorations/deco_plus_scatter.png"
        alt=""
        width={140}
        height={140}
        className="deco-image pointer-events-none absolute left-2 top-[620px] hidden w-[110px] opacity-40 xl:block"
      />
      <Image
        src="/images/decorations/deco_orbit_rings.png"
        alt=""
        width={140}
        height={140}
        className="deco-image pointer-events-none absolute left-0 bottom-10 hidden w-[120px] opacity-30 lg:block"
      />
      <Image
        src="/images/decorations/deco_terminal_chip.png"
        alt=""
        width={150}
        height={90}
        className="deco-image pointer-events-none absolute right-2 bottom-16 hidden w-[130px] opacity-45 lg:block"
      />

      <div className="relative z-10 mx-auto max-w-[700px]">
        <RevealOnScroll distanceY={20} scale={1} className="flex justify-center">
          <SectionEyebrow label="About" />
        </RevealOnScroll>
        <RevealOnScroll delay={80} distanceY={34}>
          <h2 className="mb-5 text-center text-3xl font-extrabold leading-snug sm:text-[38px]">
            {about.headline1} <span className="text-accent">{about.headlineHighlight}</span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={140} distanceY={26}>
          <div className="mb-4 text-center font-mono text-[13px] text-text-muted">
            {profile.role} <span className="text-border">·</span> {profile.affiliation}{" "}
            <span className="text-border">·</span> {profile.location}
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={180} distanceY={26}>
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {profile.focus.map((item) => (
              <span
                key={item}
                className="rounded-full border border-accent/40 bg-accent/5 px-3 py-1 font-mono text-[12px] text-accent"
              >
                {item}
              </span>
            ))}
            {profile.techStack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border px-3 py-1 font-mono text-[12px] text-text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={210} distanceY={28} scale={0.98}>
          <div className="mb-14 rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h3 className="mb-1.5 text-lg font-bold sm:text-xl">{about.capabilitiesTitle}</h3>
            <p className="mb-6 text-sm leading-relaxed text-text-muted">{about.capabilitiesSubtitle}</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {about.capabilities.map((item) => (
                <div key={item.area} className="rounded-lg border border-border px-4 py-3.5">
                  <div className="mb-1 font-mono text-[13px] font-semibold text-accent">{item.area}</div>
                  <p className="text-[13.5px] leading-relaxed text-text-muted">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {about.paragraphs.map((text, i) => (
          <RevealOnScroll key={text.slice(0, 12)} delay={260 + i * 90} distanceY={30} scale={0.98}>
            <p className="mb-5 text-base leading-relaxed text-text-muted">{text}</p>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
