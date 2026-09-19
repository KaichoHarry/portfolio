import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InternshipDetail } from "@/components/sections/InternshipDetail";
import { internships } from "@/content/ja";

export function generateStaticParams() {
  return internships.items.map((internship) => ({ slug: internship.slug }));
}

export default async function InternshipDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const internship = internships.items.find((item) => item.slug === slug);

  if (!internship) {
    notFound();
  }

  return (
    <div className="relative overflow-hidden">
      <Header />
      <main className="relative">
        <InternshipDetail internship={internship} />
      </main>
      <Footer />
    </div>
  );
}
