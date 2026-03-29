export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
}

export const blogs: BlogPost[] = [
  {
    id: "modern-web-attacks",
    title: "Understanding Modern Web Application Attacks",
    excerpt: "Discussing modern threats like SQL injection, XSS, Authentication flaws, and Security misconfiguration.",
    content: "Web applications are increasingly targeted by complex attack vectors...",
    date: "Oct 24, 2024",
    author: "Research Team",
  }
];
