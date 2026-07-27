import { Mail, Github, Twitter } from "lucide-react";
import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* プロフィール情報 */}
          <div>
            <h3 className="text-lg mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
              {profile.name}
            </h3>
            <p className="text-gray-400 text-sm">{profile.bioShort}</p>
          </div>

          {/* 連絡先情報 */}
          <div>
            <h3 className="text-lg mb-4 font-bold">お問い合わせ</h3>
            <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          </div>

          {/* ソーシャルリンク */}
          <div>
            <h3 className="text-lg mb-4 font-bold">SNS</h3>
            <div className="flex gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <span className="sr-only">GitHub</span>
                <Github className="w-6 h-6" />
              </a>
              <a
                href={profile.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <span className="sr-only">X (Twitter)</span>
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
