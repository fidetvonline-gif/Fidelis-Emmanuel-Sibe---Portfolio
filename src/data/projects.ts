export interface TechnicalDecision {
  title: string;
  choice: string;
  rationale: string;
}

export interface ConstraintTradeoff {
  topic: string;
  constraint: string;
  tradeoff: string;
}

export interface ArchitectureNode {
  step: number;
  label: string;
  description: string;
  iconName: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  recognition?: string;
  outcome: string;
  image: string;
  liveUrl?: string | null;
  githubUrl?: string | null;
  featured: boolean;
  context: string;
  architecture: ArchitectureNode[];
  technicalDecisions: TechnicalDecision[];
  constraintsAndTradeoffs: ConstraintTradeoff[];
  lessonsLearned: string[];
  metrics?: { label: string; value: string }[];
}

import attendixImg from '../assets/images/attendix_mockup_1785714036078.jpg';
import fidetvImg from '../assets/images/fidetv_mockup_1785714046707.jpg';
import gsnImg from '../assets/images/gsn_mockup_1785714058460.jpg';
import fedpolyImg from '../assets/images/fedpoly_mockup_1785714070859.jpg';
import laptopStoreImg from '../assets/images/laptop_store_mockup_1785720066744.jpg';
import cryptovestImg from '../assets/images/cryptovest_mockup_1785720080573.jpg';
import climaterraImg from '../assets/images/climaterra_mockup_1785720095778.jpg';
import apiConsoleImg from '../assets/images/api_console_mockup_1785720107632.jpg';
import phpLoginImg from '../assets/images/php_login_mockup_1785720119846.jpg';
import codextremeIctImg from '../assets/images/codextreme_ict_mockup_1785720132886.jpg';
import spicycircleImg from '../assets/images/spicycircle_mockup_1785720146222.jpg';
import codextremeAcademyImg from '../assets/images/codextreme_academy_mockup_1785720160365.jpg';

export const projectsData: Project[] = [
  {
    slug: "attendix",
    number: "01",
    title: "Attendix",
    category: "Biometric Attendance & Intelligent Analytics",
    shortDescription: "Attendix is a modern attendance management application designed to simplify attendance tracking using WebAuthn biometric authentication and intelligent analytics.",
    problem: "Traditional paper-based or manual attendance systems in higher educational institutions and organizations are slow, administrative-heavy, difficult to audit, and vulnerable to proxy attendance.",
    solution: "Attendix combines modern WebAuthn biometric authentication technology with an intelligent analytics layer powered by Gemini to create a secure, tamper-resistant, and insight-driven attendance tracking system.",
    technologies: ["React", "TypeScript", "Supabase", "PostgreSQL", "WebAuthn / FIDO2", "Gemini AI", "Tailwind CSS"],
    recognition: "Winner — Google Build with AI Uyo Challenge",
    outcome: "Built as a practical biometric attendance and analytics solution designed around real-world educational use cases, winning 1st place at the Google Build with AI Uyo Challenge.",
    image: attendixImg,
    liveUrl: "https://attendix.fidetv.online",
    githubUrl: "https://github.com/fidetvonline-gif/Attendix",
    featured: true,
    context: "Designed for university lecture halls, administrative departments, and enterprise workshops needing seamless, verifiable attendance verification.",
    architecture: [
      { step: 1, label: "User / Student", description: "Initiates attendance verification via mobile or desktop web interface.", iconName: "User" },
      { step: 2, label: "Biometric Auth", description: "WebAuthn / FIDO2 authenticates physical device credential (fingerprint/Face ID).", iconName: "Fingerprint" },
      { step: 3, label: "Web Application", description: "React frontend verifies payload integrity and session token.", iconName: "Globe" },
      { step: 4, label: "Supabase / PostgreSQL", description: "Encrypted record logged immutably into database with timestamp and session metadata.", iconName: "Database" },
      { step: 5, label: "Analytics Layer", description: "Gemini AI analyzes attendance trends, absenteeism patterns, and anomalies.", iconName: "Sparkles" },
      { step: 6, label: "Dashboard", description: "Real-time visual reports served to faculty and administrators.", iconName: "LayoutDashboard" }
    ],
    technicalDecisions: [
      {
        title: "WebAuthn / FIDO2 Authentication",
        choice: "Hardware-bound biometric credentials via Browser Web API",
        rationale: "Eliminated proxy attendance completely without requiring proprietary hardware scanners, utilizing native device biometrics."
      },
      {
        title: "Supabase & PostgreSQL Backend",
        choice: "Relational database with Row Level Security (RLS)",
        rationale: "Ensures strict student data isolation and enables real-time subscription channels for lecture attendance counters."
      },
      {
        title: "Gemini AI Analytics Integration",
        choice: "Server-side generative analytics proxy",
        rationale: "Translates raw timestamp logs into natural-language absenteeism summaries and automated risk alerts for faculty."
      }
    ],
    constraintsAndTradeoffs: [
      {
        topic: "Offline Accessibility",
        constraint: "Students may lose connectivity inside dense concrete lecture halls.",
        tradeoff: "Implemented local cryptographic queuing via IndexedDB; verified signatures sync automatically upon reconnecting."
      },
      {
        topic: "Browser Hardware Support",
        constraint: "Older Android/iOS devices might lack WebAuthn hardware modules.",
        tradeoff: "Built a secure secondary OTP fallback requiring time-sensitive TOTP tokens generated by course invigilators."
      }
    ],
    lessonsLearned: [
      "Designing for real-world campus constraints requires handling intermittent connectivity gracefully.",
      "Native browser APIs like WebAuthn can replace expensive custom biometric hardware setups.",
      "Combining transactional data with AI generative summaries turns passive logs into proactive decision tools."
    ],
    metrics: [
      { label: "Hackathon Recognition", value: "1st Place Winner" },
      { label: "Verification Latency", value: "< 1.2 seconds" },
      { label: "Proxy Prevention Rate", value: "100% Cryptographic" }
    ]
  },
  {
    slug: "fedpoly-ukana-portal",
    number: "02",
    title: "Federal Polytechnic Ukana Website & Academic Portal",
    category: "Institutional Website & Academic Portal",
    shortDescription: "Official Website & Integrated Portal System for Federal Polytechnic Ukana, featuring institutional information, academic programs, and student service portals.",
    problem: "Polytechnic students, prospective applicants, and staff needed a modern official website and integrated portal for admissions, course registrations, departmental notices, and result processing.",
    solution: "Engineered an integrated website and portal system unifying institutional information, course registration, lecturer grading tools, tuition payment verification displays, administrative bulletins, and student profile dashboards.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Vercel"],
    outcome: "Built the official website and institutional portal modernizing academic administration and digital presence for Federal Polytechnic Ukana.",
    image: fedpolyImg,
    liveUrl: "https://fedpolyukana.edu.ng/",
    githubUrl: "https://github.com/fidetvonline-gif/Federal-Polytechnic-Ukana-Portal",
    featured: true,
    context: "Developed as an institutional software initiative combining Computer Science HND technical expertise with direct campus experience.",
    architecture: [
      { step: 1, label: "Student & Staff Sign-In", description: "Matriculation number and staff ID security verification.", iconName: "Lock" },
      { step: 2, label: "Academic Hub", description: "Course selection, semester unit calculation, and prerequisite validation.", iconName: "BookOpen" },
      { step: 3, label: "Lecturer Grading Tools", description: "Secure grade entry portal with automated GPA and CGPA calculations.", iconName: "FileCheck" },
      { step: 4, label: "Administrative Noticeboard", description: "Real-time bulletin for departmental updates and examination schedules.", iconName: "Bell" }
    ],
    technicalDecisions: [
      {
        title: "Modular Dashboard Component Model",
        choice: "Reusable component architecture for academic modules",
        rationale: "Allows quick addition of future services such as transcript requests and hostel reservations without breaking core navigation."
      },
      {
        title: "Role-Based Portal Access",
        choice: "Strict permission guards for Student, Lecturer, and Admin roles",
        rationale: "Guarantees student records and grade entries are accessible only to verified academic staff."
      }
    ],
    constraintsAndTradeoffs: [
      {
        topic: "Legacy Institutional Records",
        constraint: "Historical polytechnic archives were offline or non-standardized.",
        tradeoff: "Built strict schema adapters to convert legacy CSV exports into relational database schemas seamlessly."
      }
    ],
    lessonsLearned: [
      "Academic workflows demand strict validation to prevent course credit calculation errors.",
      "Building software for your own institution yields deep insight into actual user friction points."
    ],
    metrics: [
      { label: "Target Audience", value: "Students & Faculty" },
      { label: "Portal Roles", value: "Student, Staff, Admin" },
      { label: "Platform Status", value: "Live Production" }
    ]
  },
  {
    slug: "fide-tv-media",
    number: "03",
    title: "FideTV Media Hub",
    category: "Digital Media & Streaming Platform",
    shortDescription: "FideTV is a premium media hub built for digital storytelling, video streaming, campus news coverage, and creative digital media distribution.",
    problem: "Independent campus creators and regional media platforms lacked high-performance digital hubs to stream live broadcasts, publish student journalism, and distribute video content efficiently.",
    solution: "Engineered a digital media ecosystem combining fast content delivery, customized media player components, responsive article readers, and community interaction tools.",
    technologies: ["React", "TypeScript", "Next.js", "HLS Streaming", "WordPress REST API", "Tailwind CSS"],
    outcome: "Successfully launched a digital media ecosystem streaming live events, student journalism, and online entertainment to wide digital audiences.",
    image: fidetvImg,
    liveUrl: "https://fidetv.online",
    githubUrl: "https://github.com/fidetvonline-gif/Fidetvmedia-",
    featured: true,
    context: "Serves as the central digital engine for FIDE TV / FideTV Media, connecting youth and campus communities with live video feeds and digital media content.",
    architecture: [
      { step: 1, label: "Content Creation", description: "Editorial team & video crews publish news stories and stream feeds.", iconName: "Video" },
      { step: 2, label: "Media Distribution API", description: "Headless content endpoints manage article metadata and stream links.", iconName: "FileText" },
      { step: 3, label: "Streaming Player", description: "Custom HTML5 video player optimized for smooth mobile playback.", iconName: "Tv" },
      { step: 4, label: "Audience Interface", description: "Mobile-first responsive frontend with instant article rendering and video controls.", iconName: "Smartphone" }
    ],
    technicalDecisions: [
      {
        title: "Headless Content Management",
        choice: "Decoupled backend API with React frontend",
        rationale: "Empowers editorial staff to publish news instantly while giving developers total freedom to build responsive, high-performance UI components."
      },
      {
        title: "Adaptive Video Streaming Player",
        choice: "HLS player with automated network quality adjustment",
        rationale: "Ensures continuous video playback even on constrained mobile data connections."
      }
    ],
    constraintsAndTradeoffs: [
      {
        topic: "Mobile Bandwidth Optimization",
        constraint: "High data usage costs for mobile visitors.",
        tradeoff: "Implemented strict image WebP compression and lazy-loading for video player frames."
      }
    ],
    lessonsLearned: [
      "Media platforms require aggressive asset optimization to sustain engagement on mobile networks.",
      "Decoupling content management from user interface delivers maximal velocity and user experience."
    ],
    metrics: [
      { label: "Live Domain", value: "fidetvmedia.vercel.app" },
      { label: "Primary Engine", value: "React & HLS Player" },
      { label: "Media Focus", value: "Live Stream & Digital News" }
    ]
  },
  {
    slug: "hireflow-ng",
    number: "04",
    title: "HireFlow NG",
    category: "Digital Recruitment & HR Platform",
    shortDescription: "A digital recruitment platform modernizing hiring processes across Nigerian institutions with transparent applicant tracking and automated shortlisting.",
    problem: "Institutional recruitment in Nigeria is frequently burdened by manual physical document submissions, lack of transparency for job applicants, and inefficient candidate screening.",
    solution: "Built a recruitment platform featuring applicant document uploads, structured application forms, automated resume criteria matching, administrative shortlisting dashboards, and real-time status notifications.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Vercel"],
    outcome: "Streamlined the hiring workflow for educational and administrative institutions, reducing application processing time while improving recruitment transparency.",
    image: gsnImg,
    liveUrl: "https://erecruitment.fedpolyukana.edu.ng",
    githubUrl: "https://github.com/fidetvonline-gif/HireFlow-NG",
    featured: true,
    context: "Designed specifically to solve institutional recruitment bottlenecks across Nigerian schools, polytechnics, and corporate organizations.",
    architecture: [
      { step: 1, label: "Applicant Portal", description: "Job seekers create profiles, upload verified credentials, and track applications.", iconName: "UserCheck" },
      { step: 2, label: "Shortlisting Engine", description: "Automated scoring rules evaluate applicant qualifications against job criteria.", iconName: "Sliders" },
      { step: 3, label: "HR Admin Dashboard", description: "Recruitment officers review, filter, and export candidate dossiers.", iconName: "Briefcase" },
      { step: 4, label: "Notification Hub", description: "Automated email notifications keep candidates informed at every hiring stage.", iconName: "Mail" }
    ],
    technicalDecisions: [
      {
        title: "Automated Qualification Matching",
        choice: "Rule-based scoring algorithm for applicant credentials",
        rationale: "Filters out unqualified submissions instantly, saving HR officers hundreds of hours during high-volume recruitment drives."
      }
    ],
    constraintsAndTradeoffs: [
      {
        topic: "Document Storage & Verification",
        constraint: "High file storage requirements for applicant certificates and identity PDFs.",
        tradeoff: "Integrated cloud storage with automated PDF compression to minimize storage overhead."
      }
    ],
    lessonsLearned: [
      "Transparent hiring portals build user trust and reduce administrative inquiry phone calls.",
      "Simple structured forms significantly decrease candidate drop-off during registration."
    ],
    metrics: [
      { label: "Target Sector", value: "Nigerian Institutions" },
      { label: "Shortlisting", value: "Automated Scoring" },
      { label: "Status", value: "Live Production" }
    ]
  },
  {
    slug: "trusted-laptop-store",
    number: "05",
    title: "AI-Powered Laptop E-Commerce Store",
    category: "E-Commerce & AI Recommendation System",
    shortDescription: "A trusted online laptop store featuring rich catalog filters, side-by-side spec comparison, checkout flow, order tracking, and an interactive AI Laptop Advisor.",
    problem: "Laptop buyers often struggle to pick the right computer spec for their budget, workload (coding, video editing, gaming), and battery life preferences from complex tech specs.",
    solution: "Created an online computer store with an integrated AI Laptop Advisor that asks users about their intended use cases and recommends optimal laptops within their budget.",
    technologies: ["React", "TypeScript", "AI Advisor", "Tailwind CSS", "Vercel"],
    outcome: "Built an e-commerce platform combining intuitive product filtering, side-by-side specs comparison, and AI decision assistance.",
    image: laptopStoreImg,
    liveUrl: "https://a-trusted-online-laptop-store.vercel.app",
    githubUrl: "https://github.com/fidetvonline-gif/A-trusted-online-laptop-store",
    featured: false,
    context: "Developed to demonstrate modern e-commerce UX with intelligent product recommendation engines.",
    architecture: [
      { step: 1, label: "Storefront", description: "Product catalog with instant multi-facet filters (RAM, CPU, Price, Brand).", iconName: "ShoppingBag" },
      { step: 2, label: "Spec Comparison", description: "Side-by-side specification Matrix for comparing multiple laptop models.", iconName: "Columns" },
      { step: 3, label: "AI Advisor", description: "Interactive questionnaire matching user workloads to ideal laptop specs.", iconName: "Sparkles" },
      { step: 4, label: "Checkout & Tracking", description: "Cart management, order summary, and real-time order status tracking.", iconName: "Truck" }
    ],
    technicalDecisions: [
      {
        title: "Client-Side Multi-Filter State",
        choice: "Optimized React state for zero-latency catalog filtering",
        rationale: "Provides instantaneous filtering results without reloading the page or waiting for network roundtrips."
      }
    ],
    constraintsAndTradeoffs: [
      {
        topic: "Catalog Size & Performance",
        constraint: "Rendering dozens of high-res device images simultaneously.",
        tradeoff: "Used lazy loading and responsive image sources to maintain 60fps scrolling."
      }
    ],
    lessonsLearned: [
      "AI recommendation assistants dramatically improve user confidence during complex purchases.",
      "Side-by-side comparison tables reduce buyer hesitation."
    ],
    metrics: [
      { label: "Live Store", value: "a-trusted-online-laptop-store.vercel.app" },
      { label: "Key Feature", value: "AI Laptop Advisor" },
      { label: "Catalog UX", value: "Instant Multi-Filter" }
    ]
  },
  {
    slug: "cryptovest-pro",
    number: "06",
    title: "CryptoVest Pro Platform",
    category: "Fintech & Portfolio Tracker",
    shortDescription: "A crypto platform offering short-term investments, consulting services, and real-time portfolio tracking for digital entrepreneurs.",
    problem: "Digital investors and crypto traders need clean, straightforward interfaces to view asset trends, investment returns, and advisory services without clutter.",
    solution: "Engineered CryptoVest Pro with a modern financial dashboard, real-time crypto price tracking, investment tier calculators, and consulting booking workflows.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Financial Charts", "Vercel"],
    outcome: "Delivered a high-performance crypto fintech platform designed for clear financial data visualization and client consulting engagement.",
    image: cryptovestImg,
    liveUrl: "https://cryptovestpro.digital",
    githubUrl: "https://github.com/fidetvonline-gif/CryptoVest-Pro",
    featured: false,
    context: "Created as a fintech product interface demonstrating clean dark-mode financial analytics and portfolio tracking.",
    architecture: [
      { step: 1, label: "Dashboard", description: "Real-time portfolio metrics, active asset balances, and gain/loss analytics.", iconName: "TrendingUp" },
      { step: 2, label: "Investment Tiers", description: "Interactive return calculator evaluating short-term investment plans.", iconName: "DollarSign" },
      { step: 3, label: "Consulting Hub", description: "Direct advisory booking portal connecting clients with financial consultants.", iconName: "Calendar" }
    ],
    technicalDecisions: [
      {
        title: "Dark High-Contrast Financial Design",
        choice: "Monochrome dark palette with accent green chart lines",
        rationale: "Provides visual clarity for tracking market data and financial charts during extended sessions."
      }
    ],
    constraintsAndTradeoffs: [
      {
        topic: "Market Volatility Representation",
        constraint: "Displaying dynamic ticker updates smoothly.",
        tradeoff: "Used debounced state updates to prevent UI stutter during frequent price changes."
      }
    ],
    lessonsLearned: [
      "Fintech interfaces must prioritize data clarity and trust indicators above decorative elements.",
      "Clear investment tier calculators significantly increase user engagement."
    ],
    metrics: [
      { label: "Platform", value: "crypto-vest-pro.vercel.app" },
      { label: "UI Archetype", value: "Dark Mode Fintech" },
      { label: "Status", value: "Live Production" }
    ]
  },
  {
    slug: "climaterra-nexus",
    number: "07",
    title: "Climaterra Nexus Corporate Website",
    category: "Corporate & Sustainability Website",
    shortDescription: "Professional corporate website for Climaterra Nexus Ltd, a climate action, environmental consulting, and sustainability company.",
    problem: "Environmental sustainability companies require elegant web representations to communicate climate initiatives, corporate consulting services, and project impacts effectively.",
    solution: "Built a sleek corporate web presentation showcasing sustainability services, carbon project portfolios, environmental impact reports, and client consultation channels.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "GitHub"],
    outcome: "Established a professional corporate digital footprint for Climaterra Nexus Ltd.",
    image: climaterraImg,
    liveUrl: null,
    githubUrl: "https://github.com/fidetvonline-gif/-Climaterra-Nexus-Ltd-",
    featured: false,
    context: "Developed as a corporate web presentation for an environmental action company.",
    architecture: [
      { step: 1, label: "Corporate Landing", description: "High-impact presentation of sustainability services and company mission.", iconName: "Globe" },
      { step: 2, label: "Project Portfolio", description: "Interactive grid of climate action projects and ecological impact reports.", iconName: "Leaf" },
      { step: 3, label: "Consultation Request", description: "Direct inquiry form for corporate sustainability consultations.", iconName: "Mail" }
    ],
    technicalDecisions: [
      {
        title: "Clean Modern Typography & Color Palette",
        choice: "High contrast layout with green sustainability accents",
        rationale: "Reflects eco-friendly company values while maintaining corporate professionalism."
      }
    ],
    constraintsAndTradeoffs: [
      {
        topic: "Speed & Accessibility",
        constraint: "Ensuring top Lighthouse audit scores on slow networks.",
        tradeoff: "Minimized third-party dependencies to ensure fast global loading speeds."
      }
    ],
    lessonsLearned: [
      "Corporate web design benefits from clean grid layouts and clear value propositions."
    ],
    metrics: [
      { label: "Company", value: "Climaterra Nexus Ltd" },
      { label: "Sector", value: "Climate & Sustainability" },
      { label: "Codebase", value: "TypeScript & React" }
    ]
  },
  {
    slug: "array-sorting-api",
    number: "08",
    title: "PHP Array Manipulation API & Test Console",
    category: "Backend API & Utility Tool",
    shortDescription: "A POST API endpoint (array_api.php) for array sorting, filtering, and data transformation with an interactive web test console.",
    problem: "Developers and students often need simple, reliable API endpoints to test array sorting, filtering algorithms, and payload handling without setting up heavy local servers.",
    solution: "Created a PHP array manipulation API accompanied by a web test console allowing users to send JSON array payloads and inspect sorted, filtered results live.",
    technologies: ["PHP", "TypeScript", "REST API", "JSON", "Vercel"],
    outcome: "Deployed a functional utility API and test harness for real-time array manipulation verification.",
    image: apiConsoleImg,
    liveUrl: "https://array-sorting-filtering-api.vercel.app",
    githubUrl: "https://github.com/fidetvonline-gif/Array-Sorting-Filtering-API",
    featured: false,
    context: "Built as a backend API utility showcasing server-side array processing and interactive API testing consoles.",
    architecture: [
      { step: 1, label: "Test Console", description: "Web console for specifying JSON array inputs, sorting criteria, and filter keys.", iconName: "Terminal" },
      { step: 2, label: "PHP API Endpoint", description: "array_api.php processes POST payload, executes sorting algorithms, and sanitizes output.", iconName: "Code" },
      { step: 3, label: "JSON Response", description: "Returns formatted JSON object with execution time metadata and processed array.", iconName: "Check" }
    ],
    technicalDecisions: [
      {
        title: "Serverless Deployment for PHP API",
        choice: "Vercel serverless function runtime for PHP",
        rationale: "Enables instant global serverless execution without requiring dedicated server infrastructure."
      }
    ],
    constraintsAndTradeoffs: [
      {
        topic: "Payload Size & Edge Memory",
        constraint: "Serverless execution limits on large array datasets.",
        tradeoff: "Implemented payload size guards to protect against memory overflow during massive array sorting tests."
      }
    ],
    lessonsLearned: [
      "Interactive test consoles drastically improve developer experience when testing API endpoints."
    ],
    metrics: [
      { label: "Live API", value: "array-sorting-filtering-api.vercel.app" },
      { label: "Backend Core", value: "PHP array_api.php" },
      { label: "Interface", value: "Interactive Test Harness" }
    ]
  },
  {
    slug: "php-session-login",
    number: "09",
    title: "PHP Session Login Simulation System",
    category: "Authentication & Security Tool",
    shortDescription: "A PHP session login simulation featuring login.php and welcome.php with credential verification, session inspection, and auth guards.",
    problem: "Understanding stateful HTTP sessions, cookie management, and authentication guards in PHP requires clean, transparent demonstration code.",
    solution: "Built a complete PHP session authentication simulation with live session inspector tools, cookie decoding, and protected route redirection.",
    technologies: ["PHP", "Sessions", "Security", "TypeScript", "Vercel"],
    outcome: "Delivered a web security demonstration tool highlighting native session handling and route authorization.",
    image: phpLoginImg,
    liveUrl: "https://php-session-login-simulation-tan.vercel.app",
    githubUrl: "https://github.com/fidetvonline-gif/PHP-Session-Login-Simulation",
    featured: false,
    context: "Developed as a web security project demonstrating core server-side session mechanisms.",
    architecture: [
      { step: 1, label: "login.php", description: "Validates incoming post credentials and establishes $_SESSION array state.", iconName: "Key" },
      { step: 2, label: "welcome.php", description: "Protected route checking active session token before rendering user dashboard.", iconName: "ShieldCheck" },
      { step: 3, label: "Session Inspector", description: "Live debug console displaying active session variables and cookie lifetimes.", iconName: "Eye" }
    ],
    technicalDecisions: [
      {
        title: "Native Session Token Management",
        choice: "Standard PHP session cookies with Secure/HttpOnly flags",
        rationale: "Demonstrates standard web security practices for session hijacking prevention."
      }
    ],
    constraintsAndTradeoffs: [
      {
        topic: "Serverless Session Persistence",
        constraint: "Serverless environments don't persist disk sessions by default.",
        tradeoff: "Engineered lightweight encrypted token state to maintain seamless sessions across serverless executions."
      }
    ],
    lessonsLearned: [
      "Securing session cookies with HttpOnly and SameSite flags is crucial for web app safety."
    ],
    metrics: [
      { label: "Live App", value: "php-session-login-simulation-tan.vercel.app" },
      { label: "Security Core", value: "login.php & welcome.php" },
      { label: "Feature", value: "Session State Inspector" }
    ]
  },
  {
    slug: "codextreme-ict",
    number: "10",
    title: "CodeXtreme ICT Platform",
    category: "EdTech & Tech Training Platform",
    shortDescription: "Interactive ICT academy platform providing software development courses, digital skills training, and student project showcases.",
    problem: "Tech students and aspiring developers in Nigeria need accessible, structured learning paths and practical project guidance.",
    solution: "Built CodeXtreme ICT platform featuring course modules, code exercise labs, mentorship registration, and developer community links.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    outcome: "Empowering developers through structured tech training curriculum and project building.",
    image: codextremeIctImg,
    liveUrl: "https://codextremeict.vercel.app",
    githubUrl: "https://github.com/fidetvonline-gif/codextreme-x4ul",
    featured: false,
    context: "Tech training initiative designed for empowering students with practical coding skills.",
    architecture: [
      { step: 1, label: "Course Portal", description: "Curriculum roadmap covering Web Dev, React, and Backend APIs.", iconName: "BookOpen" },
      { step: 2, label: "Student Hub", description: "Project assignment submission and mentorship connect.", iconName: "Users" }
    ],
    technicalDecisions: [
      {
        title: "Modular Curriculum Navigation",
        choice: "Interactive progress tracker built with React state",
        rationale: "Ensures students track learning milestones visually."
      }
    ],
    constraintsAndTradeoffs: [],
    lessonsLearned: ["Interactive course structures increase student retention."],
    metrics: [
      { label: "Live Site", value: "codextremeict.vercel.app" }
    ]
  },
  {
    slug: "spicycircle",
    number: "11",
    title: "SpicyCircle Campus Social Network",
    category: "Social Platform & Community Engine",
    shortDescription: "A student-centric social networking platform connecting campus communities, event updates, student groups, and digital interactions.",
    problem: "Campus students needed an engaging online community space dedicated to campus news, discussions, and student networking.",
    solution: "Engineered SpicyCircle with real-time post feeds, discussion circles, campus event boards, and student profile badges.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    outcome: "Created a vibrant campus community hub under the FIDE TV digital ecosystem.",
    image: spicycircleImg,
    liveUrl: "https://spicycircle.fidetv.online",
    githubUrl: "https://github.com/fidetvonline-gif/spicycircle",
    featured: false,
    context: "Built under FIDE TV Media ecosystem to connect campus youth.",
    architecture: [
      { step: 1, label: "Feed Engine", description: "Real-time post feed with multi-media attachments and comments.", iconName: "MessageSquare" },
      { step: 2, label: "Community Circles", description: "Topic-based student forums and interest groups.", iconName: "Users" }
    ],
    technicalDecisions: [
      {
        title: "High-Performance Feed Rendering",
        choice: "Virtualized feed component list",
        rationale: "Handles fast scrolling through image and text posts on mobile devices."
      }
    ],
    constraintsAndTradeoffs: [],
    lessonsLearned: ["Community platforms rely heavily on fast feed load speeds."],
    metrics: [
      { label: "Live Domain", value: "spicycircle.fidetv.online" }
    ]
  },
  {
    slug: "codextreme-academy",
    number: "12",
    title: "CodeXtreme Tech Academy",
    category: "Developer Training & Tech Academy",
    shortDescription: "Digital portal for CodeXtreme Tech Academy offering intensive coding bootcamps, practical coding tracks, and student portfolios.",
    problem: "Practical coding bootcamps require modern web hubs to present course catalogs, mentor profiles, and enrollment workflows.",
    solution: "Designed and built CodeXtreme Tech Academy portal showcasing intensive bootcamps, student achievements, and application forms.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    outcome: "Successfully launched the digital portal for CodeXtreme Tech Academy.",
    image: codextremeAcademyImg,
    liveUrl: "https://codextreme-zeta.vercel.app",
    githubUrl: "https://github.com/fidetvonline-gif/codextreme",
    featured: false,
    context: "Tech training platform for developer bootcamps.",
    architecture: [
      { step: 1, label: "Bootcamp Catalog", description: "Interactive breakdown of Web Development, Mobile Dev, and AI tracks.", iconName: "GraduationCap" },
      { step: 2, label: "Enrollment Form", description: "Direct application workflow for prospective tech students.", iconName: "FileText" }
    ],
    technicalDecisions: [
      {
        title: "Responsive Tech Catalog",
        choice: "Mobile-first grid layout with Tailwind CSS",
        rationale: "Ensures seamless browsing for mobile users looking for tech courses."
      }
    ],
    constraintsAndTradeoffs: [],
    lessonsLearned: ["Clear course prerequisites help students choose the right learning path."],
    metrics: [
      { label: "Live Site", value: "codextreme-zeta.vercel.app" }
    ]
  }
];
