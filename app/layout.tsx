// app/layout.tsx
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import "./globals.css"; // 必要に応じて

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