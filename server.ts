import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// API Health Check
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    engineer: "Fidelis Emmanuel Sibe",
    title: "Software Engineer & Web Developer",
    location: "Nigeria",
    timestamp: new Date().toISOString(),
  });
});

// Server-side Contact Form Handler
app.post("/api/contact", (req, res) => {
  const { name, email, project, message, honeypot } = req.body;

  // Spam protection check (honeypot field)
  if (honeypot && honeypot.trim() !== "") {
    // Silent fail for bots
    return res.status(200).json({ success: true, message: "Message received." });
  }

  // Server-side validation
  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return res.status(400).json({ success: false, error: "Please enter your valid name." });
  }

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return res.status(400).json({ success: false, error: "Please provide a valid email address." });
  }

  if (!message || typeof message !== "string" || message.trim().length < 10) {
    return res.status(400).json({ success: false, error: "Please write a message of at least 10 characters." });
  }

  console.log(`[CONTACT INQUIRY] From: ${name} (${email}) | Category: ${project || 'General'} | Message: ${message}`);

  // In production, an email service like Resend or SendGrid would be invoked here using process.env.RESEND_API_KEY.
  return res.status(200).json({
    success: true,
    message: `Thank you, ${name.trim()}! Fidelis has received your message regarding ${project || 'your project'} and will get back to you at ${email.trim()} shortly.`,
    timestamp: new Date().toISOString(),
  });
});

// Server-side AI Assistant Endpoint for Portfolio Queries
let aiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return aiClient;
}

app.post("/api/ai-ask", async (req, res) => {
  const { query } = req.body;
  if (!query || typeof query !== "string") {
    return res.status(400).json({ error: "Query is required" });
  }

  const systemContext = `
You are the interactive AI Assistant for Fidelis Emmanuel Sibe's Developer Portfolio.
Fidelis Emmanuel Sibe is a Nigerian Software Engineer and Web Developer.
Short positioning: "I build software that turns ideas into useful digital products."
Education: HND Computer Science — Federal Polytechnic Ukana, Akwa Ibom State, Nigeria.
Founder: FIDE TV / FideTV Media (fidetv.online & spicycircle.fidetv.online).
Key Projects:
1. Attendix: Biometric Attendance & Intelligent Analytics (React, Supabase, PostgreSQL, WebAuthn/FIDO2, Gemini AI). WINNER - Google Build with AI Uyo Challenge.
2. FIDE TV: Digital Media & Streaming Platform (React, Next.js, WordPress REST API, HLS Streaming).
3. Global Student Network: Student Community & Advocacy Platform (React, Next.js, Supabase, PostgreSQL, Anonymous Reporting).
4. FedPoly Ukana Student Platform: Academic & Student Services Platform (React, Node.js, PostgreSQL).

Skills:
- Languages: JavaScript, TypeScript, PHP, HTML, CSS, SQL.
- Frontend: React, Next.js, Tailwind CSS, Responsive Web Design, Component-Based UI.
- Backend: Node.js, PHP, REST APIs, Authentication, Server-Side Apps, Database Apps.
- Databases: PostgreSQL, Supabase, Firebase.
- Cloud: Vercel, Netlify, GitHub, Git.
- AI: AI-powered application development, Gemini / Google AI tools, AI-assisted development, Intelligent Analytics.

Tone: Professional, direct, technical, humble, and supportive. Focus strictly on Fidelis's real projects and verified qualifications. Answer succinctly in 2-4 short sentences.
`;

  try {
    const ai = getGenAI();
    if (ai) {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
          { role: "user", parts: [{ text: `${systemContext}\n\nUser Question: ${query}` }] }
        ],
        config: {
          temperature: 0.4,
          maxOutputTokens: 300,
        }
      });
      const text = response.text || "Fidelis Emmanuel Sibe is a Software Engineer & Web Developer based in Nigeria, specializing in React, Next.js, TypeScript, Supabase, and AI integrations.";
      return res.json({ answer: text });
    } else {
      // Intelligent fallback when GEMINI_API_KEY is not set
      let fallbackText = "Fidelis Emmanuel Sibe is a Software Engineer & Web Developer based in Nigeria. He builds web applications, student platforms, media platforms, and AI-powered products.";
      const q = query.toLowerCase();
      if (q.includes("attendix") || q.includes("biometric") || q.includes("winner") || q.includes("challenge") || q.includes("uyo")) {
        fallbackText = "Attendix is Fidelis's award-winning biometric attendance and AI analytics application. It won 1st Place at the Google Build with AI Uyo Challenge, using WebAuthn for tamper-resistant biometric verification and Gemini for automated analytical reports.";
      } else if (q.includes("fide tv") || q.includes("media") || q.includes("stream")) {
        fallbackText = "FIDE TV is a digital media initiative founded by Fidelis, serving as a streaming and campus journalism portal (fidetv.online) built with React/Next.js and headless WordPress endpoints.";
      } else if (q.includes("skill") || q.includes("stack") || q.includes("tech")) {
        fallbackText = "Fidelis works primarily with TypeScript, JavaScript, React, Next.js, Tailwind CSS, PHP, Node.js, PostgreSQL, Supabase, Firebase, and Gemini AI APIs.";
      } else if (q.includes("contact") || q.includes("hire") || q.includes("work")) {
        fallbackText = "You can get in touch with Fidelis via the contact form on this site or directly at fidetvonline@gmail.com for software engineering, web development, and AI product inquiries.";
      } else if (q.includes("education") || q.includes("school") || q.includes("polytechnic") || q.includes("ukana")) {
        fallbackText = "Fidelis holds an HND in Computer Science from Federal Polytechnic Ukana, Akwa Ibom State, Nigeria.";
      }

      return res.json({ answer: fallbackText });
    }
  } catch (err) {
    console.error("Gemini API Error:", err);
    return res.json({
      answer: "Fidelis Emmanuel Sibe is a Software Engineer and Web Developer. Feel free to explore his featured projects above or reach out via the contact form."
    });
  }
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Fidelis Sibe Portfolio] Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
