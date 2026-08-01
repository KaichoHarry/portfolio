import Image from "next/image";
import { contact } from "@/content/ja";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CodeWindow } from "@/components/ui/CodeWindow";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-[1440px] px-5 pb-24 pt-20 sm:px-8 md:px-12 md:pb-32 md:pt-24"
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
            src="/images/decorations/deco_cube_wireframe_contact.png"
            alt=""
            width={150}
            height={150}
            className="deco-image pointer-events-none absolute bottom-0 left-14 hidden w-[120px] opacity-60 lg:block"
          />
          <Image
            src="/images/decorations/deco_dot_grid_patch.png"
            alt=""
            width={140}
            height={140}
            className="deco-image pointer-events-none absolute right-0 top-1 hidden w-[110px] opacity-30 lg:block"
          />
          <RevealOnScroll distanceY={20} scale={1}>
            <SectionEyebrow label="Contact" />
          </RevealOnScroll>
          <RevealOnScroll delay={80} distanceY={34}>
            <h2 className="mb-6 max-w-[460px] text-3xl font-extrabold leading-snug sm:text-[38px]">
              {contact.headline} <span className="text-accent">{contact.headlineHighlight}</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={150} distanceY={30}>
            <p className="mb-8 max-w-[460px] text-base leading-relaxed text-text-muted">{contact.blurb}</p>
          </RevealOnScroll>
          <RevealOnScroll delay={220} distanceY={24} scale={0.96}>
            <a
              href={contact.ctaHref}
              className="inline-flex items-center gap-2.5 rounded-lg border border-accent px-6 py-3.5 font-mono text-[15px] text-accent transition-colors hover:bg-accent/10"
            >
              &gt; {contact.ctaLabel} <span>&#8594;</span>
            </a>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={160} distanceX={60} distanceY={0} scale={0.95}>
          <CodeWindow filename="contact.sh">
            <div className="px-5 pb-2 pt-5 sm:px-6">
              <div className="mb-6 overflow-x-auto whitespace-pre font-mono text-sm text-[#7ee787]">
                $ send_message --to={contact.slug}
              </div>
              {contact.links.map((link, i) => (
                <RevealOnScroll key={link.name} delay={260 + i * 90} distanceY={26} scale={0.97}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-4 border-b border-border py-3.5 text-text last:border-b-0"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-accent">
                      <Image src={link.icon} alt={link.name} width={20} height={20} className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-mono text-[13px] text-accent">{link.name}</span>
                      <span className="block text-[14.5px] text-text">{link.value}</span>
                    </span>
                  </a>
                </RevealOnScroll>
              ))}
            </div>
          </CodeWindow>
        </RevealOnScroll>
      </div>
    </section>
  );
}
