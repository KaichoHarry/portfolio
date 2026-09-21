import type { GuideItem } from "@/lib/types";

export const guide = {
  eyebrowLabel: "Where to look",
  title: "5秒でわかる、このサイトの歩き方",
  subtitle: "どこに何があるか迷わないように、各ページで分かることをまとめました。",
  items: [
    {
      label: "Works",
      description: "6つの制作物と、技術をどう選んだかの理由",
      href: "/works",
    },
    {
      label: "Internships",
      description: "海外(ベトナム)・国内(jig.jp)のインターンで担当した役割",
      href: "/internships",
    },
    {
      label: "Skills",
      description: "何ができるか、なぜその技術を選んだか",
      href: "/skills",
    },
    {
      label: "About",
      description: "エンジニアを志した理由とこれまでの歩み",
      href: "/about",
    },
  ] satisfies GuideItem[],
};
