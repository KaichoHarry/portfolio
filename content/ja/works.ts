import type { Project } from "@/lib/types";

export const works = {
  title: "Selected Works",
  subtitle:
    "ハッカソンや個人開発、インターンで手がけた6つのプロジェクトです。企画・設計から実装まで携わり、技術構成はそれぞれ理由があって選んでいます。実装の詳細は各カードのGitHubからご覧いただけます。",
  items: [
    {
      slug: "the-8pm-challenge",
      filename: "the-8pm-challenge.tsx",
      title: "20時の挑戦状",
      meta: "技育CAMP2025 Vol.12 努力賞",
      summary:
        "AIが生成した支離滅裂な「なぞなぞ」を毎日20時に公開するWebゲーム。AIの弱点を逆手に取ったエンタメ企画。チームリーダー兼PMとして企画・要件定義・進捗管理・実装を担当。",
      techNote:
        "2週間の短期開発でスピードを最優先し、ビルドが速いVite + Reactを選択。バックエンドを持たない静的サイトとして構築し、GitHub Pagesにそのままデプロイできる構成にした。",
      tags: ["React", "TypeScript", "Vite"],
      links: {
        github: "https://github.com/H4aruki/The-8-PM-Challenge",
        demo: "https://h4aruki.github.io/The-8-PM-Challenge/",
        docs: "https://hurricane-dance-850.notion.site/25f605b98b4f80c180afe5b8e7b3f352",
      },
      status: "public",
      thumbnail: "/images/works/the-8pm-challenge-thumb.jpg",
    },
    {
      slug: "ai-shiritori-app",
      filename: "ai-shiritori-app.ts",
      title: "AI-shiritori-app",
      meta: "個人開発",
      summary:
        "ソロプレイ・AI対戦・文章しりとり(フリートーク)の3モードを備えたWebしりとりアプリ。ほぼ全工程をClaude Code(AI駆動開発)で実装。",
      techNote:
        "型安全性と開発スピードを両立できるNext.js + TypeScriptでフロントを組み、しりとりの判定ロジックなど処理速度が要るバックエンドは並行処理に強いGoで実装。会話の自然さにはGemini APIを利用した。",
      tags: ["Next.js", "TypeScript", "Go", "PostgreSQL", "Gemini API"],
      links: {
        github: "https://github.com/KaichoHarry/AI-shiritori-app",
        demo: "https://ai-shiritori-app.nanko-haruka.workers.dev/",
      },
      status: "public",
      thumbnail: "/images/works/ai-shiritori-app-thumb.jpg",
    },
    {
      slug: "face-achievement-diag",
      filename: "face-achievement-diag.py",
      title: "顔面偉業診断",
      meta: "チーム開発(2名・バックエンド/インフラ担当)",
      summary:
        "顔画像から、その人物が将来成し遂げる「偉業」をAIが予測・診断するWebアプリ。「現状分析」ではなく「未来予測」にフォーカスしたエンタメ的AIコンテンツ。",
      techNote:
        "画像分類モデルの学習・推論にはエコシステムが充実したPyTorchを、推論APIには非同期処理が得意なFastAPIを選択。バックエンド・インフラ担当として、モデルからAPIまで一気通貫で構築した。",
      tags: ["Python", "PyTorch", "FastAPI", "PostgreSQL"],
      links: {
        github: "https://github.com/KaichoHarry/face-achievement-diag",
        demo: "https://face-achievement-diag.vercel.app",
      },
      status: "public",
      thumbnail: "/images/works/face-achievement-diag-thumb.jpg",
    },
    {
      slug: "talk-seed",
      filename: "talk-seed.tsx",
      title: "TalkSeed",
      meta: "4名チーム",
      summary:
        "飲食店やイベント会場の待ち時間に、AIが会話参加者として加わり話題提案・深掘り質問・共感で会話を支援する音声対話アプリ。",
      techNote:
        "音声認識にはOSSで高精度なWhisperを、会話生成にはGemini APIを採用。Pythonエコシステムとの親和性を優先し、バックエンドはFlaskで構築した。",
      tags: ["React", "Vite", "Flask", "Whisper", "Gemini API"],
      links: {
        github: "https://github.com/KaichoHarry/talk-seed",
        demo: "https://talk-seed-iota.vercel.app/",
      },
      status: "public",
      thumbnail: "/images/works/talk-seed-thumb.jpg",
    },
    {
      slug: "my-tech-pulse",
      filename: "my-tech-pulse.ts",
      title: "MyTechPulse",
      meta: "Open Hack U 2025 KANAZAWA",
      summary:
        "IT技術記事の情報過多による「学習疲れ」を解消するため、クリック履歴から興味関心を推定し、少しずつ新分野へ広げる技術記事パーソナライズサービス。",
      techNote:
        "短期間のハッカソンでフレームワーク導入のオーバーヘッドを避けるため、あえてVanilla JS(HTML/CSS/JS)で実装。浮いた時間をレコメンドロジックの設計に充てる判断をした。",
      tags: ["HTML/CSS/JS", "Recommendation Algorithm"],
      links: { demo: "https://mytechpulse.net/" },
      status: "public",
      thumbnail: "/images/works/my-tech-pulse-thumb.jpg",
    },
    {
      slug: "engiiro-app",
      filename: "engiiro-app.tsx",
      title: "engiiro(えんじいろ)",
      meta: "jig.jp Webコース サマーインターンシップ2026(3名チーム)",
      summary:
        "投稿した本音をAIが赤ちゃん語・お母さん語に自動変換してから公開する「エンジニアのための本音吐露SNS」。3人チームで開発し、DB設計・バックエンドAPI全般の実装に加え、PMとして進捗管理も担当。",
      techNote:
        "チームメンバーの得意分野に合わせてバックエンドをDenoとFastAPIに分担しつつ、投稿文の言い換えにはGemini APIを利用。API仕様を開発初日に合意し、フロント・バックエンドを並行開発できる構成にした。",
      tags: ["React", "TypeScript", "Deno", "PostgreSQL", "FastAPI", "Gemini API"],
      links: {
        github: "https://github.com/engiiro/engiiro-app",
        demo: "https://app-xi-henna-63.vercel.app/",
      },
      status: "public",
      thumbnail: "/images/works/engiiro-app-thumb.jpg",
    },
  ] satisfies Project[],
};
