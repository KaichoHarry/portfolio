import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Works } from "@/components/sections/Works";

export default function WorksPage() {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <main className="relative">
        <Works />
      </main>
      <Footer />
    </div>
  );
}
