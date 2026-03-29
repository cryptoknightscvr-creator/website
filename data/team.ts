export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
}

export const facultyMembers: TeamMember[] = [
  { id: "fac-1", name: "Dr. H N Laxmi", role: "Dean Emerging Technologies" },
  { id: "fac-2", name: "Dr. M Sunitha", role: "Head of Department CSE(CS)" },
  // { id: "fac-3", name: "Prof. John Doe", role: "Technical Mentor" },
  // { id: "fac-4", name: "Prof. Jane Smith", role: "Research Coordinator" }
];

export const studentMembers: TeamMember[] = [
  { id: "stu-1", name: "Sai Karthik Reddy", role: "President" },
  { id: "stu-2", name: "Aravindh", role: "Technical Team" },
  { id: "stu-3", name: "Nihar", role: "Technical Team" },
  { id: "stu-4", name: "Srujan", role: "Technical Team" },
  { id: "stu-5", name: "Rajaram", role: "Technical Team" },
  { id: "stu-6", name: "Vivekanand", role: "Technical Team" },


];
