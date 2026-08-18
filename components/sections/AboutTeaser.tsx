import Image from "next/image";
import Link from "next/link";
import { about } from "@/content/ja";
import { CodeWindow } from "@/components/ui/CodeWindow";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { AboutProfile } from "@/lib/types";

function ProfileJson({ profile }: { profile: AboutProfile }) {
  return (
    <div className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-[1.85] sm:px-6">
      <div className="whitespace-pre">{"{"}</div>
      <div className="whitespace-pre text-text-muted">{`  "name": "${profile.name}",`}</div>
      <div className="whitespace-pre text-text-muted">{`  "role": "${profile.role}",`}</div>
      <div className="whitespace-pre text-text-muted">{`  "affiliation": "${profile.affiliation}",`}</div>
      <div className="whitespace-pre text-text-muted">{`  "focus": [`}</div>
      {profile.focus.map((item, i) => (
        <div key={item} className="whitespace-pre pl-2 text-[#7ee787]">
          {`"${item}"${i < profile.focus.length - 1 ? "," : ""}`}
        </div>
      ))}
      <div className="whitespace-pre text-text-muted">{`  ],`}</div>
      <div className="whitespace-pre text-text-muted">{`  "tech_stack": [${profile.techStack
        .map((t) => `"${t}"`)
        .join(", ")}],`}</div>
      <div className="whitespace-pre text-text-muted">{`  "location": "${profile.location}",`}</div>
      <div className="whitespace-pre text-text-muted">{`  "availability": "${profile.availability}"`}</div>
      <div className="whitespace-pre">{"}"}</div>
    </div>
  );
}

export function AboutTeaser() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 md:px-12 md:py-24"
    >
      <div
        className="pointer-events-none absolute bottom-0 left-11 top-0 hidden w-px sm:block"
        style={{
          backgroundImage: "repeating-linear-gradient(to bottom, var(--border) 0 6px, transparent 6px 12px)",
        }}
      />
      <div className="pointer-events-none absolute left-[39px] top-0 hidden h-[11px] w-[11px] rounded-full bg-accent sm:block" />

      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-16">
        <div className="relative">
          <Image
            src="/images/decorations/deco_cube_wireframe_about.png"
            alt=""
            width={130}
            height={130}
            className="deco-image pointer-events-none absolute -bottom-4 left-5 hidden w-[110px] opacity-60 lg:block"
          />
          <Image
            src="/images/decorations/deco_mesh_nodes.png"
            alt=""
            width={180}
            height={140}
            className="deco-image pointer-events-none absolute right-10 top-1 hidden w-[150px] opacity-30 lg:block"
          />
          <RevealOnScroll distanceY={20} scale={1}>
            <SectionEyebrow label="About" />
          </RevealOnScroll>
          <RevealOnScroll delay={80} distanceY={34}>
            <h2 className="mb-7 max-w-[520px] text-3xl font-extrabold leading-snug sm:text-[38px]">
              {about.headline1} <span className="text-accent">{about.headlineHighlight}</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={220} distanceY={30} scale={0.98}>
            <p className="mb-8 max-w-[520px] text-base leading-relaxed text-text-muted">
              {about.paragraphs[0]}
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={280} distanceY={24} scale={0.97}>
            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 rounded-lg border border-accent px-6 py-3.5 font-mono text-[15px] text-accent transition-colors hover:bg-accent/10"
            >
              &gt; read more <span>&#8594;</span>
            </Link>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={160} distanceX={60} distanceY={0} scale={0.95}>
          <CodeWindow filename="about.json">
            <ProfileJson profile={about.profile} />
          </CodeWindow>
        </RevealOnScroll>
      </div>
    </section>
  );
}
