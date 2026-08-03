export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: {
    name: string;
    iconName?: string;
    description: string;
    highlight?: boolean;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "languages",
    name: "Languages",
    description: "Core programming and markup languages powering web systems.",
    skills: [
      { name: "JavaScript", description: "ES6+, Async/Await, Web APIs & Modern JS Patterns", highlight: true },
      { name: "TypeScript", description: "Strict Typing, Interfaces, Generics & Type-Safe Architecture", highlight: true },
      { name: "PHP", description: "Server-side scripting, custom APIs, backend scripts & WordPress integration" },
      { name: "HTML5", description: "Semantic markup, accessibility, modern standards & structured DOM" },
      { name: "CSS3", description: "Flexbox, Grid, custom properties, animations & responsive styling" },
      { name: "SQL", description: "Relational queries, database indexing, joins & schema design", highlight: true }
    ]
  },
  {
    id: "frontend",
    name: "Frontend",
    description: "Building responsive, component-driven user interfaces.",
    skills: [
      { name: "React", description: "Custom Hooks, Context API, state management & virtual DOM optimization", highlight: true },
      { name: "Next.js", description: "App Router, SSR, SSG, API routes & production rendering", highlight: true },
      { name: "Tailwind CSS", description: "Utility-first styling, design system implementation & custom themes", highlight: true },
      { name: "Responsive Web Design", description: "Mobile-first layouts, fluid typography & cross-device compatibility" },
      { name: "Component-Based UI", description: "Reusable UI architectures, Radix primitives & accessible design patterns" },
      { name: "Modern Web APIs", description: "WebAuthn, Fetch API, LocalStorage, Web Workers & ResizeObserver" }
    ]
  },
  {
    id: "backend",
    name: "Backend",
    description: "Architecting server logic, endpoints, and database connections.",
    skills: [
      { name: "Node.js", description: "Express.js, asynchronous I/O, event loops & micro-services", highlight: true },
      { name: "PHP Backend", description: "RESTful endpoints, form handlers & legacy system integration" },
      { name: "REST APIs", description: "Endpoint design, JSON contracts, status codes & middleware security", highlight: true },
      { name: "Authentication Systems", description: "JWT, Session tokens, OAuth 2.0 & WebAuthn biometric security", highlight: true },
      { name: "Server-side Applications", description: "Express middleware, full-stack routing & error handling" },
      { name: "Database-driven Applications", description: "ORM integration, query optimization & transaction safety" }
    ]
  },
  {
    id: "database",
    name: "Database & Backend Services",
    description: "Data storage, relational schemas, and real-time backend providers.",
    skills: [
      { name: "PostgreSQL", description: "Relational schema design, indexes, triggers & ACID compliance", highlight: true },
      { name: "Supabase", description: "Row Level Security (RLS), real-time channels & instant REST endpoints", highlight: true },
      { name: "Firebase", description: "Firestore document databases, Firebase Auth & security rules", highlight: true },
      { name: "Database Design", description: "Normalization, ERD modeling & relational key constraints" },
      { name: "SQL Querying", description: "Complex joins, analytical aggregation & data migrations" }
    ]
  },
  {
    id: "cloud",
    name: "Cloud & Deployment",
    description: "Continuous integration, hosting platforms, and version control.",
    skills: [
      { name: "Vercel", description: "Automated Git deployments, serverless functions & preview branches", highlight: true },
      { name: "Netlify", description: "JAMstack hosting, asset optimization & form handling" },
      { name: "Firebase Hosting", description: "Production edge distribution & SSL provisioning" },
      { name: "GitHub", description: "Version control, pull requests, release management & code reviews", highlight: true },
      { name: "Git", description: "Branching strategies, rebase operations & commit hygiene" }
    ]
  },
  {
    id: "ai",
    name: "AI & Emerging Tech",
    description: "Integrating generative intelligence and automated analytics into apps.",
    skills: [
      { name: "AI Application Development", description: "Building intelligent web apps with natural language capabilities", highlight: true },
      { name: "Gemini / Google AI Tools", description: "Google GenAI SDK, structured JSON output, prompt engineering & multimodal AI", highlight: true },
      { name: "AI-Assisted Development", description: "Leveraging LLMs for rapid prototyping, refactoring & automated testing" },
      { name: "Intelligent Analytics", description: "Transforming log data into actionable automated summaries" },
      { name: "AI API Integration", description: "Server-side proxies, streaming responses & error fallback guards", highlight: true }
    ]
  },
  {
    id: "tools",
    name: "Development Tools",
    description: "Core productivity suite and design handoff tools.",
    skills: [
      { name: "Git & GitHub Desktop", description: "Version management & repository synchronization" },
      { name: "VS Code", description: "Custom workspace setup, extensions & debugging workflows" },
      { name: "Figma", description: "UI wireframing, layout inspection & design system reference" },
      { name: "Google AI Studio", description: "Model prototyping, API key management & prompt tuning", highlight: true },
      { name: "Firebase Studio / Console", description: "Database schema management & auth monitoring" }
    ]
  }
];
