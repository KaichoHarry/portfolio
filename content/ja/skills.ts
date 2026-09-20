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
        "Techzenでのインターンでは、LangGraphで複数のAIエージェントに専門家・批評家の役割を与え、要件定義を自動でリファインメントするシステム「make-task-AI」をFastAPI・PostgreSQL・Dockerで構築。「顔面偉業診断」ではPyTorch(EfficientNet_V2_S)による画像分類モデルのファインチューニングとAPI実装も担当した。",
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
      icon: "/images/icons/skills/skill_icon_javascript.svg",
      years: "2年",
      level: 3,
      description:
        "「MyTechPulse」ではフレームワークに頼らずHTML/CSS/JavaScriptでフロントエンドを実装し、個人開発の学習用クイズサイト「chizai-quiz」でも同様にVanilla JSでロジックを組んだ。TypeScriptでは「AI-shiritori-app」でNext.js製フロントエンドを、「engiiro」ではDenoによるバックエンドAPIを実装するなど、フロント・バックエンド双方の実装経験がある。",
      tools: ["React", "Next.js", "Node.js", "TypeScript", "Vite", "Deno"],
    },
    {
      name: "SQL",
      icon: "/images/icons/skills/skill_icon_postgresql.svg",
      years: "4年",
      level: 3,
      description:
        "「engiiro」ではDB設計を主担当としてPostgreSQLのテーブル設計・マイグレーションを行い、「AI-shiritori-app」でもプレイ履歴・アカウント管理のテーブルを設計した。所属する学生団体の情報管理基盤構築でも、イベント・ドキュメント・出欠記録を関連付けたER図の設計にデータベース理論を活用している。",
      tools: ["PostgreSQL", "MySQL", "SQLite", "Turso"],
    },
    {
      name: "C",
      icon: "/images/icons/skills/skill_icon_c.svg",
      years: "3年",
      level: 2,
      description:
        "大学の授業で学習。ポインタや構造体を扱える。競技プログラミング用にC++も学習しており、基本構造は理解している。",
    },
    {
      name: "Visual Basic",
      icon: "/images/icons/skills/skill_icon_visualbasic.svg",
      years: "7年",
      level: 5,
      description:
        "実家の美容室の業務システムで使用。メニュー・顧客管理や決済情報の集計マクロを開発し、現在も実務で運用中。",
    },
    {
      name: "Google Apps Script",
      icon: "/images/icons/skills/skill_icon_googleappsscript.svg",
      years: "5年",
      level: 5,
      description:
        "実家の美容室が加盟する美容師組合の情報管理で使用。Webスクレイピングも活用し、会員美容室宛のラベルシール印刷などを実務で運用している。ハッカソン「20時の挑戦状」でもGoogleスプレッドシートをDB代わりに扱うバックエンドをGASで構築し、2週間という短期開発でのスピードと運用コストの両立を図った。",
    },
    {
      name: "Ruby",
      years: "1週間",
      level: 2,
      description:
        "ラクスル株式会社の1weekインターンシップで、社内稼働システムの改修にRubyを使用。守秘義務のため詳細は控えるが、既存コードベースの設計方針や命名規則を読み解き、その流儀に沿った機能追加・修正を行った。",
    },
    {
      name: "Git / GitHub",
      icon: "/images/icons/skills/skill_icon_git.svg",
      years: "2年",
      level: 4,
      description:
        "GitHub上でIssueを作成し、機能単位でブランチを切って実装後Pull Requestでレビュー・マージする運用を、スプリント単位のアジャイル開発(Techzenインターン)からNotionでのバックログ管理を伴うウォーターフォール的なハッカソン開発まで使い分けてきた。「engiiro」では3人チームのコンフリクトを避けるため、小さな変更ごとに頻繁に統合する運用を徹底した。",
    },
    {
      name: "Docker",
      icon: "/images/icons/skills/skill_icon_docker.svg",
      years: "2年",
      level: 3,
      description:
        "「顔面偉業診断」ではバックエンド・インフラを担当し、FastAPI製の推論APIをDockerでコンテナ化してHugging Face Spacesにデプロイ。「TalkSeed」でも環境構築からDocker化・デプロイまでを担当し、「AI-shiritori-app」ではDocker Composeでフロント・バックエンド・PostgreSQLを一括起動できる開発環境を構築した。",
    },
  ] satisfies SkillItem[],
  aiToolsTitle: "AI Tools",
  aiToolsSubtitle: "設計相談からコーディング、ドキュメント管理まで、日常的に活用しているAIツールです。",
  aiTools: [
    {
      name: "ChatGPT",
      icon: "/images/icons/ai/ai_icon_chatgpt.svg",
      years: "2年",
      level: 4,
      description: "システムの要件定義・設計等の相談相手として活用。",
    },
    {
      name: "Gemini",
      icon: "/images/icons/ai/ai_icon_gemini.svg",
      years: "1.5年",
      level: 4,
      description: "CLIを用いてドキュメントを読み込ませ、コーディングに活用。",
    },
    {
      name: "NotionAI",
      icon: "/images/icons/ai/ai_icon_notion.svg",
      years: "2年",
      level: 3,
      description: "チームの議事録作成やドキュメント管理、ガントチャート作成等に活用。",
    },
    {
      name: "FigmaAI",
      icon: "/images/icons/ai/ai_icon_figma.svg",
      years: "1年",
      level: 2,
      description: "フロントエンドのモック作成や改装(デザイン変更)に活用。",
    },
    {
      name: "Claude Code",
      icon: "/images/icons/ai/ai_icon_claude.svg",
      years: "1〜2ヶ月",
      level: 4,
      description: "設計・コーディング・デザインなど幅広く活用。",
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
    "Cloudflare Pages",
    "Fly.io",
    "Hugging Face Spaces",
  ],
};
