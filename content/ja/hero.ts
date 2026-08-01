import type { CodeLine } from "@/lib/types";

export const hero = {
  greeting: "Hi, I'm 南口遼河.",
  lineTwoPrefix: "課題を",
  highlight: "構造化",
  lineThree: "し、価値に変える。",
  subtitle:
    "課題を構造的に分析し、人や技術を巻き込みながら改善を実装するエンジニアです。ベトナムでのインターンでは複数AIエージェントによる開発支援システムを、ハッカソンでは「AIの弱点をコンテンツ化する」アイデアで努力賞を受賞しました。",
  ctaLabel: "view my works",
  ctaHref: "#works",
  codeLines: [
    { text: "const developer = {", tone: "default" },
    { text: "  name: '南口遼河',", tone: "muted" },
    { text: "  role: 'Software Engineer',", tone: "muted" },
    { text: "  affiliation: '名古屋国際工科専門職大学',", tone: "muted" },
    { text: "  skills: ['Python', 'TypeScript', 'Next.js', 'LangGraph'],", tone: "muted" },
    { text: "  strength: '課題を構造化し、人と技術を巻き込む力',", tone: "muted" },
    { text: "  currentFocus: 'AIエージェントを活用したプロダクト開発',", tone: "muted" },
    { text: "};", tone: "default" },
    { text: "", tone: "default" },
    { text: "function build() {", tone: "default" },
    { text: "  return 'ideas to impact';", tone: "success" },
    { text: "}", tone: "default" },
  ] satisfies CodeLine[],
};
