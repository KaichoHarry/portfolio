import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Works } from "@/components/sections/Works";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Image
        src="/images/decorations/deco_circuit_line_right.png"
        alt=""
        width={280}
        height={800}
        className="deco-image pointer-events-none absolute right-0 top-0 hidden max-h-full w-[220px] opacity-55 xl:block"
      />
      <Image
        src="/images/decorations/deco_circuit_line_left.png"
        alt=""
        width={260}
        height={800}
        className="deco-image pointer-events-none absolute left-0 top-0 hidden max-h-full w-[200px] -scale-x-100 opacity-40 xl:block"
      />
      <Header />
      <main className="relative">
        <Hero />
        <About />
        <Works />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
