// app/layout.tsx
import type { Metadata } from "next";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import "./globals.css"; // 必要に応じて

export const metadata: Metadata = {
  title: "南口遼河 | Portfolio",
  description:
    "南口遼河のポートフォリオサイト。ベトナムインターンでの開発タスク詳細化システム、ハッカソン受賞作など制作物を紹介しています。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}