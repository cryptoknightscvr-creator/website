export interface EventData {
  id: string;
  title: string;
  description: string;
  date: string;
}

export const events: EventData[] = [
  {
    id: "cyberquest",
    title: "CyberQuest",
    description: "An intensive flagship CTF event designed for participants to test and enhance their cybersecurity skills.",
    date: "25 March 2025",
  },
  {
    id: "web-challenge",
    title: "Web Challenge Exploitation",
    description: "Challenges focused on modern web application vulnerabilities.",
    date: "March 13 2026",
  },
  {
    id: "crypto-warzone",
    title: "Cryptography War Zone",
    description: "Crack the codes. A competitive event centered around cryptographic algorithms and ciphers.",
    date: "March 13 2026",
  },
  {
    id: "ndli-quiz",
    title: "NDLI Quiz",
    description: "A comprehensive quiz testing knowledge across multiple domains of technology and security.",
    date: "March 13 2026",
  },
  {
    id: "squid-game",
    title: "Squid Game ",
    description: "Survival of the best in a gamified tournament.",
    date: "March 13 2026",
  }
];
