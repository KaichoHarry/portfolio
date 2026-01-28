// ========================================
// モックデータファイル
// 本番環境ではバックエンドAPIから取得する想定
// ========================================

export interface TechStack {
  id: string;
  name: string;
  category: string;
  yearsOfExperience: number;
  projects: string[];
}

export interface Work {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  createdAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  profileImage: string;
  email: string;
  github: string;
  twitter: string;
  linkedin: string;
}

// TODO: バックエンドAPI実装後、以下のデータ取得をAPIコールに置き換える
// Example: export const fetchTechStack = async () => { ... }

export const mockProfile: Profile = {
  name: "山田 太郎",
  title: "フルスタックエンジニア",
  bio: "モダンなWeb技術を活用したアプリケーション開発を得意としています。ユーザー体験を重視した設計と実装に情熱を注いでいます。",
  profileImage: "https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDF8fHx8MTc2OTI5MDk0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
  email: "contact@example.com",
  github: "https://github.com/example",
  twitter: "https://twitter.com/example",
  linkedin: "https://linkedin.com/in/example",
};

export const mockTechStack: TechStack[] = [
  {
    id: "1",
    name: "React",
    category: "フレームワーク",
    yearsOfExperience: 3,
    projects: ["Webアプリ", "社内システム"],
  },
  {
    id: "2",
    name: "TypeScript",
    category: "言語",
    yearsOfExperience: 3,
    projects: ["Webアプリ", "社内システム"],
  },
  {
    id: "3",
    name: "Next.js",
    category: "フレームワーク",
    yearsOfExperience: 2,
    projects: ["Webアプリ"],
  },
  {
    id: "4",
    name: "Node.js",
    category: "バックエンド",
    yearsOfExperience: 3,
    projects: ["社内システム", "API開発"],
  },
  {
    id: "5",
    name: "Python",
    category: "言語",
    yearsOfExperience: 2,
    projects: ["データ分析", "自動化ツール"],
  },
  {
    id: "6",
    name: "PostgreSQL",
    category: "データベース",
    yearsOfExperience: 2,
    projects: ["社内システム", "Webアプリ"],
  },
];

export const mockWorks: Work[] = [
  {
    id: "1",
    title: "ECサイト構築プロジェクト",
    description: "React + Next.jsを使用した大規模ECサイトの開発。ユーザー体験を重視した設計で、コンバージョン率が30%向上しました。",
    imageUrl: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800",
    tags: ["React", "Next.js", "TypeScript"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    title: "社内業務管理システム",
    description: "業務フローの効率化を実現する管理システム。直感的なUIで社内の業務時間を40%削減に成功。",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    tags: ["TypeScript", "Node.js", "PostgreSQL"],
    createdAt: "2023-09-20",
  },
  {
    id: "3",
    title: "リアルタイムチャットアプリ",
    description: "WebSocketを活用したリアルタイムコミュニケーションツール。チーム内のコミュニケーションを円滑化。",
    imageUrl: "https://images.unsplash.com/photo-1611746869696-d09bce200d13?w=800",
    tags: ["React", "WebSocket", "Node.js"],
    demoUrl: "https://example.com",
    createdAt: "2023-06-10",
  },
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "React 18の新機能を使いこなす",
    excerpt: "React 18で導入された並行レンダリングやSuspenseの活用方法について詳しく解説します。",
    content: `
# React 18の新機能を使いこなす

React 18では多くの新機能が導入されました。特に注目すべきは並行レンダリング機能です...

## 並行レンダリングとは

並行レンダリングは、Reactが複数の状態更新を同時に処理できる機能です...
    `,
    tags: ["React", "JavaScript", "フロントエンド"],
    publishedAt: "2024-01-20",
    readTime: 5,
  },
  {
    id: "2",
    title: "TypeScriptで型安全なAPI設計",
    excerpt: "TypeScriptを活用して、エンドツーエンドで型安全なAPI設計を実現する方法を紹介します。",
    content: `
# TypeScriptで型安全なAPI設計

TypeScriptを使用することで、フロントエンドとバックエンド間の型の整合性を保つことができます...
    `,
    tags: ["TypeScript", "API", "バックエンド"],
    publishedAt: "2024-01-15",
    readTime: 7,
  },
  {
    id: "3",
    title: "Next.jsでのパフォーマンス最適化",
    excerpt: "Next.jsアプリケーションのパフォーマンスを最大化するためのテクニックとベストプラクティス。",
    content: `
# Next.jsでのパフォーマンス最適化

パフォーマンスはユーザー体験の重要な要素です。Next.jsには様々な最適化機能が組み込まれています...
    `,
    tags: ["Next.js", "パフォーマンス", "最適化"],
    publishedAt: "2024-01-10",
    readTime: 6,
  },
  {
    id: "4",
    title: "モダンなCSS設計パターン",
    excerpt: "Tailwind CSSとCSS Modulesを組み合わせた、保守性の高いCSS設計について解説します。",
    content: `
# モダンなCSS設計パターン

CSSの設計は長年の課題でしたが、最近のツールを使うことでより良い解決策が見つかります...
    `,
    tags: ["CSS", "Tailwind", "デザイン"],
    publishedAt: "2024-01-05",
    readTime: 4,
  },
  {
    id: "5",
    title: "Web開発におけるアクセシビリティ",
    excerpt: "すべてのユーザーが利用できるWebアプリケーションを作るためのアクセシビリティの基本。",
    content: `
# Web開発におけるアクセシビリティ

アクセシビリティは、すべての人がWebサイトを利用できるようにするための重要な要素です...
    `,
    tags: ["アクセシビリティ", "UX", "Web開発"],
    publishedAt: "2023-12-28",
    readTime: 8,
  },
];
