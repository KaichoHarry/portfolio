import type { Internship } from "@/lib/types";

export const internships = {
  title: "Internships",
  subtitle: "これまでに参加した3つのインターンシップです。それぞれの現場で異なる役割・課題に取り組みました。",
  items: [
    {
      slug: "techzen-vietnam",
      filename: "techzen-internship.md",
      title: "Techzen (Vietnam) Internship",
      period: "約1か月",
      meta: "ベトナム・ダナン",
      summary:
        "曖昧なユーザーストーリー・受け入れ条件を、複数のAIエージェント(PM/バックエンド/セキュリティ/QA/UX視点)が多角的にレビューし、具体的な開発タスクへ自動分解するシステムをリーダーとして開発。",
      tags: ["Python", "LangChain", "LangGraph", "OpenAI API", "Docker"],
      status: "public",
      thumbnail: "/images/works/make-task-ai-thumb.jpg",
      body: [
        "ベトナムのITベンチャー「Techzen Company Limited」(ダナン)でのインターンに約1か月参加した。多数の学生インターンが同時に参加する環境で、技術力差から生じる受け入れ条件(AC)の解釈のズレ・手戻りが課題となっていた。",
        "この課題に対し、複数のAIエージェント(PM/バックエンド/セキュリティ/QA/UX視点)が専門家視点でレビューし合い、曖昧なユーザーストーリー・受け入れ条件を具体的な開発タスクへ自動分解する開発支援システム「make-task-AI」を企画・提案し、2名体制のリーダーとして要件定義・仕様設計・スケジュール管理・実装の大部分を担当した。",
        "単一のAIでは出力精度が不安定だったため、「評価AIエージェント(複数専門家視点)→問題点分析AIエージェント→改善提案AIエージェント」の3段構成のレビューループをLangGraphで設計し、hallucination対策として出力JSON構造をPydanticで固定した。ベトナム語のスライドを自作してメンターへ直接提案し、複数エンジニアを集めたミーティングを実現した。",
        "実装能力以上に「仕様を正しく構造化して共有する能力」がチーム開発全体に与える影響の大きさを実感し、ユーザーストーリー・受け入れ条件を「人間の要求を構造化する技術」として捉え直すきっかけになった。",
      ],
      links: { github: "https://github.com/KaichoHarry/make-task-AI" },
    },
    {
      slug: "jigjp-web",
      filename: "jigjp-internship.md",
      title: "jig.jp Webコース サマーインターンシップ2026",
      period: "2026年8月17日〜28日(2週間)",
      meta: "福井県鯖江市",
      summary:
        "3人チームで「エンジニアのための本音吐露SNS『engiiro(えんじいろ)』」を開発。設計書・DB設計・バックエンドAPI全般の実装に加え、PMとして進捗管理を担当。",
      tags: ["React", "TypeScript", "Deno", "PostgreSQL", "FastAPI", "Gemini API"],
      status: "public",
      thumbnail: "/images/works/engiiro-app-thumb.jpg",
      body: [
        "jig.jp Webコース サマーインターンシップ2026に参加し、福井県鯖江市の開発センター(古民家)で前半1週間の勉強会、後半1週間(8月21日〜28日)のチーム開発に取り組んだ。3人チームで、投稿した本音をAIが赤ちゃん語・お母さん語に自動変換してから公開する「エンジニアのための本音吐露SNS『engiiro(えんじいろ)』」を企画・開発した。",
        "設計書・DB設計・バックエンドAPI全般(認証、投稿・あやす(コメント)・リアクション・フォロー・プロフィール・スタンプの各エンドポイント)の実装に加え、PMとして進捗管理・メンバー間のブランチ統合を担当した。フロントエンドがモック実装のまま並行開発を進められるよう早期にAPI仕様を固めて共有し、終盤のモック→実API接続を大きな手戻りなく完了させた。",
        "チームメンバー間の技術力差から自分のタスク量が膨らみ、日中で終わらせきれず宿泊先に戻ってからも作業する日々が続いたが、その分メンバーから上がってくるコードやプルリクエストをレビューする力が身についた。自分の中で設計や仕様を正確かつ明確に描いておくことが何より重要だと痛感した2週間だった。",
      ],
      links: {
        github: "https://github.com/engiiro/engiiro-app",
        demo: "https://app-xi-henna-63.vercel.app/",
      },
    },
    {
      slug: "raksul",
      filename: "raksul-internship.md",
      title: "ラクスル 1weekインターンシップ",
      period: "1週間",
      meta: "詳細準備中",
      summary: "詳細は準備中です。",
      tags: [],
      status: "coming-soon",
    },
  ] satisfies Internship[],
};
