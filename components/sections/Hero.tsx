import Image from "next/image";
import { hero } from "@/content/ja";
import { CodeWindow } from "@/components/ui/CodeWindow";

const TONE_CLASS: Record<string, string> = {
  default: "text-text",
  muted: "text-text-muted",
  accent: "text-accent",
  success: "text-[#7ee787]",
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-5 pb-16 pt-14 sm:px-8 md:grid-cols-2 md:px-12 md:pb-24 md:pt-28"
    >
      <div
        className="pointer-events-none absolute left-0 top-10 hidden h-36 w-36 opacity-50 sm:block"
        style={{
          backgroundImage: "radial-gradient(var(--border) 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
        }}
      />
      <div className="relative z-10">
        <div className="mb-5 font-mono text-base text-accent">&gt; hello_world()</div>
        <h1 className="mb-6 text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl">
          {hero.greeting}
          <br />
          {hero.lineTwoPrefix}
          <span className="text-accent">{hero.highlight}</span>
          {hero.lineThree}
        </h1>
        <p className="mb-9 max-w-[480px] border-l-2 border-accent pl-4 text-[17px] leading-relaxed text-text-muted">
          {hero.subtitle}
        </p>
        <a
          href={hero.ctaHref}
          className="inline-flex items-center gap-2.5 rounded-lg border border-accent px-6 py-3.5 font-mono text-[15px] text-accent transition-colors hover:bg-accent/10"
        >
          &gt; {hero.ctaLabel} <span>&#8594;</span>
        </a>
      </div>
      <div className="relative z-10">
        <Image
          src="/images/decorations/deco_network_arc.png"
          alt=""
          width={300}
          height={200}
          className="deco-image pointer-events-none absolute left-8 top-0 hidden w-[220px] opacity-50 sm:block md:w-[300px]"
        />
        <Image
          src="/images/decorations/deco_cube_wireframe_hero.png"
          alt=""
          width={140}
          height={140}
          className="animate-float deco-image pointer-events-none absolute bottom-5 right-2 hidden w-[110px] opacity-70 sm:block md:w-[140px]"
        />
        <Image
          src="/images/decorations/hero_icon_brackets.png"
          alt=""
          width={56}
          height={56}
          className="pointer-events-none absolute right-14 top-2 hidden w-12 opacity-90 sm:block"
        />
        <Image
          src="/images/decorations/hero_icon_code_tag.png"
          alt=""
          width={52}
          height={52}
          className="pointer-events-none absolute bottom-10 right-1 hidden w-11 opacity-90 sm:block"
        />
        <Image
          src="/images/decorations/deco_terminal_chip.png"
          alt=""
          width={170}
          height={100}
          className="animate-float-delay pointer-events-none absolute bottom-1 left-0 hidden w-[130px] opacity-95 sm:block md:w-[170px]"
        />
        <CodeWindow filename="main.js">
          <div className="overflow-x-auto px-4 py-4 font-mono text-[13px] leading-[1.9] sm:px-5 sm:text-[13.5px]">
            {hero.codeLines.map((line, i) => (
              <div key={i} className="whitespace-pre">
                <span className="inline-block w-5 text-text-muted">{i + 1}</span>
                <span className={TONE_CLASS[line.tone ?? "default"]}>{line.text}</span>
              </div>
            ))}
          </div>
        </CodeWindow>
      </div>
    </section>
  );
}
