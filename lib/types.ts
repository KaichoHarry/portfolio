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
};

export type ContactLink = {
  name: string;
  value: string;
  href: string;
  icon: string;
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
