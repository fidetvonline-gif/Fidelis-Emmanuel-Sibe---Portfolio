# Fidelis Emmanuel Sibe — Developer Portfolio

Production-ready personal developer portfolio for **Fidelis Emmanuel Sibe**, a Nigerian Software Engineer and Web Developer.

## Overview

- **Full Name:** Fidelis Emmanuel Sibe
- **Title:** Software Engineer & Web Developer
- **Positioning Statement:** "I build software that turns ideas into useful digital products."
- **Location:** Nigeria
- **Education:** HND Computer Science — Federal Polytechnic Ukana, Akwa Ibom State, Nigeria
- **Founder:** FIDE TV / FideTV Media (`fidetv.online`)
- **Featured Recognition:** Winner — Google Build with AI Uyo Challenge (Attendix Biometric & AI Analytics Platform)

---

## Tech Stack & Architecture

- **Frontend:** React 19, TypeScript, Tailwind CSS, Lucide Icons, Motion animations
- **Backend:** Express.js, TypeScript (`tsx`), Node.js
- **AI Integration:** Google GenAI SDK (`@google/genai`) for server-side generative assistant & analytical summaries
- **Data Layer:** Modular data files (`src/data/`) for projects, skills, experience, and site configuration

---

## Installation & Local Development

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Environment Configuration:**
   Copy `.env.example` to `.env`:
   ```env
   GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
   APP_URL="http://localhost:3000"
   ```

3. **Start Development Server:**
   ```bash
   npm run dev
   ```
   The application runs on `http://localhost:3000`.

---

## Production Build & Deployment

To compile the static assets and backend server for deployment (Vercel / Cloud Run):

```bash
npm run build
npm start
```

- **Build Script:** `vite build && esbuild server.ts --bundle --platform=node --format=cjs --packages=external --sourcemap --outfile=dist/server.cjs`
- **Start Script:** `node dist/server.cjs`

---

## Customization & Data Management

- **Personal Profile Data:** Update `/src/data/site.ts`
- **Projects & Case Studies:** Update `/src/data/projects.ts`
- **Technical Skills Stack:** Update `/src/data/skills.ts`
- **Career & Education Timeline:** Update `/src/data/experience.ts`
- **GitHub Building in Public:** Update `/src/data/github.ts`

### Adding a New Case Study

Add a new item to `projectsData` in `src/data/projects.ts` specifying:
- `slug`, `number`, `title`, `category`, `shortDescription`, `problem`, `solution`
- `architecture` steps, `technicalDecisions`, `constraintsAndTradeoffs`, `lessonsLearned`, `metrics`

---

## License

© 2026 Fidelis Emmanuel Sibe. All rights reserved.
