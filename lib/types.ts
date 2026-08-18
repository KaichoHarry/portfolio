export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export type CodeLine = {
  text: string;
  tone?: "default" | "muted" | "accent" | "success";
};

export type ProjectStatus = "public" | "coming-soon";

export type ProjectLinks = {
  github?: string;
  demo?: string;
  docs?: string;
};

export type Project = {
  slug: string;
  filename: string;
  title: string;
  meta?: string;
  summary: string;
  tags: string[];
  links: ProjectLinks;
  status: ProjectStatus;
};

export type SkillItem = {
  name: string;
  icon: string;
  years?: string;
  level?: 1 | 2 | 3 | 4 | 5;
  description?: string;
};

export type HeroPersonalItem = {
  text: string;
  tone?: CodeLine["tone"];
  photo: string;
  caption: string;
};

export type ContactLink = {
  name: string;
  value: string;
  href: string;
  icon: string;
  invertOnLight?: boolean;
};

export type AboutProfile = {
  name: string;
  role: string;
  affiliation: string;
  focus: string[];
  techStack: string[];
  location: string;
  availability: string;
};
