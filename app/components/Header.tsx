"use client"; // Next.jsでフックを使用するために必要

import Link from "next/link";
import { usePathname } from "next/navigation"; // react-router-domから変更

const BANNER_IMAGE = "https://images.unsplash.com/photo-1764138370667-d15f89ee1c45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwcGluayUyMHB1cnBsZSUyMGJsdWV8ZW58MXx8fHwxNzY5NDAwMTg5fDA&ixlib=rb-4.1.0&q=80&w=1080";

export function Header() {
  const pathname = usePathname(); // 現在のパスを取得

  // 現在のページが引数のパスと一致するか判定
  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* バナー画像 */}
      <Link href="/" className="block">
        <div className="relative h-32 overflow-hidden">
          <img
            src={BANNER_IMAGE}
            alt="Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20" />
        </div>
      </Link>

      {/* ナビゲーション */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-8 py-4">
            <Link
              href="/"
              className={`px-4 py-2 rounded-md transition-colors ${
                isActive("/")
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              ホーム
            </Link>
            <Link
              href="/works"
              className={`px-4 py-2 rounded-md transition-colors ${
                isActive("/works") || pathname.startsWith("/works/")
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              制作物
            </Link>
            <Link
              href="/blog"
              className={`px-4 py-2 rounded-md transition-colors ${
                isActive("/blog") || pathname.startsWith("/blog/")
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              ブログ
            </Link>
            <Link
              href="/about"
              className={`px-4 py-2 rounded-md transition-colors ${
                isActive("/about")
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}