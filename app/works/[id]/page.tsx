import Link from "next/link";
import { notFound } from "next/navigation";
import { works } from "@/data/content";

export function generateStaticParams() {
  return works.map((work) => ({ id: work.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const work = works.find((w) => w.id === id);
  return { title: work ? `${work.title} | 南口遼河 Portfolio` : "制作物 | 南口遼河 Portfolio" };
}

export default async function WorkDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const work = works.find((w) => w.id === id);
  if (!work) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/works" className="text-purple-600 hover:text-purple-700 transition-colors">
        ← 制作物一覧へ戻る
      </Link>

      <div className="mt-6 mb-10">
        {work.status === "coming-soon" && (
          <span className="inline-block mb-3 px-2 py-1 bg-gray-100 text-gray-500 rounded-full text-xs">
            近日公開
          </span>
        )}
        <h1 className="text-3xl mb-2">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {work.title}
          </span>
        </h1>
        <p className="text-purple-500">{work.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <h2 className="text-sm text-gray-500 mb-1">役割</h2>
          <p className="text-gray-800">{work.role}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <h2 className="text-sm text-gray-500 mb-1">体制</h2>
          <p className="text-gray-800">{work.teamSize}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <h2 className="text-sm text-gray-500 mb-1">期間</h2>
          <p className="text-gray-800">{work.period ?? "-"}</p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-xl mb-3 text-gray-800">概要</h2>
        <p className="text-gray-600 leading-relaxed">{work.description}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl mb-4 text-gray-800">工夫点・学び</h2>
        <div className="space-y-4">
          {work.details.map((paragraph, idx) => (
            <p key={idx} className="text-gray-600 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl mb-4 text-gray-800">技術スタック</h2>
        <div className="flex flex-wrap gap-2">
          {work.techStack.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {(work.links.github || work.links.demo || work.links.docs) && (
        <section>
          <h2 className="text-xl mb-4 text-gray-800">リンク</h2>
          <div className="flex flex-wrap gap-3">
            {work.links.github && (
              <a
                href={work.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-700 transition-colors"
              >
                GitHub
              </a>
            )}
            {work.links.demo && (
              <a
                href={work.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity"
              >
                デモを見る
              </a>
            )}
            {work.links.docs && (
              <a
                href={work.links.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                設計書
              </a>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
