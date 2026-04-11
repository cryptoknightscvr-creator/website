export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  link?: string;
}

export const blogs: BlogPost[] = [
  {
    id: "CVE-2026-32746",
    title: "CVE-2026-32746",
    excerpt: "vulnerability related to telntd in GNU inetutils.",
    content: "Web applications are increasingly targeted by complex attack vectors...",
    date: "April 02, 2025",
    author: "Srujan",
    link: "https://srujan-07.github.io/my-blog/blog/CVE/CVE-2026-32746", // Add your blog link here
  }
];
