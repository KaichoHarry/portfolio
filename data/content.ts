// ========================================
// ポートフォリオ実データ
// 出典: アピールポイント文.docx / 履歴書(2026.6.26) / GitHub(KaichoHarry) / 既存Notionポートフォリオ
// DBは使わず、このファイルを直接編集して更新する運用(01_サイト仕様書.md 参照)
// ========================================

export interface TechStack {
  id: string;
  name: string;
  category: string;
}

export interface Work {
  id: string; // URL slug
  title: string;
  subtitle: string; // 一言
  description: string; // 一覧カード用の短い説明
  details: string[]; // 詳細ページ用(箇条書き段落)
  role: string;
  teamSize: string;
  period?: string;
  techStack: string[];
  links: {
    github?: string;
    demo?: string;
    docs?: string;
  };
  status: "public" | "coming-soon";
}

export interface Profile {
  name: string;
  nameKana: string;
  title: string;
  bio: string;
  bioShort: string;
  profileImage: string;
  email: string;
  github: string;
  twitter: string;
}

export const profile: Profile = {
  name: "南口 遼河",
  nameKana: "なんこう はるか",
  title: "Webエンジニア / 名古屋国際工科専門職大学",
  bioShort:
    "課題を構造的に分析し、人や技術を巻き込みながら改善を実装するエンジニアです。ベトナムでのインターンでは複数AIエージェントによる開発支援システムを、ハッカソンでは「AIの弱点をコンテンツ化する」アイデアで努力賞を受賞しました。",
  bio: `強みは、課題を構造的に分析し、人や技術を巻き込みながら改善を実装できる点です。技術開発・組織運営・接客のいずれにおいても「現状を観察し、仕組みとして改善する」ことを意識して行動してきました。

ベトナムのITベンチャー「Techzen」でのインターンでは、学生インターン間の技術力差から生じる仕様認識のズレという課題に着目し、複数のAIエージェントが専門家視点でレビューし合う開発支援システムを企画・提案からリーダーとして実装しました。

ハッカソンでは、日頃から信頼関係を築いた仲間へ自ら声をかけてチームを組成し、「20時の挑戦状」ではPMとして進捗管理から実装まで担当し努力賞を受賞、「MyTechPulse」ではPM兼フロントエンド担当としてレコメンドアルゴリズムの設計まで行いました。

大学では休部状態だった囲碁部を部長として立て直し(アクティブメンバー3→15名)、約250人規模の文化系団体「文化会」でも運営改善に取り組みました。

今後は、技術力だけでなくコミュニケーション力や主体性を活かし、多様な人と協力しながら価値を生み出せるエンジニアとして成長していきたいと考えています。`,
  profileImage: "/images/profile.jpg",
  email: "nanko.haruka@gmail.com",
  github: "https://github.com/KaichoHarry",
  twitter: "https://x.com/yadon_gvk",
};

export const techStack: TechStack[] = [
  { id: "1", name: "Python", category: "言語" },
  { id: "2", name: "TypeScript / JavaScript", category: "言語" },
  { id: "3", name: "Go", category: "言語" },
  { id: "4", name: "LangChain / LangGraph", category: "AI / LLM" },
  { id: "5", name: "OpenAI API", category: "AI / LLM" },
  { id: "6", name: "Google Gemini API", category: "AI / LLM" },
  { id: "7", name: "Next.js / React", category: "フロントエンド" },
  { id: "8", name: "Tailwind CSS / shadcn/ui", category: "フロントエンド" },
  { id: "9", name: "FastAPI / Flask", category: "バックエンド" },
  { id: "10", name: "PostgreSQL / SQLite", category: "データベース" },
  { id: "11", name: "Docker", category: "インフラ" },
  { id: "12", name: "Vercel / Railway", category: "インフラ" },
];

export const works: Work[] = [
  {
    id: "make-task-ai",
    title: "開発タスク詳細化システム",
    subtitle: "ベトナム・Techzen社インターンでの成果",
    description:
      "曖昧なユーザーストーリー・受け入れ条件を、複数のAIエージェントが多角的にレビューし、具体的な開発タスクへ自動分解するシステム。",
    details: [
      "Techzen Company Limited(ベトナム・ダナン)でのインターン(約1か月)で、学生インターン間の技術力差による受け入れ条件(AC)の解釈のズレ・手戻りという課題に着目し、リーダーとして提案・開発しました。",
      "単一AIでは出力精度が不安定だったため、「評価AIエージェント(PM/バックエンド/セキュリティ/QA/UX視点)→問題点分析AIエージェント→改善提案AIエージェント」の3段構成のレビューループをLangGraphで設計しました。",
      "hallucination対策としてPydanticで出力JSON構造を固定し、ベトナム語のスライドを自作してメンターへ直接提案、複数エンジニアを集めたミーティングを実現しました。",
      "実装能力以上に「仕様を正しく構造化して共有する能力」がチーム開発全体に与える影響の大きさを実感し、US/ACを「人間の要求を構造化する技術」として捉え直すきっかけになりました。",
    ],
    role: "リーダー(要件定義・仕様設計・スケジュール管理・実装の大部分を担当)",
    teamSize: "2名",
    period: "2026年 インターン期間中(約1か月)",
    techStack: ["Python", "LangChain", "LangGraph", "OpenAI API", "Pydantic", "Docker"],
    links: {
      github: "https://github.com/KaichoHarry/make-task-AI",
    },
    status: "public",
  },
  {
    id: "the-8pm-challenge",
    title: "20時の挑戦状",
    subtitle: "技育CAMP2025 Vol.12 努力賞受賞",
    description:
      "AIが生成した支離滅裂ななぞなぞを毎日20時に公開するWebゲーム。AIの弱点を逆手に取ったエンタメ企画で努力賞を受賞。",
    details: [
      "技育CAMP2025 Vol.12にて3名チーム(はりぃ/S.Ka/K.Haruki)で開発。チームリーダー兼PMとして企画立案・要件定義・仕様書/設計書作成・UI設計・API設計・進捗管理・統合作業・プレゼンを担当しました。",
      "開発期間は9日間。Notionに仕様書・設計書を先に整備し、メンバーがAIへ指示を出しながら実装を進められる土台を作りました。",
      "フロントエンド/バックエンド間のJSON構造不一致によるバグを自ら両方のコードを確認して修正し、過去5問を参照して生成条件を変化させることで毎日異なる問題が出るよう設計しました。",
      "「完成させること」の重要性、AI時代は書ける力よりも「AIの特性・弱点をどう価値に変換するか」を考える力が重要だと実感した開発でした。",
    ],
    role: "チームリーダー / PM",
    teamSize: "3名",
    period: "2025年8月28日〜9月5日(9日間)",
    techStack: ["React", "TypeScript", "Vite"],
    links: {
      github: "https://github.com/H4aruki/The-8-PM-Challenge",
      demo: "https://h4aruki.github.io/The-8-PM-Challenge/",
      docs: "https://hurricane-dance-850.notion.site/25f605b98b4f80c180afe5b8e7b3f352",
    },
    status: "public",
  },
  {
    id: "ai-shiritori-app",
    title: "AIしりとりアプリ",
    subtitle: "個人開発 / AI駆動開発(Claude Code)",
    description:
      "ソロプレイ・AI対戦・文章しりとり(フリートーク)の3モードを備えたWebしりとりアプリ。ほぼ全工程をClaude Codeで実装。",
    details: [
      "AI対戦はGemini APIを使わず、IPADIC辞書(kagome形態素解析)から約23万語の索引を約25msで構築し、難易度別のランダム性で強さを調整しています。",
      "文章しりとり(フリートーク)では文末の読み仮名を句読点・漢字を無視して抽出するロジックを実装し、メール(SMTP/IMAP)を使った独自の管理者承認型パスワード再設定フローも設計・実装しました。",
      "50アカウント作成・各モード50回プレイという大規模自動テストを実施し、見つかったバグをGitHub Issueにまとめて修正しました。",
      "AIを活用した開発で「要件を曖昧にせず都度確認しながら進める」重要性と、実際に手を動かして不具合を発見・修正するデバッグ力を学びました。",
    ],
    role: "個人開発",
    teamSize: "1名",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Go", "PostgreSQL", "Gemini API", "Docker", "Railway"],
    links: {
      github: "https://github.com/KaichoHarry/AI-shiritori-app",
    },
    status: "public",
  },
  {
    id: "face-achievement-diag",
    title: "顔面偉業診断",
    subtitle: "ビジネスAIシステム開発 授業課題",
    description:
      "顔画像から、その人物が将来成し遂げる「偉業」(ノーベル賞受賞者、億万長者など)をAIが予測・診断するWebアプリ。",
    details: [
      "既存のAIが「現状分析」に寄りがちな中、あえて「未来予測」というエンタメ方向へ振り切ったコンセプトを設計しました。",
      "2名チームで開発し、自分はバックエンド/インフラ(Python + PyTorch + FastAPI、大学サーバー上のPostgreSQL)を担当。フロントエンドは澁谷氏が担当しました。",
    ],
    role: "バックエンド / インフラ担当",
    teamSize: "2名",
    techStack: ["Python", "PyTorch", "FastAPI", "PostgreSQL", "Docker", "HTML/CSS/JS"],
    links: {
      github: "https://github.com/KaichoHarry/face-achievement-diag",
    },
    status: "public",
  },
  {
    id: "talk-seed",
    title: "TalkSeed(トークシード)",
    subtitle: "会話を支援するAIコンパニオン",
    description:
      "飲食店やイベント会場の待ち時間に、AIが会話参加者として加わり話題提案・深掘り質問・共感で会話を支援するアプリ。",
    details: [
      "4名チームで開発、プロトタイプ稼働中。プッシュトゥトーク方式の音声対話(Whisperで音声認識、Gemini APIで応答生成、edge-ttsで読み上げ)を実装しました。",
      "人物ごとの記憶は会話全文を保存せず、AIが生成した要約のみ保持することでプライバシーに配慮しつつパーソナライズを実現しています。",
      "シーン(場所・関係性・気分)に応じた話題提案ロジックも特徴です。",
    ],
    role: "開発メンバー",
    teamSize: "4名",
    techStack: ["React", "Vite", "TypeScript", "Flask", "Whisper", "Gemini API", "SQLite"],
    links: {
      github: "https://github.com/KaichoHarry/talk-seed",
    },
    status: "public",
  },
  {
    id: "mytechpulse",
    title: "MyTechPulse",
    subtitle: "Open Hack U 2025 KANAZAWA",
    description:
      "IT技術記事の情報過多による「学習疲れ」を解消する、技術記事パーソナライズサービス。近日公開予定。",
    details: [
      "ユーザーのクリック履歴から興味関心を推定し、今の自分が理解できる範囲を起点に少しずつ新分野へ広げる推薦アルゴリズムを、指数的減衰(Exponential Decay)による独自の重み付けで設計しました。",
      "チームリーダー兼PMとして企画・要件定義・UI設計・フロントエンド実装・API設計・プレゼンを担当。審査員から「短期間開発とは思えないほどUIが整理されている」と評価されました。",
      "現在デプロイ準備中のため、公開までしばらくお待ちください。",
    ],
    role: "チームリーダー / PM / フロントエンド",
    teamSize: "2名",
    techStack: ["HTML/CSS/JS"],
    links: {},
    status: "coming-soon",
  },
];
