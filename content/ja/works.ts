import type { Project } from "@/lib/types";

export const works = {
  title: "Selected Works",
  subtitle:
    "ハッカソンやインターン、個人開発で手がけた6つのプロジェクトです。企画・設計から実装まで携わりました。",
  items: [
    {
      slug: "make-task-ai",
      filename: "make-task-ai.py",
      title: "make-task-AI",
      meta: "Techzen (Vietnam) Internship",
      summary:
        "曖昧なユーザーストーリー・受け入れ条件を、複数のAIエージェント(PM/バックエンド/セキュリティ/QA/UX視点)が多角的にレビューし、具体的な開発タスクへ自動分解するシステム。リーダーとして要件定義から実装までを担当。",
      tags: ["Python", "LangChain", "LangGraph", "OpenAI API", "Docker"],
      links: { github: "https://github.com/KaichoHarry/make-task-AI" },
      status: "public",
    },
    {
      slug: "the-8pm-challenge",
      filename: "the-8pm-challenge.tsx",
      title: "20時の挑戦状",
      meta: "技育CAMP2025 Vol.12 努力賞",
      summary:
        "AIが生成した支離滅裂な「なぞなぞ」を毎日20時に公開するWebゲーム。AIの弱点を逆手に取ったエンタメ企画。チームリーダー兼PMとして企画・要件定義・進捗管理・実装を担当。",
      tags: ["React", "TypeScript", "Vite"],
      links: {
        github: "https://github.com/H4aruki/The-8-PM-Challenge",
        demo: "https://h4aruki.github.io/The-8-PM-Challenge/",
        docs: "https://hurricane-dance-850.notion.site/25f605b98b4f80c180afe5b8e7b3f352",
      },
      status: "public",
    },
    {
      slug: "ai-shiritori-app",
      filename: "ai-shiritori-app.ts",
      title: "AI-shiritori-app",
      meta: "個人開発",
      summary:
        "ソロプレイ・AI対戦・文章しりとり(フリートーク)の3モードを備えたWebしりとりアプリ。ほぼ全工程をClaude Code(AI駆動開発)で実装。",
      tags: ["Next.js", "TypeScript", "Go", "PostgreSQL", "Gemini API"],
      links: {
        github: "https://github.com/KaichoHarry/AI-shiritori-app",
        demo: "https://frontend-production-ebe1.up.railway.app/",
      },
      status: "public",
    },
    {
      slug: "face-achievement-diag",
      filename: "face-achievement-diag.py",
      title: "顔面偉業診断",
      meta: "チーム開発(2名・バックエンド/インフラ担当)",
      summary:
        "顔画像から、その人物が将来成し遂げる「偉業」をAIが予測・診断するWebアプリ。「現状分析」ではなく「未来予測」にフォーカスしたエンタメ的AIコンテンツ。",
      tags: ["Python", "PyTorch", "FastAPI", "PostgreSQL"],
      links: {
        github: "https://github.com/KaichoHarry/face-achievement-diag",
        demo: "https://face-achievement-diag.vercel.app",
      },
      status: "public",
    },
    {
      slug: "talk-seed",
      filename: "talk-seed.tsx",
      title: "TalkSeed",
      meta: "4名チーム",
      summary:
        "飲食店やイベント会場の待ち時間に、AIが会話参加者として加わり話題提案・深掘り質問・共感で会話を支援する音声対話アプリ。",
      tags: ["React", "Vite", "Flask", "Whisper", "Gemini API"],
      links: { github: "https://github.com/KaichoHarry/talk-seed" },
      status: "public",
    },
    {
      slug: "my-tech-pulse",
      filename: "my-tech-pulse.ts",
      title: "MyTechPulse",
      meta: "Open Hack U 2025 KANAZAWA",
      summary:
        "IT技術記事の情報過多による「学習疲れ」を解消するため、クリック履歴から興味関心を推定し、少しずつ新分野へ広げる技術記事パーソナライズサービス。",
      tags: ["HTML/CSS/JS", "Recommendation Algorithm"],
      links: { demo: "https://mytechpulse.net/" },
      status: "public",
    },
  ] satisfies Project[],
};
