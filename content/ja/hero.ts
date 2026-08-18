import type { HeroPersonalItem } from "@/lib/types";

export const hero = {
  greeting: "Hi, I'm 南口遼河.",
  lineTwoPrefix: "課題を",
  highlight: "構造化",
  lineThree: "し、価値に変える。",
  subtitle:
    "課題を構造的に分析し、人や技術を巻き込みながら改善を実装するエンジニアです。ベトナムでのインターンでは複数AIエージェントによる開発支援システムを、ハッカソンでは「AIの弱点をコンテンツ化する」アイデアで努力賞を受賞しました。",
  ctaLabel: "view my works",
  ctaHref: "#works",
  personalWindowFilename: "profile.json",
  personalHint: "各行にカーソルを合わせる(タップ)と写真が表示されます",
  personalItems: [
    {
      text: "const me = {",
      tone: "default",
      photo: "/images/hero/photo_profile.svg",
      caption: "南口遼河(仮のプロフィール写真)",
    },
    {
      text: "  name: '南口遼河',",
      tone: "muted",
      photo: "/images/hero/photo_profile.svg",
      caption: "南口遼河(仮のプロフィール写真)",
    },
    {
      text: "  affiliation: '名古屋国際工科専門職大学',",
      tone: "muted",
      photo: "/images/hero/photo_profile.svg",
      caption: "南口遼河(仮のプロフィール写真)",
    },
    {
      text: "  hobby_1: '趣味1(仮)',",
      tone: "muted",
      photo: "/images/hero/photo_hobby_1.svg",
      caption: "趣味1の写真(仮・要差し替え)",
    },
    {
      text: "  hobby_2: '趣味2(仮)',",
      tone: "muted",
      photo: "/images/hero/photo_hobby_2.svg",
      caption: "趣味2の写真(仮・要差し替え)",
    },
    {
      text: "  motto: '課題を構造化し、価値に変える',",
      tone: "muted",
      photo: "/images/hero/photo_hobby_3.svg",
      caption: "お気に入りの一枚(仮・要差し替え)",
    },
    { text: "};", tone: "default", photo: "/images/hero/photo_profile.svg", caption: "南口遼河(仮のプロフィール写真)" },
  ] satisfies HeroPersonalItem[],
};
