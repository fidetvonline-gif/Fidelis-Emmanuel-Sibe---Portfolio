export interface GithubRepo {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  url: string;
  updatedAt: string;
  topics: string[];
}

export const githubProfileData = {
  username: "fidelissibe",
  profileUrl: "https://github.com/fidelissibe",
  publicReposCount: 18,
  followersCount: 42,
  contributionsThisYear: 384,
  primaryLanguages: [
    { name: "TypeScript", percentage: 42, color: "#3178c6" },
    { name: "JavaScript", percentage: 28, color: "#f7df1e" },
    { name: "PHP", percentage: 16, color: "#4f5d95" },
    { name: "HTML/CSS", percentage: 14, color: "#e34c26" }
  ],
  recentRepos: [
    {
      name: "attendix-biometric-core",
      description: "Biometric attendance tracking engine using WebAuthn API and Gemini generative insights.",
      language: "TypeScript",
      languageColor: "#3178c6",
      stars: 12,
      forks: 3,
      url: "https://github.com/fidelissibe/attendix-biometric-core",
      updatedAt: "2026-07-28",
      topics: ["webauthn", "biometrics", "gemini-ai", "supabase", "react"]
    },
    {
      name: "fidetv-media-engine",
      description: "Headless media distribution system connecting WordPress REST endpoints with Next.js frontend.",
      language: "JavaScript",
      languageColor: "#f7df1e",
      stars: 8,
      forks: 2,
      url: "https://github.com/fidelissibe/fidetv-media-engine",
      updatedAt: "2026-07-15",
      topics: ["nextjs", "streaming", "hls-player", "wordpress-api"]
    },
    {
      name: "student-advocacy-portal",
      description: "Anonymized issue reporting and representative messaging platform for university campus student bodies.",
      language: "TypeScript",
      languageColor: "#3178c6",
      stars: 15,
      forks: 4,
      url: "https://github.com/fidelissibe/student-advocacy-portal",
      updatedAt: "2026-06-20",
      topics: ["supabase-auth", "row-level-security", "react", "tailwind"]
    },
    {
      name: "fedpoly-ukana-dashboard",
      description: "Academic student portal prototype featuring course unit registration and administrative bulletin widgets.",
      language: "PHP",
      languageColor: "#4f5d95",
      stars: 6,
      forks: 1,
      url: "https://github.com/fidelissibe/fedpoly-ukana-dashboard",
      updatedAt: "2026-05-12",
      topics: ["php", "mysql", "academic-portal", "bootstrap-to-tailwind"]
    }
  ] as GithubRepo[]
};
