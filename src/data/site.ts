export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  shortBio: string;
  secondaryBio: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  education: {
    degree: string;
    institution: string;
    location: string;
  };
  founder: {
    brand: string;
    tagline: string;
    description: string;
    urls: string[];
  };
  currentlyBuilding: string;
  funFact: string;
}

export const siteData: SiteConfig = {
  name: "Fidelis Emmanuel Sibe",
  title: "Software Engineer & Web Developer",
  tagline: "I build software that turns ideas into useful digital products.",
  shortBio: "I design and build modern web applications, software products, and digital experiences that solve real-world problems.",
  secondaryBio: "From student platforms and media products to AI-powered applications and business systems, I turn ideas into functional digital products.",
  location: "Nigeria",
  email: "fidetvonline@gmail.com",
  githubUrl: "https://github.com/fidetvonline-gif",
  linkedinUrl: "https://linkedin.com/in/fidelis-sibe",
  twitterUrl: "https://x.com/fidetvonline",
  education: {
    degree: "HND Computer Science",
    institution: "Federal Polytechnic Ukana",
    location: "Akwa Ibom State, Nigeria"
  },
  founder: {
    brand: "FIDE TV / FideTV Media",
    tagline: "Digital Media & Streaming Platform",
    description: "A digital media and streaming initiative focused on creating and distributing digital content, live experiences, campus stories, and online media products.",
    urls: ["https://fidetv.online/", "https://spicycircle.fidetv.online/"]
  },
  currentlyBuilding: "Currently building and experimenting with software products, digital platforms, AI-powered applications, and web technologies.",
  funFact: "I enjoy turning ideas that start as simple concepts into working digital products."
};
