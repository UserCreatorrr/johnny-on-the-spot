export interface Service {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
}

export interface Sector {
  slug: string;
  title: string;
  description: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  title: string;
  description: string;
  services: string[];
  sector: string;
}

export interface Solution {
  slug: string;
  title: string;
  description: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readingTime: number;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
