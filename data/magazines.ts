export interface MagazineData {
  id: string;
  title: string;
  type: "Technical" | "Non-Technical";
  edition: string;
  description: string;
  coverImage?: string;
  pdfLink?: string;
}

export const magazines: MagazineData[] = [
  {
    id: "hackshield-24",
    title: "HACKSHIELD",
    type: "Technical",
    edition: "2024–2025 Edition",
    description: "Technical events done by the department in the year 2024-2025",
    coverImage: "/images/tech1.jpg",
    pdfLink: "/pdfs/tech1.pdf"
  },
  {
    id: "hackshield-25",
    title: "HACKSHIELD",
    type: "Technical",
    edition: "2025–2026 Edition",
    description: "Technical events done by the department in the year 2025-2026",
    coverImage: "/images/tech2.jpg",
    pdfLink: "/pdfs/tech2.pdf"
  },
  {
    id: "cyberverse-24",
    title: "CYBERVERSE",
    type: "Non-Technical",
    edition: "2024–2025 Edition",
    description: "Non-Technical events done by the department in the year 2024-2025",
    coverImage: "/images/nontech1.jpg",
    pdfLink: "/pdfs/nontech1.pdf"
  },
  {
    id: "cyberverse-25",
    title: "CYBERVERSE",
    type: "Non-Technical",
    edition: "2025–2026 Edition",
    description: "Non-Technical events done by the department in the year 2025-2026",
    coverImage: "/images/nontech2.jpg",
    pdfLink: "/pdfs/NonTech2.pdf"
  }
];
