import type { FeaturedItem } from "@/lib/types";

const RAKSUL_BLOG = "https://techblog.raksul.com/entry/2026/10/30/102813";
const TECHZEN_VIDEO =
  "https://www.facebook.com/techzenacademy.vn/videos/global-internship-program-g%E1%BA%B7p-g%E1%BB%A1-nanko-sinh-vi%C3%AAn-n%C4%83m-2-ng%C3%A0nh-ai-t%E1%BA%A1i-nagoya-nh%E1%BA%ADt-/1720712308902750/";
const JIGJP_BLOG = "https://jigjp-diary2026.hatenablog.com/entry/2026/09/03/194429";

export const featuredLinks = {
  raksulBlog: RAKSUL_BLOG,
  techzenVideo: TECHZEN_VIDEO,
  jigjpBlog: JIGJP_BLOG,
};

export const featured = {
  eyebrowLabel: "Featured",
  title: "受賞・掲載",
  subtitle: "自分の言葉だけでなく、企業の公式ブログや動画で紹介していただいた記録です。",
  items: [
    {
      kind: "award",
      title: "ラクスル Hack Week でインターンシップアワード受賞",
      source: "RAKSUL TechBlog(公式)",
      href: RAKSUL_BLOG,
      period: "2026年9月7日〜11日",
      highlight: "手作業の消し込みの42%をシステムで代替",
      note: "参加記を公式テックブログに寄稿",
    },
    {
      kind: "interview",
      title: "ベトナムのIT企業 Techzen によるインタビュー動画",
      source: "Techzen Academy 公式Facebook",
      href: TECHZEN_VIDEO,
      period: "2026年1月11日〜2月7日",
      highlight: "「新しいアイデアを自信を持って発表する」と紹介",
      note: "ベトナム語・英語",
    },
    {
      kind: "award",
      title: "技育CAMP2025 Vol.12 努力賞",
      source: "技育プロジェクト公式X · 作品「20時の挑戦状」",
      href: "https://x.com/geek_pjt/status/1964624073549660357",
      period: "2025年8月28日〜9月5日",
      highlight: "チームリーダー兼PMとして企画から実装まで担当",
    },
    {
      kind: "blog",
      title: "jig.jp サマーインターン参加記",
      source: "jigintern2026 web diary",
      href: JIGJP_BLOG,
      period: "2026年8月17日〜28日",
      highlight: "古民家での2週間の共同生活とチーム開発の振り返り",
      note: "筆者名「ヤドン」",
    },
  ] satisfies FeaturedItem[],
};
