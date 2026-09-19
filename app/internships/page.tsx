import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Internships } from "@/components/sections/Internships";

export default function InternshipsPage() {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <main className="relative">
        <Internships />
      </main>
      <Footer />
    </div>
  );
}
