// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { profile, techStack, works } from "@/data/content";

const FEATURED_WORK_IDS = ["make-task-ai", "the-8pm-challenge", "ai-shiritori-app"];

export default function HomePage() {
  const featuredWorks = works.filter((w) => FEATURED_WORK_IDS.includes(w.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* ヒーローセクション */}
      <section className="text-center py-6">
        <h1 className="text-4xl mb-4">
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>
        <p className="text-xl text-gray-600">{profile.title}</p>
      </section>

      {/* 3カラムセクション */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* 自己紹介 */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <h2 className="text-2xl mb-4 text-gray-800">自己紹介</h2>
          <p className="text-gray-600 leading-relaxed">{profile.bioShort}</p>
          <Link
            href="/about"
            className="inline-block mt-4 text-purple-600 hover:text-purple-700 transition-colors"
          >
            詳しく見る →
          </Link>
        </div>

        {/* プロフィール写真 */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <h2 className="text-2xl mb-4 text-gray-800">プロフィール</h2>
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <Image
              src={profile.profileImage}
              alt={profile.name}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* GitHubなどのURL */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <h2 className="text-2xl mb-4 text-gray-800">リンク</h2>
          <div className="space-y-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 rounded-md bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-colors"
            >
              <span className="text-purple-700">GitHub</span>
            </a>
            <a
              href={profile.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 rounded-md bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 transition-colors"
            >
              <span className="text-blue-700">X (Twitter)</span>
            </a>
            <Link
              href="/contact"
              className="block p-3 rounded-md bg-gradient-to-r from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 transition-colors"
            >
              <span className="text-pink-700">お問い合わせ</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 技術スタック */}
      <section className="mb-16">
        <h2 className="text-3xl mb-8 text-center">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            技術スタック
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {techStack.map((tech) => (
            <div
              key={tech.id}
              className="bg-white px-5 py-4 rounded-lg shadow-md border border-gray-100 flex items-center justify-between hover:shadow-lg transition-shadow"
            >
              <span className="text-gray-800">{tech.name}</span>
              <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs whitespace-nowrap">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 制作物プレビュー */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              制作物
            </span>
          </h2>
          <Link
            href="/works"
            className="text-purple-600 hover:text-purple-700 transition-colors"
          >
            すべて見る →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredWorks.map((work) => (
            <Link
              key={work.id}
              href={`/works/${work.id}`}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 p-6 flex flex-col"
            >
              <h3 className="text-lg mb-1 group-hover:text-purple-600 transition-colors">
                {work.title}
              </h3>
              <p className="text-xs text-purple-500 mb-3">{work.subtitle}</p>
              <p className="text-sm text-gray-600 line-clamp-3 mb-4 flex-1">
                {work.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {work.techStack.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
