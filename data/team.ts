export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
}

/**
 * HOW TO ADD MEMBERS & PHOTOS:
 * 1. Place the photo in 'public/images/team/' (e.g., 'public/images/team/member-name.jpg')
 * 2. Reference the path as '/images/team/member-name.jpg' in the 'image' field below.
 * 3. If no image is provided, a placeholder will be shown.
 */

export const coordinators: TeamMember[] = [
  {
    id: "coord-1", name: "Dr. H N Lakshmi", role: "Dean Emerging Technologies", image: "/images/team/lakshmi ma'am.jpeg", linkedin: "https://www.linkedin.com/in/dr-lakshmi-h-n-134aa814/"
  },
  { id: "coord-2", name: "Dr. M Sunitha", role: "Head of Department CSE(CS)", image: "/images/team/hodmam.png", linkedin: "https://www.linkedin.com/in/maddhi-sunitha-921a2934/" },
];

export const facultyMembers: TeamMember[] = [
  { id: "fac-1", name: "faculty 1", role: "Mentor" },
  { id: "fac-2", name: "faculty 2", role: "Mentor" },
  { id: "fac-3", name: "faculty 3", role: "Mentor" },
  { id: "fac-4", name: "faculty 4", role: "Mentor" },
];

export const teamMembers: TeamMember[] = [
  { id: "team-1", name: "Sai Karthik Reddy", role: "President", image: "/images/team/karthik.jpeg", linkedin: "https://www.linkedin.com/in/addula-sai-karthik-reddy-544573256/" },
  { id: "team-2", name: "Aravindh", role: "Technical Team", image: "/images/team/aravindh.jpg", linkedin: "https://www.linkedin.com/in/gajawada-aravindh/" },
  { id: "team-3", name: "Nihar", role: "Technical Team", image: "/images/team/nihar.jpeg", linkedin: "https://www.linkedin.com/in/kondanihar55/" },
  { id: "team-4", name: "Srujan", role: "Technical Team", image: "/images/team/srujan.jpeg", linkedin: "https://www.linkedin.com/in/srujan-samala-76b104215/" },
  { id: "team-5", name: "Rajaram", role: "Technical Team", linkedin: "https://www.linkedin.com/in/rajaram-ramavath/" },
  { id: "team-6", name: "Vivekanand", role: "Technical Team", linkedin: "https://www.linkedin.com/in/vivekananda-reddy-968295290/" },
  { id: "team-10", name: "Hanish", role: " Organizing committee", linkedin: "https://www.linkedin.com/in/hanishreddy001/" },
  { id: "team-7", name: "Vagdevi", role: "Technical Team", image: "/images/team/vagdevi.jpeg", linkedin: "https://www.linkedin.com/in/vagdevisagi08/" },
  { id: "team-8", name: "Vinathi", role: "Technical Team", image: "/images/team/vinathi.jpeg", linkedin: "https://www.linkedin.com/in/vinathi-bellam-3a5274257/" },
  { id: "team-9", name: "Team Member 9", role: "Team Member" },
  { id: "team-11", name: "Team Member 11", role: "Team Member" },
  { id: "team-12", name: "Team Member 12", role: "Team Member" },
  { id: "team-13", name: "Team Member 13", role: "Team Member" },
  { id: "team-14", name: "Team Member 14", role: "Team Member" },
  { id: "team-15", name: "Team Member 15", role: "Team Member" },
  { id: "team-16", name: "Team Member 16", role: "Team Member" },
  { id: "team-17", name: "Team Member 17", role: "Team Member" },
  { id: "team-18", name: "Team Member 18", role: "Team Member" },
  { id: "team-19", name: "Team Member 19", role: "Team Member" },
  { id: "team-20", name: "Team Member 20", role: "Team Member" },
];

