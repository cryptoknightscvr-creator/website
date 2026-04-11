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
    pdfLink: "https://drive.google.com/file/d/1tlyyPy_IgB06YnxTExafWghgPR--bLPU/view?usp=sharing"
  },
  {
    id: "hackshield-25",
    title: "HACKSHIELD",
    type: "Technical",
    edition: "2025–2026 Edition",
    description: "Technical events done by the department in the year 2025-2026",
    coverImage: "/images/tech2.jpg",
    pdfLink: "https://drive.google.com/file/d/1uxDdukbaMCUbPzj-X9BBsMKXd7bciWKq/view?usp=sharing"
  },
  {
    id: "cyberverse-24",
    title: "CYBERVERSE",
    type: "Non-Technical",
    edition: "2024–2025 Edition",
    description: "Non-Technical events done by the department in the year 2024-2025",
    coverImage: "/images/nontech1.jpg",
    pdfLink: "https://drive.google.com/file/d/13Fp1Q1o4rBn72udQGkoYO-9rjQavrAap/view?usp=sharing"
  },
  {
    id: "cyberverse-25",
    title: "CYBERVERSE",
    type: "Non-Technical",
    edition: "2025–2026 Edition",
    description: "Non-Technical events done by the department in the year 2025-2026",
    coverImage: "/images/nontech2.jpg",
    pdfLink: "https://drive.google.com/file/d/1bZoeny9zpEp5xoJo1lHRgCRp9UNOVC4d/view?usp=sharing"
  }
];
