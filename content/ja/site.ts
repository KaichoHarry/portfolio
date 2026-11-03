import type { NavItem } from "@/lib/types";

export const nav: NavItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About", href: "/about" },
  { id: "works", label: "Works", href: "/works" },
  { id: "internships", label: "Internship", href: "/internships" },
  { id: "skills", label: "Skills", href: "/skills" },
  { id: "contact", label: "Contact", href: "/#contact" },
];

export const footer = {
  name: "南口遼河",
  copyName: "Haruka Nanko",
  year: 2026,
};

export const siteMeta = {
  title: "南口遼河 | Software Engineer Portfolio",
  description:
    "自分の手で、誰かの笑顔をつくる。要件定義から実装、チームマネジメントまで一気通貫でこなすソフトウェアエンジニア、南口遼河のポートフォリオサイトです。ラクスル インターンシップアワード受賞、技育CAMP 努力賞。",
};
