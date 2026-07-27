import { Mail, Github, Twitter } from "lucide-react";
import { profile } from "@/data/content";

export const metadata = {
  title: "Contact | 南口遼河 Portfolio",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl mb-2 text-center">
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Contact
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12">
        ご連絡は以下のいずれかの方法でお気軽にどうぞ。
      </p>

      <div className="space-y-4">
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <p className="text-gray-800">Email</p>
            <p className="text-sm text-gray-500">{profile.email}</p>
          </div>
        </a>

        <a
          href={profile.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white shrink-0">
            <Twitter className="w-5 h-5" />
          </div>
          <div>
            <p className="text-gray-800">X (Twitter)</p>
            <p className="text-sm text-gray-500">{profile.twitter.replace("https://", "")}</p>
          </div>
        </a>

        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
        >
          <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white shrink-0">
            <Github className="w-5 h-5" />
          </div>
          <div>
            <p className="text-gray-800">GitHub</p>
            <p className="text-sm text-gray-500">{profile.github.replace("https://", "")}</p>
          </div>
        </a>
      </div>
    </div>
  );
}
