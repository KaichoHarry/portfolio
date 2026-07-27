import Link from "next/link";
import { works } from "@/data/content";

export const metadata = {
  title: "制作物 | 南口遼河 Portfolio",
};

export default function WorksPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl mb-2 text-center">
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          制作物
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12">
        インターン・ハッカソン・個人開発で作った制作物です。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((work) => (
          <Link
            key={work.id}
            href={`/works/${work.id}`}
            className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 p-6 flex flex-col"
          >
            {work.status === "coming-soon" && (
              <span className="inline-block mb-3 self-start px-2 py-1 bg-gray-100 text-gray-500 rounded-full text-xs">
                近日公開
              </span>
            )}
            <h2 className="text-lg mb-1 group-hover:text-purple-600 transition-colors">
              {work.title}
            </h2>
            <p className="text-xs text-purple-500 mb-3">{work.subtitle}</p>
            <p className="text-sm text-gray-600 line-clamp-3 mb-4 flex-1">
              {work.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {work.techStack.slice(0, 4).map((tag) => (
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
    </div>
  );
}
