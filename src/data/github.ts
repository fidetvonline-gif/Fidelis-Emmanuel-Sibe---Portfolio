export interface GithubRepo {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  url: string;
  homepage?: string | null;
  updatedAt: string;
  topics: string[];
}

export const githubProfileData = {
  username: "fidetvonline-gif",
  profileUrl: "https://github.com/fidetvonline-gif",
  publicReposCount: 11,
  followersCount: 12,
  contributionsThisYear: 312,
  primaryLanguages: [
    { name: "TypeScript", percentage: 55, color: "#3178c6" },
    { name: "JavaScript", percentage: 25, color: "#f7df1e" },
    { name: "PHP", percentage: 12, color: "#4f5d95" },
    { name: "HTML/CSS", percentage: 8, color: "#e34c26" }
  ],
  recentRepos: [
    {
      name: "Attendix",
      description: "Biometric Attendance & Intelligent Analytics platform — Winner of Google Build with AI Uyo Challenge.",
      language: "TypeScript",
      languageColor: "#3178c6",
      stars: 18,
      forks: 5,
      url: "https://github.com/fidetvonline-gif/Attendix",
      homepage: "https://attendix.fidetv.online",
      updatedAt: "2026-08-01",
      topics: ["webauthn", "biometrics", "gemini-ai", "supabase", "react"]
    },
    {
      name: "Federal-Polytechnic-Ukana-Portal",
      description: "Official Website & Academic Portal System for Federal Polytechnic Ukana.",
      language: "TypeScript",
      languageColor: "#3178c6",
      stars: 14,
      forks: 4,
      url: "https://github.com/fidetvonline-gif/Federal-Polytechnic-Ukana-Portal",
      homepage: "https://fedpolyukana.edu.ng/",
      updatedAt: "2026-08-01",
      topics: ["academic-portal", "react", "student-services", "typescript"]
    },
    {
      name: "Fidetvmedia-",
      description: "FideTV premium media hub built for digital storytelling, live video streaming, and campus news distribution.",
      language: "TypeScript",
      languageColor: "#3178c6",
      stars: 12,
      forks: 3,
      url: "https://github.com/fidetvonline-gif/Fidetvmedia-",
      homepage: "https://fidetv.online",
      updatedAt: "2026-08-02",
      topics: ["streaming", "hls-player", "media-hub", "nextjs"]
    },
    {
      name: "HireFlow-NG",
      description: "Digital recruitment platform modernizing hiring processes across Nigerian institutions with transparent applicant tracking.",
      language: "TypeScript",
      languageColor: "#3178c6",
      stars: 10,
      forks: 2,
      url: "https://github.com/fidetvonline-gif/HireFlow-NG",
      homepage: "https://erecruitment.fedpolyukana.edu.ng",
      updatedAt: "2026-07-30",
      topics: ["recruitment", "hr-platform", "applicant-tracking", "react"]
    },
    {
      name: "A-trusted-online-laptop-store",
      description: "Online laptop store with catalog filters, spec comparison, checkout flow, customer reviews, and AI Laptop Advisor.",
      language: "TypeScript",
      languageColor: "#3178c6",
      stars: 9,
      forks: 2,
      url: "https://github.com/fidetvonline-gif/A-trusted-online-laptop-store",
      homepage: "https://a-trusted-online-laptop-store.vercel.app",
      updatedAt: "2026-07-30",
      topics: ["ecommerce", "ai-advisor", "laptop-store", "react"]
    },
    {
      name: "CryptoVest-Pro",
      description: "Secure U.S. crypto platform offering short-term investments, consulting services, and real-time portfolio tracking.",
      language: "TypeScript",
      languageColor: "#3178c6",
      stars: 8,
      forks: 1,
      url: "https://github.com/fidetvonline-gif/CryptoVest-Pro",
      homepage: "https://cryptovestpro.digital",
      updatedAt: "2026-07-30",
      topics: ["fintech", "crypto", "portfolio-tracker", "react"]
    },
    {
      name: "codextreme-x4ul",
      description: "CodeXtreme ICT training platform providing web dev courses and student mentorship.",
      language: "TypeScript",
      languageColor: "#3178c6",
      stars: 7,
      forks: 2,
      url: "https://github.com/fidetvonline-gif/codextreme-x4ul",
      homepage: "https://codextremeict.vercel.app",
      updatedAt: "2026-08-01",
      topics: ["edtech", "ict-training", "react"]
    },
    {
      name: "spicycircle",
      description: "Student-centric campus social network under FIDE TV ecosystem.",
      language: "TypeScript",
      languageColor: "#3178c6",
      stars: 6,
      forks: 1,
      url: "https://github.com/fidetvonline-gif/spicycircle",
      homepage: "https://spicycircle.fidetv.online",
      updatedAt: "2026-08-01",
      topics: ["social-network", "campus-community", "nextjs"]
    },
    {
      name: "codextreme",
      description: "Digital portal for CodeXtreme Tech Academy offering coding bootcamps.",
      language: "TypeScript",
      languageColor: "#3178c6",
      stars: 6,
      forks: 1,
      url: "https://github.com/fidetvonline-gif/codextreme",
      homepage: "https://codextreme-zeta.vercel.app",
      updatedAt: "2026-08-01",
      topics: ["tech-academy", "bootcamp", "react"]
    },
    {
      name: "-Climaterra-Nexus-Ltd-",
      description: "Professional corporate website for Climaterra Nexus Ltd, a climate action and sustainability company.",
      language: "TypeScript",
      languageColor: "#3178c6",
      stars: 5,
      forks: 1,
      url: "https://github.com/fidetvonline-gif/-Climaterra-Nexus-Ltd-",
      updatedAt: "2026-08-01",
      topics: ["climate-action", "sustainability", "corporate-website"]
    },
    {
      name: "Array-Sorting-Filtering-API",
      description: "POST API endpoint array_api.php for array manipulation with interactive web test console.",
      language: "TypeScript",
      languageColor: "#3178c6",
      stars: 7,
      forks: 2,
      url: "https://github.com/fidetvonline-gif/Array-Sorting-Filtering-API",
      homepage: "https://array-sorting-filtering-api.vercel.app",
      updatedAt: "2026-07-29",
      topics: ["php", "api-endpoint", "array-processing", "vercel"]
    },
    {
      name: "PHP-Session-Login-Simulation",
      description: "PHP session login simulation featuring login.php and welcome.php with credential verification and session inspector.",
      language: "TypeScript",
      languageColor: "#3178c6",
      stars: 6,
      forks: 1,
      url: "https://github.com/fidetvonline-gif/PHP-Session-Login-Simulation",
      homepage: "https://php-session-login-simulation-tan.vercel.app",
      updatedAt: "2026-07-29",
      topics: ["php", "session-auth", "security", "web-dev"]
    }
  ] as GithubRepo[]
};
