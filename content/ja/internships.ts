import type { Internship } from "@/lib/types";
import { featuredLinks } from "./featured";

export const internships = {
  title: "Internships",
  subtitle: "これまでに参加した3つのインターンシップです。",
  throughline:
    "国も規模も役割も違う3つの現場で、一貫して取り組んできたのは「人の要望を聞き取り、チームが迷わない形に構造化して、最後まで届ける」ことです。",
  items: [
    {
      slug: "techzen-vietnam",
      filename: "techzen-internship.md",
      title: "Techzen (Vietnam) Internship",
      period: "2026年1月11日〜2月7日(約4週間)",
      meta: "ベトナム・ダナン",
      summary:
        "曖昧なユーザーストーリー・受け入れ条件を、複数のAIエージェント(PM/バックエンド/セキュリティ/QA/UX視点)が多角的にレビューし、具体的な開発タスクへ自動分解するシステムをリーダーとして開発。",
      tags: ["Python", "LangChain", "LangGraph", "OpenAI API", "Docker"],
      status: "public",
      thumbnail: "/images/works/make-task-ai-thumb.jpg",
      body: [
        "ベトナムのITベンチャー「Techzen Company Limited」(ダナン)でのインターンに約4週間(2026年1月11日〜2月7日)参加した。多数の学生インターンが同時に参加する環境で、技術力差から生じる受け入れ条件(AC)の解釈のズレ・手戻りが課題となっていた。",
        "この課題に対し、複数のAIエージェント(PM/バックエンド/セキュリティ/QA/UX視点)が専門家視点でレビューし合い、曖昧なユーザーストーリー・受け入れ条件を具体的な開発タスクへ自動分解する開発支援システム「make-task-AI」を企画・提案し、2名体制のリーダーとして要件定義・仕様設計・スケジュール管理・実装の大部分を担当した。",
        "単一のAIでは出力精度が不安定だったため、「評価AIエージェント(複数専門家視点)→問題点分析AIエージェント→改善提案AIエージェント」の3段構成のレビューループをLangGraphで設計し、hallucination対策として出力JSON構造をPydanticで固定した。ベトナム語のスライドを自作してメンターへ直接提案し、複数エンジニアを集めたミーティングを実現した。",
        "実装能力以上に「仕様を正しく構造化して共有する能力」がチーム開発全体に与える影響の大きさを実感し、ユーザーストーリー・受け入れ条件を「人間の要求を構造化する技術」として捉え直すきっかけになった。",
      ],
      links: { github: "https://github.com/KaichoHarry/make-task-AI" },
      media: [
        {
          kind: "interview",
          title: "Global Internship Program — Gặp gỡ Nanko",
          source: "Techzen Academy 公式Facebook",
          href: featuredLinks.techzenVideo,
          note: "インターン中の学びや職場文化について語ったインタビュー動画(ベトナム語・英語)",
        },
      ],
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
        "赤ちゃん語への変換はGemini APIを一次経路とし、応答が遅い・失敗した場合はオープンデータの赤ちゃん言葉を使った辞書式の単語変換にフォールバックする2段構えにした。投稿の評価にはフルスクラッチで実装したナイーブベイズ分類器を使っている。「普通の文章をどう赤ちゃん言葉に変換するか」が最大の難所で、メンターのサポートを受けながら辞書式変換器を作り上げた。",
        "チームメンバー間の技術力差から自分のタスク量が膨らみ、日中で終わらせきれず宿泊先に戻ってからも作業する日々が続いたが、その分メンバーから上がってくるコードやプルリクエストをレビューする力が身についた。自分の中で設計や仕様を正確かつ明確に描いておくことが何より重要だと痛感した2週間だった。",
      ],
      links: {
        github: "https://github.com/engiiro/engiiro-app",
        demo: "https://app-xi-henna-63.vercel.app/",
      },
      media: [
        {
          kind: "blog",
          title: "鯖江の古民家で過ごした2週間、振り返ります ✨ヤドン✨",
          source: "jigintern2026 web diary",
          href: featuredLinks.jigjpBlog,
          note: "本人が書いた参加記。開発の苦労から、5合チャーハンを振る舞った共同生活まで",
        },
      ],
    },
    {
      slug: "raksul",
      filename: "raksul-hack-week.md",
      title: "ラクスル Hack Week(Hackathon Internship 2026)",
      period: "2026年9月7日〜11日(5日間)",
      meta: "東京・麻布台(リモート3日+出社2日)",
      award: "インターンシップアワード受賞",
      summary:
        "決済領域の「自動消し込み」の改善に、インターン生4名+メンター2名のチームで取り組み、手作業の消し込みの42%(件数ベース)をシステムで代替。審査員3名によるインターンシップアワードを受賞。",
      tags: ["Ruby on Rails", "Claude Code"],
      status: "public",
      body: [
        "ラクスルのHackathon Internship 2026(テーマ: Shape the Decade)に参加した。0→1を作るハッカソンと違い、実際に稼働している大規模なシステムに触れられることに惹かれて応募。目標は「チームで最後までギスギスせず楽しく開発すること」と「大きなソースコードを読み、技術スタック・構成・設計の考え方を理解すること」の2つに置いた。",
        "テーマは決済領域の自動消し込みの改善。請求書と入金を照合する作業のうち、自動化の対象外だった入金をオペレーターが手作業で処理していた。チームでは完全一致の自動消し込み、例外的な入金パターンへの対応、複数請求書の合計と1回の入金が一致するケースの処理、結果のSlack通知を実装し、8月31日時点のデータで手作業の消し込みのうち件数ベースで42%をシステムで代替できることを示した。",
        "自分はフロントエンドを担当し、例外的な入金パターンを管理する画面を作った。決済オペレーターへのヒアリングを4回行い、要望が途中で変わっていく中で「先に画面を作って見てもらう」進め方をとった。開発ブランチをWeb上にデプロイし、オペレーターを含む関係者が実際に触れる状態にしたうえで、3分間の最終発表に臨み、インターンシップアワードを受賞した。",
        "Ruby on Railsは初めての言語だったが、大きなコードは全体を理解しようとせず必要な部分から範囲を広げて読み、シーケンス図などで整理しながら進めた。コードレビューでは、AIに任せた部分を自分が十分に理解できていなかったことに気づき、「なぜこのコードなのか」を自分の言葉で説明できることの重要性を痛感した。タスクはMust / Should / Wantに分け、担当のない「浮いたタスク」を常に用意しておくことで、5日間チームを止めずに進められた。",
      ],
      media: [
        {
          kind: "article",
          title: "ラクスルHack Week参加記",
          source: "RAKSUL TechBlog(公式)",
          href: featuredLinks.raksulBlog,
          note: "本人が寄稿した参加記。取り組んだ課題・成果・学びを詳しく書いています",
        },
      ],
    },
  ] satisfies Internship[],
};
