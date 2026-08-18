import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/sections/About";

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <main className="relative">
        <About />
      </main>
      <Footer />
    </div>
  );
}
