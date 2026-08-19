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
        "AIエージェント開発・機械学習・Webバックエンド・業務自動化まで、6年間にわたり中核として使用。設計判断からパフォーマンス改善まで一人で担える。",
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
      description:
        "React・Next.jsを用いたフロントエンド実装を、典型的なユースケースであれば一人で完結できる。TypeScriptによる型安全な実装にも対応。",
      tools: ["React", "Next.js", "Node.js", "TypeScript", "Vite"],
    },
    {
      name: "SQL",
      years: "4年",
      level: 3,
      description: "テーブル設計・CRUD実装・基本的なクエリチューニングまで一人で対応できる。",
      tools: ["PostgreSQL", "MySQL", "SQLite"],
    },
    {
      name: "C",
      years: "3年",
      level: 2,
      description: "基本文法・ポインタ操作は理解しており、ドキュメントを見ながら小規模な実装ができる。",
    },
    {
      name: "Visual Basic",
      years: "7年",
      level: 5,
      description: "7年間の実務利用で、業務システムのマクロ・自動化ツール開発を熟達したレベルで行える。",
    },
    {
      name: "Google Apps Script",
      years: "5年",
      level: 5,
      description:
        "スプレッドシート連携の自動化やチームの業務効率化ツールを、高度に設計・実装できる。",
    },
    {
      name: "Git / GitHub",
      icon: "/images/icons/skills/skill_icon_git.svg",
      years: "2年",
      level: 4,
      description: "ブランチ運用・PRレビュー・コンフリクト解消まで含めたチーム開発フローを主体的に運用できる。",
    },
    {
      name: "Docker",
      icon: "/images/icons/skills/skill_icon_docker.svg",
      years: "2年",
      level: 3,
      description: "Dockerfile・docker-composeを用いた開発環境構築・コンテナ化を一人で実装できる。",
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
