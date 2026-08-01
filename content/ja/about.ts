import type { AboutProfile } from "@/lib/types";

export const about = {
  headline1: "課題を構造化し、",
  headlineHighlight: "価値に変える。",
  paragraphs: [
    "強みは、課題を構造的に分析し、人や技術を巻き込みながら改善を実装できる点です。技術開発・組織運営・接客のいずれにおいても「現状を観察し、仕組みとして改善する」ことを意識して行動してきました。",
    "ベトナムのITベンチャー「Techzen」でのインターンでは、学生インターン間の技術力差から生じる仕様認識のズレという課題に着目し、複数のAIエージェントが専門家視点でレビューし合う開発支援システムを企画・提案からリーダーとして実装しました。",
    "ハッカソンでは、日頃から信頼関係を築いた仲間へ自ら声をかけてチームを組成し、「20時の挑戦状」ではPMとして進捗管理から実装まで担当し努力賞を受賞、「MyTechPulse」ではPM兼フロントエンド担当としてレコメンドアルゴリズムの設計まで行いました。",
    "大学では休部状態だった囲碁部を部長として立て直し(アクティブメンバー3→15名)、約250人規模の文化系団体「文化会」でも運営改善に取り組みました。",
    "今後は、技術力だけでなくコミュニケーション力や主体性を活かし、多様な人と協力しながら価値を生み出せるエンジニアとして成長していきたいと考えています。",
  ],
  profile: {
    name: "南口遼河",
    role: "Software Engineer",
    affiliation: "名古屋国際工科専門職大学 工科学部 情報工学科",
    focus: ["AI Agent Development", "Team Leadership", "Product Design"],
    techStack: ["Python", "TypeScript", "Next.js", "LangGraph"],
    location: "Nagoya, Japan",
    availability: "Open to opportunities",
  } satisfies AboutProfile,
};
