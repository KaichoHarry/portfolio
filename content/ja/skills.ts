import type { SkillItem } from "@/lib/types";

export const skills = {
  title: "Tech Stack",
  subtitle: "設計・実装・運用に使用している技術とツールの一覧です。",
  detailHint: "レベルは「1: 入門 / 2: 基礎 / 3: 実務 / 4: 応用 / 5: 熟達」の5段階です。",
  items: [
    {
      name: "Python",
      icon: "/images/icons/skills/skill_icon_python.svg",
      years: "6年",
      level: 5,
      description:
        "様々なハッカソン・インターンで使用。主に機械学習やファインチューニングなど、AI関連の学習・開発に活用してきた。",
      tools: [
        "FastAPI",
        "Flask",
        "PyTorch",
        "TensorFlow",
        "scikit-learn",
        "LangGraph",
        "Whisper",
        "BeautifulSoup",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "MeCab",
      ],
    },
    {
      name: "HTML / CSS / JavaScript",
      years: "2年",
      level: 3,
      description: "ハッカソンでフロントエンド作成に使用。React・Next.js・TypeScriptでの実装経験あり。",
      tools: ["React", "Next.js", "Node.js", "TypeScript", "Vite"],
    },
    {
      name: "SQL",
      years: "4年",
      level: 3,
      description: "ハッカソンや大学のグループ開発で使用。テーブル設計から基本的なクエリ実装まで対応できる。",
      tools: ["PostgreSQL", "MySQL", "SQLite"],
    },
    {
      name: "C",
      years: "3年",
      level: 2,
      description:
        "大学の授業で学習。ポインタや構造体を扱える。競技プログラミング用にC++も学習しており、基本構造は理解している。",
    },
    {
      name: "Visual Basic",
      years: "7年",
      level: 5,
      description:
        "実家の美容室の業務システムで使用。メニュー・顧客管理や決済情報の集計マクロを開発し、現在も実務で運用中。",
    },
    {
      name: "Google Apps Script",
      years: "5年",
      level: 5,
      description:
        "実家の美容室が加盟する美容師組合の情報管理で使用。Webスクレイピングも活用し、会員美容室宛のラベルシール印刷などを実務で運用している。",
    },
    {
      name: "Git / GitHub",
      icon: "/images/icons/skills/skill_icon_git.svg",
      years: "2年",
      level: 4,
      description:
        "ハッカソン挑戦時から使用。PR作成・ブランチ管理などグループ開発の一連の流れに対応できる。ハッカソン・インターンで利用。",
    },
    {
      name: "Docker",
      icon: "/images/icons/skills/skill_icon_docker.svg",
      years: "2年",
      level: 3,
      description: "Git/GitHubと同様、ハッカソン・インターンで利用。",
    },
  ] satisfies SkillItem[],
  aiToolsTitle: "AI Tools",
  aiToolsSubtitle: "設計相談からコーディング、ドキュメント管理まで、日常的に活用しているAIツールです。",
  aiTools: [
    {
      name: "ChatGPT",
      years: "2年",
      level: 4,
      description: "システムの要件定義・設計等の相談相手として活用。",
    },
    {
      name: "Gemini",
      years: "1.5年",
      level: 4,
      description: "CLIを用いてドキュメントを読み込ませ、コーディングに活用。",
    },
    {
      name: "NotionAI",
      years: "2年",
      level: 3,
      description: "チームの議事録作成やドキュメント管理、ガントチャート作成等に活用。",
    },
    {
      name: "FigmaAI",
      years: "1年",
      level: 2,
      description: "フロントエンドのモック作成や改装(デザイン変更)に活用。",
    },
  ] satisfies SkillItem[],
  otherLabel: "Other Tools & Platforms",
  otherTools: [
    "Go",
    "OpenAI API",
    "Google Gemini API",
    "shadcn/ui",
    "Vercel",
    "Railway",
    "Hugging Face Spaces",
    "Claude Code",
  ],
};
