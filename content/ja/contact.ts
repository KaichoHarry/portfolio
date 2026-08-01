import type { ContactLink } from "@/lib/types";

export const contact = {
  headline: "Let's build something",
  headlineHighlight: "together.",
  blurb:
    "新しい挑戦や面白いプロジェクトについて、いつでもお話しできればと思っています。ご質問だけでも、気軽にご連絡ください。",
  ctaLabel: "send me a message",
  ctaHref: "mailto:nanko.haruka@gmail.com",
  slug: "haruka",
  links: [
    {
      name: "email",
      value: "nanko.haruka@gmail.com",
      href: "mailto:nanko.haruka@gmail.com",
      icon: "/images/icons/contact/contact_icon_email.svg",
    },
    {
      name: "github",
      value: "github.com/KaichoHarry",
      href: "https://github.com/KaichoHarry",
      icon: "/images/icons/contact/contact_icon_github.svg",
    },
    {
      name: "x",
      value: "@yadon_GVK",
      href: "https://x.com/yadon_gvk",
      icon: "/images/icons/contact/contact_icon_x.svg",
    },
  ] satisfies ContactLink[],
};
