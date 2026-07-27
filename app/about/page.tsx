import Image from "next/image";
import { profile, techStack } from "@/data/content";

export const metadata = {
  title: "About | 南口遼河 Portfolio",
};

const education = [
  { year: "2019.4", label: "愛知県立知立東高等学校 入学" },
  { year: "2022.3", label: "愛知県立知立東高等学校 卒業" },
  { year: "2022.4", label: "名城大学 情報工学部 情報工学科 入学" },
  { year: "2024.3", label: "名城大学 情報工学部 情報工学科 中退" },
  { year: "2024.4", label: "名古屋国際工科専門職大学 工科学部 情報工学科 入学(現在)" },
];

const activities = [
  {
    title: "名城大学囲碁部(部長)",
    description: "休部状態から再建し、アクティブメンバーを3名から15名規模まで拡大。",
  },
  {
    title: "名城大学文化会(幹部)",
    description: "約250人規模の文化系団体にて、資料のデジタル化・会費徴収の改善・イベントによる還元を推進。",
  },
  {
    title: "Bridge(名古屋国際工科専門職大学 学生団体)",
    description: "大学連携・課外活動イベントの企画運営に参加。",
  },
  {
    title: "ボードゲームカフェ&バー(アルバイト)",
    description:
      "200種類以上のゲームルールを理解し、お客様の目的や関係性に応じた提案を実施。生誕祭イベントの企画・席配置設計により、12年間で歴代2位の売上を記録。",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <div className="relative w-32 h-32 mx-auto mb-4">
          <Image
            src={profile.profileImage}
            alt={profile.name}
            fill
            sizes="128px"
            className="object-cover rounded-full shadow-md"
          />
        </div>
        <h1 className="text-3xl mb-1">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>
        <p className="text-gray-500">{profile.nameKana}</p>
        <p className="text-gray-600 mt-2">{profile.title}</p>
      </div>

      <section className="mb-12 bg-white p-8 rounded-lg shadow-md border border-gray-100">
        <h2 className="text-2xl mb-4 text-gray-800">自己紹介</h2>
        <div className="space-y-4">
          {profile.bio.split("\n\n").map((paragraph, idx) => (
            <p key={idx} className="text-gray-600 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl mb-4 text-gray-800">学歴</h2>
        <div className="bg-white rounded-lg shadow-md border border-gray-100 divide-y divide-gray-100">
          {education.map((item) => (
            <div key={item.label} className="flex gap-4 px-6 py-3">
              <span className="text-sm text-gray-400 w-20 shrink-0">{item.year}</span>
              <span className="text-gray-700">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl mb-4 text-gray-800">スキル/技術スタック</h2>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech.id}
              className="px-3 py-1.5 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full text-sm"
            >
              {tech.name}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl mb-4 text-gray-800">課外活動</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            >
              <h3 className="text-gray-800 mb-2">{activity.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{activity.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
