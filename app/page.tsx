// app/page.tsx
import Link from "next/link"; // react-router-domから変更
import { Calendar, Clock } from "lucide-react";
import { mockProfile, mockTechStack, mockWorks, mockBlogPosts } from "@/data/mockData";

export default function HomePage() { // Next.jsではdefault exportが基本
  // 最新のブログ記事5件を取得
  const recentBlogPosts = mockBlogPosts.slice(0, 5);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* ヒーローセクション */}
      <section className="text-center py-12">
        <h1 className="text-4xl mb-4">
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            {mockProfile.name}
          </span>
        </h1>
        <p className="text-xl text-gray-600">{mockProfile.title}</p>
      </section>

      {/* 3カラムセクション */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* 自己紹介 */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <h2 className="text-2xl mb-4 text-gray-800">自己紹介</h2>
          <p className="text-gray-600 leading-relaxed">{mockProfile.bio}</p>
        </div>

        {/* プロフィール写真 */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <h2 className="text-2xl mb-4 text-gray-800">プロフィール</h2>
          <img
            src={mockProfile.profileImage}
            alt={mockProfile.name}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        {/* GitHubなどのURL */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <h2 className="text-2xl mb-4 text-gray-800">リンク</h2>
          <div className="space-y-3">
            <a
              href={mockProfile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 rounded-md bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-colors"
            >
              <span className="text-purple-700">GitHub</span>
            </a>
            <a
              href={mockProfile.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 rounded-md bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 transition-colors"
            >
              <span className="text-blue-700">Twitter</span>
            </a>
            <a
              href={mockProfile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 rounded-md bg-gradient-to-r from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 transition-colors"
            >
              <span className="text-pink-700">LinkedIn</span>
            </a>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTechStack.map((tech) => (
            <div
              key={tech.id}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl text-gray-800">{tech.name}</h3>
                <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm">
                  {tech.category}
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600">
                  <span className="text-gray-800">経験年数:</span> {tech.yearsOfExperience}年
                </p>
                <div>
                  <p className="text-gray-800 mb-1">制作実績:</p>
                  <div className="flex flex-wrap gap-2">
                    {tech.projects.map((project, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
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
          {mockWorks.slice(0, 3).map((work) => (
            <Link
              key={work.id}
              href={`/works/${work.id}`}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg mb-2 group-hover:text-purple-600 transition-colors">
                  {work.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                  {work.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {work.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ブログセクション */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              最新のブログ記事
            </span>
          </h2>
          <Link
            href="/blog"
            className="text-purple-600 hover:text-purple-700 transition-colors"
          >
            一覧を見る →
          </Link>
        </div>
        <div className="space-y-4">
          {recentBlogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="block bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl mb-2 text-gray-800 hover:text-purple-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-3 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{post.publishedAt}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}分</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs"
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