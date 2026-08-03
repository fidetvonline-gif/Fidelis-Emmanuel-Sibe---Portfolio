export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location?: string;
  type: 'work' | 'founder' | 'education';
  description: string;
  technologies: string[];
  highlights?: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    period: "2024 — Present",
    role: "Software Engineer & Web Developer",
    organization: "Independent Product Engineering",
    location: "Nigeria",
    type: "work",
    description: "Building web applications, software systems, digital products, student platforms, and technology-driven solutions for real-world use cases.",
    technologies: ["React", "Next.js", "JavaScript", "TypeScript", "PHP", "Supabase", "Firebase", "AI Tools"],
    highlights: [
      "Architected Attendix biometric attendance system which won 1st Place at Google Build with AI Uyo Challenge.",
      "Engineered full-stack web applications with authentication, custom APIs, and real-time database integrations.",
      "Applied modern product thinking, turning initial user problems into deployed, production-ready software."
    ]
  },
  {
    period: "2023 — Present",
    role: "Founder & Digital Product Builder",
    organization: "FIDE TV / FideTV Media",
    location: "Nigeria",
    type: "founder",
    description: "Building a digital media and streaming ecosystem focused on online content, live experiences, campus stories, news, and digital publishing.",
    technologies: ["Web Development", "Streaming Tech", "Digital Media", "Content Platforms", "WordPress REST API", "React"],
    highlights: [
      "Launched fidetv.online and spicycircle.fidetv.online as digital media portals for student stories and live video.",
      "Managed digital content pipeline, live streaming tools, and media publishing workflows."
    ]
  },
  {
    period: "Academic Qualification",
    role: "HND Computer Science Student",
    organization: "Federal Polytechnic Ukana",
    location: "Akwa Ibom State, Nigeria",
    type: "education",
    description: "Higher National Diploma coursework in Computer Science, software engineering principles, algorithms, database systems, and computer architecture.",
    technologies: ["Computer Science", "Database Systems", "Software Architecture", "Algorithms", "Web Technologies"],
    highlights: [
      "Built academic project concepts including the FedPoly Ukana Student Platform.",
      "Applied computer science theory to practical web product development."
    ]
  }
];
