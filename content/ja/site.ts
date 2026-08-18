import type { NavItem } from "@/lib/types";

export const nav: NavItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About", href: "/about" },
  { id: "works", label: "Works", href: "/works" },
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
    "課題を構造的に分析し、人や技術を巻き込みながら改善を実装するソフトウェアエンジニア、南口遼河のポートフォリオサイトです。",
};
